<template>
    <section id="upload1">
        <div style="padding: 3rem 0rem 0rem 3rem;box-sizing: border-box;">
            <el-upload
                name="upload"
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload">
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <!-- name="upload"，这是后台绑定的字段，必须有 -->
            <!-- 不需要写请求头，在action里加后台接口url -->
		</div>       
    </section>
</template>

<script>
export default {
    data(){
        return{
            imageUrl: ''
        }
    },
    methods:{
        //上传成功
        handleAvatarSuccess(res, file) {
            this.imageUrl = URL.createObjectURL(file.raw);
            // res是后台返回的数据
            if (res.result == 1) {
                this.imageUrl = res.data.img;
            } else {
                //this.$message.error('上传失败!');
            }
        },
        //上传前设置
        beforeAvatarUpload(file) {
            const isPNG = (file.type === 'image/png' || file.type === 'image/jpeg');
            const isLt2M = file.size / 1024 / 1024 < 2;
            if (!isPNG) {
                this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
            }
            if (!isLt2M) {
                this.$message.error('上传头像图片大小不能超过 2MB!');
            }
            return isPNG && isLt2M;
        }
    }  
}
</script>

<style lang="less" rel="stylesheet/less">
// 这样式建议放在全局里，index.less里
#upload1{
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }
    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }
}
</style>
