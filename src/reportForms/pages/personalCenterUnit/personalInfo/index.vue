<template>
    <section id="personalInfo">
        <headDesign title="个人信息">
            <button class="summer" @click="saveWay">保存</button>
        </headDesign>

        <div class="cartoon">
            <img src="@static/mall/personalCenter/u2943.png"/>
            <span>Windir</span>
        </div>
        <div class="rainbow-apt" style="margin-top: 1.25rem;border-top: 1px solid #D5D5D5;">
            <label>用户ID</label>
            <div class="atmosphere">
                37383939
            </div>
        </div>
        <div class="rainbow-apt">
            <label>昵称</label>
            <div class="atmosphere">
                <input class="venus-apt" type="text" v-model="withForm.password" placeholder="输入昵称"/>
            </div>
        </div>
        <div class="rainbow-apt">
            <label>性别</label>
            <div class="atmosphere" style="padding-top: 0.55rem;">
                <van-radio-group v-model="withForm.sex" direction="horizontal">
                    <van-radio name="1">男</van-radio>
                    <van-radio name="2" style="margin-left: 1.2rem;">女</van-radio>
                </van-radio-group>
            </div>
        </div>
        <div class="rainbow-apt">
            <label>生日</label>
            <div class="atmosphere">
                <div class="jupiter">选择生日</div>
                <img class="u286" src="@static/mall/customer/u286.png"/>
            </div>
        </div>
        <div class="rainbow-apt">
            <label>城市</label>
            <div class="atmosphere">
                <div class="jupiter">选择城市</div>
                <img class="u286" src="@static/mall/customer/u286.png"/>
            </div>
        </div>
        <div class="rainbow-apt">
            <label>职业</label>
            <div class="atmosphere">
                <input class="venus-apt" type="text" v-model="withForm.password" placeholder="输入职业"/>
            </div>
        </div>
        <div class="rainbow-apt">
            <label>个性签名</label>
            <div class="atmosphere">
                <input class="venus-apt" type="text" v-model="withForm.password" placeholder="填写你的个性签名"/>
            </div>
        </div>

        <div class="saturn">
            喜欢的分类
        </div>
        <div class="undercurrent">
            <ul>
                <li v-for="(item, index) in cosplay_list">
                    {{item.title}}
                </li>
            </ul>
        </div>
    </section>
</template>

<script>
export default {
    name: "personalInfo",
    data() {
        return {
            withForm: {
                password: '',
                sex: '1'
            },
            cosplay_list: [
                { title: '服装', active: false },
                { title: '餐厨', active: false },
                { title: '配件', active: false },
                { title: '居家', active: false },
                { title: '洗护', active: false },
                { title: '婴童', active: false },
                { title: '杂志', active: false },
                { title: '饮食', active: false },
                { title: '志趣', active: false }
            ]
        }
    },
    methods: {
        saveWay() {
            this.$router.push({
                path: '/personalCenter'
            });
        }
    }
}
</script>

<style lang="less" scoped>
#personalInfo {
    width: 100%;
    background: @color_qianlan;
    padding: 45px 0 0 0;
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
    .cartoon {
        width: 100%;
        height: 145px;
        position: relative;
        border-bottom: 1px solid @color_edge;
        background: #fff;
        img {
            width: 82px;
            height: 82px;
            position: absolute;
            left: 144px;
            top: 19px;
        }
        span {
            width: 100%;
            height: 20px;
            text-align: center;
            line-height: 20px;
            font-size: 14px;
            position: absolute;
            left: 0px;
            bottom: 12px;
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
            .jupiter {
                width: 280px;
                height: 100%;
                color: @color_huise;
                position: absolute;
                left: 0px;
                top: 0px;
                z-index: 2;
            }
            .u286 {
                height: 20px;
                position: absolute;
                right: 14px;
                top: 9px;
            }
        }
    }
    .saturn {
        width: 100%;
        height: 47px;
        font-size: 13px;
        text-align: left;
        padding: 18px 0 0 24px;
        box-sizing: border-box;
    }
    .undercurrent {
        width: 100%;
        height: 135px;
        background: #fff;
        padding: 5px 0 0 0;
        box-sizing: border-box;
        ul {
            width: 100%;
            li {
                width: 100px;
                height: 30px;
                float: left;
                margin: 5px 10px;
                text-align: center;
                line-height: 30px;
                border-radius: 10px;
                border: 1px solid @color_edge;
            }
        }
    }
}
</style>


