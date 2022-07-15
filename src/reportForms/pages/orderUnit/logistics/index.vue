<template>
    <section id="logistics">
        <headDesign title="订单跟踪"></headDesign>
        <div class="scenery">
            <div class="shang-pin">
                <img class="u88" src="@static/mall/homePage/u88.png"/>
            </div>
            <button>2件商品</button>
            <span>配送企业：顺丰快递</span>
            <span>快递单号：2765302256</span>
            <span>联系电话：95338</span>
        </div>
        <van-steps :active="step_active" active-icon="success" active-color="#2AB795" style="text-align: left;">
            <van-step>已发货</van-step>
            <van-step>运输中</van-step>
            <van-step>派件中</van-step>
            <van-step>已签收</van-step>
        </van-steps>
        <div class="honey">
            <span>北京市</span>
            <span>深圳市</span>
        </div>
        <div class="cartoon">物流详情</div>
        <van-steps direction="vertical" :active="step_status" style="text-align: left;">
            <van-step>
                <p class="jupiter">订单已签收，期待再次为您服务</p>
                <p class="saturn">2016-07-12 12:40</p>
            </van-step>
            <van-step>
                <p class="jupiter">到达目的地网点广东深圳公司，快件将很快进行派送</p>
                <p class="saturn">2016-07-11 10:00</p>
            </van-step>
            <van-step>
                <p class="jupiter">在广东深圳公司进行发出扫描</p>
                <p class="saturn">2016-07-10 09:30</p>
            </van-step>
            <van-step>
                <p class="jupiter">在分拨中心广东深圳公司进行卸车扫描</p>
                <p class="saturn">2016-07-10 09:30</p>
            </van-step>
            <van-step>
                <p class="jupiter">在北京市进行下级地点扫描</p>
                <p class="saturn">2016-07-10 09:30</p>
            </van-step>
            <van-step>
                <p class="jupiter">订单付款成功</p>
                <p class="saturn">2016-07-10 09:30</p>
            </van-step>
            <van-step>
                <p class="jupiter">订单已提交，等待付款</p>
                <p class="saturn">2016-07-10 09:30</p>
            </van-step>
        </van-steps>
    </section>
</template>

<script>
export default {
    name: "logistics",
    data() {
        return {
            step_active: 1,
            step_status: 1
        }
    }
}
</script>

<<style lang="less" scoped>
#logistics {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .scenery {
        width: 100%;
        height: 130px;
        background: @color_lv;
        position: relative;
        .shang-pin {
            width: 80px;
            height: 52px;
            background: @color_qianqing;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 32px;
            top: 24px;
            .u88 {
                width: 32px;
                height: 22px;
            }
        }
        button {
            width: 80px;
            height: 30px;
            text-align: center;
            line-height: 30px;
            background: #666666;
            color: #fff;
            position: absolute;
            left: 32px;
            top: 76px;
        }
        span {
            color: #fff;
            font-size: 13px;
            position: absolute;
            left: 157px;
        }
        span:nth-of-type(1) {
            top: 28px;
        }
        span:nth-of-type(2) {
            top: 58px;
        }
        span:nth-of-type(3) {
            top: 86px;
        }
    }
    .honey {
        width: 100%;
        height: 60px;
        background: #fff;
        font-size: 13px;
        padding: 15px 10px 0 10px;
        span:nth-of-type(1) {
            float: left;
        }
        span:nth-of-type(2) {
            float: right;
        }
    }
    .cartoon {
        width: 100%;
        height: 42px;
        line-height: 42px;
        margin-top: 12px;
        padding-left: 20px;
        box-sizing: border-box;
        text-align: left;
        background: #fff;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        font-size: 13px;
    }
    .jupiter {
        font-size: 13px;
    }
    .saturn {
        font-size: 12px;
        color: @color_huise;
    }
}
</style>


