<template>
    <section id="fabulous">
        <div class="atmosphere">
            <span class="identifier">订单编号：11977240</span>
            <span v-if="tab_active == 1" class="cartoon">等待付款</span>
            <span v-if="tab_active == 2" class="cartoon">等待发货</span>
            <span v-if="tab_active == 3" class="cartoon">交易完成</span>
            <span v-if="tab_active == 4" class="cartoon">交易关闭</span>
        </div>
        <popularityHot></popularityHot>
        <div class="undercurrent">
            <span class="jupiter">应付金额：￥180.00</span>
            <button v-if="tab_active == 1" class="saturn venus" @click="payWay">立即付款</button>
            <button v-if="tab_active == 1" class="saturn" @click="cancelWay">取消订单</button>

            <button v-if="tab_active == 2" class="saturn" @click="receivedWay">确认收货</button>
            <button v-if="tab_active == 2" class="saturn" @click="logisticsWay">查看物流</button>

            <button v-if="tab_active == 3" class="saturn" @click="buyWay">再次购买</button>
            <button v-if="tab_active == 3" class="saturn" @click="evaluateDetails">查看评价</button>
            <button v-if="tab_active == 3" class="saturn" @click="evaluateWay">评价商品</button>

            <button v-if="tab_active == 4" class="saturn" @click="deleteWay">删除订单</button>
            <button v-if="tab_active == 4" class="saturn" @click="buyWay">重新购买</button>
        </div>

        <cancelOrder ref="cancelDom"></cancelOrder>
    </section>
</template>

<script>
import cancelOrder from "./cancelOrder";
import popularityHot from "./popularityHot";
import { Dialog } from 'vant';
import { Toast } from 'vant';
export default {
    name: "fabulous",
    components: { popularityHot, cancelOrder },
    props: {
        tab_active: {
            type: Number,
            default: 0
        }
    },
    methods: {
        cancelWay() {
            this.$refs.cancelDom.initWay()
        },
        payWay() {
            this.$router.push({
                path: "/orderUnit/payOrder/index"
            });
        },
        receivedWay() {
            Dialog.confirm({
            title: '提示',
            message: '是否确认收货',
            })
            .then(() => {
                // on confirm
                Toast.success('已确认收货');
            })
            .catch(() => {
                // on cancel
            });
        },
        logisticsWay() {
            this.$router.push({
                path: "/orderUnit/logistics/index"
            });
        },
        // 跳至购物车
        buyWay() {
            this.$router.push({
                path: "/orderUnit/shoppingCart/index"
            });
        },
        evaluateWay() {
            this.$router.push({
                path: "/orderUnit/evaluate/addEvaluate/index"
            });
        },
        evaluateDetails() {
            this.$router.push({
                path: "/orderUnit/evaluate/evaluateDetails/index"
            });
        },
        deleteWay() {
            Dialog.confirm({
            title: '提示',
            message: '是否删除订单',
            })
            .then(() => {
                // on confirm
                Toast.success('订单删除成功');
            })
            .catch(() => {
                // on cancel
            });
        }
    }
}
</script>

<style lang="less" scoped>
#fabulous {
    width: 100%;
    height: 260px;
    background: #fff;
    margin: 20px 0;
    .atmosphere {
        width: 100%;
        height: 42px;
        line-height: 42px;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        font-size: 13px;
        padding: 0 22px;
        box-sizing: border-box;
        .identifier {
            float: left;
        }
        .cartoon {
            float: right;
            color: @color_hong;
        }
    }
    .undercurrent {
        width: 100%;
        height: 42px;
        line-height: 42px;
        font-size: 13px;
        padding: 0 22px;
        box-sizing: border-box;
        .jupiter {
            float: left;
        }
        .saturn {
            width: 62px;
            height: 28px;
            text-align: center;
            line-height: 28px;
            font-size: 13px;
            color: @color_huise;
            float: right;
            border: 1px solid @color_huise;
            border-radius: 5px;
            margin: 9px 0 0 6px;
        }
        .venus {
            color: @color_hong;
            border: 1px solid @color_hong;
        }
    }
}
</style>


