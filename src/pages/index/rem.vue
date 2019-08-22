<template>
    <section>
        <!-- 注意-注意:谷歌浏览器最小字体为12像素，但手机上没限制
        因此，想用10字体像素，得谷歌设置-自定义字体为10以下
        但是，用npm install postcss-pxtorem --save-dev可以自动px转rem
        配置postcssrc.js文件
        plugins 属性加入
        "postcss-pxtorem": {
        "rootValue": 16,
        "propList": ["*"]
        }
        自动转换px为rem
        https://www.cnblogs.com/wangqiao170/p/8652505.html
         -->
        <!-- rem设置看本项目index.html -->
        <div class="adapt">移动端px转rem</div>
        <!-- 移动端适配概念:res配置的是字体大小font-size,根据字体大小定义盒子的宽高
        本项目字体为16像素，既是375像素的屏宽，字体为16像素
        字体大小为变量，并非固定是16---实际宽为21.5625rem* 字体大小 -->
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
/* 375的设计图量像素除以16 */
/* 40/16= 2.5rem
    margin得转rem,除了百分比，横屏的都要自适应
    如今使用自动转换，不用计算
*/
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
    /* 移动端像素都要转rem */
</style>


