<template>
    <section id="timeLimit">
        <div class="jupiter">
            <span class="box01">秒杀专区</span>
            <span class="box02">下一场18:00开始</span>
            <span class="box03">本场结束剩余</span>
            <van-count-down :time="with_time" class="saturn">
                <template #default="timeData">
                    <span class="mercury">{{ timeData.hours }}</span>
                    <span class="colon">:</span>
                    <span class="mercury">{{ timeData.minutes }}</span>
                    <span class="colon">:</span>
                    <span class="mercury">{{ timeData.seconds }}</span>
                </template>
            </van-count-down>
        </div>
        <div class="undercurrent">
            <ul>
                <li v-for="(item,index) in venus_list">
                    <div class="jia-ge">￥{{item.price}}</div>
                    <div class="shang-pin">
                        <img class="u88" src="@static/mall/homePage/u88.png"/>
                    </div>
                    <span class="rainbow">秒杀价￥99</span>
                    <span class="summer">银色星芒刺绣网纱底裤</span>
                    <span class="honey">薄如蝉翼，丝滑如肌肤</span>
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "timeLimit",
    data() {
        return {
            with_time: 2 * 60 * 60 * 1000,// 单位为毫秒
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
#timeLimit {
    width: 100%;
    height: 465px;
    border-top: 1px solid @color_edge;
    border-bottom: 1px solid @color_edge;
    margin-top: 15px;
    .jupiter {
        width: 100%;
        height: 60px;
        position: relative;
        .box01 {
            font-size: 14px;
            position: absolute;
            left: 25px;
            top: 10px;
        }
        .box02 {
            font-size: 12px;
            color: @color_huise;
            position: absolute;
            left: 25px;
            top: 34px;
        }
        .box03 {
            font-size: 12px;
            color: @color_huise;
            position: absolute;
            right: 45px;
            top: 7px;
        }
        .saturn {
            position: absolute;
            right: 25px;
            top: 32px;
            span {
                display: inline-block;
            }
            .colon {
                margin: 0 4px;
                color: #000000;
            }
            .mercury {
                width: 22px;
                height: 20px;
                line-height: 20px;
                color: #fff;
                font-size: 12px;
                text-align: center;
                border-radius: 3px;
                background-color: #000000;
            }
        }
    }
    .undercurrent {
        width: 100%;
        height: 405px;
        ul {
            width: 100%;
            li {
                width: 145px;
                height: 185px;
                float: left;
                margin: 8.5px 21.2px;
                position: relative;
                .jia-ge {
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    color: #fff;
                    font-size: 12px;
                    background: #FB0017;
                    text-align: center;
                    line-height: 42px;
                    position: absolute;
                    right: 0px;
                    top: 0px;
                    z-index: 2;
                }
                .shang-pin {
                    width: 100px;
                    height: 82px;
                    background: #E6E5EB;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    position: absolute;
                    left: 18px;
                    top: 26px;
                    .u88 {
                        width: 52px;
                        height: 39px;
                    }
                }
                .rainbow {
                    font-size: 13px;
                    color: #FB051B;
                    position: absolute;
                    left: 32px;
                    top: 118px;
                }
                .summer {
                    font-size: 13px;
                    position: absolute;
                    left: 0px;
                    bottom: 28px;
                }
                .honey {
                    font-size: 12px;
                    color: @color_huise;
                    position: absolute;
                    left: 0px;
                    bottom: 5px;
                }
            }
        }
    }
}
</style>


