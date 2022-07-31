<template>
    <section id="addressUnit">
        <headDesign title="地址管理"></headDesign>
        <div class="atmosphere">
            <span class="cartoon">大梨&nbsp;&nbsp;&nbsp;&nbsp;180****1849</span>
            <span class="mars">广东省深圳市南山区科兴科学园</span>
            <img class="u2279" src="@static/mall/follow/u2279.png"/>
            <button v-if="choose_active">默认</button>
        </div>
        <div class="jupiter">
            <van-checkbox v-model="choose_active" class="comic" @click="chooseWay">设为默认</van-checkbox>
            <img class="u2603" src="@static/mall/order/u2603.png"/>
            <img class="u2607" src="@static/mall/order/u2607.png"/>
            <button @click="addWay('编辑')">编辑</button>
            <button>删除</button>
        </div>

        <div class="scenery">
            <button @click="addWay('添加')">添加新收货人</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "addressUnit",
    data() {
        return {
            choose_active: true
        }
    },
    methods: {
        chooseWay() {

        },
        addWay(value) {
            this.$router.push({
                path: "/orderUnit/address/addressEdit/index?title=" + value
            })
        }
    }
}
</script>

<style lang="less" scoped>
#addressUnit {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .atmosphere {
        width: 100%;
        height: 95px;
        background: #fff;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        position: relative;
        .cartoon {
            font-size: 13px;
            position: absolute;
            left: 45px;
            top: 18px
        }
        .mars {
            font-size: 13px;
            position: absolute;
            left: 49px;
            top: 54px;
        }
        .u2279 {
            width: 13px;
            height: 19px;
            position: absolute;
            left: 25px;
            top: 52px;
        }
        button {
            width: 52px;
            height: 24px;
            font-size: 13px;
            text-align: center;
            line-height: 22px;
            border: 1px solid #FD9E53;
            color: #FD9E53;
            border-radius: 5px;
            position: absolute;
            left: 186px;
            top: 16px;
        }
    }
    .jupiter {
        width: 100%;
        height: 42px;
        background: #fff;
        border-bottom: 1px solid @color_edge;
        margin-bottom: 15px;
        position: relative;
        .comic {
            position: absolute;
            left: 20px;
            top: 9px;
        }
        .u2603 {
            height: 22px;
            position: absolute;
            left: 214px;
            top: 9px;
        }
        .u2607 {
            height: 22px;
            position: absolute;
            left: 292px;
            top: 9px;
        }
        button {
            font-size: 13px;
            padding: 2px 4px;
            box-sizing: border-box;
            position: absolute;
            top: 9px;
        }
        button:nth-of-type(1) {
            left: 240px;
        }
        button:nth-of-type(2) {
            left: 318px;
        }
    }
    .scenery {
        width: 100%;
        height: 50px;
        background: #fff;
        position: fixed;
        left: 0px;
        bottom: 0px;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
            width: 240px;
            height: 35px;
            background: @color_lv;
            color: #fff;
            font-size: 13px;
            text-align: center;
            line-height: 35px;
            border-radius: 20px;
        }
    }
}
</style>


