<template>
    <section id="paySuccess">
        <headDesign title="支付成功">
            <button class="summer" @click="okWay">完成</button>
        </headDesign>
        <div class="rainbow">
            <img class="u576" src="@static/mall/order/u576.png"/>
            <img class="u580" src="@static/mall/order/u580.png"/>
            <img class="u587" src="@static/mall/order/u587.png"/>
            <span>订单支付成功</span>
            <span>支付方式</span>
            <span>微信支付</span>
            <span>支付金额</span>
            <span>￥180.00</span>
            <button @click="okWay">查看订单</button>
            <button @click="homeWay">回到首页</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "paySuccess",
    data() {
        return {

        }
    },
    methods: {
        okWay() {
            this.$router.push({
                path: "/orderUnit/index?status=0"
            })
        },
        homeWay() {
            this.$router.push({
                path: "/essentialsUnit/homePage/index"
            })
        }
    }
}
</script>

<style lang="less" scoped>
#paySuccess {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .summer {
        width: 30px;
        height: 25px;
        text-align: center;
        line-height: 25px;
        color: @color_lv;
        position: absolute;
        right: 15px;
        top: 8px;
    }
    .rainbow {
        width: 100%;
        height: 312px;
        background: #fff;
        position: relative;
        .u576 {
            width: 72px;
            height: 72px;
            position: absolute;
            left: 151.5px;
            top: 30px;
        }
        .u580 {
            width: 23px;
            height: 23px;
            position: absolute;
            left: 97px;
            top: 150px;
        }
        .u587 {
            width: 24px;
            height: 24px;
            position: absolute;
            left: 97px;
            top: 183px;
        }
        button {
            width: 100px;
            height: 40px;
            color: @color_huise;
            border: 1px solid @color_huise;
            text-align: center;
            line-height: 40px;
            border-radius: 5px;
            position: absolute;
            bottom: 36px;
        }
        button:nth-of-type(1) {
            left: 62px;
        }
        button:nth-of-type(2) {
            right: 62px;
        }
        span {
            position: absolute;
        }
        span:nth-of-type(1) {
            font-size: 18px;
            left: 133px;
            top: 115px;
        }
        span:nth-of-type(2) {
            color: @color_huise;
            font-size: 13px;
            left: 133px;
            top: 152px;
        }
        span:nth-of-type(3) {
            color: @color_hong;
            font-size: 13px;
            left: 210px;
            top: 152px;
        }
        span:nth-of-type(4) {
            color: @color_huise;
            font-size: 13px;
            left: 133px;
            top: 185px;
        }
        span:nth-of-type(5) {
            color: @color_hong;
            font-size: 13px;
            left: 210px;
            top: 185px;
        }
    }
}
</style>


