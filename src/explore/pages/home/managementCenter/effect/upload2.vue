
<template>
    <section id="upload2">
            <div style="text-align: left;">
				<el-upload
					class="upload-demo"
					name="upload"
					:data="{'attach':'upload'}"
					:on-change="handleChange"
					action="https://jsonplaceholder.typicode.com/posts/"
					:on-remove="handleAptiRemove"
					list-type="picture-card"
					:before-upload="beforeUpload"
					:on-success="handleAptiSuccess"
					:limit="limitNum"
					:file-list="imgArr"
					:on-exceed="limitWay"
				>
                    <i class="el-icon-plus"></i>
					<!-- 遮罩层: 达限制上传数量用 -->
                    <div class="atmosphere" @click.stop="limitWay()" v-if="upNum >= limitNum"></div>
				</el-upload>
			</div>
			<!-- 
				action 后台请求url 
				name="upload" 后台需要绑定的节点，就必须有
				:data="{'attach':'upload'}" 传参给后台
				:file-list="imgArr" 用于编辑回显
			-->
    </section>
</template>

<script>
export default {
    name: "upload2",
    data(){
        return{
			imgArr: [{
				name: "AR.png",
				url: require('@static/reportForms/image/AR.png')
			}],
			imgList: [],// 格式为[{url:'图片路径'},{url: '图片路径'}]
			limitNum: 3,  // 限制上传数量
			upNum: 0 // 已上传数量
        }
    },
    methods:{
        //上传前设置
        beforeUpload(file) {
			console.log('-beforeUpload-', file)
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
            console.log('-handleAptiSuccess-',res,file);
            //res是后台返回的数据
			this.imgList.push({
				url: file.url
			})
		  },
		  //删除上传
		  handleAptiRemove(file, fileList) {
				console.log('-handleAptiRemove-',file, fileList);
				this.imgList.filter(function(item, index){
					return file.url != item.url;
				})
				this.upNum = fileList.length;
		  },
		  //上传监听
		  handleChange(file, fileList) {
			  console.log('-handleChange-',file,fileList);
			  console.log('-imgList-', this.imgList)
			  this.upNum = fileList.length;
		  },
		  // 超出个数限制
		  limitWay(files, fileList) {
			  console.log('-limitWay-',files,fileList);
			  this.$message.error('图片数量已达到上限');
		  }
    }
}
</script>

<style lang="less" scoped>
#upload2{
	/deep/ .el-upload {
		position: relative;
	}
	.atmosphere {
		width: 100%;
		height: 100%;
		background: rgba(45,45,45,0);
		position: absolute;
		left: 0rem;
		top:0rem;
		z-index: 2;
	}
}
</style>



