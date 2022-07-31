<template>
    <section id="forgetPasswordUnit">
        <headDesign title="忘记密码"></headDesign>
        <div class="cartoon-apt">
            <img class="u2808" src="@static/mall/login/u2808.png"/>
        </div>
        <div class="mars-apt">
            <img class="u2839" src="@static/mall/login/u2839.png"/>
            <input class="jupiter-apt" type="text" v-model="withForm.username" placeholder="输入手机号码"/>
        </div>
        <div class="saturn-apt">
            <img class="u2882" src="@static/mall/register/u2882.png"/>
            <input class="venus-apt" type="text" v-model="withForm.password" placeholder="输入短信验证码"/>
            <span class="yanzhengma">发送验证码</span>
        </div>
        <div class="saturn-apt">
            <img class="u2882" src="@static/mall/login/u2843.png"/>
            <input class="venus-apt" type="text" v-model="withForm.password" placeholder="输入新的登录密码"/>
            <van-switch class="mercury-apt" v-model="checked" size="20" />
        </div>
        <button class="cosplay-apt" @click="submitWay">确定</button>
    </section>
</template>

<script>
export default {
    name: "forgetPasswordUnit",
    data() {
        return {
            withForm: {
                username: '',
                password: ''
            },
            checked: false,
            read_active: false
        }
    },
    methods: {
        readWay(value) {
            this.read_active = value;
        },
        submitWay() {
            this.$router.push({
                path: "/loginUnit/index"
            });
        }
    }
}
</script>

<style lang="less" scoped>
#forgetPasswordUnit {
    width: 100%;
    padding: 0 37.5px 30px 37.5px;
    box-sizing: border-box;
    .cartoon-apt {
        width: 100%;
        height: 215px;
        position: relative;
        .u2808 {
            width: 110px;
            position: absolute;
            left: 95px;
            top: 75px;
        }
    }
    .mars-apt {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid @color_edge;
        position: relative;
        .u2839 {
            width: 25px;
            height: 25px;
            position: absolute;
            left: 5px;
            top: 8px;
        }
        .jupiter-apt {
            width: 250px;
            height: 30px;
            font-size: 15px;
            position: absolute;
            left: 45px;
            top: 7px;
        }
    }
    .saturn-apt {
        width: 100%;
        height: 45px;
        border-bottom: 1px solid @color_edge;
        margin-top: 25px;
        position: relative;
        .u2882 {
            width: 25px;
            height: 25px;
            position: absolute;
            left: 5px;
            top: 8px;
        }
        .venus-apt {
            width: 180px;
            height: 30px;
            font-size: 15px;
            position: absolute;
            left: 45px;
            top: 7px;
        }
        .mercury-apt {
            position: absolute;
            right: 0px;
            top: 7px;
        }
        .yanzhengma {
            color: #627287;
            font-size: 13px;
            position: absolute;
            right: 0px;
            top: 12px;
        }
    }
    .cosplay-apt {
        width: 100%;
        height: 45px;
        color: #fff;
        background: @color_lv;
        line-height: 45px;
        border-radius: 10px;
        font-size: 16px;
        margin-top: 62px;
    }
}
</style>


