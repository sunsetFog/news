<template>
    <section id="payOrder">
        <headDesign title="支付订单"></headDesign>
        <div class="mercury">
            <div class="venus">
                <img src="@static/mall/order/u550.png"/>
            </div>
            <p>订单提交成功</p>
            <p>请在00小时59分59秒内完成支付</p>
            <p>支付金额: <span>￥180.00</span></p>
        </div>
        <div class="cosplay">支付方式</div>
        <div class="rainbow-apt" v-for="(item,index) in mercury_list" :style="{ marginTop: item.margin, borderTop: item.borderTop }" @click="pathWay(item,index)">
            <img :src="item.icon"/>
            <span class="venus">{{item.title}}</span>
            <img src="@static/mall/customer/u286.png"/>
        </div>
    </section>
</template>

<script>
export default {
    name: "payOrder",
    data() {
        let haha = '1px solid #D5D5D5'
        return {
            mercury_list: [
                { title: '支付宝支付', icon: 'k12', note: '', margin: '', borderTop: '', path: '/orderUnit/paySuccess/index'},
                { title: '微信支付', icon: 'k13', note: 10, margin: '', borderTop: '', path: '/orderUnit/paySuccess/index'},
                { title: '银联支付', icon: 'k14', note: 10, margin: '', borderTop: '', path: '/orderUnit/paySuccess/index'},
                { title: 'Apple Pay支付', icon: 'k15', note: '', margin: '', borderTop: '', path: '/orderUnit/paySuccess/index'}
            ]
        }
    },
    created() {
        for (let index = 0; index < this.mercury_list.length; index++) {
            let item = this.mercury_list[index];
            item.icon = require('@static/mall/order/' + item.icon + '.png');
        }
    },
    methods: {
        pathWay(item, index) {
            this.$router.push({
                path: item.path
            });
        }
    }
}
</script>

<style lang="less" scoped>
#payOrder {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .mercury {
        width: 100%;
        height: 245px;
        background: #fff;
        border-bottom: 1px solid @color_edge;
        padding: 35px 0 0 0;
        box-sizing: border-box;
        .venus {
            width: 100%;
            height: 92px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                height: 100%;
            }
        }
        p {
            width: 100%;
            text-align: center;
            color: @color_huise;
            margin: 10px 0;
        }
        p:nth-of-type(1) {
            font-size: 16px;
        }
        p:nth-of-type(2) {
            font-size: 13px;
        }
        p:nth-of-type(3) {
            font-size: 13px;
            span {
                color: @color_hong;
            }
        }
    }
    .cosplay {
        width: 100%;
        height: 48px;
        padding-left: 20px;
        box-sizing: border-box;
        line-height: 48px;
        font-size: 13px;
        color: @color_huise;
        background: #fff;
        text-align: left;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        margin-top: 20px;
    }
    .rainbow-apt {
        width: 100%;
        height: 48px;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        position: relative;
        img:nth-of-type(1) {
            width: 28px;
            height: 28px;
            position: absolute;
            left: 20px;
            top: 9px;
        }
        .venus {
            font-size: 14px;
            position: absolute;
            left: 58px;
            top: 12px;
        }
        img:nth-of-type(2) {
            height: 20px;
            position: absolute;
            right: 14px;
            top: 13px;
        }
    }
}
</style>


