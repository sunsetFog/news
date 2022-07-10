<template>
    <div class="titleBox">
        <span>{{with_name}}</span>
        <span>更多推荐</span>
        <img src="@static/mall/homePage/u82.png"/>
    </div>
</template>

<script>
export default {
    name: "titleBox",
    props: {
        with_name: {
            type: String,
            default: ''
        }
    }
}
</script>

<style lang="less" scoped>
.titleBox {
    width: 100%;
    height: 40px;
    border-bottom: 1px solid @color_edge;
    position: relative;
    span:nth-of-type(1) {
        font-size: 15px;
        position: absolute;
        left: 25px;
        top: 9px;
    }
    span:nth-of-type(2) {
        font-size: 13px;
        color: @color_huise;
        position: absolute;
        right: 52px;
        top: 10px;
    }
    img {
        width: 20px;
        height: 20px;
        position: absolute;
        right: 20px;
        top: 10px;
    }
}
</style>


