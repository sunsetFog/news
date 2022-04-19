
<template>
    <section id="upload-unit">
        <h1>单个上传图片</h1>
		<upload1></upload1>

		<br><br>
		<h1>上传图片列表</h1>
		<upload2></upload2>

		<br><br>
		<h1>原生js上传图片</h1>
		<upload3></upload3>

		<br><br>
		<h1>头像上传裁切</h1>
		<customAvatar></customAvatar>
    </section>
</template>

<script>
import upload1 from './upload1.vue';
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
    methods:{

    }
}
</script>

<style lang="less" scoped>
#upload-unit{
	width: 100%;
}
</style>

