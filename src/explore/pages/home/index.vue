<template>
  <section id="home">
    <div
      class="cover-up"
      :style="{height: cover_height}"
      v-show="cover_active"
      @click="judgeToken()"
    ></div>
    <div class="header-info">
      <div class="head-content">
        <div class="reserve">
          <ul>
            <li
              v-for="(item,index) in header_list"
              :class="{'reserve-border':index!=2}"
              @click="lineMeans(index)"
            >{{item.title}}</li>
          </ul>
        </div>
        <div class="scenery-login" v-if="safeActive">
          <input
            class="nickname"
            v-model.trim="account_number"
            type="text"
            placeholder="账号"
            maxlength="20"
          >
          <input
            class="password"
            type="password"
            v-model.trim="password_number"
            placeholder="密码"
            maxlength="12"
            autocomplete="new-password"
            @keyup.enter="signIn"
          >
          <button class="sign-in" @click="signIn"></button>
          <button class="register" @click="registerMeans"></button>
        </div>
        <div class="recharge-example" v-if="!safeActive">
          <div class="example-contain">
            <button class="drawing" @click="rechargeMeans(2)"></button>
            <button class="recharge" @click="rechargeMeans(1)"></button>
            <span class="exit-login" @click="safeExit()">安全退出</span>
            <div class="balance">
              <span>余额&nbsp;:</span>
              <span>￥{{money}}</span>
            </div>
            <div class="welcome">
              <span>欢迎你,{{player_info.nickname}}</span>
              <img src="@static/picture/home/zhanghu.png">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="navigation-bar">
      <div class="tabs-content">
        <div class="tabs-left">
          <img src="@static/picture/home/logo3.png">
        </div>
        <div class="tabs-right">
          <ul v-if="player_info.mIsAgent">
            <li
              style="width: 14.28%;"
              v-for="(item,index) in tabs_bar"
              :class="{'tabs-active':item.active}"
              @click="tabBarChange(index,item.exhibition,item.path)"
            >{{item.title}}</li>
          </ul>
          <ul v-else>
            <li
              style="width: 16.66%;"
              v-for="(item,index) in tabs_bar"
              v-if="item.title!='代理系统'"
              :class="{'tabs-active':item.active}"
              @click="tabBarChange(index,item.exhibition,item.path)"
            >{{item.title}}</li>
          </ul>
        </div>
      </div>
    </div>
    <template>
      <!-- 
        keep-alive组件缓存，从而节省性能
        keep-alive内路由跳转切换组件时，触发的生命周期钩子函数：activated创建、deactivated销毁
        
        局部组件缓存
          1. keep-alive标签属性：
            :include="['组件name']" 当前需要缓存的组件
            :exclude="['组件name']" 当前不需要缓存的组件
          2. v-if控制keep-alive出现       在路由文件加参数meta: {keepAlive: true}

        全局缓存：别加keep-alive标签属性，别加v-if

        注意：加了keep-alive组件缓存缓存后，created不再触发，activated触发
      -->
      <keep-alive>
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>

    </template>

    <div class="fixed-bar" v-show="fixed_state">
      <ul>
        <li
          v-for="(item,index) in fixed_bar"
          @click="fixedMeans(index)"
          @mouseover="fixedOver(index)"
          @mouseout="fixedOut(index)"
        >
          <img :src="item.url">
        </li>
      </ul>
    </div>

    <recharge ref="recharge"></recharge>
    <withdrawal ref="withdrawal"></withdrawal>
    <manage-bank ref="manageBank"></manage-bank>
    <add-bank ref="addBank"></add-bank>
    <manage-alipay ref="manageAlipay"></manage-alipay>
    <add-alipay ref="addAlipay"></add-alipay>
    <know ref="know"></know>
    <recharge-record ref="rechargeRecord"></recharge-record>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "home",
  data() {
    return {
      header_list: [
        { title: "优惠活动大厅" },
        { title: "下载中心" },
        { title: "线路检测" }
      ],
      tabs_bar: [
        { title: "首页", active: false, exhibition: true, path: "/home/homeIndex" },
        {
          title: "电子竞技",
          active: false,
          exhibition: false,
          path: "/home/lottery"
        },
        {
          title: "真人娱乐",
          active: false,
          exhibition: false,
          path: "/home/realperson"
        },
        {
          title: "体育竞技",
          active: false,
          exhibition: false,
          path: "/home/sports"
        },
        {
          title: "优惠活动",
          active: false,
          exhibition: false,
          path: "/videogame"
        },
        {
          title: "代理系统",
          active: false,
          exhibition: true,
          path: "/home/agentsystem"
        },
        { title: "管理中心", active: false, exhibition: true, path: "/home/managementCenter/crux" }
      ],
      fixed_bar: [
        { url: require("@static/picture/home/jiangyuan-nomal.png") },
        { url: require("@static/picture/home/kefu_nomal.png") },
        { url: require("@static/picture/home/zhiding_nomal.png") }
      ],
      fixed_state: true,
      safeActive: false,
      account_number: "", //登陆账号
      password_number: "", //登陆密码
      cover_height: "0px",
      cover_active: false
    };
  },
  created() {
    this.sailKey(this.$route.meta.key);
  },
  mounted() {
    var that = this;
    window.onresize = function temp5() {
      let overallApp = document.getElementById("home");
      if (overallApp != null && that.cover_active == true) {
        that.coverMeans();
      }
    };
  },
  computed: {
    ...mapGetters(["player_info", "money"])
  },
  watch: {
    $route(to, from) {
      this.tabEmptyActive();
      this.sailKey(to.meta.key);
      if (to.path == "/game") {
        this.fixed_state = false;
      } else {
        this.fixed_state = true;
      }
    },
    password_number(cur, old) {
      if (/[^A-z0-9]/.test(cur)) {
        this.$message.error("不能输入特殊字符！");
        this.password_number = cur.replace(/[^A-z0-9]/, "");
      }
    }
  },
  methods: {
    sailKey(value) {
      if(value!=404){
        this.tabs_bar[value].active = true;
      }
    },
    coverMeans() {
      let cover = document.body.clientHeight - 50;
      this.cover_height = cover + "px";
    },
    judgeToken() {
      this.$means.judgeToken();
    },
    hostMeans(value, response, count) {
      if (value == "managebank") {
        this.$refs.manageBank.changeMeans();
      } else if (value == "addbank") {
        this.$refs.addBank.changeMeans();
      } else if (value == "managealipay") {
        this.$refs.manageAlipay.changeMeans();
      } else if (value == "addalipay") {
        this.$refs.addAlipay.changeMeans();
      } else if (value == "know") {
        this.$refs.know.changeMeans(response);
      } else if (value == "mail") {
        if (response == "get") {
          this.$refs.mail.getJson();
        } else if (response == "readed") {
          this.count_readed = count;
        } else {
          this.$refs.consult.changeMeans("mail", response);
        }
      } else if (value == "notice") {
        if (response == "get") {
          this.$refs.notice.getJson();
        } else {
          this.$refs.consult.changeMeans("notice", response);
        }
      } else if (value == "withdrawal") {
        if (response == "bank") {
          this.$refs.withdrawal.getBankJson();
        } else if (response == "alipay") {
          this.$refs.withdrawal.getAlipayJson();
        }
      } else if (value == "portrait") {
        if (response == "head") {
          this.portrait.head = count;
        } else if (response == "frame") {
          this.portrait.frame = count;
        }
      } else if (value == "rechargerecord") {
        this.$refs.rechargeRecord.changeMeans();
      }
    },
    rechargeMeans(index) {
      if (index == 1) {
        this.$refs.recharge.changeMeans();
      } else if (index == 2) {
        this.$refs.withdrawal.changeMeans(this.money);
      }
    },
    tabBarChange(index, show, value) {
      if (show) {
        this.tabEmptyActive();
        this.tabs_bar[index].active = true;
        this.$router.push({ path: value });
      } else {
        this.$message.success("敬请期待！");
      }
    },
    tabEmptyActive() {
      for (let i = 0; i < this.tabs_bar.length; i++) {
        this.tabs_bar[i].active = false;
      }
    },
    //返回顶部
    backTop() {
      let scrollHight = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
      console.log('滚动条高度=',document.documentElement.scrollTop, document.body.scrollTop, window.pageYOffset)
      if (scrollHight > 50) {
        document.documentElement.scrollTop = document.body.scrollTop =
          scrollHight - 100;
        setTimeout(() => {
          this.backTop();
        }, 2);
      } else {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
      }
    },
    //固定定位
    fixedMeans(index) {
      if (index == 0) {
        window.open("https://www.manycai.com/index/index");
      } else if (index == 1) {
        if (this.player_info.sex == 1) {
          var sex = "男";
        } else if (this.player_info.sex == 2) {
          var sex = "女";
        }
        let json = {
          enterurl: window.location.host + this.$route.path,//当前网址
          userId: this.player_info.mShowUid, //用户id
          loginname: this.player_info.loginame, //登录名
          grade: this.player_info.vip, //用户等级
          // name: this.player_info.nickname, //用户名称
          name: this.player_info.mShowUid, //用户id
          gender: sex, //性别
          mobileNo: "", //手机号
          memo: "备注信息", //备注信息
          hashCode: "", //用于防篡改的hash码
          timestamp: new Date().getTime(), //当前时间戳
          key: "live800Key" //你在live800设置的加密key
        };
        json.hashCode = this.$md5(
          encodeURIComponent(
            json.enterurl +
              json.userId +
              json.loginname +
              json.grade +
              json.name +
              json.gender +
              json.mobileNo +
              json.memo +
              json.hashCode +
              json.timestamp +
              json.key
          ).toUpperCase()
        ).toUpperCase();
        //encode()
        //encodeURI()
        let infoValue =
          "userId=" +
          json.userId +
          "&loginname=" +
          json.loginname +
          "&grade=" +
          json.grade +
          "&name=" +
          json.name +
          "&gender=" +
          json.gender +
          "&mobileNo=" +
          json.mobileNo +
          "&memo=" +
          json.memo +
          "&hashCode=" +
          json.hashCode +
          "&timestamp=" +
          json.timestamp +
          "&key=" +
          json.key;
        window.open(
            "https://nine.mdihi.com/chat/chatClient/chatbox.jsp?companyID=365033539&configID=2306&jid=4095904748&s=1&enterurl=&codeType=custom&info=" +
            encodeURIComponent(infoValue)
        );
        // window.open("https://chat32.live800.com/live800/chatClient/chatbox.jsp?companyID=12698&enterurl=&codeType=custom&info=userId%3D440297033%26loginname%3Dtest28%26name%3DtestN28%26timestamp%3D1563358352994%26key%3Dlive800Key&s=1");
      } else if (index == 2) {
        this.backTop();
      }
    },
    fixedOver(index) {
      if (index == 0) {
        this.fixed_bar[index].url =
          require("@static/picture/home/jiangyuan-hover.png");
      } else if (index == 1) {
        this.fixed_bar[index].url = require("@static/picture/home/kefu_hover.png");
      } else if (index == 2) {
        this.fixed_bar[index].url = require("@static/picture/home/zhiding_hover.png");
      }
    },
    fixedOut(index) {
      if (index == 0) {
        this.fixed_bar[index].url =
          require("@static/picture/home/jiangyuan-nomal.png");
      } else if (index == 1) {
        this.fixed_bar[index].url = require("@static/picture/home/kefu_nomal.png");
      } else if (index == 2) {
        this.fixed_bar[index].url = require("@static/picture/home/zhiding_nomal.png");
      }
    },
    safeExit() {
      var that = this;
      that.$means.amateur_exit(function() {
        that.account_number = "";
        that.password_number = "";
        that.safeActive = true;
        sessionStorage.removeItem("token");
        that.cover_active = true;
        that.coverMeans();
      });
    },
    registerMeans() {
      this.$router.push({ path: "/register" });
    },
    signIn() {
      var that = this;
      if (that.account_number == "" && that.password_number == "") {
        that.$message.error("请输入账号和密码!");
        return;
      } else if (that.account_number == "") {
        that.$message.error("请输入账号!");
        return;
      } else if (that.password_number == "") {
        that.$message.error("请输入密码!");
        return;
      }
      that.$means.amateur_login(
        that.account_number,
        that.password_number,
        window.location.host,
        function() {
          that.$store.dispatch("getPlayerInfo", that.$means.amateur_getPlayer());
          if(that.$cookies.get("account")){
            that.$cookies.set("account",that.account_number,"1m");
            that.$cookies.set("password",that.password_number,"1m");
          }
          sessionStorage.setItem("account_number", that.account_number);
          sessionStorage.setItem("password_number", that.password_number);
          that.safeActive = false;
          that.cover_active = false;
        }
      );
    },
    lineMeans(index) {
      this.$message.success("敬请期待！");
      // this.$means.judgeToken();
      // if (index == 2 && this.$means.judgeToken() != false) {
      //   this.$message.success("敬请期待！");
      //   // this.$router.push({ path: "/line" });
      // }else if (index == 1 && this.$means.judgeToken() != false) {
      //   this.$router.push({ path: "/download" });
      // }else{
      //   this.$message.success("敬请期待！");
      // }
    }
  }
};
</script>


