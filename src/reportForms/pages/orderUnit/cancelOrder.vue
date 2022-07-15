<template>
    <section id="cancelOrder">
        <van-popup
        v-model:show="atmosphere"
        closeable
        position="bottom"
        :style="{ height: '345px' }"
        >
            <div class="title-box">取消订单</div>
            <div class="cartoon">
                取消订单后，本单享有的优惠可能会一并取消，是否继续？
            </div>
            <div class="jupiter">
                请选择取消订单的原因（必选）：
            </div>
            <van-checkbox-group v-model="checked">
            <van-checkbox name="a">配送信息有误</van-checkbox>
            <van-checkbox name="b">发票信息有误</van-checkbox>
            <van-checkbox name="c">忘记使用优惠券、积分等</van-checkbox>
            <van-checkbox name="d">商品买错了</van-checkbox>
            <van-checkbox name="e">重复下单/误下单</van-checkbox>
            </van-checkbox-group>
            <button class="mercury" @click="sureWay">
                确定
            </button>

        </van-popup>
        
    </section>
</template>

<script>
export default {
    name: "cancelOrder",
    data() {
        return {
            atmosphere: false,
            checked: ['a', 'b']
        }
    },
    methods: {
        initWay() {
            this.atmosphere = true;
        },
        sureWay() {
            this.atmosphere = false;
        }
    }
}
</script>

<style lang="less" scoped>
#cancelOrder {
    /deep/.van-popup__close-icon--top-right {
        top: 0.7rem;
    }
    .title-box {
        width: 100%;
        height: 45px;
        text-align: center;
        line-height: 45px;
        font-size: 14px;
        border-bottom: 1px solid @color_edge;
    }
    .cartoon, .jupiter {
        width: 100%;
        height: 40px;
        text-align: left;
        line-height: 40px;
        font-size: 13px;
        padding-left: 20px;
        box-sizing: border-box;
    }
    .jupiter {

    }
    /deep/.van-checkbox-group {
        height: 160px;
        padding-left: 20px;
        box-sizing: border-box;
        .van-checkbox {
            height: 30px;
        }
    }
    .mercury {
        width: 100%;
        height: 40px;
        text-align: center;
        line-height: 40px;
        color: @color_hong;
        font-size: 14px;
        border-top: 1px solid @color_edge;
        margin-top: 18px;
    }
}
</style>

