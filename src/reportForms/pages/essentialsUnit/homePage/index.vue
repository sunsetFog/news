<template>
    <section id="homePage">
        <bannerRotation></bannerRotation>
        <specialServices></specialServices>
        <noticeBar></noticeBar>
        <brandSupplier></brandSupplier>
        <timeLimit></timeLimit>
        <fresh></fresh>
        <popularityHot></popularityHot>
        <subject></subject>
        <guessLike></guessLike>
    </section>
</template>

<script>
import bannerRotation from "./bannerRotation";
import specialServices from "./specialServices";
import noticeBar from "./noticeBar";
import brandSupplier from "./brandSupplier";
import timeLimit from "./timeLimit";
import fresh from "./fresh";
import popularityHot from "./popularityHot";
import subject from "./subject";
import guessLike from "./guessLike";
export default {
    name: "homePage",
    components: { bannerRotation, specialServices, noticeBar, brandSupplier, timeLimit, fresh, popularityHot, subject, guessLike },
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
    background: @color_qianlan;
    
}
</style>