<style lang="less" scoped>
#home {
  width: 100%;
  overflow-x: hidden;
  .cover-up {
    width: 100%;
    position: fixed;
    top: 50px;
    left: 0px;
    z-index: 999;
  }
  .tabs-active {
    color: #ffea00;
    .mixin_image(url("~@static/picture/home/tabs_active.png"));
    font-size: @font_size16;
  }
  .fixed-bar {
    width: 136px;
    height: 180px;
    .mixin_image(url("~@static/picture/home/xuanfuchuang.png"));
    border-radius: 4px;
    position: fixed;
    right: 20px;
    top: 400px;
    z-index: 10;
    ul {
      li {
        .mixin_li(135px, 53px);
        cursor: pointer;
        padding: 15px 33px;
      }
      li:nth-of-type(1) {
        height: 73px;
        padding: 5px 25px;
        img {
          .mixin_img(100%, 100%);
          float: left;
        }
      }
      li:nth-of-type(2) {
        height: 53px;
        img {
          .mixin_img(100%, 100%);
          float: left;
        }
      }
      li:nth-of-type(3) {
        height: 53px;
        img {
          .mixin_img(100%, 100%);
          float: left;
        }
      }
    }
  }

  .header-info {
    width: 100%;
    height: 50px;
    background: #210723;
    .head-content {
      width: 1200px;
      height: 50px;
      margin: 0 auto;
      color: @color_tone1;
      line-height: 50px;
      overflow: hidden;
      .reserve {
        .mixin_float(auto, 100%, left);
        padding: 17px 0px 0px 0px;
        .reserve-border {
          border-right: 1px solid @color_tone1;
        }
        ul {
          height: 15px;
          li {
            .mixin_li(auto, 15px);
            padding: 0px 12px;
            cursor: pointer;
          }
          li:nth-of-type(1) {
            padding: 0px 12px 0px 0px;
          }
          li:hover {
            color: #eb2020;
          }
        }
      }
      .scenery-login {
        .mixin_float(10px, 50px, right);
        position: relative;
        .nickname,
        .password {
          position: absolute;
          top: 8px;
          .mixin_input(180px, 32px);
          float: left;
          background: #3d1351;
          color: #ac24df;
          border: 1px solid #913cc9;
        }
        .nickname {
          right: 378px;
        }
        .password {
          right: 188px;
        }
        .sign-in {
          .mixin_button(84px, 34px, none, auto);
          position: absolute;
          right: 94px;
          top: 8px;
          .mixin_image(url("~@static/picture/home/dengru_nomal.png"));
        }
        .sign-in:hover {
          .mixin_image(url("~@static/picture/home/dengru_hover.png"));
        }
        .register {
          .mixin_button(84px, 34px, none, auto);
          position: absolute;
          right: 0px;
          top: 8px;
          .mixin_image(url("~@static/picture/home/zhuce_nomal.png"));
        }
        .register:hover {
          .mixin_image(url("~@static/picture/home/zhuce_hover.png"));
        }
      }
      .recharge-example {
        .mixin_float(260px, 50px, right);
        position: relative;
        .example-contain {
          width: 800px;
          height: 50px;
          position: absolute;
          top: 0px;
          left: -541px;
          overflow: hidden;
          .welcome {
            .mixin_float(auto, 100%, right);
            margin-right: 15px;
            img {
              .mixin_img(14px, 14px);
              margin: 17px 8px 0px 0px;
              float: right;
            }
            span {
              .mixin_span(auto, 50px, none, @color_tone1, left);
              float: right;
            }
          }
          .balance {
            .mixin_div(auto, 50px, none, #732c94, left);
            float: right;
          }
          .exit-login {
            .mixin_span(auto, 50px, none, #eb2020, left);
            text-decoration: underline;
            float: right;
            margin-left: 15px;
            cursor: pointer;
          }
          .recharge {
            margin: 8px 0px 0px 15px;
            .mixin_button(84px, 34px, none, @color_white);
            float: right;
            border-radius: 4px;
            cursor: pointer;
            .mixin_image(url("~@static/picture/home/chongzhiup_nomal.png"));
          }
          .recharge:hover {
            .mixin_image(url("~@static/picture/home/chongzhiup_hover.png"));
          }
          .drawing {
            margin: 8px 0px 0px 10px;
            .mixin_button(84px, 34px, none, @color_white);
            float: right;
            cursor: pointer;
            border-radius: 4px;
            .mixin_image(url("~@static/picture/home/tikuan_nomal.png"));
          }
          .drawing:hover {
            .mixin_image(url("~@static/picture/home/tikuan_hover.png"));
          }
        }
      }
    }
  }

  .navigation-bar {
    width: 100%;
    height: 95px;
    .mixin_image(url("~@static/picture/home/tab_image.png"));
    .tabs-content {
      width: 1200px;
      height: 95px;
      margin: 0 auto;
      .tabs-left {
        .mixin_float(200px, 100%, left);
        position: relative;
        img {
          .mixin_img(250px, 70px);
          position: absolute;
          top: 11px;
          left: -46px;
        }
      }
      .tabs-right {
        .mixin_float(1000px, 100%, right);
        ul {
          color: @color_white;
          li {
            .mixin_li(14.28%, 95px);
            cursor: pointer;
            font-size: @font_size16;
            overflow: hidden;
          }
          li:hover {
            color: #ffea00;
            .mixin_image(url("~@static/picture/home/tabs_active.png"));
          }
        }
      }
    }
  }
}
</style>
