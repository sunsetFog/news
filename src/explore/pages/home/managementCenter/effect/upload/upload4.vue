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
        <el-button size="small" type="primary">导入</el-button>
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
            <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
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
            
            this.downloadFile();
        },
        //上传前设置
        beforeAvatarUpload(file) {

        },
        downloadFile() {
            let that = this;
            
            let params = {
                filename: "goodsImportExcelErrorLog4590.txt"
            }

            axios({
                url: 'http://localhost:8060/sky/downloadFile',
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
        }
    },
};
</script>

<style lang="less" rel="stylesheet/less">
#upload4 {
    
}
</style>
