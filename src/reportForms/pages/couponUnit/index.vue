<template>
    <section id="couponUnit">
        <headDesign title="我的优惠券">
            <img class="summer" src="@static/mall/memberCenter/u2518.png"/>
        </headDesign>
        <van-tabs v-model:active="tab_active">
            <van-tab title="未使用">
                <fabulous :tab_active="0"></fabulous>
            </van-tab>
            <van-tab title="已使用">
                <fabulous :tab_active="1"></fabulous>
            </van-tab>
            <van-tab title="已过期">
                <fabulous :tab_active="2"></fabulous>
            </van-tab>
        </van-tabs>
    </section>
</template>

<script>
import fabulous from "./fabulous";
export default {
    name: "couponUnit",
    components: { fabulous },
    data() {
        return {
            tab_active: 0
        }
    }
}
</script>

<style lang="less" scoped>
#couponUnit {
    width: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .summer {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    /deep/ .van-tabs__content {
        padding: 5px 15px;
    }
}
</style>


