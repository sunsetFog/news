<template>
    <section id="download">
        <el-button @click="downloadTxt()">下载添加内容的文本</el-button>
        <el-button @click="downloadFile('@static/capital/rem.js')">下载静态资源</el-button>
        <el-button type="primary" icon="el-icon-download" @click="exportExcel()">EasyExcel导出</el-button>
        <br><br>
        <el-button @click="excelWay">jeecgboot导出</el-button>
        <br><br>
		<upload4 yuming="http://localhost:8060/sky/importExcel" title_grain="导入"></upload4>
        <br><br>
        <upload4 yuming="http://localhost:8060/sky/uploadFile" title_grain="文件上传"></upload4>
        <br><br>
        <upload4 yuming="http://localhost:8060/sky/uploadLinux" title_grain="文件上传Linux"></upload4>
        <br><br>
        <el-button @click="previewToDownload">图片预览转图片下载</el-button>
        <el-button @click="DocumentPreview">文件预览</el-button>

        
        <!-- 
            编辑，保存，重置，删除，批量删除，***查看，附件上传，查询，提交，新增，文件预览

下载，批量下载，导出一样
发票识别，自定义指令
         -->
    </section>
</template>

<script>
import axios from 'axios';
import upload4 from '@/explore/pages/home/managementCenter/effect/upload/upload4.vue';
export default {
    components: { upload4 },
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
        exportExcel() {
            // window.open(process.env.core_url + '/sky/excel/file')
            let that = this;

            let params = {
                // fileName: "数据导出",
                // pageObj: { page: 1,pagesize: 15 },
                // templateCode: "Tax"//模板编码
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
        excelWay() {
            let that = this;

            let params = {
                filename: "商品信息统计报表"
            }

            axios({
                url: 'http://localhost:8060/sky/exportXls',
                method: 'get',
                params: params,
                responseType: 'blob',// 表明返回服务器返回的数据类型
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            }).then((res) => {// 处理返回的文件流
                /*
                    下载的excel文件打开为乱码,postman下载正常,前端问题
                    https://www.cnblogs.com/stcweb/articles/16066788.html
                    打印res显示：request: MockXMLHttpRequest
                    需要main.js关闭Mock
                    打印res显示：request: XMLHttpRequest
                
                */
                console.log('--res1--', res);
                // 后端设置content-disposition中文乱码，放弃这个方式了
                let contentDisposition = res.headers['content-disposition'].split('filename=')[1];
                let filename = decodeURI(contentDisposition);
                console.log("----filename---", filename);
                let blobOptions = res.headers['content-type'];
                console.log("----blobOptions---", blobOptions);


                let file01 = {
                    name: params.filename,
                    suffix: '.xls',
                    blobOptions: { type: 'application/vnd.ms-excel' }
                }
                let file02 = {
                    name: params.filename,
                    suffix: '.xlsx',
                    blobOptions: { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' }
                }
                file01.title = file01.name + file01.suffix;

                let bolbData = new Blob([res.data], file01.blobOptions);

                if (typeof window.navigator.msSaveBlob !== 'undefined') {
                    console.log("IE浏览器", file01.title);
                    window.navigator.msSaveBlob(bolbData, file01.title);
                } else {
                    console.log("非IE浏览器", file01.title);
                    let url = window.URL.createObjectURL(bolbData);
                    let aTag = document.createElement('a');
                    aTag.style.display = 'none';
                    aTag.href = url;
                    aTag.setAttribute('download', file01.title);
                    document.body.appendChild(aTag);
                    aTag.click();
                    document.body.removeChild(aTag); //下载完成移除元素
                    window.URL.revokeObjectURL(url); //释放掉blob对象
                }
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        previewToDownload() {
            let that = this;
            let json = {
                fileUrl: "http://localhost:8062/sky/img/avatorImages/1647277665830invoice.png"
            }
            that.$apihttp({
                url: 'http://localhost:8060/sky/previewToDownload',
                method: 'get',
                params: json
            }).then((res) => {
                console.log('下载图片路径=',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        // study: 文档预览
        DocumentPreview() {
            let that = this;
            let json = {

            }
            that.$apihttp({
                url: 'http://localhost:8062/sky/getFileViewDomain',
                method: 'get',
                params: json
            }).then((res) => {
                console.log('文档预览=',res);
                let url = "http://localhost:8062/sky/profile/1.pdf";
                window.open(res+'?officePreviewType=pdf&url='+encodeURIComponent(url));
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
