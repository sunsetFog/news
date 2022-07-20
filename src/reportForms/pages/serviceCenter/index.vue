<template>
    <section id="serviceCenter">
        <headDesign title="服务中心"></headDesign>
        <div class="atmosphere">
            <div>
                <img class="u2707" src="@static/mall/serviceCenter/u2707.png"/>
                <p>在线客服</p>
            </div>
            <div>
                <img class="u2714" src="@static/mall/serviceCenter/u2714.png"/>
                <p>客服热线</p>
            </div>
        </div>

        <div class="venus">
            问题分类
        </div>
        <div :class="{'cartoon': true, 'mercury': index == 0}" v-for="(item,index) in rainbow_list" @click="problemWay(item)">
            <img class="u2722" src="@static/mall/serviceCenter/u2722.png"/>
            <label>{{item.title}}</label>
            <img class="u2637" src="@static/mall/order/u2637.png"/>
        </div>
    </section>
</template>

<script>
export default {
    name: "serviceCenter",
    data() {
        return {
            rainbow_list: [
                { title: '常见问题' },
                { title: '配送问题' },
                { title: '售后问题' },
                { title: '优惠问题' },
                { title: '秒杀问题' },
                { title: '支付问题' },
                { title: '积分问题' },
                { title: '会员问题' },
                { title: '其他问题' }
            ]
        }
    },
    methods: {
        problemWay(item) {
            this.$router.push({
                path: "/problem?title=" + item.title
            })
        }
    }
}
</script>

<style lang="less" scoped>
#serviceCenter {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 60px 0 0 0;
    box-sizing: border-box;
    .atmosphere {
        width: 100%;
        height: 100px;
        background: #fff;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        div {
            width: 50%;
            height: 100%;
            float: left;
            position: relative;
        }
        .mars() {
            width: 45px;
            position: absolute;
            left: 71.25px;
            top: 16px;
        }
        .jupiter() {
            width: 100%;
            padding: 5px 0 5px 0;
            box-sizing: border-box;
            font-size: 13px;
            text-align: center;
            position: absolute;
            left: 0px;
            top: 62px;
        }
        div:nth-of-type(1) {
            border-right: 1px solid @color_edge;
            .u2707 {
                .mars();
            }
            p {
               .jupiter(); 
            }
        }
        div:nth-of-type(2) {
            .u2714 {
                .mars();
            }
            p {
                .jupiter();
            }
        }
    }
    .venus {
        width: 100%;
        height: 42px;
        text-align: left;
        line-height: 42px;
        margin-top: 15px;
        padding-left: 20px;
        box-sizing: border-box;
        font-size: 13px;
    }
    .cartoon {
        width: 100%;
        height: 42px;
        background: #fff;
        border-bottom: 1px solid @color_edge;
        position: relative;
        .u2722 {
            height: 24px;
            position: absolute;
            left: 20px;
            top: 8px;
        }
        label {
            font-size: 13px;
            position: absolute;
            left: 66px;
            top: 10px;
        }
        .u2637 {
            height: 18px;
            position: absolute;
            right: 20px;
            top: 11px;
        }
    }
    .mercury {
        border-top: 1px solid @color_edge;
    }
}
</style>

