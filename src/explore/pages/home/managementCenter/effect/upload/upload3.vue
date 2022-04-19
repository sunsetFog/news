<template>
    <section id="upload3">
        <div class="file">
            <input accept="image/*" type="file" @change="btnUploadFile"/>
        </div>
    </section>
</template>

<script>
export default {
    name: "upload3",
    data() {
        return {

        }
    },
    methods: {
        btnUploadFile(e) {
            console.log('--btnUploadFile--', e);
            let that = this;
            var imgFile = e.target.files[0]; // 获取图片文件
            var formData = new FormData(); // 创建form对象
            formData.append('file', imgFile);  // 通过append向form对象添加数据
            formData.append('id', 1);

            that.$apihttp({
                url: process.env.core_url + '/sky/shop/upload',
                method: 'post',
                data: formData,
                headers: {
                    // 'Content-Type': 'multipart/form-data'
                }
            }).then((res) => {
                console.log('--btnUploadFile--', res);
                if(res.code == "200") {
                    
                } 
            }).catch((err)=>{
                console.log('error',err);
            })
        }
    }
}
</script>

<style lang="less" scoped>
#upload3 {

}
</style>


