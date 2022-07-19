<template>
    <section id="popularityHot">
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list" @click="appleWay">
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                    <span class="summer" v-if="tab_active == 0">银色星芒刺绣网纱底裤</span>
                    <span class="honey" v-if="tab_active == 0">薄如蝉翼，丝滑如肌肤</span>
                    <span class="summer" v-if="tab_active == 1">5个给春天的生活新提案</span>
                    <span class="honey" v-if="tab_active == 1">餐厨起居洗护好物</span>
                    <span class="summer" v-if="tab_active == 2">孤独美食家的深夜食堂</span>
                    <span class="honey" v-if="tab_active == 2">Windir发起该会话</span>
                    <span class="rainbow" v-if="tab_active == 0">￥99</span>
                    <div class="scenery" v-if="tab_active == 1">
                        <img class="u3268" src="@static/mall/collection/u3268.png"/>
                        <img class="u3271" src="@static/mall/collection/u3271.png"/>
                        <img class="u3274" src="@static/mall/collection/u3274.png"/>
                        <span>1000</span>
                        <span>10000</span>
                        <span>10</span>
                    </div>
                    <div class="scenery" v-if="tab_active == 2">
                        <img class="u3268" src="@static/mall/collection/u3271.png"/>
                        <img class="u3271" src="@static/mall/collection/u3268.png"/>
                        <img class="u3274" src="@static/mall/collection/u3291.png"/>
                        <span>10000</span>
                        <span>1000</span>
                        <span>10</span>
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
        appleWay() {
            if(this.tab_active == 0) {
                this.$router.push({
                    path: "/productDetails"
                })
            } else if(this.tab_active == 1) {
                this.$router.push({
                    path: "/subjectDetails"
                })
            } else if(this.tab_active == 2) {
                this.$router.push({
                    path: "/topicDetails"
                })
            }
        }
    }
}
</script>

<style lang="less" scoped>
#popularityHot {
    width: 100%;
    background: #fff;
    .saturn {
        width: 100%;
        ul {
            width: 100%;
            li {
                width: 100%;
                height: 120px;
                position: relative;
                border-bottom: 1px solid @color_edge;
                .shang-pin {
                    width: 100px;
                    height: 80px;
                    background: @color_qianqing;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 20px;
                    top: 20px;
                    .u88 {
                        width: 52px;
                        height: 39px;
                    }
                }
                .summer {
                    font-size: 13px;
                    position: absolute;
                    left: 140px;
                    top: 20px;
                }
                .honey {
                    font-size: 12px;
                    color: @color_huise;
                    position: absolute;
                    left: 140px;
                    top: 51px;
                }
                .rainbow {
                    font-size: 13px;
                    color: #FB051B;
                    position: absolute;
                    left: 140px;
                    top: 80px;
                }
                .scenery {
                    width: 220px;
                    height: 30px;
                    -border: 1px solid red;
                    position: absolute;
                    left: 140px;
                    top: 75px;
                    .u3268 {
                        width: 23px;
                        height: 20px;
                        position: absolute;
                        left: 0px;
                        top: 4px;
                    }
                    .u3271 {
                        width: 23px;
                        height: 20px;
                        position: absolute;
                        left: 73px;
                        top: 4px;
                    }
                    .u3274 {
                        width: 23px;
                        height: 20px;
                        position: absolute;
                        left: 154px;
                        top: 4px;
                    }
                    span {
                        font-size: 13px;
                        color: @color_huise;
                        position: absolute;
                        top: 6px;
                    }
                    span:nth-of-type(1) {
                        left: 29px;
                    }
                    span:nth-of-type(2) {
                        left: 102px;
                    }
                    span:nth-of-type(3) {
                        left: 181px;
                    }
                }
            }
            li:first-child {
                border-top: 1px solid @color_edge;
            }
        }
    }
}
</style>

