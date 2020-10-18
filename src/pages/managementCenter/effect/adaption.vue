<template>
    <section id="adaption">
        <div class="center">
            <div class="left"></div>
            <div class="main"></div>
            <div class="right"></div>
        </div>
        <!-- 
            自适应:两边盒子固定宽，中间盒子伸缩 (这项目已经转rem，效果看不了)
            用padding和position使得中间盒子宽100%就可以了
        -->
    </section>
</template>

<script>
export default {
    name: 'adaption',
}
</script>

<style lang="less" scoped>
#adaption{
    .center{
        width: 100%;
        min-width: 100px;// 设置最小宽，小于100px固定不再伸缩了
        height: 500px;
        background: gold;
        padding: 0px 80px 0px 120px;
        box-sizing: border-box;
        position: relative;
        .left{
            width: 120px;
            height: 100%;
            background: chartreuse;
            position: absolute;
            top: 0px;
            left: 0px;
        }
        .main{
            width: 100%;
            height: 100%;
            background: blueviolet;
            float: left;// 宽100%的盒子不要用定位，用浮动
            // position: absolute;
            // top: 0px;
            // left: 120px;
        }
        .right{
            width: 80px;
            height: 100%;
            background: blue;
            position: absolute;
            top: 0px;
            right: 0px;
        }
    }
}
</style>