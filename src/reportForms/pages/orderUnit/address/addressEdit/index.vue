<template>
    <section id="addressEdit">
        <headDesign :title="ofTitle">
            <button class="summer" @click="saveWay()">保存</button>
        </headDesign>
        <div class="cartoon honey">
            <label>姓名:</label>
            <input type="text" v-model="withForm.name" placeholder="请输入姓名"/>
        </div>
        <div class="cartoon">
            <label>手机号码:</label>
            <input type="text" v-model="withForm.name" placeholder="请输入手机号码"/>
        </div>
        <div class="cartoon">
            <label>邮政编码:</label>
            <input type="text" v-model="withForm.name" placeholder="请输入邮政编码"/>
        </div>
        <div class="cartoon">
            <label>所在区域:</label>
            <span>请选择区域</span>
            <img class="u2637" src="@static/mall/order/u2637.png"/>
        </div>
        <div class="cartoon">
            <label>详细地址:</label>
            <input type="text" v-model="withForm.name" placeholder="请输入详细地址"/>
        </div>
        <van-checkbox v-model="choose_active" class="comic">设为默认收货地址</van-checkbox>
    </section>
</template>

<script>
export default {
    name: "addressEdit",
    data() {
        return {
            ofTitle: "",
            withForm: {
                name: ''
            },
            choose_active: true
        }
    },
    created() {
        this.ofTitle = this.$route.query.title + "收货人"
    },
    methods: {
        saveWay() {
            this.$router.push({
                path: "/orderUnit/address/index"
            })
        }
    }
}
</script>

<style lang="less" scoped>
#addressEdit {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 60px 0 0 0;
    box-sizing: border-box;
    .summer {
        width: 30px;
        height: 25px;
        font-size: 13px;
        text-align: center;
        line-height: 25px;
        color: @color_lv;
        position: absolute;
        right: 15px;
        top: 10px;
    }
    .cartoon {
        width: 100%;
        height: 42px;
        background: #fff;
        border-bottom: 1px solid @color_edge;
        position: relative;
        label {
            font-size: 13px;
            position: absolute;
            left: 20px;
            top: 10px;
        }
        span {
            color: @color_huise;
            font-size: 13px;
            position: absolute;
            left: 100px;
            top: 10px;
        }
        input {
            width: 200px;
            height: 28px;
            position: absolute;
            left: 100px;
            top: 5.5px;
        }
        input::placeholder {
            color: @color_huise;
        }
        .u2637 {
            height: 18px;
            position: absolute;
            right: 20px;
            top: 11px;
        }
    }
    .honey {
        border-top: 1px solid @color_edge;
    }
    .comic {
        margin: 20px 0 0 20px;
    }
}
</style>

