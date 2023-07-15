
<template>
    <section id="upload-unit">
        <h1>单个上传图片</h1>
		<upload1 yuming="http://localhost:8062/sky/shop/upload"></upload1>

		<br><br>
		<h1>上传图片列表</h1>
		<upload2></upload2>

		<br><br>
		<h1>原生js上传图片</h1>
		<upload3></upload3>

		<br><br>
		<h1>头像上传裁切</h1>
		<customAvatar></customAvatar>

		<br><br>
		<h1>阿里云对象存储OSS</h1>
		<upload1 yuming="http://localhost:8069/sky/sys/oss/file/upload"></upload1>

        <br><br>
		<h1>Minio对象存储</h1>
		<upload1 yuming="http://localhost:8069/sky/sys/upload/uploadMinio"></upload1>
    </section>
</template>

<script>
import upload1 from '@/explore/pages/home/managementCenter/effect/upload/upload1.vue';
import upload2 from './upload2.vue';
import upload3 from './upload3.vue';
import customAvatar from './customAvatar.vue';
export default {
	name: "uploadUnit",
	components: { upload1, upload2, upload3, customAvatar },
    data(){
        return{

        }
	},
	created() {
		this.ossList();
	},
    methods:{
		ossList() {
            let that = this;
            let json = {

            }
            that.$apihttp({
                url: 'http://localhost:8069/sky/sys/oss/file/list',
                method: 'get',
                data: json
            }).then((res) => {
                console.log('H-http',res);
            }).catch((err)=>{
                console.log('error',err);
            })

        },
    }
}
</script>

<style lang="less" scoped>
#upload-unit{
	width: 100%;
}
</style>

