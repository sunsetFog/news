<template>
    <section id="brandSupplier">
        <titleBox with_name="品牌制造商直供"></titleBox>
        <div class="saturn">
            <ul>
                <li v-for="(item,index) in venus_list">
                    <span>{{item.title}}</span>
                    <span>{{item.price}}元起</span>
                    <div class="shang-xin">上新</div>
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
import titleBox from "./titleBox"
export default {
    name: "brandSupplier",
    components: { titleBox },
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
#brandSupplier {
    width: 100%;
    height: 410px;
    border-top: 1px solid @color_edge;
    border-bottom: 1px solid @color_edge;
    margin-top: 15px;
    background: #fff;
    .saturn {
        width: 100%;
        height: 370px;
        ul {
            width: 100%;
            li {
                width: 150px;
                height: 155px;
                position: relative;
                float: left;
                margin: 12px 18.7px;
                span:nth-of-type(1) {
                    font-size: 14px;
                    position: absolute;
                    left: 0px;
                    top: 0px;
                }
                span:nth-of-type(2) {
                    font-size: 13px;
                    color: @color_huise;
                    position: absolute;
                    left: 0px;
                    top: 25px;
                }
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
                    top: 12px;
                }
                .shang-pin {
                    width: 100%;
                    height: 105px;
                    background: @color_qianqing;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 0px;
                    bottom: 0px;
                    .u88 {
                        width: 52px;
                        height: 46px;
                    }
                }
            }
        }
    }
}
</style>

