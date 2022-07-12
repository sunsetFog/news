<template>
    <section id="changePhone">
        <headDesign title="修改手机"></headDesign>
        <div class="summer">
            <div :class="{'scenery': true, 'jupiter': comic_active == 0}">
                1.验证原号码
            </div>
            <div :class="{'honey': true, 'saturn': comic_active == 1}">
                2.绑定新手机
            </div>
        </div>

        <div class="rainbow-apt">
            <label v-if="comic_active == 0">180****7727</label>
            <button>发送验证码</button>
            <div class="atmosphere" v-if="comic_active == 1">
                <input class="venus-apt" type="text" v-model="withForm.password" placeholder="请输入手机号码"/>
            </div>
        </div>
        <div class="rainbow-apt">
            <div class="atmosphere">
                <input class="venus-apt" type="text" v-model="withForm.password" placeholder="请输入验证码"/>
            </div>
        </div>
        <div class="bean-apt">
            <button @click="stepWay()" v-if="comic_active == 0">下一步</button>
            <button @click="sureWay()" v-if="comic_active == 1">确定</button>
        </div>
        <div class="mercury">
            温馨提示：<br>
            手机号码修改成功后需要使用新的手机号码进行登录。
        </div>
    </section>
</template>

<script>
export default {
    name: "changePhone",
    data() {
        return {
            comic_active: 0,
            withForm: {
                password: '',
                sex: '1'
            }
        }
    },
    methods: {
        stepWay() {
            this.comic_active = 1;
        },
        sureWay() {
            this.$router.push({
                path: '/personalCenter'
            });
        }
    }
}
</script>

<style lang="less" scoped>
#changePhone {
    width: 100%;
    height: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
    box-sizing: border-box;
    .summer {
        width: 100%;
        height: 48px;
        position: relative;
        border: 1px solid #DDDDDD;
        margin-bottom: 20px;
        .scenery {
            width: 192px;
            height: 100%;
            text-align: left;
            font-size: 13px;
            padding: 13px 0 0 60px;
            box-sizing: border-box;
            background: url("~@static/mall/personalCenter/u3035.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 2;
        }
        .jupiter {
            color: @color_hong;
            background: url("~@static/mall/personalCenter/u3035_selected.png");
        }
        .honey {
            width: 200px;
            height: 100%;
            text-align: right;
            font-size: 13px;
            padding: 13px 60px 0 0;
            box-sizing: border-box;
            background: url("~@static/mall/personalCenter/u3034.png");
            background-size: 100% 100%;
            background-repeat: no-repeat;
            position: absolute;
            left: 175px;
            top: 0px;
        }
        .saturn {
            color: @color_hong;
            background: url("~@static/mall/personalCenter/u3034_selected.png");
        }
    }
    .rainbow-apt {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        text-align: left;
        line-height: 40px;
        font-size: 13px;
        padding: 0 0 0 20px;
        box-sizing: border-box;
        position: relative;
        label {
            width: 120px;
            height: 100%;
            float: left;
        }
        button {
            width: 80px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            border: 1px solid #D3D3D3;
            color: #887F7F;
            position: absolute;
            top: 4px;
            right: 15px;
        }
        .atmosphere {
            width: 280px;
            height: 100%;
            float: left;
            position: relative;
            .venus-apt {
                width: 100%;
                height: 100%;
            }
        }
    }
    .bean-apt {
        width: 100%;
        height: 50px;
        margin-top: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        button {
            width: 295px;
            height: 48px;
            line-height: 48px;
            text-align: center;
            background: #2AB795;
            color: #fff;
            border-radius: 10px;
        }
    }
    .mercury {
        width: 100%;
        height: 50px;
        color: @color_huise;
        text-align: left;
        font-size: 13px;
        line-height: 25px;
        margin-top: 30px;
        padding: 0 22px;
        box-sizing: border-box;
    }
}
</style>


