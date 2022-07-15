<template>
    <section id="fillOrder">
        <headDesign title="填写订单"></headDesign>
        <div class="atmosphere">
            <span class="cartoon">大梨&nbsp;&nbsp;&nbsp;&nbsp;180****1849</span>
            <span class="mars">广东省深圳市南山区科兴科学园</span>
            <img class="u2279" src="@static/mall/follow/u2279.png"/>
            <img class="u196" src="@static/mall/special/u196.png" @click="addressWay"/>
            <button>默认</button>
            <img class="u448" src="@static/mall/order/u448.png"/>
        </div>
        <div class="jupiter">商品信息</div>
        <popularityHot></popularityHot>
        <div class="saturn">
            优惠券
            <span>5张可用</span>
            <img class="u196" src="@static/mall/special/u196.png"/>
        </div>
        <div class="venus">
            积分抵扣
            <span class="mercury">使用200积分可抵扣￥2.00现金</span>
            <van-switch class="honey" size="20px" v-model="integral_active" />
        </div>
        <div class="rainbow">
            商品合计
            <span>￥198.00</span>
        </div>
        <div class="summer">
            运费
            <div>
                满88元免邮
            </div>
            <span>￥0.00</span>
        </div>
        <div class="comic">
            优惠券
            <span>￥5.00</span>
        </div>
        <div class="magic">
            积分抵扣
            <span>￥2.00</span>
        </div>
        <div class="bean">
            活动优惠
            <div>
                App首单减免8元
            </div>
            <span>-￥8.00</span>
        </div>
        <div class="purpose">
            发票信息
            <span>不开发票</span>
            <img class="u196" src="@static/mall/special/u196.png"/>
        </div>

        <div class="fabulous">
            <p>应付金额&nbsp;&nbsp;&nbsp;<span>￥180.00</span></p>
            <button @click="submitWay()">提交订单</button>
        </div>
    </section>
</template>

<script>
import popularityHot from "./popularityHot"
export default {
    name: "fillOrder",
    components: { popularityHot },
    data() {
        return {
            integral_active: false
        }
    },
    methods: {
        submitWay() {
            this.$router.push({
                path: "/payOrder"
            });
        },
        addressWay() {
            this.$router.push({
                path: "/address"
            });
        }
    }
}
</script>

<<style lang="less" scoped>
#fillOrder {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 67px 0;
    box-sizing: border-box;
    .atmosphere {
        width: 100%;
        height: 100px;
        background: #fff;
        position: relative;
        .cartoon {
            font-size: 13px;
            position: absolute;
            left: 45px;
            top: 18px
        }
        .mars {
            font-size: 13px;
            position: absolute;
            left: 49px;
            top: 54px;
        }
        .u2279 {
            width: 13px;
            height: 19px;
            position: absolute;
            left: 25px;
            top: 52px;
        }
        .u196 {
            height: 20px;
            position: absolute;
            right: 20px;
            top: 42px;
        }
        button {
            width: 52px;
            height: 24px;
            font-size: 13px;
            text-align: center;
            line-height: 22px;
            border: 1px solid @color_hong;
            color: @color_hong;
            border-radius: 5px;
            position: absolute;
            left: 186px;
            top: 16px;
        }
        .u448 {
            width: 100%;
            height: 4px;
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
    }
    .cosplay() {
        width: 100%;
        height: 45px;
        padding: 0 0 0 20px;
        box-sizing: border-box;
        text-align: left;
        line-height: 45px;
        background: #fff;
        border-bottom: 1px solid @color_edge;
        overflow: hidden;
        .u196 {
            height: 20px;
            position: absolute;
            right: 20px;
            top: 12px;
        }
    }
    .sky() {
        font-size: 13px;
        color: @color_huise;
        float: right;
        margin-right: 20px;
    }
    .jupiter {
        .cosplay();
        margin-top: 20px;
        border-top: 1px solid @color_edge;
    }
    .saturn, .purpose {
        .cosplay();
        margin-top: 12px;
        position: relative;
        border-top: 1px solid @color_edge;
        span {
            .sky();
            margin-right: 42px;
        }
    }
    .venus {
        .cosplay();
        position: relative;
        .mercury {
            font-size: 13px;
            color: @color_huise;
            position: absolute;
            left: 118px;
            top: 0px;
        }
        .honey {
            position: absolute;
            right: 15px;
            top: 10px;
        }
    }
    .rainbow {
        .cosplay();
        border-top: 1px solid @color_edge;
        margin-top: 12px;
        span {
            .sky();
        }
    }
    .summer, .bean {
        .cosplay();
        position: relative;
        div {
            padding: 0px 10px;
            box-sizing: border-box;
            text-align: center;
            line-height: 26px;
            color: @color_hong;
            background: url("~@static/mall/order/u500.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            right: 77px;
            top: 9px;
        }
        span {
            .sky();
        }
    }
    .comic, .magic {
        .cosplay();
        span {
            .sky();
        }
    }
    .fabulous {
        width: 100%;
        height: 55px;
        background: #fff;
        border-top: 1px solid @color_edge;
        position: fixed;
        left: 0px;
        bottom: 0px;
        p {
            font-size: 14px;
            position: absolute;
            left: 20px;
            top: 18px;
            span {
                color: @color_hong;
            }
        }
        button {
            width: 115px;
            height: 100%;
            float: right;
            background: @color_lv;
            font-size: 14px;
            text-align: center;
            line-height: 55px;
            color: #fff;
        }
    }
}
</style>



