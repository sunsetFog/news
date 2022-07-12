<template>
    <section id="memberCenter">
        <headDesign title="会员中心">
            <img class="summer" src="@static/mall/memberCenter/u2518.png"/>
        </headDesign>
        <div class="mercury">
            <img class="u2660" src="@static/mall/memberCenter/u2660.png"/>
            <specialServices></specialServices>
            <button class="cosplay">
                <span>成长值1000</span>
                <img src="@static/mall/memberCenter/u2685.png"/>
            </button>
        </div>
        <div class="saturn">
            我的特权
        </div>
        <privilege></privilege>
        <div class="undercurrent">
            更多特权，敬请期待
        </div>
    </section>
</template>

<script>
import specialServices from "./specialServices";
import privilege from "./privilege";
export default {
    name: "memberCenter",
    components: { specialServices, privilege }
}
</script>

<style lang="less" scoped>
#memberCenter {
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
    .mercury {
        width: 100%;
        height: 245px;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        position: relative;
        .u2660 {
            width: 84px;
            height: 84px;
            position: absolute;
            left: 145px;
            top: 25px;
        }
        .cosplay {
            width: 130px;
            height: 28px;
            background: @color_lv;
            border-radius: 10px;
            position: absolute;
            left: 120px;
            bottom: -14px;
            span {
                font-size: 13px;
                color: #fff;
                position: absolute;
                left: 25px;
                top: 4px;
            }
            img {
                height: 21px;
                position: absolute;
                right: 8px;
                top: 4px;
            }
        }
    }
    .saturn {
        width: 100%;
        height: 48px;
        line-height: 48px;
        padding: 0 0 0 20px;
        box-sizing: border-box;
        margin-top: 30px;
        background: #fff;
        font-size: 15px;
        text-align: left;
        border-top: 1px solid @color_edge;
    }
    .undercurrent {
        width: 100%;
        height: 48px;
        line-height: 48px;
        color: @color_huise;
        background: #fff;
        font-size: 13px;
        text-align: center;
        border-bottom: 1px solid @color_edge;
    }
}
</style>


