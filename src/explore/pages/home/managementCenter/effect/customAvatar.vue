<template>
    <section id="customAvatar">
        <!-- 
            https://github.com/xyxiao001/vue-cropper
         -->
        <el-dialog
            title="头像裁切"
            :visible.sync="dialogPortrait"
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
                            ↺
                        </el-button>

                        <el-button type="primary" @click="rotateRight">
                            ↻
                        </el-button>
                    </div>
                </div>

                <div slot="footer" class="dialog-footer">
                    <el-button @click="dialogPortrait = false">取 消</el-button>
                    <el-button type="primary" @click="isSure">确 定</el-button>
                </div>
        </el-dialog>


        <el-upload
            name="file"
            class="upload"
            :action="yuming + '/sky/shop/upload'"
            :data="{'id': 1}"
            :headers="{'token': $cookies.get('token')}"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            accept="image/jpeg,image/jpg,image/png"
        >
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
            yuming: process.env.core_url,
            imageUrl: "",
            dialogPortrait: false
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
                this.dialogPortrait = true;
                this.option.img = data;
                this.base64ToFile(data, file.raw.name)
                this.$nextTick(function() {
                    this.$refs.cropper.startCrop();
                })
                // this.base64Toerjinzhi(data)
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
        // file 转 base64
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
                this.dialogPortrait = false;
            })
        },
        rotateLeft() {
            this.$refs.cropper.rotateLeft();
        },
        rotateRight() {
            this.$refs.cropper.rotateRight();
        },
        // base64转file
        base64ToFile(urlData, fileName) {
            let arr = urlData.split(',');
            let mime = arr[0].match(/:(.*?);/)[1];
            let bytes = atob(arr[1]); // 解码base64
            let n = bytes.length
            let ia = new Uint8Array(n);
            while (n--) {
                ia[n] = bytes.charCodeAt(n);
            }
            let fileImg = new File([ia], fileName, { type: mime })
            console.log('--fileImg--', fileImg)
            return fileImg;
        },
        //base64  转  二进制数组
        base64Toerjinzhi(res) {
           
            var bytes = window.atob(res.split(',')[1]);    //去掉url的头，并转换为byte

            //处理异常,将ascii码小于0的转换为大于0
            var ab = new ArrayBuffer(bytes.length);
            var ia = new Uint8Array(ab);
            for (var i = 0; i < bytes.length; i++) {
              ia[i] = bytes.charCodeAt(i);
            }
            // this.downFile(ia)
            console.log("ia", ia)
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
            font-weight: 600;
        }
    }
    
}
</style>


