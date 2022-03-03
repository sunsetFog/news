<template>
    <section>
        <!-- 
            url、base64、blob相互转换方法
            https://zhuanlan.zhihu.com/p/57700185

            file互转base64图片 和 file转blob图片：在这项目的上传图片里
         -->
    </section>
</template>

<script>
export default {
    name: "url_base64_blob",
    data() {
        return {
            urlImg: "https://avatars2.githubusercontent.com/u/15681693?s=460&v=4",
            base64Img: "data:image/png;base64,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",
            // blobImg: "blob:http://192.168.1.103:2021/949b9b36-e045-4dfe-ac36-c82393a47c6d",
            // blobImg: "blob:http://192.168.1.103:2021/aca4b3ed-0051-424e-98fe-36af4bc49504",
            blobImg: "blob:http://192.168.1.103:2021/0453c62b-e552-4c0f-815c-9c305ff0562a"
        }
    },
    created() {
        this.urlToBase64(this.urlImg).then(function(base64) {
            console.log("--base64--"+base64);
        })

        let base64 = this.base64Img.split(',')[1];
        this.base64ToBlob({b64data: base64, contentType: 'image/png'}).then(res => {
            // 转后后的blob对象
            console.log('blob', res)
        })

        this.blobToBase64(this.blobImg).then(res => {
            // 转化后的base64
            console.log('++base64++', res)
        })
    },
    methods: {
        // 原理： 利用canvas.toDataURL的API转化成base64
        urlToBase64(url) {
            return new Promise ((resolve,reject) => {
                let image = new Image();
                image.onload = function() {
                    let canvas = document.createElement('canvas');
                    canvas.width = this.naturalWidth;
                    canvas.height = this.naturalHeight;
                    // 将图片插入画布并开始绘制
                    canvas.getContext('2d').drawImage(image, 0, 0);
                    // result
                    let result = canvas.toDataURL('image/png')
                    resolve(result);
                };
                // CORS 策略，会存在跨域问题https://stackoverflow.com/questions/20424279/canvas-todataurl-securityerror
                image.setAttribute("crossOrigin",'Anonymous');
                image.src = url;
                // 图片加载失败的错误处理
                image.onerror = () => {
                    reject(new Error('urlToBase64 error'));
                };
            })
        },
        // 原理：利用URL.createObjectURL为blob对象创建临时的URL
        base64ToBlob ({b64data = '', contentType = '', sliceSize = 512} = {}) {
            return new Promise((resolve, reject) => {
                // 使用 atob() 方法将数据解码
                let byteCharacters = atob(b64data);
                let byteArrays = [];
                for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
                let slice = byteCharacters.slice(offset, offset + sliceSize);
                let byteNumbers = [];
                for (let i = 0; i < slice.length; i++) {
                    byteNumbers.push(slice.charCodeAt(i));
                }
                // 8 位无符号整数值的类型化数组。内容将初始化为 0。
                // 如果无法分配请求数目的字节，则将引发异常。
                byteArrays.push(new Uint8Array(byteNumbers));
                }
                let result = new Blob(byteArrays, {
                type: contentType
                })
                result = Object.assign(result,{
                // 这里一定要处理一下 URL.createObjectURL
                preview: URL.createObjectURL(result),
                name: `XXX.png`
                });
                resolve(result)
            })
        },
        // 原理：利用fileReader的readAsDataURL，将blob转为base64
        blobToBase64(blob) {
            return new Promise((resolve, reject) => {
                const fileReader = new FileReader();
                fileReader.onload = (e) => {
                    resolve(e.target.result);
                };
                // readAsDataURL
                fileReader.readAsDataURL(blob);
                fileReader.onerror = () => {
                    reject(new Error('blobToBase64 error'));
                };
            });
        },
        /*
            Vue 读取后台二进制文件流转为图片显示
            接口返回文件流
         */
        wenjianliuImg() {
            this.$http({
            url: '请求的接口',
            method: 'get',   // get请求，post改为post
            responseType: 'blob',
            params: {   // 这是提交的参数，如果是post 的就是 data
                id: '123456',
                index: 'img'
            }
            }).then(({ data }) => {
                let blob = new Blob([data]);   // 返回的文件流数据
                let url = window.URL.createObjectURL(blob);  // 将他转化为路径
                let mapSrc = url  // 将转换出来的路径赋值给变量，其实和上一步结合就可以
            })
        }
    }
}
</script>

