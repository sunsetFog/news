<template>
    <section id="turntable">
        <template>
        <img class="robot" src="@static/reportForms/luckyWheel/robot.png" srcset="@static/reportForms/luckyWheel/robot@2x.png 2x,@static/reportForms/luckyWheel/robot@3x.png 3x"/>
        <div class="chat-box">
            <span v-if="luckyNum == 0 && isLogin == 'yes'">今日抽奖次数已用完，请明天再来吧~</span>
            <span v-if="luckyNum == 0 && isLogin == 'no'">你还未登录哟，请登录账户参与抽奖~</span>
            <span v-if="luckyNum != 0 && isLogin == 'yes'">每次抽奖10啵币，今日还剩<span style="color: #E32626;">&nbsp;{{luckyNum}}&nbsp;</span>次抽奖机会！</span>
        </div>
        <div class="saturn">每人每天可抽奖3次，记得每天来哟</div>
        <div class="mercury" @click="ruleOpen">活动规则</div>
        <LuckyWheel
            class="lucky-wheel"
            ref="myLucky"
            width="20rem"
            height="20rem"
            :blocks="blocks"
            :prizes="prizes"
            :buttons="buttons"
            :defaultConfig="defaultConfig"
            :defaultStyle="defaultStyle"
            @start="startCallBack"
            @end="endCallBack"
        >
        </LuckyWheel>
        <img class="every-day" src="@static/reportForms/luckyWheel/bg_words.png" srcset="@static/reportForms/luckyWheel/bg_words@2x.png 2x,@static/reportForms/luckyWheel/bg_words@3x.png 3x"/>
        <div class="winning-record">
            <div class="header">
                本活动彩金及实物奖品有效期为7天<br/>
                请在获得奖品后尽快领取
            </div>
            <p v-if="winning_list.length != 0 && isLogin == 'yes'">中奖名单</p>
            <div class="winning-list" v-if="winning_list.length != 0 && isLogin == 'yes'">
                <ul>
                <li v-for="(item,index) in winning_list" :key="index">
                    <span>{{item.createTime}}</span>
                    <span>{{item.luckyName}}</span>
                </li>
                </ul>
            </div>
            <img v-if="winning_list.length == 0" class="pic-nohistory" src="@static/reportForms/luckyWheel/pic_nohistory.png" srcset="@static/reportForms/luckyWheel/pic_nohistory@2x.png 2x"/>

        </div>
        <img class="logo-bobo" src="@static/reportForms/luckyWheel/logo_bobo.png" srcset="@static/reportForms/luckyWheel/logo_bobo@2x.png 2x,@static/reportForms/luckyWheel/logo_bobo@3x.png 3x"/>


        </template>



        <van-dialog v-model="dialog_value"  width="21.56rem">
          <div slot="default" class="prize-box" v-if="!rule_active&&dialog_value">
            <img class="dialog-envelopes" src="@static/reportForms/luckyWheel/bump_bg.png" srcset="@static/reportForms/luckyWheel/bump_bg@2x.png 2x">
            <div class="thank-you" v-if="prize_type == 520">今日抽奖次数已用完，请明日再来哟~</div>
            <div class="thank-you" v-if="prize_type == 404">你还未登录，快去登录来抽奖吧~</div>
            <div class="thank-you" v-if="prize_type == 500">当前啵币余额不足，不可抽奖哦~</div>
            <div class="thank-you" v-if="prize_type == 501">网络繁忙，请稍后重试！</div>
            <!-- <div class="thank-you" v-if="prize_type == 0">每一次谢谢参与，都是中奖的序曲</div> -->
            <!-- <div class="thank-you" v-if="prize_type == 3 || prize_type == 6">现金奖励已自动发放到佣金钱包</div> -->
            <div class="thank-you" v-if="prize_type == 2 || prize_type == 5 || prize_type == 8 || prize_type == 11">截图此页面联系客服领取平台彩金</div>
            <div class="thank-you" v-if="prize_type == 0 || prize_type == 3 || prize_type == 6 || prize_type == 9">啵币奖励已自动发放到啵币账户</div>

            <img class="dialog-cancel" @click="cancelPrize" src="@static/reportForms/luckyWheel/icon_off.png" srcset="@static/reportForms/luckyWheel/icon_off@2x.png 2x">
          </div>

          <div slot="default" class="rule-box" v-if="rule_active&&dialog_value">
              <div class="rule-title">活动规则</div>
              <ul class="activity-description">
                <li>1.中奖结果以界面弹窗为准，获得啵币奖品时，啵币直接转入个人啵币账户；</li>
                <li>2.抽中彩金或实物奖品时请与社区在线客服申请领取，彩金只可用于游戏平台娱乐使用，不可提现，彩金收益可提现；</li>
                <li>3.抽中实物礼品的用户，请准确填写的收货信息，感谢你对本活动的支持与理解；</li>
                <li>4.任何用户或团体都不能以不正常的方式进行的投注或套取活动优惠；</li>
                <li>5.为避免文字理解差异，波波社区保留本活动最终解释权。</li>
              </ul>
              <button type="primary" size="mini" class="rule-cancel" @click="cancelPrize">确定</button>
          </div>
        </van-dialog>

    </section>
