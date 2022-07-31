<template>
    <section id="popularityHot">
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list">
                    <div class="shang-xin">4色可选</div>
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                    <span class="summer">银色星芒刺绣网纱底裤</span>
                    <span class="honey">薄如蝉翼，丝滑如肌肤</span>
                    <span class="rainbow">￥99</span>
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
                height: 132px;
                position: relative;
                .shang-xin {
                    width: 60px;
                    height: 24px;
                    text-align: center;
                    line-height: 22px;
                    color: #FDB984;
                    border: 1px solid #FDB984;
                    border-radius: 4px;
                    font-size: 13px;
                    position: absolute;
                    right: 50px;
                    bottom: 25px;
                }
                .shang-pin {
                    width: 100px;
                    height: 82px;
                    background: @color_qianqing;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 45px;
                    top: 24px;
                    .u88 {
                        width: 52px;
                        height: 39px;
                    }
                }
                .summer {
                    font-size: 13px;
                    position: absolute;
                    left: 160px;
                    top: 27px;
                }
                .honey {
                    font-size: 12px;
                    color: @color_huise;
                    position: absolute;
                    left: 160px;
                    top: 57px;
                }
                .rainbow {
                    font-size: 13px;
                    color: #FB051B;
                    position: absolute;
                    left: 160px;
                    bottom: 30px;
                }
            }
            li:last-child {
                border-bottom: none;
            }
        }
    }
}
</style>

