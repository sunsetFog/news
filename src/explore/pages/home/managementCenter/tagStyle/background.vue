<template>
    <section id="backgroundUnit">
        background能分解为background-*
        <div class="peach">

        </div>
    </section>
</template>

<script>
</script>

<style lang="less">
#backgroundUnit {
    .peach {
        width: 320px;
        height: 180px;
        border: 1px solid #3f5075;
        background-image: url("~@static/video/yujie.jpg");// 要使用的背景图像
        background-size: 100% 100%;// 背景图片的尺寸
        background-repeat: no-repeat;// 如何重复
        background-position: 12px 0;// 位置
        background-color: #FF8A00;// 背景颜色
        //background: #00FF00 url(bgimage.gif) no-repeat fixed top;// 可以设置所有的背景属性
    }
}
</style>
