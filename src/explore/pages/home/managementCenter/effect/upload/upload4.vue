<template>
  <section id="upload4">
    <div>
      <el-upload
        class="upload-demo"
        :action="yuming"
        :on-preview="handlePreview"
        :on-remove="handleRemove"
        :before-remove="beforeRemove"
        multiple
        :limit="3"
        :on-exceed="handleExceed"
        :file-list="fileList"
        :on-success="handleAvatarSuccess"
        :before-upload="beforeAvatarUpload"
      >
        <el-button size="small" type="primary">{{title_grain}}</el-button>
      </el-upload>

      
    </div>
    

    <el-dialog
        :visible.sync="dialogVisible"
        width="420px"
        :close-on-click-modal="false"
        :show-close="false">
        <div slot="title" style="color: black;text-align: left;font-size: 15px;height: 26px;line-height: 16px;">
            <i class="el-icon-warning" style="font-size: 22px;color: #e6a23c;vertical-align: middle;"></i>
            <span style="vertical-align: middle;">{{title_message}}</span>
        </div>
        <div style="color: #909399;text-align: left;">
            {{body_message}}
            <br>
            具体详情请
            <a :href="txt_url" :download="txt_name" style="color: #1890ff;">点击下载</a>
        </div>
        <span slot="footer" class="dialog-footer">
            <el-button type="primary" @click="sureWay">确 定</el-button>
        </span>
    </el-dialog>
  </section>
</template>

<script>
import axios from 'axios';
export default {
    name: 'upload4',
    props: {
        yuming: {
            type: String,
            default: '',
        },
        title_grain: {
            type: String,
            default: '***'
        }
    },
    data() {
        return {
            fileList: [],
            dialogVisible: false,
            title_message: "",
            body_message: "",
            txt_url: "",
            txt_name: ""
        };
    },
    methods: {
        sureWay() {
            this.dialogVisible = false;
            this.downloadFile();
            this.downloadNetFile();
            this.netDownLoadNet();
        },
        // 文件列表移除文件时的钩子
        handleRemove(file, fileList) {
            console.log(file, fileList);
        },
        // 点击文件列表中已上传的文件时的钩子
        handlePreview(file) {
            console.log(file);
        },
        // 文件超出个数限制时的钩子
        handleExceed(files, fileList) {
            this.$message.warning(
                `当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length +
                    fileList.length} 个文件`,
            );
        },
        // 删除文件之前的钩子
        beforeRemove(file, fileList) {
            return this.$confirm(`确定移除 ${file.name}？`);
        },
        //上传成功
        handleAvatarSuccess(res, file) {
            this.txt_name = res.result.fileName;
            this.txt_url = res.result.fileUrl;
            this.title_message = res.message;
            this.body_message = res.result.msg;
            if(res.code == 201) {
                this.dialogVisible = true;
            } else if(res.code == 200) {
                this.$alert(res.message, '提示', {
                    confirmButtonText: '确定',
                    callback: action => {

                    }
                });
            }
        
        },
        //上传前设置
        beforeAvatarUpload(file) {

        },
        downloadFile() {
            let that = this;
            
            let params = {
                filename: this.txt_name
            }

            axios({
                url: 'http://localhost:8060/sky/downloadFile2',
                method: 'get',
                params: params,
                responseType: 'blob',// 表明返回服务器返回的数据类型
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            }).then((res) => {// 处理返回的文件流
                console.log('--下载接口--', res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        downloadNetFile() {
            let that = this;
            
            let params = {
                netAddress: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic1.win4000.com%2Fmobile%2F2020-05-20%2F5ec4c771b5044.jpg&refer=http%3A%2F%2Fpic1.win4000.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=auto?sec=1672209011&t=77eb65e03a05b87570642512f8d93810"
            }

            axios({
                url: 'http://localhost:8062/sky/netDownloadLocal',
                method: 'get',
                params: params,
                responseType: 'blob',// 表明返回服务器返回的数据类型
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            }).then((res) => {// 处理返回的文件流
                console.log('--下载网络图片-111-', res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        netDownLoadNet() {
            let that = this;
            
            let params = {
                netAddress: "https://img1.baidu.com/it/u=3844628686,3106826718&fm=253&fmt=auto&app=120&f=JPEG?w=800&h=1422",
                isOnLine: true
            }

            axios({
                url: 'http://localhost:8062/sky/netDownLoadNet',
                method: 'get',
                params: params,
                responseType: 'blob',// 表明返回服务器返回的数据类型
                // headers: {
                //     'Content-Type': 'application/json'
                // }
            }).then((res) => {// 处理返回的文件流
                console.log('--下载网络图片-222-', res);
                let file01 = {
                    name: res.headers['content-disposition'].split('filename=')[1],
                    suffix: '.jpg'
                }
                file01.title = file01.name + file01.suffix;
                let bolbData = new Blob([res.data]);

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
        }
    },
};
</script>

<style lang="less" rel="stylesheet/less">
#upload4 {
    
}
</style>
