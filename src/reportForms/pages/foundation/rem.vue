<template>
    <section id="rem">
        <!--
            移动端适配
            注意:谷歌浏览器最小字体为12像素,项目要用大于12的字体，选16就好

            375屏开发：浏览器选Iphone6/7/8的375屏
            ui设计给750px尺寸图片，用ps打开设计图，ps操作《图像--图像大小--375宽》

            三种px转换rem方式
            1.计算转换
                ps测量值是40px时：40px / 16= 2.5rem
                px都要转rem，包括margin，border, font-size


            2.自动转换
                https://www.cnblogs.com/wangqiao170/p/8652505.html
                npm install postcss-pxtorem --save-dev
                配置postcssrc.js文件，而16为字体大小
                plugins 属性加入
                "postcss-pxtorem": {
                    "rootValue": 16,
                    "propList": ["*"]
                }

            3.安装vscode的插件px to rem转换
                选好样式，然后用Alt + Z转换，两次Alt + z会转换回来
                code》首选项 》设置 》扩展 》px to rem 》修改成1rem=16px
                不改四位小数，px 转 rem会四舍五入，rem 转 px 就不会四舍五入

        -->

        <div class="adapt">移动端px转rem</div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
#rem{
    .adapt{
        width: 345px;
        height: 40px;
        margin-left: 15px;
        background: plum;
        text-align: center;
        line-height: 40px;
        color: white;
        font-size: 16px;
        border-radius: 4px;
        border: 1px solid red;
    }
}
</style>


