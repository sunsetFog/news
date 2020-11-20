<template>
    <section id="vueqr">
        <vue-qr  :logoSrc="config.logo" :text="config.value" :size="200" :margin="0"></vue-qr>
        <el-button @click="downloadImg()">下载二维码</el-button>
    </section>
</template>

<script>
// npm install vue-qr --save
// http://www.fly63.com/article/detial/1086
import VueQr from 'vue-qr'
export default {
    components:{VueQr},
    data(){
        return{
            config: {
                value: 'www.baidu.com',//显示的值、跳转的地址
                logo:'../../../../static/picture/center/caiwu.png'//中间logo的地址
            }
        }
    },
    methods: {
        downloadImg(){
            let url = document.querySelector('#vueqr img').src;//获取到img标签的src
            let a = document.createElement('a');//动态创建一个a标签
            a.download = '张三的二维码.png';// 下载图名字 默认文件格式.png 
            a.href = url;//src
            a.click();//点击下载事件
        }
    }
}
</script>

<style lang="less" scoped>
#vueqr{
    width: 100%;
    height: 100%;
}
</style>
