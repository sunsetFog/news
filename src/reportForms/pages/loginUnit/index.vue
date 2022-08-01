<template>
    <section id="loginUnit">
        <div class="cartoon-apt">
            <img class="u2834" src="@static/mall/login/u2834.png"/>
            <img class="u2808" src="@static/mall/login/u2808.png"/>
        </div>
        <div class="mars-apt">
            <img class="u2839" src="@static/mall/login/u2839.png"/>
            <input class="jupiter-apt" type="text" v-model="withForm.username" placeholder="手机号码"/>
        </div>
        <div class="saturn-apt">
            <img class="u2843" src="@static/mall/login/u2843.png"/>
            <input class="venus-apt" type="text" v-model="withForm.password" placeholder="登录密码"/>
            <van-switch class="mercury-apt" v-model="checked" size="20" />
        </div>
        <div class="undercurrent-apt">
            <span @click="forgetPasswordWay">忘记密码</span>
        </div>
        <button class="cosplay-apt" @click="submitWay()">登录</button>
        <div class="rainbow-apt">
            <span @click="registerWay()">创建账号</span>
        </div>
        <div class="line-text-line">
            <hr/>  OR  <hr/>
        </div>
        <button class="summer-apt">
            <img src="@static/mall/login/u2858.png"/>
            微信账号登录
        </button>
        <button class="summer-apt">
            <img src="@static/mall/login/u2862.png"/>
            微博账号登录
        </button>
    </section>
</template>

<script>
export default {
    name: "loginUnit",
    data() {
        return {
            withForm: {
                username: '',
                password: ''
            },
            checked: false
        }
    },
    created() {
        this.$cookies.remove('token');
    },
    methods: {
        registerWay() {
            this.$router.push({
                path: "/registerUnit/index"
            });
        },
        forgetPasswordWay() {
            this.$router.push({
                path: "/forgetPasswordUnit/index"
            });
        },
        submitWay() {
            let that = this
            that.$cookies.set('token', "XH-000887", '1d');
            that.$store.dispatch('routerApple').then(function(value) {
                console.log('--then结束--');
                that.$router.addRoutes(value);
                that.$router.push({ path: '/essentialsUnit/homePage/index' });
            });
        }
    }
}
</script>

<style lang="less" scoped>
#loginUnit {
    width: 100%;
    padding: 0 37.5px 30px 37.5px;
    box-sizing: border-box;
    .cartoon-apt {
        width: 100%;
        height: 215px;
        position: relative;
        .u2834 {
            width: 28px;
            position: absolute;
            right: -25.5px;
            top: 12px;
        }
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
        .u2843 {
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
    }
    .undercurrent-apt {
        width: 100%;
        height: 20px;
        line-height: 20px;
        margin-top: 20px;
        span {
            float: right;
            color: @color_lv;
            font-size: 13px;
        }
    }
    .cosplay-apt {
        width: 100%;
        height: 45px;
        color: #fff;
        background: @color_lv;
        line-height: 45px;
        margin-top: 25px;
        border-radius: 10px;
        font-size: 16px;
    }
    .rainbow-apt {
        width: 100%;
        height: 20px;
        text-align: center;
        line-height: 20px;
        margin-top: 20px;
        span {
            color: @color_lv;
            font-size: 13px;
        }
    }
    .line-text-line {
        width:100%;
        height: 50px;
        font-size: 13px;
        display: flex;
        align-items: center;
        hr {
            margin: 0;
            float: left;
            flex: 1;
            height: 1px;
            border-right: 0;
            border-left: 0;
            color: @color_edge;
        }
        hr:nth-of-type(1) {
            margin-right: 15px;
        }
        hr:nth-of-type(2) {
            margin-left: 15px;
        }
    }
    .summer-apt {
        width: 100%;
        height: 45px;
        font-size: 16px;
        text-align: center;
        position: relative;
        border: 1px solid @color_edge;
        border-radius: 10px;
        margin: 10px 0;
        img {
            width: 35px;
            height: 28px;
            position: absolute;
            left: 22px;
            top: 10px;
        }
    }
}
</style>


