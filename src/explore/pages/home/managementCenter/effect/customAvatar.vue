<template>
    <section id="customAvatar">
        <!-- 
            https://github.com/xyxiao001/vue-cropper
         -->
        <el-dialog
            title="头像裁切"
            :visible.sync="dialogVisible"
            width="1000px">
                <div class="isContent">
                    <vueCropper
                        ref="cropper"
                        style="width: 100%;height: 340px;"
                        :centerBox="true"
                        :img="option.img"
                        :outputSize="option.size"
                        :outputType="option.outputType"
                        :info="true"
                        :full="option.full"
                        :canMove="option.canMove"
                        :canMoveBox="option.canMoveBox"
                        :original="option.original"
                        :autoCrop="option.autoCrop"
                        :autoCropWidth="option.autoCropWidth"
                        :autoCropHeight="option.autoCropHeight"
                        :fixedBox="option.fixedBox"
                        @realTime="realTime"
                        @imgLoad="imgLoad"
                    ></vueCropper>

                    <div class="magic-box">
                        <el-button type="primary" @click="rotateLeft">
                            <span style="font-weight: 600;">↺</span>
                        </el-button>

                        <el-button type="primary" @click="rotateRight">
                            <span style="font-weight: 600;">↻</span>
                        </el-button>
                    </div>
                </div>

                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogVisible = false">取 消</el-button>
                    <el-button type="primary" @click="isSure">确 定</el-button>
                </div>
        </el-dialog>


        <el-upload class="upload" :action="'/excuse/file/fileUpload'" :headers="headers" :show-file-list="false"
                    :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload"
                    accept="image/jpeg,image/jpg,image/png">
            <!-- <img src="../../assets/image/upload.png" /> -->
            <img v-if="imageUrl" :src="imageUrl" class="avatar"/>
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
    </section>
</template>

<script>
import { VueCropper }  from 'vue-cropper' 
export default {
    name: "customAvatar",
    components: {
        VueCropper
    },
    data() {
        return {
            option: {
                img: "",
                size: 1,
                full: false,
                outputType: "png",
                canMove: true,
                original: false,
                canMoveBox: true,
                autoCrop: true,
                autoCropWidth: 200,
                autoCropHeight: 200,
                fixedBox: true
            },
            headers: {
                token: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhcHAiLCJuYmYiOjE2NDU0MjQ5ODYsImRhdGEiOiJ7XCJjYXJkUGhvdG9Qb3NpdGl2ZVwiOlwiXCIsXCJjYXJkUGhvdG9SZXZlcnNlXCI6XCJcIixcImNoYW5uZWxcIjowLFwiY3JlYXRlQnlcIjpcInN5c1wiLFwiY3JlYXRlVGltZVwiOjE2NDQxMjk2OTQzMjAsXCJkZWxldGVkXCI6MCxcImZha2VMaWtlXCI6MCxcImZvcmJpZGRlblN0YXRlXCI6MSxcImhvdEFuY2hvclwiOjAsXCJob3ROdW1cIjowLFwiaWRcIjpcIjBhNTUwNzhkYzJiYTRmM2NhYzEwNTM3ZGE5ZGJlYzk0XCIsXCJpZENhcmRcIjpcIlwiLFwiaW52aXRlQ29kZVwiOlwiejY4NDIzN1wiLFwiaXBcIjpcIjk0LjIwNC44Ny4xNzRcIixcImxhc3RMb2dpblRpbWVcIjoxNjQ1NDI0OTg2OTQyLFwibGV2ZWxcIjoxLFwib25MaW5lXCI6MSxcInBhc3N3b3JkXCI6XCJiYjIxYzVhMGMxMWUyNmQ5NWQ2YzM1MzlhYjU0OGY2NVwiLFwicGhvbmVcIjpcIjE5ODA1MDYwMDAxXCIsXCJyb2xlXCI6MCxcInNleFwiOjAsXCJzb3J0XCI6MCxcInR5cGVcIjowLFwidXBkYXRlVGltZVwiOjE2NDUxMDYzNTMwNzksXCJ1c2VyQ29kZVwiOjEwMTY3MixcInVzZXJJY29uXCI6XCJwaG90b18yMDIxLTA0LTE2XzEwLTM5LTA3LmpwZ1wiLFwidXNlck5hbWVcIjpcIjE5OCoqKiowMDAxXCJ9IiwiaXNzIjoiQ2hhdC1BUEkiLCJleHAiOjE2NzY5NjA5ODYsImlhdCI6MTY0NTQyNDk4NiwianRpIjoiOTI2M2JiNDItNDNhNy00ZDc5LWI3M2MtZGI4NjFjNzI5NjI3In0.Dc_BA2o0Qn7PA92zHBsa80933yTgIHXmE7vQMun9BWU"
            },
            imageUrl: "",
            dialogVisible: false
        }
    },
    methods: {
        realTime(data) {
            // this.previews = data;
        },
        imgLoad(msg) {
            console.log(msg);
        },
        handleAvatarSuccess (res, file) {
            console.log('-handleAvatarSuccess-', res, file);
            // this.imageUrl = URL.createObjectURL(file.raw);
            // this.option.img = URL.createObjectURL(file.raw);
            // this.option.img = res.data;

            console.log('---imageUrl--', this.imageUrl);
            console.log('--file--', JSON.stringify(file.raw))

            this.fileToBase64(file.raw).then(data => {
                this.dialogVisible = true;
                this.option.img = data;
                console.log('---fileToBase64--', data);
            })
            
        },
        beforeAvatarUpload (file) {
            // const isJPG = file.type === "image/jpeg";
            if (file.size / 1024 / 1024 > 10) {
                this.$message.error('上传头像图片大小不能超过 10MB!');
                return false;
            }
            return true;
        },
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
        },
        isSure() {
            this.$refs.cropper.startCrop();
            this.$refs.cropper.getCropData(data => {
                // do something
                console.log('do something', data);
                this.imageUrl = data;
                this.dialogVisible = false;
            })
        },
        rotateLeft() {
            this.$refs.cropper.rotateLeft();
        },
        rotateRight() {
            this.$refs.cropper.rotateRight();
        }
    }
}
</script>

<style lang="less" scoped>
#customAvatar {
    width: 100%;
    height: 200px;
    .upload {
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 100px;
        border: 1px dashed rebeccapurple;
        .avatar {
            width: 100%;
            height: 100%;
        }
    }
    .isContent {
        width: 100%;
        height: 420px;
        .magic-box {
            width: 100%;
            height: 50px;
            margin-top: 20px;
        }
    }
    
}
</style>


