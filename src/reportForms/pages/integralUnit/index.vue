<template>
    <section id="integralUnit">
        <headDesign title="我的积分">
            <img class="summer" src="@static/mall/memberCenter/u2518.png"/>
        </headDesign>
        <div class="cartoon">
            <div>
                <img src="@static/mall/integral/u3069.png"/>
            </div>
            <p>当前积分</p>
            <p>1000</p>
        </div>
        <cartoon></cartoon>
        <div class="honey">
            <span>近30天记录</span>
            <span>更多</span>
        </div>
        <div class="fabulous" v-for="(item, index) in 5">
            <span>完成每日登陆</span>
            <span>2017-05-01 15:00</span>
            <span>+5</span>
        </div>
    </section>
</template>

<script>
import cartoon from "./cartoon";
export default {
    name: "integralUnit",
    components: { cartoon }
}
</script>

<style lang="less" scoped>
#integralUnit {
    width: 100%;
    height: 100%;
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
    .cartoon {
        width: 100%;
        height: 192px;
        background: @color_lv;
        padding: 25px 0 0 0;
        box-sizing: border-box;
        div {
            width: 100%;
            height: 72px;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
                width: 72px;
                height: 72px;
            }
        }
        p {
            width: 100%;
            text-align: center;
            padding: 8px 0;
            box-sizing: border-box;
            color: #fff;
        }
        p:nth-of-type(1) {
            font-size: 13px;
            padding-top: 16px;
        }
        p:nth-of-type(2) {
            font-size: 16px;
            font-weight: 600;
        }
    }
    .honey {
        width: 100%;
        height: 55px;
        line-height: 55px;
        padding: 0 28px 0 20px;
        box-sizing: border-box;
        span:nth-of-type(1) {
            float: left;
            font-size: 15px;
        }
        span:nth-of-type(2) {
            float: right;
            font-size: 12px;
        }
    }
    .fabulous {
        width: 100%;
        height: 82px;
        background: #fff;
        border-bottom: 1px solid @color_edge;
        position: relative;
        span {
            position: absolute;
            font-size: 13px;
        }
        span:nth-of-type(1) {
            color: @color_huise;
            left: 20px;
            top: 19px;
        }
        span:nth-of-type(2) {
            color: @color_huise;
            left: 20px;
            top: 45px;
        }
        span:nth-of-type(3) {
            color: @color_lv;
            right: 37px;
            top: 33px;
        }
    }

}
</style>


