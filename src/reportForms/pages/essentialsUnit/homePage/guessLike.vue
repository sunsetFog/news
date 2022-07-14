<template>
    <section id="guessLike">
        <div class="fabulous">猜你喜欢</div>
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list">
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
    name: "guessLike",
    data() {
        return {
            venus_list: [
                { title: 'WNF制造商', price: 9.9, icon: '' },
                { title: 'WNF制造商', price: 9.9, icon: '' },
                { title: 'WNF制造商', price: 9.9, icon: '' },
                { title: 'WNF制造商', price: 9.9, icon: '' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
#guessLike {
    width: 100%;
    height: 405px;
    border-top: 1px solid @color_edge;
    border-bottom: 1px solid @color_edge;
    margin-top: 15px;
    background: #fff;
    .fabulous {
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 60px;
        font-size: 14px;
    }
    .saturn {
        width: 100%;
        height: 355px;
        ul {
            width: 100%;
            li {
                width: 145px;
                height: 155px;
                position: relative;
                float: left;
                margin: 10px 21.2px;
                .shang-pin {
                    width: 100px;
                    height: 82px;
                    background: @color_qianqing;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 20px;
                    top: 0px;
                    .u88 {
                        width: 52px;
                        height: 39px;
                    }
                }
                .summer {
                    font-size: 13px;
                    position: absolute;
                    left: 0px;
                    bottom: 48px;
                }
                .honey {
                    font-size: 12px;
                    color: @color_huise;
                    position: absolute;
                    left: 0px;
                    bottom: 27px;
                }
                .rainbow {
                    width: 100%;
                    height: 20px;
                    text-align: center;
                    line-height: 20px;
                    display: inline-block;
                    font-size: 13px;
                    color: #FB051B;
                    position: absolute;
                    left: 0px;
                    bottom: 0px;
                }
            }
        }
    }
}
</style>