</template>

<script>
// import { LuckyWheel } from '@lucky-canvas/vue';
import { LuckyWheel } from 'vue-luck-draw';
// import { gongGeMyInfo, startGongGe, recordAppList } from '@/api/home';
export default {
    name: "turntable",
    components: { LuckyWheel },
    data() {
        return {
            blocks: [
                {
                    padding: '1.44rem',
                    imgs: [{
                        src: require('@static/reportForms/luckyWheel/wheel_bg@3x.png'),
                        width: '94.8%',
                        height: '97.8%',
                        rotate: false
                    }]
                },
                {
                    padding: '3.75rem',
                    imgs: [{
                        src: require('@static/reportForms/luckyWheel/wheel@2x.png'),
                        width: '100%',
                        height: '100%',
                        rotate: true
                    }]
                }
            ],
            prizes: [
                {
                    title: '20啵币',
                    index: 0,
                    // fonts: [{ text: '0',fontSize: '12px' }],
                    // background: '#e9e8fe'
                },
                {
                    title: '小爱同学蓝牙音箱',
                    index: 1,
                    // fonts: [{ text: '1',fontSize: '12px' }],
                    // background: '#b8c5f2'
                },
                {
                    title: '68元平台彩金',
                    index: 2,
                    // fonts: [{ text: '2',fontSize: '12px' }],
                    // background: '#e9e8fe'
                },
                {
                    title: '50啵币',
                    index: 3,
                    // fonts: [{ text: '3',fontSize: '12px' }],
                    // background: '#b8c5f2'
                },
                {
                    title: 'iPhone13 pro max 256G',
                    index: 4,
                    // fonts: [{ text: '4',fontSize: '12px' }],
                    // background: '#e9e8fe'
                },
                {
                    title: '888元平台彩金',
                    index: 5,
                    // fonts: [{ text: '5',fontSize: '12px' }],
                    // background: '#b8c5f2'
                },
                {
                    title: '188啵币',
                    index: 6,
                    // fonts: [{ text: '6',fontSize: '12px' }],
                    // background: '#e9e8fe'
                },
                {
                    title: 'SK-II神仙水套装',
                    index: 7,
                    // fonts: [{ text: '7',fontSize: '12px' }],
                    // background: '#b8c5f2'
                },
                {
                    title: '188元平台彩金',
                    index: 8,
                    // fonts: [{ text: '8',fontSize: '12px' }],
                    // background: '#e9e8fe'
                },
                {
                    title: '5啵币',
                    index: 9,
                    // fonts: [{ text: '9',fontSize: '12px' }],
                    // background: '#b8c5f2'
                },
                {
                    title: '苹果手表S6',
                    index: 10,
                    // fonts: [{ text: '10',fontSize: '12px' }],
                    // background: '#e9e8fe'
                },
                {
                    title: '18元平台彩金',
                    index: 11,
                    // fonts: [{ text: '11',fontSize: '12px' }],
                    // background: '#b8c5f2'
                }
            ],
            buttons: [
                {
                    radius: '50%',
                    imgs: [{
                        // src: '~@static/reportForms/luckyWheel/button@2x.png',
                        src: require('@static/reportForms/luckyWheel/button@2x.png'),
                        width: '100%',
                        top: '-130%'
                    }]
                }
            ],
            defaultConfig: {
                offsetDegree: 15,
                stopRange: 0.5,
                speed: 25
            },
            defaultStyle: {

            },
            // http_param: "1460114852155490304-6b54726f1256d8bdf3a583cd92da600f",
            http_param: "",
            luckyNum: 0,
            prize_type: 0,
            dialog_value: false,
            rule_active: false,
            winning_list: [
                // { createTime: '2021-10-01 21:10:01', luckyName: '10啵币' },
                // { createTime: '2021-10-01 21:10:01', luckyName: '888元平台彩金' },
                // { createTime: '2021-10-01 21:10:01', luckyName: '10啵币' },
                // { createTime: '2021-10-01 21:10:01', luckyName: '10啵币' },
                // { createTime: '2021-10-01 21:10:01', luckyName: '888元平台彩金' },
                // { createTime: '2021-10-01 21:10:01', luckyName: '10啵币' },
                // { createTime: '2021-10-01 21:10:01', luckyName: '10啵币' },
                // { createTime: '2021-10-01 21:10:01', luckyName: '888元平台彩金' },
                // { createTime: '2021-10-01 21:10:01', luckyName: '10啵币' }
            ],
            isLogin: 'yes',
            codeType: 200
        }
    },
    created() {
        this.gongGeMyInfo();
    },
    mounted() {

    },
    methods: {
        recordAppList() {
            let params = {
                pageNumber: 1,
                pageSize: 10
            }
            let res = {
                data: {
                    list: [
                        {
                            createTime: '2023-07-08 21:07',
                            luckyName: '888元平台彩金'
                        },
                        {
                            createTime: '2023-07-09 12:15',
                            luckyName: '苹果手表S6'
                        }
                    ]
                },
                code: 200
            }
            // recordAppList(params, this.$route.query.token).then((res) => {
                console.log("--recordAppList--", res)
                this.winning_list = []
                if (res.code == 200) {
                    for(let i = 0; i < res.data.list.length; i++) {
                        this.winning_list.push({
                            // createTime: this.timeTransformation(res.data.list[i].createTime),
                            createTime: res.data.list[i].createTime,
                            luckyName: res.data.list[i].luckyName
                        })
                    }
                }
                    
            // })
        },
        // timeTransformation(time) {
        //     let date = new Date(time*1000);
        //     let YY = date.getFullYear() + '-';
        //     let MM = (date.getMonth() + 1 < 10 ? '0' + (date.getMonth() + 1) : date.getMonth() + 1) + '-';
        //     let DD = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate());
        //     let hh = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        //     let mm = (date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        //     let ss = (date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds());
        //     return YY+MM + DD +" " + hh +mm + ss
        // },
        ruleOpen() {
            this.dialog_value = true;
            this.rule_active = true;
        },
        gongGeMyInfo() {
            let that = this;
            let param = {
                token: that.$route.query.token ? that.$route.query.token : that.http_param
            }
            let res = {
                data: {
                    num: 1,
                },
                code: 200
            }
            // gongGeMyInfo(param).then((res) => {
                console.log('---gongGeMyInfo----', res);
                if (res.code == 200) {
                    that.luckyNum = res.data.num;
                    that.recordAppList();
                } else if(res.code == 600001) {
                    that.isLogin = 'no'
                } else if(res.code == 500) {
                    that.codeType = 500;
                } else if(res.code == 501) {
                    that.codeType = 501;
                }
            // }).catch(() => {

            // });
        },
        startCallBack() {
            let that = this;
            if(that.isLogin == 'no') {
                that.prize_type = 404;
                that.dialog_value = true;
                return
            } else if (that.codeType == 500) {
                that.prize_type = 500;
                that.dialog_value = true;
                return
            } else if (that.codeType == 501) {
                that.prize_type = 501;
                that.dialog_value = true;
                return
            } else if (that.luckyNum == 0) {
                that.prize_type = 520;
                that.dialog_value = true;
                return
            }
            
            let param = {
                token: that.$route.query.token ? that.$route.query.token : that.http_param
            }
            let res = {
                data: {
                    awardItem: {
                        type: 6
                    }
                },
                code: 200
            }
            // startGongGe(param).then((res) => {
                console.log('---startGongGe---', res);
                if (res.code == 200) {
                    that.$refs.myLucky.play();
                    setTimeout(() => {
                        // let numstop = Math.random() * 7 >> 0;
                        let numstop = res.data.awardItem.type;
                        that.prize_type = numstop;
                        console.log('---stop----', numstop);
                        that.$refs.myLucky.stop(numstop);
                    }, 4000);
                } else if(res.code == 600001) {
                    that.prize_type = 404;
                    that.dialog_value = true;
                } else if(res.code == 500) {
                    that.prize_type = 500;
                    that.dialog_value = true;
                } else if(res.code == 501) {
                    that.prize_type = 501;
                    that.dialog_value = true;
                }
            // }).catch(() => {

            // });

        },
        endCallBack(prize) {
            this.gongGeMyInfo();
            this.recordAppList();
            setTimeout(() => {
                this.dialog_value = true;
            }, 1000);
            console.log('---endCallBack---', prize);
        },
        cancelPrize() {
            this.dialog_value = false;
            this.rule_active = false;
        }
    }
}
</script>

