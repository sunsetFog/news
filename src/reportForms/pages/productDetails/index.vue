<template>
    <section id="productDetails">
        <headDesign title="商品信息">
            <img class="u1032" src="@static/mall/evaluate/u1032.png"/>
            <img class="u1033" src="@static/mall/evaluate/u1033.png"/>
        </headDesign>
        <van-tabs v-model:active="tab_active">
            <van-tab title="商品介绍">
                <introduction></introduction>
            </van-tab>
            <van-tab title="图文详情">
                图文详情
            </van-tab>
            <van-tab title="商品评价">
                商品评价
            </van-tab>
            <van-tab title="相关专题">
                相关专题
            </van-tab>
        </van-tabs>
        <div class="rainbow">
            <div class="specialServices">
                <ul>
                    <li @click="appleWay(0)">
                        <div>
                            <img src="@static/mall/productDetails/u1535.png"/>
                        </div>
                        <span>客服</span>
                    </li>
                    <li @click="appleWay(1)">
                        <div>
                            <img src="@static/mall/productDetails/u1537.png"/>
                        </div>
                        <span>购物车</span>
                    </li>
                </ul>
            </div>
            <div class="summer">
                <button @click="carWay">加入购物车</button>
                <button @click="buyWay">立即购买</button>
            </div>
        </div>
    </section>
</template>

<script>
import { Toast } from 'vant';
import introduction from './introduction'
export default {
    name: "productDetails",
    components: { introduction },
    data() {
        return {
            tab_active: 0
        }
    },
    methods: {
        appleWay(index) {
            if(index == 0) {
                
            } else if(index == 1) {
                this.$router.push({
                    path: '/shoppingCart'
                });
            }
        },
        carWay() {
            Toast.success('成功添加到购物车');
        },
        buyWay() {
            this.$router.push({
                path: '/fillOrder'
            });
        }
    }
}
</script>

<style lang="less">
#productDetails {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 65px 0;
    box-sizing: border-box;
    .u1032 {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .u1033 {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 55px;
        top: 10px;
    }
    .rainbow {
        width: 100%;
        height: 50px;
        background: #fff;
        border-top: 1px solid @color_edge;
        position: fixed;
        left: 0px;
        bottom: 0px;
        .specialServices {
            width: 45%;
            height: 100%;
            float: left;
            ul {
                width: 100%;
                height: 100%;
                display: flex;
                justify-content: space-around;
                li {
                    width: 16%;
                    height: 100%;
                    float: left;
                    div {
                        width: 100%;
                        height: 30px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            width: 22px;
                            height: 22px;
                        }
                    }
                    span {
                        width: 100%;
                        height: 15px;
                        text-align: center;
                        line-height: 15px;
                        font-size: 13px;
                        display: inline-block;
                    }
                }
            }
        }
        .summer {
            width: 55%;
            height: 100%;
            float: right;
            button {
                width: 50%;
                height: 100%;
                line-height: 50px;
                float: left;
                font-size: 13px;
            }
            button:nth-of-type(1) {
                border-right: 1px solid @color_edge;
                color: #fff;
                background: @color_lv;
            }
            button:nth-of-type(2) {
                color: #fff;
                background: #FD994B;
            }
        }
    }
}
</style>


