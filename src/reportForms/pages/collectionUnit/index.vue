<template>
    <section id="collectionUnit">
        <headDesign title="我的收藏"></headDesign>
        <van-tabs v-model:active="tab_active">
            <van-tab title="商品10">
                <popularityHot :tab_active="0"></popularityHot>
            </van-tab>
            <van-tab title="专题10">
                <popularityHot :tab_active="1"></popularityHot>
            </van-tab>
            <van-tab title="话题10">
                <popularityHot :tab_active="2"></popularityHot>
            </van-tab>
        </van-tabs>
    </section>
</template>

<script>
import popularityHot from "./popularityHot"
export default {
    name: "collectionUnit",
    components: { popularityHot },
    data() {
        return {
            tab_active: 0
        }
    }
}
</script>

<style lang="less" scoped>
#collectionUnit {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
}
</style>


