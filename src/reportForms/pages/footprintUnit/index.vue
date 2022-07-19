<template>
    <section id="footprintUnit">
        <headDesign title="我的足迹"></headDesign>
        <div class="atmosphere">
            2022-7-19
        </div>
        <popularityHot></popularityHot>
    </section>
</template>

<script>
import popularityHot from "./popularityHot"
export default {
    name: "footprintUnit",
    components: { popularityHot }
}
</script>

<style lang="less" scoped>
#footprintUnit {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .atmosphere {
        width: 100%;
        height: 42px;
        text-align: left;
        line-height: 42px;
        font-size: 13px;
        color: @color_huise;
        padding-left: 20px;
        box-sizing: border-box;
        background: #fff;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
    }
}
</style>


