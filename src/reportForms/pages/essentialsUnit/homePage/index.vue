<template>
    <section id="homePage">
        <bannerRotation></bannerRotation>
        <specialServices></specialServices>
        <noticeBar></noticeBar>
        <brandSupplier></brandSupplier>
    </section>
</template>

<script>
import bannerRotation from "./bannerRotation";
import specialServices from "./specialServices";
import noticeBar from "./noticeBar";
import brandSupplier from "./brandSupplier";
export default {
    name: "homePage",
    components: { bannerRotation, specialServices, noticeBar, brandSupplier },
    data() {
        return {

        }
    },
    created() {

    }
}
</script>

<style lang="less" scoped>
#homePage {
    width: 100%;
    height: 800px;
    background: @color_beijing;
    
}
</style>

