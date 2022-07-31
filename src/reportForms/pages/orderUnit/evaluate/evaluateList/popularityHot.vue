<template>
    <section id="popularityHot">
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list">
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                    <span class="summer">银色星芒刺绣网纱底裤</span>
                    <span class="honey">肤色/M</span>
                    <span class="rainbow">评价可得50积分</span>
                    <button class="mars" @click="addWay">发布评价</button>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "popularityHot",
    data() {
        return {
            venus_list: [
                { title: 'WNF制造商', price: 9.9, icon: '' },
                { title: 'WNF制造商', price: 9.9, icon: '' }
            ]
        }
    },
    methods: {
        addWay() {
            this.$router.push({
                path: "/orderUnit/evaluate/addEvaluate/index"
            });
        }
    }
}
</script>

<style lang="less" scoped>
#popularityHot {
    width: 100%;
    .saturn {
        width: 100%;
        ul {
            width: 100%;
            li {
                width: 100%;
                height: 85px;
                margin: 15px 0;
                background: #fff;
                position: relative;
                border-bottom: 1px solid @color_edge;
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
                    width: 80px;
                    height: 30px;
                    font-size: 13px;
                    color: #fff;
                    text-align: center;
                    line-height: 30px;
                    border-radius: 5px;
                    background: @color_lv;
                    position: absolute;
                    right: 30px;
                    bottom: 17px;
                }
            }
            li:last-child {
                border-bottom: none;
            }
        }
    }
}
</style>

