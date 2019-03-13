
<template>
<!-- 在app.vue引入了index.less样式，看upload_function -->
    <section id="upload_function" style="padding: 3rem 0rem 0rem 3rem;box-sizing: border-box;">
            <div style="text-align: left;">
				<el-upload class="upload-demo" name="upload" :data="{'attach':'upload'}" :on-change="handleChange" :action="uploadUrl" :on-remove="handleAptiRemove" :file-list="fileList1" list-type="picture-card" :before-upload="beforeUpload" :on-success="handleAptiSuccess">
					<div style="width: 100%;height: 100%;background: rgba(45,45,45,0);position: relative;">
                        <i class="el-icon-plus"></i>
                        <div style="width: 100%;height: 100%;background: rgba(45,45,45,0);position: absolute;left: 0rem;top:0rem;z-index: 2;" @click.stop="occlusion()" v-if="upNumMax>=3"></div>
					</div>
				</el-upload>
			</div> 
			<!-- name="upload"，这是后台绑定的字段，必须有 -->
            <!-- 以上:data="{'attach':'upload'}"是指传值给后台，要遍历必须传，不遍历传也没事       -->
    </section>
</template>

<script>
export default {
    data(){
        return{
			uploadUrl:'',//后台接口url
			fileList1: [],//获取后台url,格式为[{url:'图片路径'},{url: '图片路径'}]
			fileList2: [],//仅仅是保存url,传后台用
      		upNumMax: 0//图片数量
        }
    },
    created(){
        this.urlUp();
    },
    methods:{
        //后台接口url
		urlUp(){
            //不需要请求头
			this.uploadUrl = "https://jsonplaceholder.typicode.com/posts/";
        },
        //上传前设置
        beforeUpload(file) {
            const isPNG = (file.type === 'image/png' || file.type === 'image/jpeg');
            const isLt2M = file.size / 1024 / 1024 < 2;

            if (!isPNG) {
                this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isPNG && isLt2M;
		},
        //上传成功
		handleAptiSuccess(res, file) {
            console.log('------param-----',res,file);
            //res是后台返回的数据
			if (res.result == 1) {//判断后台成功状态,才拿数据
				this.fileList2.push({
					url: res.data.img
				})
			} else {
                //this.$message.error('上传失败!');
			}
		  },
		  //删除上传
		  handleAptiRemove(file, fileList) {
				console.log('handleStoreRemove:',file, fileList);
				this.upNumMax = fileList.length;
				let f = file.url;
				if (f) {						
					let delIndex = '';
					this.fileList2.forEach(function(val, index, arr){
						if (val.url == f) {
						delIndex = index;
						}
					});
					this.fileList2.splice(delIndex, 1);
				}
		  },
		  //遮挡上传
		  occlusion(){
			this.$message.error('图片数量已达到上限');
		  },
		  //上传监听
		  handleChange(file, fileList) {
			  console.log('change--u',file,fileList);
			  this.upNumMax = fileList.length;
          }
    }
}
</script>

<style>

</style>
