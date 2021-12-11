
<template>
    <section id="upload-unit">
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
					:on-exceed="limitWay"
				>
                    <i class="el-icon-plus"></i>
					<!-- 遮罩层: 达限制上传数量用 -->
                    <div class="atmosphere" @click.stop="limitWay()" v-if="upNum >= limitNum"></div>
				</el-upload>
			</div>
			<!-- 
				action 后台请求url 
				name="upload" 后台绑定的节点，必须有
				:data="{'attach':'upload'}" 传参给后台，要遍历必须传，不遍历传也没事
				:file-list="imgArr" 不需要这个,绑定imgList影响上传效果，独立绑定imgArr就没事
			-->
    </section>
</template>

<script>
export default {
    data(){
        return{
			imgArr: [],
			imgList: [],// 格式为[{url:'图片路径'},{url: '图片路径'}]
			limitNum: 1,  // 限制上传数量
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
#upload-unit{
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

