<template>
  <section id="luckDraw">
    <img
      class="words"
      src="@static/reportForms/luckDraw/words.png"
      srcset="@static/reportForms/luckDraw/words@2x.png 2x"
      alt
    >
    <img
      class="rabbit-icon"
      src="@static/reportForms/luckDraw/tworabbit.png"
      srcset="@static/reportForms/luckDraw/tworabbit@2x.png 2x"
      alt
    >
    <LuckyGrid
      ref="LuckDraw"
      class="lucky-grid"
      width="21.56rem"
      height="21.56rem"
      :prizes="prizes"
      :buttons="buttons"
      :blocks="blocks"
      :default-config="defaultConfig"
      :default-style="defaultStyle"
      :active-style="activeStyle"
      @start="startCallBack"
      @end="endCallBack"
    />
    <div class="chance-times">
      <span>还剩抽奖机会</span>
      <span>{{luckyNum}}</span>
    </div>

    <upAndDown></upAndDown>

    <van-dialog v-model="dialog_value" width="21.56rem">
      <div slot="default">
        <img
          class="dialog-envelopes"
          src="@static/reportForms/luckDraw/red_bag_pic.png"
          srcset="@static/reportForms/luckDraw/red_bag_pic@2x.png 2x"
          alt
        >
        <div v-if="prize_type == 4" class="missed-text">
          谢谢参与
          <br>请下次再来
        </div>
        <div v-if="prize_type == 6" class="once-more">请再来一次</div>
        <div v-if="prize_type == 2" class="experience-gold">
          恭喜您中奖！
          <br>
          <p>
            截屏此页面发给客服
            <br>领取您的奖励吧
            <br>一个账号只能领取一次
          </p>
          <a href="https://gnxkf.com/kefu/60eaab1418a2f">
            <button>联系客服</button>
          </a>
        </div>
        <div
          v-if="prize_type == 1 || prize_type == 3 || prize_type == 5 || prize_type == 7"
          class="win-the-prize"
        >
          恭喜您中奖！
          <br>
          <span>积分已经发放到您的账户!</span>
        </div>
        <img
          class="dialog-cancel"
          @click="cancelPrize"
          src="@static/reportForms/luckDraw/icon_off.png"
          srcset="@static/reportForms/luckDraw/icon_off@2x.png 2x"
          alt
        >
      </div>
    </van-dialog>
  </section>
</template>

