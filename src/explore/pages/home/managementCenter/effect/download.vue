<template>
    <section id="download">
        <el-button @click="downloadTxt()">下载添加内容的文本</el-button>
        <el-button @click="downloadFile('@static/capital/rem.js')">下载静态资源</el-button>
        <el-button type="primary" icon="el-icon-download" @click="exportExcel1()">导出Excel1</el-button>
        <el-button type="primary" icon="el-icon-download" @click="exportExcel2()">导出Excel2</el-button>
        <el-button @click="xiazai1">下载1</el-button>
        <el-button @click="xiazai2">下载2</el-button>
        <el-button @click="xiazai3">下载3</el-button>
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
                let aTag = document.createElement('a');// 创建a标签
                    aTag.download = urls[urls.length-1];// 设置下载属性
                    aTag.href = window.URL.createObjectURL(new Blob([res.data]));// 赋予文件下载地址
                    document.body.appendChild(aTag);// a标签插入页面里
                    aTag.click();// 强制触发a标签事件
                    document.body.removeChild(aTag);// 删除a标签
            }).catch(err => {
                
            })
        },
        exportExcel1(){
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
        },
        exportExcel2() {
            // window.open(process.env.core_url + '/sky/excel/file')
            let that = this;

            let params = {

            }

            that.$apihttp({
                url: process.env.core_url + '/sky/excel/file',
                method: 'get',
                params: params,
                responseType: 'blob'// 关键
            }).then((res) => {
                console.log('--res0--', res);
                if (window.navigator && window.navigator.msSaveOrOpenBlob) { // IE浏览器
                    console.log(1111)
                    window.navigator.msSaveOrOpenBlob(res, 'test.xlsx');
                } else {
                    console.log(2222)
                    const a = document.createElement('a');
                    a.download = 'test.xlsx';
                    a.href = window.URL.createObjectURL(new Blob([res]))
                    document.body.appendChild(a)
                    a.click()
                    document.body.removeChild(a)
                }
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        xiazai1() {
            let that = this;

            let params = {
                path: 'D:\goods.txt'
            }

            axios({
                url: process.env.core_url + '/sky/download/files',
                method: 'get',
                params: params,
                responseType: 'blob'// 关键
            }).then((res) => {
                console.log('--res1--', res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        xiazai2() {
            let that = this;

            let params = {
                path: 'D:\goods.txt'
            }

            axios({
                url: process.env.core_url + '/sky/downloadLocal',
                method: 'post',
                params: params,
                responseType: 'blob'// 关键
            }).then((res) => {
                console.log('--res1--', res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        xiazai3() {
            let that = this;

            let params = {
                path: 'D:\goods.txt'
            }

            axios({
                url: process.env.core_url + '/sky/netDownloadLocal',
                method: 'post',
                params: params,
                responseType: 'blob'// 关键
            }).then((res) => {
                console.log('--res1--', res);
            }).catch((err)=>{
                console.log('error',err);
            })
        }
    }
}
</script>

<style lang="less" scoped>
#download{

}
</style>
