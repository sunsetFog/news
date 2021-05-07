<template>
    <section id="download">
        <el-button @click="downloadTxt()">下载添加内容的文本</el-button>
        <el-button @click="downloadFile('../../../../static/capital/rem.js')">下载静态资源</el-button>
        <el-button type="primary" icon="el-icon-download" @click="exportExcel()" v-operation-auth="'ly-002'">导出Excel</el-button>
        <!-- 
            编辑，保存，重置，删除，批量删除，***查看，附件上传，查询，提交，新增，文件预览

下载，批量下载，导出一样
发票识别，自定义指令
         -->
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
            let a = document.createElement('a');
                a.download = "what_286.txt";
                a.href = window.URL.createObjectURL(new Blob([content]));
                document.body.appendChild(a)
                a.click();
                document.body.removeChild(a)
        },
        // Blob下载项目内文件
        downloadFile(path) {
            let urls = path.split('/');
            console.log('path===', urls);
            axios({
                method: 'get',
                url: path,
                data: '空',
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
        exportExcel(){
            let params = {
                fileName: "数据导出",
                params: { page: 1,pagesize: 15 },
                templateCode: "Tax"//模板编码
            }
            axios({
                method: 'get',
                url: 'http://url.com',
                data: params,
                responseType: 'blob'// 关键
            }).then(res => { // res返回数据流
                if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE浏览器
                    window.navigator.msSaveOrOpenBlob(res.data, this.exportFileName + '.xlsx');
                } else {
                    const a = document.createElement('a')
                    a.download = this.exportFileName + '.xlsx'
                    a.href = window.URL.createObjectURL(new Blob([res.data]))
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                }
            }).catch(err => {
                
            })
        }
    }
}
</script>

<style lang="less" scoped>
#download{

}
</style>
