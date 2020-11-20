<template>
  <div id="app">
    <router-view></router-view>
    <game-theme ref="subject" :subject="false" v-show="subject" @interaction="setMove"></game-theme>
    <div class="advertisement" v-show="notice_active">
      <div class="message-tips">
        <span v-show="play_info" class="laba-quality">
          <img src="../static/picture/home/laba.png">
        </span>
        <span v-show="play_info" class="word-quality">最新公告&nbsp;:</span>
        <div class="flash-quality" v-show="play_info">
          <div v-html="timer_content" class="move-left" :style="{width:timer_width+'px'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      subject: true,
      notice_active: false,
      play_info: false,
      timer: null,
      timer_width: 0,
      timer_content: "",
      timer_list: []
    };
  },
  watch: {
    $route(to, from) {
      if (to.path == "/neutralgear") {
        this.subject = false;
      } else {
        this.subject = true;
        this.$refs.subject.changeMeans();
      }
      if (to.path == "/home") {
        this.notice_active = true;
      } else {
        this.notice_active = false;
      }
      // console.log('watch~~~',to,from);
      if (to.path == "/game") {
        // purpleMagic(3);
        window.dispatchEvent(new Event("resize"));
      } else {
        // purpleMagic(2);
      }

      if (from.path == "/register") {
        //console.log('退出注册');
        let that = this;
        that.$means.amateur_register_exit();
        // that.$means.amateur_exit(function(){});
        // that.$means.amateur_exit_scene(function(value){});
      }
    },
    timer_list(cur, old) {
      // console.log('current&&',this.timer,this.timer_list.length);
      if (this.timer == null && this.timer_list.length != 0) {
        // console.log('start')
        this.play_info = true;
        this.timer_content = this.timer_list[0];
        this.timer = setInterval(this.timerMeans1, 200);
      }
    }
  },
  methods: {
    timerMeans1() {
      if (this.timer_width > 1500) {
        this.clearTimer();
        this.timer_list.shift();
        // console.log('stop111',this.timer);
      } else {
        this.timer_width += 30;
        // console.log('width##',this.timer_width);
      }
    },
    clearTimer() {
      clearInterval(this.timer);
      this.timer = null;
      this.timer_width = 0;
      this.play_info = false;
    },
    setMove(value) {
      // if(!value){
      //     var value = "赌圣<font color='#23f0fd' size='26'> 机器人1273 </font>出手不凡，在<font color='#ffe400' size='26'> 龙虎斗彩票场 </font>赢得<font color='#fe0b0b' size='26'> 16711.5 </font>奖金，大吉大利 今晚吃鸡!";
      // }
      var that = this;
      value = value.replace(" size='26'", "");
      value = value.replace(" size='26'", "");
      value = value.replace(" size='26'", "");
      value = value.replace("#fe0b0b", "#070707");
      that.timer_list.push(value);
    }
  }
};
</script>


<style lang="less">
@import "./assets/app.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 14px !important;
  color: #2c3e50;
}

.advertisement {
  width: 100%;
  height: 35px;
  .mixin_image(url("../static/picture/home/gonggaotiao.png"));
  position: absolute;
  left: 0px;
  top: 653px;
  .message-tips {
    width: 1200px;
    height: 35px;
    margin: 0 auto;
    position: relative;
    .laba-quality {
      .mixin_span(25px, 35px, none, auto, center);
      margin-right: 16px;
      line-height: 0px;
      padding-top: 5px;
      box-sizing: border-box;
      position: absolute;
      top: 0px;
      left: 0px;
      img {
        .mixin_img(25px, 25px);
      }
    }
    .word-quality {
      .mixin_span(auto, 35px, none, @color_tone1, left);
      position: absolute;
      top: 0px;
      left: 41px;
    }
    .flash-quality {
      .mixin_span(1000px, 35px, none, @color_white, left);
      position: absolute;
      top: 0px;
      left: 131px;
      overflow: hidden;
      .move-left {
        width: 0px;
        height: 35px;
        float: right;
        text-indent: 1px;
        text-align: left;
        overflow: hidden;
      }
    }
  }
}
</style>
