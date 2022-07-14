<template>
    <section id="orderUnit">
        <headDesign title="我的订单"></headDesign>
        <van-tabs v-model:active="tab_active">
            <van-tab title="全部">
                <fabulous :tab_active="0"></fabulous>
            </van-tab>
            <van-tab title="待付款">
                <fabulous :tab_active="1"></fabulous>
            </van-tab>
            <van-tab title="待收货">
                <fabulous :tab_active="2"></fabulous>
            </van-tab>
            <van-tab title="已完成">
                <fabulous :tab_active="3"></fabulous>
            </van-tab>
            <van-tab title="已取消">
                <fabulous :tab_active="4"></fabulous>
            </van-tab>
        </van-tabs>
    </section>
</template>

<script>
import fabulous from "./fabulous";
export default {
    name: "orderUnit",
    components: { fabulous },
    data() {
        return {
            tab_active: 1
        }
    },
    created() {
        console.log("-status-", this.$route.query.status);
        this.tab_active = Number(this.$route.query.status);
    }
}
</script>

<style lang="less" scoped>
#orderUnit {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
}
</style>


