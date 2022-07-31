<template>
    <section id="fresh">
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list">
                    <div class="shang-xin">上新</div>
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                    <span class="summer">银色星芒刺绣网纱底裤</span>
                    <span class="honey">薄如蝉翼，丝滑如肌肤</span>
                    <p class="rainbow">￥99</p>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "fresh",
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
#fresh {
    width: 100%;
    background: #fff;
    .saturn {
        width: 100%;
        height: 210px;
        ul {
            width: 100%;
            li {
                width: 145px;
                height: 185px;
                position: relative;
                float: left;
                margin: 12.5px 21.2px;
                .shang-xin {
                    width: 45px;
                    height: 32px;
                    text-align: center;
                    line-height: 26px;
                    color: #fff;
                    font-size: 13px;
                    background: url("~@static/mall/homePage/u89.png");
                    background-size: 100% 100%;
                    background-repeat: no-repeat;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    z-index: 2;
                }
                .shang-pin {
                    width: 100px;
                    height: 82px;
                    background: @color_qianqing;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 22.5px;
                    top: 29px;
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
                    text-align: center;
                    font-size: 13px;
                    color: #FB051B;
                    position: absolute;
                    left: 0px;
                    bottom: 5px;
                }
            }
        }
    }
}
</style>


