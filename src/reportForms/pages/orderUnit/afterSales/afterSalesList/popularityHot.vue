<template>
    <section id="popularityHot">
        <div class="atmosphere" v-if="tab_active == 0">
            <span>订单编号：11977240</span>
            <span>下单时间：2017-05-01 16:00</span>
        </div>
        <div class="atmosphere" v-if="tab_active == 1">
            <span>服务单号：11977240</span>
            <span>申请时间：2017-05-01 16:00</span>
        </div>
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list">
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                    <span class="summer">银色星芒刺绣网纱底裤</span>
                    <span class="honey">肤色/M</span>
                    <span class="rainbow">￥99</span>
                    <span class="mars">x1</span>
                    <div class="scenery" v-if="index == 0 && tab_active == 0">
                        <button class="fabulous" @click="applyWay()">申请退货</button>
                    </div>
                    <div class="scenery" v-if="index == 1 && tab_active == 0">
                        <img class="u3350" src="@static/mall/afterSales/u3350.png"/>
                        <span class="magic">该商品已申请过售后服务</span>
                        <button class="fabulous comic">申请退货</button>
                    </div>
                    <div class="scenery" v-if="tab_active == 1">
                        <img class="u3350" src="@static/mall/afterSales/u3390.png"/>
                        <span class="magic">已完成</span>
                        <img class="u2724" src="@static/mall/afterSales/u2724.png" @click="detailsWay"/>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "popularityHot",
    props: {
        tab_active: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            venus_list: [
                { title: 'WNF制造商', price: 9.9, icon: '' },
                { title: 'WNF制造商', price: 9.9, icon: '' }
            ]
        }
    },
    methods: {
        applyWay() {
            this.$router.push({
                path: "/orderUnit/afterSales/applyReturn/index"
            })
        },
        detailsWay() {
            this.$router.push({
                path: "/orderUnit/afterSales/applyReturnDetails/index"
            })
        }
    }
}
</script>

<style lang="less" scoped>
#popularityHot {
    width: 100%;
    background: #fff;
    padding: 0 20px 10px 20px;
    box-sizing: border-box;
    margin: 15px 0;
    .atmosphere {
        width: 100%;
        height: 42px;
        position: relative;
        span {
            font-size: 13px;
        }
        span:nth-of-type(1) {
            position: absolute;
            left: 0px;
            top: 13px;
        }
        span:nth-of-type(2) {
            position: absolute;
            left: 150px;
            top: 13px;
        }
    }
    .saturn {
        width: 100%;
        ul {
            width: 100%;
            li {
                width: 100%;
                height: 130px;
                position: relative;
                border: 1px solid @color_edge;
                margin-bottom: 20px;
                .shang-pin {
                    width: 80px;
                    height: 68px;
                    background: @color_qianqing;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 20px;
                    top: 8px;
                    .u88 {
                        width: 52px;
                        height: 39px;
                    }
                }
                .summer {
                    font-size: 13px;
                    position: absolute;
                    left: 111px;
                    top: 10px;
                }
                .honey {
                    font-size: 12px;
                    color: @color_huise;
                    position: absolute;
                    left: 111px;
                    top: 35px;
                }
                .rainbow {
                    font-size: 12px;
                    color: @color_huise;
                    position: absolute;
                    left: 111px;
                    top: 59px;
                }
                .mars {
                    font-size: 13px;
                    color: @color_lv;
                    position: absolute;
                    right: 38px;
                    top: 20px;
                }
                .scenery {
                    width: 100%;
                    height: 45px;
                    border-top: 1px solid @color_edge;
                    position: absolute;
                    left: 0px;
                    bottom: 0px;
                    .fabulous {
                        width: 80px;
                        height: 28px;
                        text-align: center;
                        line-height: 26px;
                        color: @color_hong;
                        border: 1px solid @color_hong;
                        border-radius: 5px;
                        position: absolute;
                        right: 10px;
                        top: 8px;
                    }
                    .comic {
                        color: @color_huise;
                        border: 1px solid @color_huise;
                    }
                    .u3350 {
                        height: 23px;
                        position: absolute;
                        left: 20px;
                        top: 10px;
                    }
                    .magic {
                        font-size: 13px;
                        position: absolute;
                        left: 50px;
                        top: 12px;
                    }
                    .u2724 {
                        height: 21px;
                        position: absolute;
                        right: 20px;
                        top: 11px;
                    }
                }
            }
            li:last-child {
                margin-bottom: 0px;
            }
        }
    }
}
</style>

