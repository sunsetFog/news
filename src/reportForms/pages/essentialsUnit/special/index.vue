<template>
    <section id="special">
        <specialServices></specialServices>
        <div class="cartoon" v-for="(item,index) in venus_list">
            <div class="title-box">
                <div>
                    <img src="@static/mall/homePage/u88.png"/>
                </div>
                <span>{{item.title}}</span>
            </div>
            <div class="mercury">
                <div class="cosplay">
                    <img src="@static/mall/homePage/u88.png"/>
                </div>
                <button>热门</button>
                <span class="summer">五个春天的生活新提案</span>
                <span class="honey">餐厨起居好物</span>
                <span class="rainbow">￥99元起</span>
            </div>
            <div class="jupiter">
                <img class="u193" src="@static/mall/special/u193.png"/>
                <img class="u194" src="@static/mall/special/u194.png"/>
                <img class="u195" src="@static/mall/special/u195.png"/>
                <img class="u196" src="@static/mall/special/u196.png"/>
                <span class="box1">100</span>
                <span class="box2">10000</span>
                <span class="box3">200</span>
            </div>
        </div>
    </section>
</template>

<script>
import specialServices from "./specialServices"
export default {
    name: "special",
    components: { specialServices },
    data() {
        return {
            venus_list: [
                { title: '全部专题' },
                { title: '服装专题' },
                { title: '餐厨专题' },
                { title: '配件专题' }
            ]
        }
    }
}
</script>

<style lang="less" scoped>
#special {
    width: 100%;
    background: @color_qianlan;
    .cartoon {
        width: 100%;
        height: 285px;
        margin: 20px 0px;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        .title-box {
            width: 100%;
            height: 50px;
            position: relative;
            div {
                width: 36px;
                height: 36px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: @color_qianqing;
                position: absolute;
                left: 15px;
                top: 7px;
                img {
                    width: 18px;
                    height: 17px;
                }
            }
            span {
                font-size: 13px;
                position: absolute;
                left: 60px;
                top: 15px;
            }
        }
        .mercury {
            width: 100%;
            height: 192px;
            position: relative;
            .cosplay {
                width: 100%;
                height: 120px;
                display: flex;
                align-items: center;
                justify-content: center;
                background: @color_qianqing;
                position: absolute;
                left: 0px;
                top: 0px;
                img {
                    width: 75px;
                    height: 56px;
                }
            }
            button {
                width: 56px;
                height: 26px;
                background: #FD994B;
                color: #fff;
                text-align: center;
                line-height: 26px;
                border-radius: 10px;
                position: absolute;
                top: 5px;
                right: 15px;
            }
            .summer {
                font-size: 13px;
                position: absolute;
                left: 20px;
                bottom: 45px;
            }
            .honey {
                font-size: 12px;
                color: @color_huise;
                position: absolute;
                left: 20px;
                bottom: 12px;
            }
            .rainbow {
                font-size: 13px;
                color: #FB051B;
                position: absolute;
                right: 15px;
                bottom: 43px;
            }
        }
        .jupiter {
            width: 100%;
            height: 42px;
            border-top: 1px solid @color_edge;
            position: relative;
            .u193 {
                width: 24px;
                height: 23px;
                position: absolute;
                left: 12px;
                top: 8px;
            }
            .box1 {
                font-size: 12px;
                color: @color_huise;
                position: absolute;
                left: 40px;
                top: 11px;
            }
            .u194 {
                width: 24px;
                height: 18px;
                position: absolute;
                left: 87px;
                top: 10px;
            }
            .box2 {
                font-size: 12px;
                color: @color_huise;
                position: absolute;
                left: 114px;
                top: 11px;
            }
            .u195 {
                width: 24px;
                height: 23px;
                position: absolute;
                right: 65px;
                top: 8px;
            }
            .box3 {
                font-size: 12px;
                color: @color_huise;
                position: absolute;
                left: 316px;
                top: 11px;
            }
            .u196 {
                height: 26px;
                position: absolute;
                right: 12px;
                top: 6px;
            }
        }
    }
}
</style>


