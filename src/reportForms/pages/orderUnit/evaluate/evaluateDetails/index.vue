<template>
    <section id="evaluateDetails">
        <headDesign title="评价详情">
            <img class="u1032" src="@static/mall/evaluate/u1032.png"/>
            <img class="u1033" src="@static/mall/evaluate/u1033.png"/>
        </headDesign>
        <div class="atmosphere">
            <img class="u1037" src="@static/mall/evaluate/u1037.png"/>
            <span>Windir</span>
            <span>学生/深圳</span>
        </div>
        <div class="cartoon">
            宝贝是否满足了你的期待？说说你的使用心得，分享给其他想购买的朋友吧。
        </div>
        <div class="mars">
            <div>
                <img src="@static/mall/homePage/u40.png"/>
            </div>
        </div>
        <div class="mercury">
            <span>一周前</span>
            <span>收藏100</span>
            <span>阅读10000</span>
            <img class="u193" src="@static/mall/evaluate/u193.png"/>
            <img class="u194" src="@static/mall/evaluate/u194.png"/>
        </div>

        <div class="undercurrent">
            <div class="cosplay">
                <div>
                    <img src="@static/mall/homePage/u88.png"/>
                </div>
                <span>银色星芒刺绣网纱底裤</span>
                <span>薄如蝉翼，丝滑如肌肤</span>
                <span>￥99</span>
            </div>
            <div class="rainbow">
                <span class="summer">购买了：肤色/M</span>
                <span class="scenery">评价：</span>
                <van-rate class="honey" disabled v-model="like_value" icon="like" void-icon="like-o" :size="28" color="#FD994B" void-color="#eee" />
            </div>
        </div>

        <div class="fabulous">
            <div class="comic">
                <img src="@static/mall/evaluate/u1065.png"/>
                <span>全部评论&nbsp;100</span>
            </div>
            <div class="magic">
                <div>
                    <img src="@static/mall/homePage/u88.png"/>
                </div>
                <p>嗷嗷</p>
                <p>回复<span>Windir</span>How Are you?</p>
                <p>一周前</p>
            </div>
        </div>

        <div class="jupiter">
            <input type="text" v-model="message" placeholder="请输入评论内容"/>
            <button>发表</button>
        </div>
    </section>
</template>

<script>
export default {
    name: "evaluateDetails",
    data() {
        return {
            message: '',
            like_value: 2
        }
    }
}
</script>

<style lang="less" scoped>
#evaluateDetails {
    width: 100%;
    min-height: 100%;
    background: @color_qianlan;
    padding: 45px 0 65px 0;
    box-sizing: border-box;
    .u1032 {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 10px;
        top: 10px;
    }
    .u1033 {
        width: 25px;
        height: 25px;
        position: absolute;
        right: 55px;
        top: 10px;
    }
    .atmosphere {
        width: 100%;
        height: 88px;
        background: #fff;
        border-bottom: 1px @color_edge;
        position: relative;
        .u1037 {
            width: 48px;
            height: 48px;
            position: absolute;
            left: 28px;
            top: 20px;
        }
        span:nth-of-type(1) {
            font-size: 14px;
            position: absolute;
            left: 100px;
            top: 25px;
        }
        span:nth-of-type(2) {
            font-size: 12px;
            position: absolute;
            left: 100px;
            top: 50px;
        }
    }
    .cartoon {
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        margin-top: 15px;
        background: #fff;
        text-align: left;
    }
    .mars {
        width: 100%;
        height: 135px;
        padding: 10px 20px 10px 20px;
        box-sizing: border-box;
        background: #fff;
        div {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
            background: @color_qianqing;
            img {
                width: 68px;
                height: 55px;
            }
        }
    }
    .mercury {
        width: 100%;
        height: 42px;
        background: #fff;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        position: relative;
        span {
            font-size: 13px;
            color: @color_huise;
            position: absolute;
        }
        span:nth-of-type(1) {
            left: 20px;
            top: 11px;
        }
        span:nth-of-type(2) {
            left: 195px;
            top: 11px;
        }
        span:nth-of-type(3) {
            left: 300px;
            top: 11px;
        }
        .u193 {
            height: 25px;
            position: absolute;
            left: 160px;
            top: 6px;
        }
        .u194 {
            height: 18px;
            position: absolute;
            left: 263px;
            top: 10px;
        }
    }
    .undercurrent {
        width: 100%;
        height: 150px;
        background: #fff;
        padding: 10px 20px 0 20px;
        box-sizing: border-box;
        border-top: 1px solid @color_edge;
        border-bottom: 1px solid @color_edge;
        margin-top: 15px;
        .cosplay {
            width: 100%;
            height: 82px;
            background: @color_qianlan;
            position: relative;
            div {
                width: 100px;
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: @color_qianqing;
                position: absolute;
                left: 0px;
                top: 0px;
                img {
                    width: 48px;
                    height: 38px;
                }
            }
            span {
                font-size: 13px;
                position: absolute;
                left: 113px;
            }
            span:nth-of-type(1) {
                top: 3px;
            }
            span:nth-of-type(2) {
                color: @color_huise;
                top: 32px;
            }
            span:nth-of-type(3) {
                color: @color_hong;
                top: 61px;
            }
        }
        .rainbow {
            width: 100%;
            height: 55px;
            position: relative;
            color: @color_huise;
            .summer {
                font-size: 13px;
                position: absolute;
                left: 0px;
                top: 19px;
            }
            .scenery {
                font-size: 13px;
                position: absolute;
                left: 130px;
                top: 19px;
            }
            .honey {
                position: absolute;
                left: 165px;
                top: 14px;
            }
        }
    }
    .fabulous {
        width: 100%;
        background: #fff;
        margin-top: 15px;
        .comic {
            width: 100%;
            height: 42px;
            border-top: 1px solid @color_edge;
            border-bottom: 1px solid @color_edge;
            position: relative;
            img {
                height: 20px;
                position: absolute;
                left: 20px;
                top: 10px;
            }
            span {
                font-size: 13px;
                position: absolute;
                left: 60px;
                top: 11px;
            }
        }
        .magic {
            width: 100%;
            height: 80px;
            position: relative;
            div {
                width: 40px;
                height: 40px;
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
                background: @color_qianqing;
                position: absolute;
                left: 20px;
                top: 18px;
                img {
                    width: 23px;
                    height: 21px;
                }
            }
            p {
                font-size: 13px;
                position: absolute;
                left: 80px;
            }
            p:nth-of-type(1) {
                top: 7px;
            }
            p:nth-of-type(2) {
                top: 30px;
                span {
                    color: @color_lv;
                    margin: 0 4px 0 2px;
                }
            }
            p:nth-of-type(3) {
                font-size: 12px;
                color: @color_huise;
                top: 54px;
            }
        }
    }
    .jupiter {
        width: 100%;
        height: 55px;
        background: #fff;
        border-top: 1px solid @color_edge;
        position: fixed;
        left: 0px;
        bottom: 0px;
        input {
            width: 288px;
            height: 35px;
            background: @color_qianqing;
            border-radius: 20px;
            padding-left: 20px;
            box-sizing: border-box;
            position: absolute;
            left: 20px;
            top: 9px;
        }
        button {
            padding: 4px 8px;
            box-sizing: border-box;
            color: @color_lv;
            font-size: 14px;
            position: absolute;
            right: 12px;
            top: 12px;
        }
    }
}
</style>


