<template>
    <section id="download">
        <el-button @click="downloadTxt()">下载添加内容的文本</el-button>
        <el-button @click="downloadFile('../../../../static/study/asyl-h5.apk')">下载静态资源</el-button>
    </section>
</template>

<script>
import axios from 'axios';
export default {
    data(){
        return{

        }
    },
    methods: {
        downloadTxt() {//Blob下载添加内容的txt文档
            let content =  "Hello,world!text文本内容。";
            let blob = new Blob([content], {type: "text/csv,charset=UTF-8"});
            let a = document.createElement('a');
                a.download = "what_286.txt";
                a.href = window.URL.createObjectURL(blob);
                a.click();
        },
        downloadFile(path) {//Blob下载项目内文件
            let urls = path.split('/');
            axios.create().get(path,{
                responseType: 'blob'
            }).then(res => {
                let blob = new Blob([res.data],{type:'application/download'});
                let a = document.createElement('a');
                    a.download = urls[urls.length-1];
                    a.href = URL.createObjectURL(blob);
                    a.click();
            }).catch(e => {
                return e;
            })
        }
    }
}
</script>

<style lang="less" scoped>
#download{

}
</style>