<style lang="scss" scoped>
#turntable {
    width: 100%;
    height: 71.5625rem;
    padding: 0 0.9375rem;
    box-sizing: border-box;
    background-image: image-set(url("~@static/reportForms/luckyWheel/bg.png") 1x, url("~@static/reportForms/luckyWheel/bg@2x.png") 2x);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .robot {
        width: 6.25rem;
        position: absolute;
        right: 1.5625rem;
        top: 15.9375rem;
    }
    .chat-box {
        padding: 0.375rem 0.9375rem 0rem 0.625rem;
        box-sizing: border-box;
        height: 2.1875rem;
        color: #6E707C;
        font-size: 0.6875rem;
        position: absolute;
        right: 6.875rem;
        top: 16.5625rem;
        background-image: image-set(url("~@static/reportForms/luckyWheel/chat_box.png") 1x, url("~@static/reportForms/luckyWheel/chat_box@2x.png") 2x, url("~@static/reportForms/luckyWheel/chat_box@3x.png") 3x);
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .saturn {
        padding: 0.3125rem;
        box-sizing: border-box;
        color: #fff;
        font-size: 0.875rem;
        font-weight: 600;
        position: absolute;
        right: 1.875rem;
        top: 12rem;
    }
    .mercury {
        width: 1.6875rem;
        height: 4.5rem;
        line-height: 1.0625rem;
        padding: 0.1875rem 0.3125rem 0 0.3125rem;
        box-sizing: border-box;
        border-top-right-radius: 0.3125rem;
        border-bottom-right-radius: 0.3125rem;
        color: #fff;
        background: #0067FF;
        font-size: 0.8125rem;
        font-weight: 600;
        position: absolute;
        left: 0rem;
        top: 20.625rem;
    }
    .lucky-wheel {
        position: absolute;
        left: 1.71rem;
        top: 20rem;
    }
    .every-day {
        width: 13.75rem;
        position: absolute;
        left: 4.8438rem;
        top: 38.625rem;
    }
    .winning-record {
        width: 21.5625rem;
        height: 22.5rem;
        background: #D2E9FF;
        border-top-left-radius: 0.3125rem;
        border-top-right-radius: 0.3125rem;
        position: absolute;
        left: 0.9375rem;
        top: 43.4375rem;
        .header {
            width: 100%;
            height: 3.75rem;
            color: #fff;
            line-height: 1.5625rem;
            font-size: 0.875rem;
            padding: 0.375rem 0 0 0;
            box-sizing: border-box;
            background-image: image-set(url("~@static/reportForms/luckyWheel/title_box.png") 1x, url("~@static/reportForms/luckyWheel/title_box@2x.png") 2x, url("~@static/reportForms/luckyWheel/title_box@3x.png") 3x);
            background-repeat: no-repeat;
            background-size: 100% 100%;
        }
        p {
          width: 100%;
          height: 2rem;
          line-height: 2rem;
          text-align: center;
          color: #0073FF;
          font-weight: 600;
          margin-bottom: 0.3rem;
        }
        .winning-list {
          width: 100%;
          height: 15.625rem;
          overflow-y: auto;
          padding: 0 0.9375rem;
          box-sizing: border-box;
          ul {
            width: 100%;
            padding: 0;
            margin: 0;
            li {
              width: 100%;
              height: 2rem;
              line-height: 2rem;
              list-style: none;
              text-align: left;
              color: #0073FF;
              font-size: 0.9rem;
              span:nth-of-type(1){
                float: left;
                margin-left: 0.3rem;
              }
              span:nth-of-type(2){
                float: right;
                margin-right: 0.3rem;
              }
            }
          }
        }
        .pic-nohistory {
            width: 15rem;
            position: absolute;
            left: 3.2813rem;
            top: 3.4375rem;
        }
    }
    .logo-bobo {
        width: 7.25rem;
        position: absolute;
        left: 8rem;
        top: 68.125rem;
    }
    .rule-box {
        width: 100%;
        height: 28.75rem;
        background: #D2E9FF;
        position: relative;
        .rule-title {
            width: 100%;
            height: 2.5rem;
            text-align: center;
            line-height: 3.125rem;
            color: #0073FF;
            font-size: 0.9375rem;
            font-weight: 600;
        }
        .rule-cancel {
            font-size: 0.8125rem;
            background: #0073FF;
            position: absolute;
            left: 8.9375rem;
            top: 25.3125rem;
        }
        .activity-description {
            width: 100%;
            height: 22.5rem;
            padding: 0 1.875rem;
            box-sizing: border-box;
            margin: 0;
            li {
                width: 100%;
                float: left;
                padding: 0.3125rem 0;
                box-sizing: border-box;
                color: #0073FF;
                font-size: 0.875rem;
                text-align: left;
                line-height: 1.75rem;
                font-weight: normal;
            }
        }
    }
    /deep/ .van-dialog {
      background: none;
      .van-dialog__header {
        display: none;
      }
      .van-dialog__content {
        
        .prize-box {
            height: 16.25rem;
            position: relative;
            .dialog-envelopes {
                width: 100%;
                position: absolute;
                left: 0rem;
                top: 0rem;
            }
            .thank-you {
                width: 100%;
                text-align: center;
                font-size: 0.9375rem;
                color: #7B98EA;
                position: absolute;
                left: 0rem;
                top: 5.625rem;
            }
            .dialog-cancel {
                width: 1.875rem;
                height: 1.875rem;
                position: absolute;
                left: 9.6875rem;
                top: 12.5rem;
            }
        }
        
      }
      .van-dialog__footer {
        display: none;
      }
    }
}
</style>


