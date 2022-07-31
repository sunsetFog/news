<template>
    <section id="evaluateList">
        <headDesign title="我的评价">
            <img class="summer" src="@static/mall/memberCenter/u2518.png"/>
        </headDesign>
        <van-tabs v-model:active="tab_active">
            <van-tab title="待评价">
                <popularityHot></popularityHot>
            </van-tab>
            <van-tab title="已评价">
                <div class="atmosphere" @click="detailWay">
                    <div class="cartoon">
                        <img class="u1037" src="@static/mall/evaluate/u1037.png"/>
                        <span>Windir</span>
                        <span>学生/深圳</span>
                    </div>
                    <div class="mars">
                        <div v-for="item in 3">
                            <img src="@static/mall/homePage/u40.png"/>
                        </div>
                        <button>9P</button>
                    </div>
                    <div class="cosplay">
                        宝贝是否满足了你的期待？说说你的使用心得，分享给其他想购买的朋友吧。
                    </div>
                    <div class="undercurrent">
                        <div class="rainbow">
                            <div>
                                <img src="@static/mall/homePage/u88.png"/>
                            </div>
                            <span>银色星芒刺绣网纱底裤</span>
                            <span>肤色/M</span>
                            <span>已好评，共获得50积分</span>
                        </div>
                    </div>
                    <div class="mercury">
                        <span>一周前</span>
                        <span>1000</span>
                        <span>100</span>
                        <img class="u1678" src="@static/mall/evaluate/u1678.png"/>
                        <img class="u1676" src="@static/mall/evaluate/u1676.png"/>
                    </div>
                </div>
            </van-tab>
        </van-tabs>
    </section>
</template>

<script>
import popularityHot from "./popularityHot"
export default {
    name: "evaluateList",
    components: { popularityHot },
    data() {
        return {
            tab_active: 0
        }
    },
    methods: {
        detailWay() {
            this.$router.push({
                path: "/orderUnit/evaluate/evaluateDetails/index"
            });
        }
    }
}
</script>

<style lang="less" scoped>
#evaluateList {
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
    .atmosphere {
        width: 100%;
        background: #fff;
        margin: 15px 0px;
        .cartoon {
            width: 100%;
            height: 88px;
            border-top: 1px @color_edge;
            position: relative;
            .u1037 {
                width: 48px;
                height: 48px;
                position: absolute;
                left: 28px;
                top: 20px;
            }
            span:nth-of-type(1) {
                font-size: 14px;
                position: absolute;
                left: 100px;
                top: 25px;
            }
            span:nth-of-type(2) {
                font-size: 12px;
                position: absolute;
                left: 100px;
                top: 50px;
            }
        }
        .mars {
            width: 100%;
            height: 100px;
            display: flex;
            justify-content: space-around;
            position: relative;
            div {
                width: 100px;
                height: 100%;
                float: left;
                display: flex;
                align-items: center;
                justify-content: center;
                background: @color_qianqing;
                img {
                    width: 47px;
                    height: 33px;
                }
            }
            button {
                width: 40px;
                height: 20px;
                text-align: center;
                line-height: 20px;
                background: #737376;
                color: #fff;
                border-radius: 20px;
                position: absolute;
                right: 15px;
                bottom: 0px;
            }
        }
        .cosplay {
            width: 100%;
            padding: 15px 20px;
            box-sizing: border-box;
            background: #fff;
            text-align: left;
            /*多行：css文字溢出隐藏为三个点...*/
            overflow: hidden;
            text-overflow: ellipsis;
            display: -webkit-box;// 流体盒模型
            -webkit-line-clamp: 2;// 设置显示的行数
            -webkit-box-orient: vertical;// 垂直
        }
        .undercurrent {
            width: 100%;
            background: #fff;
            padding: 0 20px 15px 20px;
            box-sizing: border-box;
            .rainbow {
                width: 100%;
                height: 82px;
                background: @color_qianlan;
                position: relative;
                div {
                    width: 100px;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: @color_qianqing;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                    img {
                        width: 48px;
                        height: 38px;
                    }
                }
                span {
                    font-size: 13px;
                    position: absolute;
                    left: 113px;
                }
                span:nth-of-type(1) {
                    top: 3px;
                }
                span:nth-of-type(2) {
                    color: @color_huise;
                    top: 32px;
                }
                span:nth-of-type(3) {
                    color: @color_huise;
                    top: 61px;
                }
            }
        }
        .mercury {
            width: 100%;
            height: 42px;
            background: #fff;
            border-top: 1px solid @color_edge;
            border-bottom: 1px solid @color_edge;
            position: relative;
            span {
                font-size: 13px;
                color: @color_huise;
                position: absolute;
            }
            span:nth-of-type(1) {
                left: 20px;
                top: 11px;
            }
            span:nth-of-type(2) {
                left: 232px;
                top: 11px;
            }
            span:nth-of-type(3) {
                left: 322px;
                top: 11px;
            }
            .u1678 {
                height: 20px;
                position: absolute;
                left: 210px;
                top: 8px;
            }
            .u1676 {
                height: 22px;
                position: absolute;
                left: 293px;
                top: 8px;
            }
        }
    }
}
</style>