<script>
// LuckyWheel
import { LuckyGrid } from "vue-luck-draw";
import { luckyDrawMyInfo, startLuckyDraw } from "./api";
import { Dialog } from "vant";
import upAndDown from "./upAndDown.vue";
export default {
  name: "luckDraw",
  components: { LuckyGrid, upAndDown },
  data() {
    return {
      luckyNum: 3,
      prizes: [],
      blocks: [
        {
          padding: this.conversion(0.7) + "px",
          background: "#B1781A",
          borderRadius: 10
        },
        {
          padding: this.conversion(0.5) + "px",
          background: "#E4A63F",
          borderRadius: 8
        },
        {
          padding: this.conversion(0.2) + "px",
          background: "#E4A63F",
          borderRadius: 8
        }
      ],
      defaultConfig: {
        gutter: this.conversion(0.64),
        decelerationTime: 5000
      },
      defaultStyle: {
        borderRadius: this.conversion(1.37),
        fontColor: "",
        fontSize: this.conversion(0.875) + "px",
        textAlign: "center",
        background: ""
        // shadow: '0 5 1 #ebf1f4'
      },
      activeStyle: {
        // background: 'url(@static/reportForms/luckDraw/choujiang_button_on.png)',
        background: "linear-gradient(270deg, #FB0F0F, #FA9E9E)",
        fontColor: "#E61F49",
        fontSize: this.conversion(1.3) + "px",
        shadow: "0 4 0.6 #F02B71"
      },
      dialog_value: false,
      prize_type: 0,
      http_param: "", // 1373654697570729984   1424983682266955776
      host_name: window.location.hostname == "localhost" ? "localhost" : ""
    };
  },
  computed: {
    buttons() {
      return this.luckyNum == 0
        ? [
            {
              x: 1,
              y: 1,
              // background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
              // shadow: '0 5 1 #e89b4f',
              // fonts: [
              //   { text: `${this.luckyNum} 次`, fontColor: '#fff', top: '73%', fontSize: '11px' },
              // ],
              imgs: [
                {
                  src: require("@static/reportForms/luckDraw/lijichoujiang_banned.png"),
                  width: "100%",
                  height: "100%",
                  top: "0%"
                }
              ]
            }
          ]
        : [
            {
              x: 1,
              y: 1,
              imgs: [
                {
                  src: require("@static/reportForms/luckDraw/choujiang_button_on.png"),
                  width: "100%",
                  height: "100%",
                  top: "0%"
                }
              ]
            }
          ];
    }
  },
  created() {
    console.log("--hostname--", this.$route, this.$route.query.userId);
    this.getPrizeList();
    if (this.host_name != "localhost") {
      this.luckyDrawMyInfo();
    }
  },
  mounted() {
    // window.onresize = function () {
    //   location.reload();
    // }
  },
  methods: {
    luckyDrawMyInfo() {
      let that = this;
      let param = {
        userId: that.$route.query.userId
          ? that.$route.query.userId
          : that.http_param
      };
      luckyDrawMyInfo(param)
        .then(res => {
          if (res.data.code == 200) {
            that.luckyNum = res.data.data.num;
          }
        })
        .catch(() => {});
    },
    startLuckyDraw() {
      let that = this;
      let param = {
        userId: that.$route.query.userId
          ? that.$route.query.userId
          : that.http_param
      };
      startLuckyDraw(param)
        .then(res => {
          if (res.data.code == 200) {
            setTimeout(() => {
              // let numstop = Math.random() * 7 >> 0;
              let numstop = res.data.data.awardItem.type;
              that.prize_type = numstop;
              console.log("---stop----", numstop);
              that.$refs.LuckDraw.stop(numstop);
            }, 2000);
          }
        })
        .catch(() => {});
    },
    getPrizeList() {
      // 模拟接口请求奖品列表
      setTimeout(() => {
        const data = [
          {
            name: "",
            fonts_top: "",
            imgs_width: "100%",
            imgs_height: "100%",
            imgs_top: "0%",
            img: require("@static/reportForms/luckDraw/phone.png")
          },
          {
            name: "300",
            fonts_top: "65%",
            imgs_width: "100%",
            imgs_height: "100%",
            imgs_top: "0%",
            img: require("@static/reportForms/luckDraw/jifen_button.png")
          },
          {
            name: "",
            fonts_top: "65%",
            imgs_width: "100%",
            imgs_height: "100%",
            imgs_top: "0%",
            img: require("@static/reportForms/luckDraw/pingtai.png")
          },
          {
            name: "100",
            fonts_top: "65%",
            imgs_width: "100%",
            imgs_height: "100%",
            imgs_top: "0%",
            img: require("@static/reportForms/luckDraw/jifen_button.png")
          },
          {
            name: "",
            fonts_top: "65%",
            imgs_width: "70%",
            imgs_height: "70%",
            imgs_top: "14.5%",
            img: require("@static/reportForms/luckDraw/thanks_join.png")
          },
          {
            name: "200",
            fonts_top: "65%",
            imgs_width: "100%",
            imgs_height: "100%",
            imgs_top: "0%",
            img: require("@static/reportForms/luckDraw/jifen_button.png")
          },
          {
            name: "",
            fonts_top: "65%",
            imgs_width: "100%",
            imgs_height: "100%",
            imgs_top: "0%",
            img: require("@static/reportForms/luckDraw/once_again.png")
          },
          {
            name: "50",
            fonts_top: "65%",
            imgs_width: "100%",
            imgs_height: "100%",
            imgs_top: "0%",
            img: require("@static/reportForms/luckDraw/jifen_button.png")
          }
        ];
        const prizes = [];
        let axis = [
          [0, 0],
          [1, 0],
          [2, 0],
          [2, 1],
          [2, 2],
          [1, 2],
          [0, 2],
          [0, 1]
        ];
        for (let i = 0; i < 8; i++) {
          let item = data[i];
          prizes.push({
            index: i,
            x: axis[i][0],
            y: axis[i][1],
            // background: 'url(' + item.img + ')',
            background: "#fff",
            fonts: [
              {
                text: item.name,
                top: item.fonts_top,
                fontSize: this.conversion(1.3) + "px",
                fontWeight: 700
              }
            ],
            imgs: [
              {
                src: item.img,
                width: item.imgs_width,
                height: item.imgs_height,
                top: item.imgs_top
              }
            ]
          });
        }
        this.prizes = prizes;
      }, 0);
    },
    startCallBack() {
      if (!this.luckyNum) {
        Dialog.alert({
          message: "还剩0次抽奖机会",
          className: "sure-dialog"
        }).then(() => {
          // on close
        });
        return;
      }
      if (this.host_name == "localhost") {
        this.$refs.LuckDraw.play();
        setTimeout(() => {
          let numstop = (Math.random() * 7) >> 0;
          this.prize_type = numstop;
          console.log("---stop--2--", numstop);
          this.$refs.LuckDraw.stop(numstop);
        }, 2000);
        return;
      }
      this.$refs.LuckDraw.play();
      this.startLuckyDraw();
    },
    endCallBack(prize) {
      console.log("prize&", prize);
      this.dialog_value = true;
      // alert(`恭喜你获得大奖: ${prize.fonts[0].text}`)
      if (this.host_name == "localhost") {
        this.luckyNum--;
      } else {
        this.luckyDrawMyInfo();
      }
    },
    conversion(num) {
      return num * Number(sessionStorage.getItem("pixelSize"));
    },
    cancelPrize() {
      this.dialog_value = false;
    }
  }
};
</script>

