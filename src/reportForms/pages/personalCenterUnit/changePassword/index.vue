<template>
    <section id="changePassword">
        <headDesign title="修改密码">
            <button class="summer" @click="okWay">完成</button>
        </headDesign>
        <div class="rainbow-apt">
            <label>旧密码</label>
            <div class="atmosphere">
                <input class="venus-apt" type="text" v-model="withForm.password" placeholder="请输入旧密码"/>
            </div>
        </div>
        <div class="rainbow-apt">
            <label>新密码</label>
            <div class="atmosphere">
                <input class="venus-apt" type="text" v-model="withForm.password" placeholder="请输入新密码（6-20位数）"/>
            </div>
        </div>
        <div class="rainbow-apt">
            <label>确认密码</label>
            <div class="atmosphere">
                <input class="venus-apt" type="text" v-model="withForm.password" placeholder="请再次输入新密码"/>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "changePassword",
    data() {
        return {
            withForm: {
                password: '',
                sex: '1'
            }
        }
    },
    methods: {
        okWay() {
            this.$router.push({
                path: '/personalCenterUnit/index'
            });
        }
    }
}
</script>

<style lang="less" scoped>
#changePassword {
    width: 100%;
    height: 100%;
    background: @color_qianlan;
    padding: 65px 0 0 0;
    box-sizing: border-box;
    .summer {
        height: 20px;
        line-height: 20px;
        font-size: 14px;
        color: @color_lv;
        position: absolute;
        right: 20px;
        top: 14px;
    }
    .rainbow-apt {
        width: 100%;
        height: 40px;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        text-align: left;
        line-height: 40px;
        font-size: 13px;
        label {
            width: 95px;
            height: 100%;
            float: left;
            padding: 0 0 0 20px;
            box-sizing: border-box;
        }
        .atmosphere {
            width: 280px;
            height: 100%;
            float: right;
            position: relative;
            .venus-apt {
                width: 100%;
                height: 100%;
            }
        }
    }
}
</style>


