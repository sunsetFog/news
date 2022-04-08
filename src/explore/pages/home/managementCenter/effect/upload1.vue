<template>
    <section id="upload1">
        <el-button @click="downloadUrl(download_url)">URL下载</el-button>
        <div>
            <el-upload
                name="file"
                class="avatar-uploader"
                :action="yuming + '/sky/shop/upload'"
                :show-file-list="true"
                :data="{'id': 1}"
                :headers="{'token': $cookies.get('token')}"
                :on-success="handleAvatarSuccess"
                :before-upload="beforeAvatarUpload"
                accept="image/jpeg,image/jpg,image/png"
            >
                    <img v-if="imageUrl" :src="imageUrl" class="avatar">
                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <!-- 
                action="https://jsonplaceholder.typicode.com/posts/"
                action="http://localhost:8063/sky/file/upload"
				action 后台请求url 
				name="upload" 后台绑定的节点，必须有
				:data="{'attach':'upload'}" 传参给后台，要遍历必须传，不遍历传也没事
			-->
		</div>       
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{
            imageUrl: '',
            yuming: process.env.core_url,
            download_url: ''
        }
    },
    methods:{
        downloadUrl(path) {
            let urls = path.split('/');
            console.log('path===', urls);
            axios({
                method: 'get',
                url: this.yuming+'/sky/download',
                data: {path: path},
                responseType: 'blob'
            }).then(res => {
                let a = document.createElement('a');
                    a.download = urls[urls.length-1];
                    a.href = window.URL.createObjectURL(new Blob([res.data]))
                    document.body.appendChild(a)
                    a.click();
                    document.body.removeChild(a)
            }).catch(err => {
                
            })
        },
        // downloadUrl(url) {
        //     let that = this;
        //     let params = {
        //         path: url
        //     }

        //     that.$apihttp({
        //         url: process.env.core_url + '/sky/download',
        //         method: 'post',
        //         params: params
        //     }).then((res) => {
        //         console.log('--login--', res);
        //     }).catch((err)=>{
        //         console.log('error',err);
        //     })
        // },
        // downloadUrl(url) {
        //     console.log('--url--', url);
        //     let arr = url.split('/');
        //     let link = document.createElement('a');// 创建a标签
        //         link.style.display = "none";// 使其隐藏
        //         // link.download = arr[arr.length-1];// 设置下载属性，以及文件名
        //         link.setAttribute("download", arr[arr.length-1]);
        //         link.href = url;// 赋予文件下载地址
        //         document.body.appendChild(link);// a标签插入页面里
        //         link.click();// 强制触发a标签事件
        //         document.body.removeChild(link);
        // },
        //上传成功
        handleAvatarSuccess(res, file) {
            // file转blob图片
            this.imageUrl = URL.createObjectURL(file.raw);

            this.fileToBase64(file.raw).then(data => {
                console.log('---fileToBase64--', data);
            })

            console.log('-handleAvatarSuccess-', res, file, '---', this.imageUrl);
            this.download_url = this.yuming + '/sky' + res.data;
            // res是后台返回的数据
            if (res.result == 1) {
                this.imageUrl = res.data.img;
            } else {
                //this.$message.error('上传失败!');
            }
        },
        //上传前设置
        beforeAvatarUpload(file) {
            // const isPNG = (file.type === 'image/png' || file.type === 'image/jpeg');
            // const isLt2M = file.size / 1024 / 1024 < 2;
            // if (!isPNG) {
            //     this.$message.error('上传头像图片只能是 JPG或PNG 格式!');
            // }
            // if (!isLt2M) {
            //     this.$message.error('上传头像图片大小不能超过 2MB!');
            // }
            // return isPNG && isLt2M;
        },
        // file转base64图片
        fileToBase64(data) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    resolve(e.target.result);
                };
                fileReader.readAsDataURL(data);
                fileReader.onerror = () => {
                    reject(new Error('文件流异常'));
                };
            });
        }
    }  
}
</script>

<style lang="less" rel="stylesheet/less">
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