<style lang="less" scoped>
#luckDraw {
  width: 100%;
  height: 59.56rem;
  -background: url("~@static/reportForms/luckDraw/choujiang_bg.png");
  background-image: image-set(
    url("~@static/reportForms/luckDraw/choujiang_bg.png") 1x,
    url("~@static/reportForms/luckDraw/choujiang_bg@2x.png") 2x
  );
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;
  /deep/ .van-dialog {
    background: none;
    .van-dialog__header {
      display: none;
    }
    .van-dialog__content {
      height: 25rem;
      position: relative;
      .dialog-envelopes {
        width: 100%;
        height: 20.65rem;
        position: absolute;
        left: 0rem;
        top: 0rem;
      }
      .missed-text {
        width: 100%;
        height: 7rem;
        font-size: 2rem;
        color: #fedc02;
        position: absolute;
        left: 0rem;
        top: 11.6rem;
      }
      .once-more {
        width: 100%;
        height: 7rem;
        line-height: 5.3rem;
        font-size: 1.8rem;
        color: #fedc02;
        position: absolute;
        left: 0rem;
        top: 11.6rem;
      }
      .win-the-prize {
        width: 100%;
        height: 7rem;
        font-size: 1.6rem;
        color: #fedc02;
        position: absolute;
        left: 0rem;
        top: 11.6rem;
        span {
          font-size: 1rem;
          color: #fff;
        }
      }
      .experience-gold {
        width: 100%;
        height: 10rem;
        font-size: 1.2rem;
        color: #fedc02;
        position: absolute;
        left: 0rem;
        top: 10.6rem;
        p {
          font-size: 0.8rem;
          color: #fff;
          margin: 0.5rem 0 0.5rem 0;
          line-height: 1.3rem;
        }
        button {
          width: 6rem;
          height: 1.4rem;
          line-height: 1.4rem;
          color: #3b3a3a;
          font-size: 0.8rem;
          border-radius: 0.8rem;
          background: #ffde02;
          border: none;
          outline: none;
        }
      }
      .dialog-cancel {
        width: 1.93rem;
        height: 1.93rem;
        position: absolute;
        left: 9.2rem;
        top: 22rem;
      }
    }
    .van-dialog__footer {
      display: none;
    }
  }
  .lucky-grid {
    position: absolute;
    left: 0.9375rem;
    top: 16rem;
  }
  .words {
    width: 20.93rem;
    height: 8.12rem;
    position: absolute;
    left: 1.25rem;
    top: 5.2rem;
  }
  .rabbit-icon {
    width: 6.25rem;
    height: 4.68rem;
    position: absolute;
    left: 0.9375rem;
    top: 11.5rem;
  }
  .chance-times {
    width: 15rem;
    height: 3.75rem;
    background-image: image-set(
      url("~@static/reportForms/luckDraw/chance_times.png") 1x,
      url("~@static/reportForms/luckDraw/chance_times@2x.png") 2x
    );
    background-repeat: no-repeat;
    background-size: 100% 100%;
    padding: 0.88rem 0.5rem 0 5rem;
    box-sizing: border-box;
    position: absolute;
    left: 4.21rem;
    top: 39rem;
    span:nth-of-type(1) {
      font-size: 1rem;
      color: #fff;
      float: left;
    }
    span:nth-of-type(2) {
      width: 2.54rem;
      height: 1.75rem;
      text-align: center;
      line-height: 1.75rem;
      display: inline-block;
      font-size: 1.25rem;
      color: #e9840d;
      font-weight: 700;
      float: right;
    }
  }
}
</style>

