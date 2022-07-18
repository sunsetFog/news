<template>
    <section id="afterSalesList">
        <headDesign title="退换售后">
            <img class="summer" src="@static/mall/afterSales/u3306.png"/>
        </headDesign>
        <van-tabs v-model:active="tab_active">
            <van-tab title="售后申请">
                <popularityHot :tab_active="0"></popularityHot>
            </van-tab>
            <van-tab title="申请记录">
                <popularityHot :tab_active="1"></popularityHot>
            </van-tab>
        </van-tabs>
    </section>
</template>

<script>
import popularityHot from "./popularityHot"
export default {
    name: "afterSalesList",
    components: { popularityHot },
    data() {
        return {
            tab_active: 0
        }
    }
}
</script>

<style lang="less" scoped>
#afterSalesList {
    width: 100%;
    min-height: 100%;
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
}
</style>


