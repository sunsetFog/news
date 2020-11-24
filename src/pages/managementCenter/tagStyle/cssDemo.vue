<template>
    <section id="css-demo">
        <div class="container">
            <div class="triangle"></div>
            <div class="luminescence"></div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'cssDemo'
}
</script>

<style lang="less" scoped>
#css-demo {
    .container {
        width: 400px;
        margin-top: 20px;
        position: relative;
        .triangle {
            width: 10px;
            height: 10px;
            border-left: 1px solid #C9CACB;
            border-top: 1px solid #C9CACB;
            background: #586B8D;
            -webkit-transform: rotate(45deg); // 旋转角度
            -moz-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            -o-transform: rotate(45deg);
            position: absolute;
            left: 22px;
            top: -5px;
            z-index: 2;
        }
        .luminescence {
            width: 400px;
            height: 100px;
            border: 1px solid #C9CACB;
            box-shadow: 1px 1px 10px 0 #C9CACB; // 阴影
            background: #586B8D;
        }
    }
}
</style>
