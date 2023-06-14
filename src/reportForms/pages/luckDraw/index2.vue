<template>
    <section id="luckyDraw">
        <div class="activity-rules" @click="activityRules()">
            活动规则
        </div>
        <div class="horn-box">
          <van-notice-bar left-icon="volume-o" :scrollable="false" style="height: 100%;background: none;color: #D7AA8B;font-size: 0.81rem;">
            <van-swipe
              vertical
              class="notice-swipe"
              :autoplay="3000"
              :show-indicators="false"
            >
              <van-swipe-item v-for="(item, index) in play_list" :key="index">{{item}}</van-swipe-item>
            </van-swipe>
          </van-notice-bar>
        </div>
        <LuckyGrid
            ref="LuckDraw"
            class="lucky-grid"
            width="22.18rem"
            height="19.37rem"
            :prizes="prizes"
            :buttons="buttons"
            :blocks="blocks"
            :default-config="defaultConfig"
            :default-style="defaultStyle"
            :active-style="activeStyle"
            @start="startCallBack"
            @end="endCallBack"
        />
        <button class="earning-times" @click="earningTimes()">
            <van-icon name="like" color="#FAE9D0" />
            赚取次数
        </button>
        <button class="my-award" @click="myAward()">
            <van-icon name="star" color="#FAE9D0" />
            我的奖励
        </button>


        <van-popup
            v-model:show="earn_box"
            round
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '28.25rem' }"
            class="zhuan-qu-ci-shu"
        >
          <div class="zs-title">赚取次数</div>
          <ul class="task-box">
              <li v-for="(item,index) in earn_list">
                <img :src="item.url"/>
                <p>{{item.taskName}}（{{item.finishNum}}/{{item.taskCondNum}}）</p>
                <p>获得抽奖次数x{{item.drawNum}}</p>
                <button :class="{'jin-du': true,'wan-cheng': item.active}" @click="earnWay(item.active, item.taskName)">
                  <span v-if="item.active">已完成</span>
                  <span v-else>去完成</span>
                </button>
              </li>
          </ul>
          <div class="geng-xin">每日 00: 00 更新</div>
        </van-popup>

        <van-popup
            v-model:show="dessert_box"
            round
            closeable
            close-icon="close"
            position="bottom"
            :style="{ height: '30rem' }"
            class="wo-de-jiang-li"
        >
          <div class="zs-title">我的奖励</div>
          <div class="ri-qi">
            <button @click="dateWay(date_range[1], 0)" :class="{'date-active': date_active == 0}">近一周</button>
            <button @click="dateWay(date_range[2], 1)" :class="{'date-active': date_active == 1}">近一月</button>
            <button @click="dateWay(date_range[3], 2)" :class="{'date-active': date_active == 2}">近三月</button>
          </div>
          <ul class="task-box" v-if="have_to_list.length != 0">
            <van-list
              v-model:loading="loading"
              :finished="finished"
              finished-text="没有更多了"
              @load="onLoad"
            >
              <li v-for="(item,index) in have_to_list">
                <p>{{item.awardName}}</p>
                <p>
                  <span v-if="item.awardName == '100鲨豆' || item.awardName == '500鲨豆'">发放时间：</span>
                  <span v-else>有效期：</span>
                  {{item.createTime}} - {{item.pastTime}}
                </p>
                <button :class="{'ling-qu': true,'wan-cheng': item.status == 4 || item.status == 2}" @click="dessertWay(item.status)">
                  <span v-if="item.status == 3">去领取</span>
                  <span v-if="item.status == 4">已领取</span>
                  <span v-if="item.status == 1">去使用</span>
                  <span v-if="item.status == 2">已使用</span>
                  <span v-if="item.status == 5">已过期</span>
                </button>
              </li>
            </van-list>
          </ul>
          <div class="no-data" v-if="have_to_list.length == 0">
            <div>
              <img v-if="have_to_list.length == 0" src="@static/reportForms/reward/1/pic_nodata.png"/>
            </div>
            <p>暂无数据</p>
          </div>
        </van-popup>

        <van-dialog v-model="rules_box"  width="22.18rem" class="huo-dong-gui-ze">
            <van-icon class="is-close" name="close" color="#FDDDA0" @click="rules_box = false" />
            <div class="is-title">活动规则</div>
            <div class="rule-content">
              一【活动时间】<br>此活动长期有效<br><br>
              二【玩法说明】<br>
              1、打开《白鲨直播》APP或《白鲨直播》PC端，登录白鲨账号后，可在直播间点击‘抽奖’进入抽奖页，每日完成活动，可获得抽奖次数，赚取次数后在抽奖模块参与抽奖，抽到奖品可在“我的奖品”中查看并领取；<br>
              2、每日的最高抽奖次数具有上限，次日00:00清零，用户参与次数越多有机会获得更多奖品；<br>
              3、每条任务名称后面的（0/0）代表完成进度和需完成次数；<br>
              4、限制条件：每个设备限制一个账号可参与抽奖活动，同一个设备或同一IP地址登录的多个平台账号视为一个账号；<br>
              5、用户获得的实物和红包奖品请在有效时间内联系客服兑换，若超期，则视为自动放弃；<br><br>
              三【活动对象】<br>
              《白鲨直播》APP或《白鲨直播》PC端的登录用户<br><br>
              四【奖励说明】<br>
              1、现金红包：联系客服，客服要求用户进粉丝群，用户进群联系群管理，即可领奖；<br>
              2、实物奖励：联系客服，提供发货地址，为您发货；<br>
              3、鲨粮礼物：获取后将存放在直播间礼物栏我的背包中，礼物具有有效期，请在有效期结束前使用礼物赠送给喜欢的主播，过期礼物将不再展示；<br>
              4、鲨豆奖励：直接加到您的账上。<br>
              5、平台礼物奖品为15天有效期，实物/红包奖励30天内兑换（超期则视为自动放弃）。<br><br>
              五【未成年人特殊约定】<br>
              1、若您为未成年人，应在监护人监护、指导下阅读本活动规则。<br>
              2、监护人应指导未成年人上网注意安全问题，防患于未然。若监护人同意未成年人使用本活动消费项目，必须以监护人名义申请消费，并对未成年人使用消费项目进行正确引导、监督。未成年人使用消费项目，以及行使和履行本协议项下的权利和义务即视为已获得了监护人的认可。<br>
              3、蓝鲸体育提醒未成年人在使用网络虚拟服务时，要善于网上学习，认清网络世界与现实世界的区别，避免沉迷于网络，影响日常的学习生活。<br><br>
              六【免责条款】<br>
              互联网运行存在诸多不确定性因素，如因不可抗力、网络、通讯线路故障、计算机大规模瘫痪及活动中存在大面积作弊行为等原因导致本活动出现异常情况或难以继续开展的，蓝鲸体育有权采取包括但不限于通过各种方式消除异常情况或调整、暂停、取消本活动等措施，合理保障蓝鲸体育及用户合法权益，您表示理解，由此给您造成的损失，您同意不追究白鲨直播的责任。<br><br>
              七【其他说明】<br>
              1、活动期间若发现作弊、刷单等问题，白鲨直播有权追回奖励并封掉账号，不得利用此活动从事任何违法犯罪活动，亦不得通过刷单、作弊等手段从抽奖活动中获取不正当利益。<br>
              2、自白鲨直播将实物奖品交付至物流公司之日起，白鲨直播即不承担实物奖品毁损灭失的风险，寄送过程中若有毁损灭失，请您自行联系物流公司协商处理后续问题。<br>
              此次活动最终解释权归白鲨直播所有<br>
              如有其他问题，请联系客服<br>
            </div>
        </van-dialog>

        <van-dialog v-model="jiang_box"  width="17.18rem" class="zhong-jiang">
            <img class="ki-close" src="@static/reportForms/reward/1/win_close.png" @click="jiang_box = false"/>
            <div class="ki-title">
              <img v-if="luckyNum != 0" src="@static/reportForms/reward/1/gongxizhongjiang.png"/>
              <img v-else src="@static/reportForms/reward/1/meiyou.png"/>
            </div>

            <img v-if="luckyNum != 0" class="ki-content" :src="awardImgUrl"/>
            <img v-if="luckyNum == 0" class="ki-content" src="@static/reportForms/reward/1/pic_notmes.png"/>
            <p v-if="luckyNum != 0 && (awardName500 != '500鲨豆' && awardName500 != '100鲨豆')">有效期至：{{pastTime}}</p>
            <p v-if="luckyNum != 0 && (awardName500 == '500鲨豆' || awardName500 == '100鲨豆')">已发放至您的鲨豆账号</p>
            <p v-if="luckyNum == 0">试试点击赚取次数完成任务赢得抽奖机会</p>
            <button @click="jiang_box = false">
              <span v-if="luckyNum != 0">收下了</span>
              <span v-else>知道了</span>
            </button>
        </van-dialog>
    </section>
</template>

<script>
import { LuckyGrid } from 'vue-luck-draw'
export default {
  name: 'luckyDraw',
  components: { LuckyGrid },
  data () {
    return {
      luckyNum: 0,
      prizes: [],
      blocks: [
        { padding: this.conversion(0.7) + 'px', background: '#E5BE96', borderRadius: 10 },
        { padding: this.conversion(0.5) + 'px', background: '#430228', borderRadius: 8 },
        { padding: this.conversion(0.2) + 'px', background: '#430228', borderRadius: 8 }
      ],
    //   blocks: [{
    //     padding: '20px',
    //     imgs: [{
    //       src: 'https://cdn.jsdelivr.net/gh/buuing/cdn/demo/grid-bg.png',
    //       width: '100%',
    //       height: '100%'
    //     }]
    //   }],
      defaultConfig: {
        gutter: this.conversion(0.64),
        decelerationTime: 5000
      },
      defaultStyle: {
        borderRadius: this.conversion(1.37),
        fontColor: '',
        fontSize: this.conversion(0.875) + 'px',
        textAlign: 'center',
        background: ''
                // shadow: '0 5 1 #ebf1f4'
      },
      activeStyle: {
                // background: 'url(@static/reportForms/gongge/choujiang_button_on.png)',
        background: 'linear-gradient(270deg, #FB0F0F, #FA9E9E)',
        fontColor: '#E61F49',
        fontSize: this.conversion(1.3) + 'px',
        shadow: '0 4 0.6 #F02B71'
      },
      winning_list: [
                { telephone: '134****2362', prize: '200积分' },
                { telephone: '157****4877', prize: '18元平台体验金' },
                { telephone: '186****9774', prize: '50积分' },
                { telephone: '136****3701', prize: '300积分' },
                { telephone: '115****5513', prize: '50积分' },
                { telephone: '163****5141', prize: '18元平台体验金' },
                { telephone: '193****9322', prize: '200积分' },

                { telephone: '134****2362', prize: '200积分' },
                { telephone: '157****4877', prize: '18元平台体验金' },
                { telephone: '186****9774', prize: '50积分' },
                { telephone: '136****3701', prize: '300积分' },
                { telephone: '115****5513', prize: '50积分' },
                { telephone: '163****5141', prize: '18元平台体验金' },
                { telephone: '193****9322', prize: '200积分' }
      ],
      earn_box: false,
      dessert_box: false,
      rules_box: false,
      jiang_box: false,
      awardImgUrl: '',
      pastTime: '',
      earn_list: [],
      date_range: [],
      date_active: 0,
      have_to_list: [],
      loading: false,
      finished: false,
      pageNum: 1,
      customerService: '',
      createTimeBegin: '',
      play_list: [],
      awardName500: '',
      token: ''
    }
  },
  computed: {
    buttons () {
      return this.luckyNum == 0 ? [{
        x: 1,
        y: 1,
        background: '#000',
                // background: 'linear-gradient(270deg, #FFDCB8, #FDC689)',
                // shadow: '0 5 1 #e89b4f',
        fonts: [
            { text: '抽奖', fontColor: '#fff', top: '10%', fontSize: '38px' },
            { text: `(剩余${this.luckyNum}次)`, fontColor: '#fff', top: '65%', fontSize: '15px' }
        ],
        imgs: [
                { src: require('@static/reportForms/reward/box_yellow.png'), width: '100%', height: '100%', top: '0%' }
        ]
      }] : [{
        x: 1,
        y: 1,
        background: '#000',
        fonts: [
            { text: '抽奖', fontColor: '#fff', top: '10%', fontSize: '38px' },
            { text: `(剩余${this.luckyNum}次)`, fontColor: '#fff', top: '65%', fontSize: '15px' }
        ],
        imgs: [
                { src: require('@static/reportForms/reward/box_choujiang.png'), width: '100%', height: '100%', top: '0%' }
        ]
      }]
    }
  },
  created () {
    this.token = "token"
    console.log('--获取设备信息--', navigator.userAgent)
    this.getTimeStartAndEnd()
    this.opportunity()
    this.prizeList()

    this.getTime()
    this.gwetCustomerService()
    this.drawPlay()
  },
  methods: {
    drawPlay () {
      let that = this
      // let params = {
      // }
      // that.$axios('post', '/second/userDrawTaskRecord/drawPlay', params)
      // .then((res) => {
        let res = {"code":200,"msg":null,"data":["恭喜空旷主意***获得白鲨直播专属卫衣*1","恭喜Low拖鞋***获得白鲨直播专属卫衣*1","恭喜非分树苗***获得白鲨直播专属卫衣*1","恭喜秀美多少***获得白鲨直播专属卫衣*1","恭喜巨大大气***获得白鲨直播专属卫衣*1","恭喜清新大道***获得白鲨直播专属卫衣*1","恭喜不定友好***获得白鲨直播专属卫衣*1","恭喜开心落日***获得白鲨直播专属卫衣*1","恭喜美好眼睛***获得白鲨直播专属卫衣*1","恭喜黄色少女***获得白鲨直播专属卫衣*1","恭喜能干下巴***获得白鲨直播专属卫衣*1","恭喜知名电话***获得白鲨直播专属卫衣*1","恭喜多余黄色***获得白鲨直播专属卫衣*1","恭喜繁忙汽车***获得白鲨直播专属卫衣*1","恭喜经常音乐***获得白鲨直播专属卫衣*1","恭喜过时绿豆***获得白鲨直播专属卫衣*1","恭喜影响借口***获得白鲨直播专属卫衣*1","恭喜用功空中***获得白鲨直播专属卫衣*1","恭喜大气心里***获得白鲨直播专属卫衣*1","恭喜美好所有***获得白鲨直播专属卫衣*1"]}
        console.log('---中奖记录轮播20条---', res)
        if (res.code == 200) {
          this.play_list = res.data
        }
      // }).catch(() => {

      // })
    },
    // 获取客服链接
    gwetCustomerService () {
      // this.$axios('post', '/common/getCustomerServiceUrl').then(res => {
        let res = {"code":200,"msg":null,"data":"https://vm.lenteiga.com/1of9a1nueux460h0d6zxxmv6uv"}
        if (res.code === 200) {
          this.customerService = res.data
        } else {
          Toast(res.msg)
        }
      // })
    },
    onLoad () {
      console.log('--onLoad--')
      this.pageNum += 1
      this.spoils()
    },
    dateWay (endTime, date_active = 0) {
      console.log('--dateWay--', endTime, '--', date_active)
      this.pageNum = 1
      this.loading = false
      this.finished = false
      this.date_active = date_active
      this.createTimeBegin = endTime
      this.spoils()
    },
    spoils () {
      let that = this
      // let params = {
      //   createTimeBegin: that.createTimeBegin,
      //   createTimeEnd: that.date_range[0],
      //   pageNum: that.pageNum,
      //   pageSize: 10
      // }
      // that.$axios('post', '/second/userDrawTaskRecord/list', params)
      // .then((res) => {
        let res = {"code":200,"msg":null,"data":{"total":8,"list":[{"id":367,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":1,"awardName":"干杯价值1元","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F17664823949093.png","status":5,"createTime":"2022-03-06 18:41:51","updateTime":"2022-03-21 08:00:01","deleted":0,"amount":1,"sendTime":null,"pastTime":"2022-03-21 08:00:00","awardType":4,"commentDesc":"抽奖获取礼物","bqType":130,"bqPrice":null,"phone":"19805060001","userName":"109"},{"id":325,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":2,"awardName":"现金红包：666元","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F71593532105720.png","status":3,"createTime":"2022-03-02 18:31:20","updateTime":"2022-03-02 18:31:20","deleted":0,"amount":1,"sendTime":null,"pastTime":"2022-04-01 08:00:00","awardType":1,"commentDesc":"联系平台客服，提供地址为您发货","bqType":0,"bqPrice":null,"phone":"19805060001","userName":"109"},{"id":318,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":2,"awardName":"iphone13ProMax 256g 黑色","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F13420387317091.png","status":3,"createTime":"2022-03-02 18:24:16","updateTime":"2022-03-02 18:24:16","deleted":0,"amount":1,"sendTime":null,"pastTime":"2022-04-01 08:00:00","awardType":2,"commentDesc":"联系平台客服，提供地址为您发货","bqType":0,"bqPrice":null,"phone":"19805060001","userName":"109"},{"id":317,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":2,"awardName":"iphone13ProMax 256g 黑色","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F13420387317091.png","status":3,"createTime":"2022-03-02 18:23:16","updateTime":"2022-03-02 18:23:16","deleted":0,"amount":1,"sendTime":null,"pastTime":"2022-04-01 08:00:00","awardType":2,"commentDesc":"联系平台客服，提供地址为您发货","bqType":0,"bqPrice":null,"phone":"19805060001","userName":"109"},{"id":238,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":2,"awardName":"现金红包：666元","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F71593532105720.png","status":4,"createTime":"2022-03-01 12:15:32","updateTime":"2022-03-01 12:15:32","deleted":0,"amount":1,"sendTime":null,"pastTime":"2022-03-31 08:00:00","awardType":1,"commentDesc":"联系平台客服，提供地址为您发货","bqType":0,"bqPrice":null,"phone":"19805060001","userName":"109"},{"id":237,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":2,"awardName":"现金红包：666元","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F71593532105720.png","status":4,"createTime":"2022-03-01 12:02:09","updateTime":"2022-03-01 12:02:09","deleted":0,"amount":1,"sendTime":null,"pastTime":"2022-03-31 08:00:00","awardType":1,"commentDesc":"联系平台客服，提供地址为您发货","bqType":0,"bqPrice":null,"phone":"19805060001","userName":"109"},{"id":236,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":1,"awardName":"绝杀价值6元","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/21230454078303.png","status":2,"createTime":"2022-03-01 09:53:07","updateTime":"2022-03-01 09:53:07","deleted":0,"amount":1,"sendTime":"2022-03-01 17:25:39","pastTime":"2022-03-16 08:00:00","awardType":4,"commentDesc":"赠送给:卫星602931","bqType":131,"bqPrice":null,"phone":"19805060001","userName":"109"},{"id":232,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":2,"awardName":"iphone13ProMax 256g 黑色","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F13420387317091.png","status":5,"createTime":"2022-03-01 00:36:37","updateTime":"2022-03-30 08:00:01","deleted":0,"amount":1,"sendTime":null,"pastTime":"2022-03-30 08:00:00","awardType":2,"commentDesc":"联系平台客服，提供地址为您发货","bqType":0,"bqPrice":null,"phone":"19805060001","userName":"109"}],"pageNum":1,"pageSize":10,"size":8,"startRow":1,"endRow":8,"pages":1,"prePage":0,"nextPage":0,"isFirstPage":true,"isLastPage":true,"hasPreviousPage":false,"hasNextPage":false,"navigatePages":8,"navigatepageNums":[1],"navigateFirstPage":1,"navigateLastPage":1,"firstPage":1,"lastPage":1}}
        console.log('---我的奖励---', res)
        if (res.code == 200) {
          that.loading = false
          if (res.pages == res.pageNum || res.data.list.length == 0) {
            that.finished = true
          }
          that.have_to_list = res.pageNum == 1 ? res.data.list : that.have_to_list.concat(res.data.list)
          // that.have_to_list = res.data.list
          for (let i = 0; i < that.have_to_list.length; i++) {
            let item = that.have_to_list[i]

            let frequency = (item.createTime.split(':')).length - 1
            if (item.createTime && item.pastTime && frequency == 2) {
              that.have_to_list[i].createTime = item.createTime.substring(0, item.createTime.length - 3)
              that.have_to_list[i].pastTime = item.pastTime.substring(0, item.pastTime.length - 3)
            }
          }
        }
      // }).catch(() => {

      // })
    },
    dessertWay (value) {
      if (value == 1) {
        this.$router.push({path: '/home'})
      } else if (value == 3) {
        if (this.customerService !== '') {
          window.open(this.customerService)
        }
      }
    },
    earnWay (value, taskName) {
      if (!this.token && !value) {
        this.$router.push({path: '/login'})
        return
      }

      if (!value && taskName == '成功充值一次') {
        this.$router.push({path: '/recharge'})
        return
      }

      if (!value) {
        this.$router.push({path: '/home'})
      }
    },
    getTime () {
      let nowTime = new Date()
      let isYear = nowTime.getFullYear()
      let isMonth = this.guolv(nowTime.getMonth() + 1)
      let isDate = this.guolv(nowTime.getDate())
      let isHours = this.guolv(nowTime.getHours())
      let isMinutes = this.guolv(nowTime.getMinutes())
      let isSeconds = this.guolv(nowTime.getSeconds())

      let ymdhms = isYear + '-' + isMonth + '-' + isDate + ' ' + isHours + ':' + isMinutes + ':' + isSeconds
      console.log('yyyy-MM-dd HH:mm:ss', ymdhms)
      return ymdhms
    },
    guolv (value) {
      return value < 10 ? '0' + value : value
    },
    getTimeStartAndEnd () {
      let now = new Date()
      let arr = []
      let lately = [2, -8, -31, -91]
      for (let i = 0; i < lately.length; i++) {
        let potato = new Date()
        potato.setDate(now.getDate() + lately[i])
        let ty = potato.getFullYear()
        let tm = potato.getMonth() + 1
        let td = potato.getDate() - 1
        if (tm < 10) {
          tm = '0' + tm
        }
        if (td < 10) {
          td = '0' + td
        }
        arr.push(`${ty}-${tm}-${td} 00:00:00`)
      }
      this.date_range = arr
      console.log('--date_range--', arr)
    },
    // 赚取次数
    userDrawTaskInfo () {
      let that = this
      // let params = {
      // }
      // that.$axios('post', '/second/userDrawTaskRecord/userDrawTaskInfo', params)
      // .then((res) => {
        let res = {"code":200,"msg":null,"data":[{"id":null,"taskName":"每日用户登录奖励","taskCondNum":1,"drawNum":1,"createTime":null,"updateTime":null,"deleted":null,"finishNum":1},{"id":null,"taskName":"持续观看直播5分钟","taskCondNum":1,"drawNum":1,"createTime":null,"updateTime":null,"deleted":null,"finishNum":0},{"id":null,"taskName":"直播间发送弹幕5条","taskCondNum":5,"drawNum":1,"createTime":null,"updateTime":null,"deleted":null,"finishNum":0},{"id":null,"taskName":"成功充值一次","taskCondNum":1,"drawNum":1,"createTime":null,"updateTime":null,"deleted":null,"finishNum":0},{"id":null,"taskName":"给主播送礼物1次","taskCondNum":1,"drawNum":1,"createTime":null,"updateTime":null,"deleted":null,"finishNum":0}]}
        console.log('---用户抽奖任务记录信息---', res)
        if (res.code == 200) {
          that.earn_list = res.data
          for (let i = 0; i < that.earn_list.length; i++) {
            let item = that.earn_list[i]
            that.earn_list[i].url = require('@static/reportForms/reward/1/bean' + i + '.png')
            that.earn_list[i].active = false
            if (item.finishNum == item.taskCondNum) {
              that.earn_list[i].active = true
            }
          }
        }
      // }).catch(() => {

      // })
    },
    prizeList () {
      let that = this
      // let params = {
      // }
      // that.$axios('post', '/second/drawAward/list', params)
      // .then((res) => {

        let res = {"code":200,"msg":null,"data":[{"id":4,"awardType":null,"bqType":null,"sort":1,"imgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F13420387317091.png","awardName":"iphone13ProMax 256g 黑色","amount":null,"createTime":null,"updateTime":null,"deleted":null,"proba":null},{"id":2,"awardType":null,"bqType":null,"sort":2,"imgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F43231305996253.png","awardName":"现金红包：888元","amount":null,"createTime":null,"updateTime":null,"deleted":null,"proba":null},{"id":1,"awardType":null,"bqType":null,"sort":3,"imgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F71593532105720.png","awardName":"现金红包：666元","amount":null,"createTime":null,"updateTime":null,"deleted":null,"proba":null},{"id":3,"awardType":null,"bqType":null,"sort":4,"imgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F76099113904244.png","awardName":"白鲨直播专属卫衣","amount":null,"createTime":null,"updateTime":null,"deleted":null,"proba":null},{"id":6,"awardType":null,"bqType":null,"sort":5,"imgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F18247921759758.png","awardName":"500鲨豆","amount":null,"createTime":null,"updateTime":null,"deleted":null,"proba":null},{"id":5,"awardType":null,"bqType":null,"sort":6,"imgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F40824576002062.png","awardName":"100鲨豆","amount":null,"createTime":null,"updateTime":null,"deleted":null,"proba":null},{"id":7,"awardType":null,"bqType":null,"sort":7,"imgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F17664823949093.png","awardName":"干杯价值1元","amount":null,"createTime":null,"updateTime":null,"deleted":null,"proba":null},{"id":8,"awardType":null,"bqType":null,"sort":8,"imgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F90610191656008.png","awardName":"绝杀价值6元","amount":null,"createTime":null,"updateTime":null,"deleted":null,"proba":null}]}
        console.log('---奖品列表---', res)
        if (res.code == 200) {
          that.prizes = []
          let axis = [[0, 0], [1, 0], [2, 0], [2, 1], [2, 2], [1, 2], [0, 2], [0, 1]]
          for (let i = 0; i < 8; i++) {
            let item = res.data[i]
            that.prizes.push({
              awardName: item.awardName,
              index: i,
              x: axis[i][0],
              y: axis[i][1],
              background: '#fff',
              fonts: [{ text: '', top: '', fontSize: that.conversion(1.3) + 'px', fontWeight: 700 }],
              imgs: [{ src: item.imgUrl, width: '100%', height: '100%', top: '0%' }]
            })
          }
        }
      // }).catch(() => {

      // })
    },
    opportunity () {
      let that = this
      // let params = {
      //   userId: that.$route.query.userId ? 'user' : ''
      // }
      // that.$axios('post', '/second/userDrawTaskRecord/userDrawCount', params)
      // .then((res) => {
        let res = {"code":200,"msg":null,"data":1}
        console.log('---抽奖次数---', res)
        if (res.code == 200) {
          that.luckyNum = res.data
        }
      // }).catch(() => {

      // })
    },
    activityRules () {
      this.rules_box = true
    },
    earningTimes () {
      this.earn_box = true
      this.userDrawTaskInfo()
    },
    myAward () {
      if (!this.token) {
        this.$router.push({path: '/login'})
        return
      }
      this.dessert_box = true
      this.dateWay(this.date_range[1], 0)
    },
    conversion (num) {
      return num * Number(sessionStorage.getItem('pixelSize'))
    },
    startCallBack () {
      if (!this.token) {
        this.$router.push({path: '/login'})
        return
      }
      if (this.luckyNum == 0) {
        this.jiang_box = true
        return
      }
      this.$refs.LuckDraw.play()
      let that = this
      // let params = {
      // }
      // that.$axios('post', '/second/userDrawTaskRecord/draw', params)
      // .then((res) => {
        let res = {"code":200,"msg":null,"data":{"id":383,"userId":"0a55078dc2ba4f3cac10537da9dbec94","virvalType":2,"awardName":"白鲨直播专属卫衣","awardImgUrl":"https://huawei-testbqzb.obs.myhuaweicloud.com:443/live%2F76099113904244.png","status":3,"createTime":null,"updateTime":null,"deleted":null,"amount":1,"sendTime":null,"pastTime":"2022-04-30 08:00:00","awardType":2,"commentDesc":"联系平台客服，提供地址为您发货","bqType":0,"bqPrice":null,"phone":null,"userName":null}}
        console.log('---开始抽奖---', res)
        if (res.code == 200) {
          setTimeout(() => {
            let numstop = Math.random() * 7 >> 0
            // let numstop = res.data.awardName; // awardType
            // that.prize_type = numstop;

            for (let i = 0; i < that.prizes.length; i++) {
              let item = that.prizes[i]
              if (res.data.awardName == item.awardName) {
                that.$refs.LuckDraw.stop(i)
                console.log('---stop----', i)
              }
            }
            that.awardImgUrl = res.data.awardImgUrl
            that.pastTime = res.data.pastTime
            that.awardName500 = res.data.awardName
          }, 2000)
        }
      // }).catch(() => {

      // })
    },
    endCallBack (prize) {
      console.log('--prize--', prize)
      this.jiang_box = true
    }
  }
}
</script>

<style lang="less" scoped>
#luckyDraw {
    width: 100%;
    height: 55.5625rem;
    -background: url('~@static/reportForms/reward/bg.png');
    background-image: image-set(url("~@static/reportForms/reward/bg.png") 1x, url("~@static/reportForms/reward/bg@2x.png") 2x);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    position: relative;
    .lucky-grid {
        position: absolute;
        left: 0.625rem;
        top: 28.25rem;
    }
    .activity-rules {
        width: 4.0625rem;
        height: 1.5625rem;
        color: #F4EBE2;
        font-size: 0.8125rem;
        padding: 0.1875rem 0 0 0.4375rem;
        box-sizing: border-box;
        background-image: image-set(url("~@static/reportForms/reward/button_rule.png") 1x, url("~@static/reportForms/reward/button_rule@2x.png") 2x);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        right: 0rem;
        top: 2.4375rem;
    }
    .horn-box {
        width: 20.3125rem;
        height: 1.75rem;
        color: #D7AA8B;
        font-size: 0.8125rem;
        background-image: image-set(url("~@static/reportForms/reward/winnews_bar.png") 1x, url("~@static/reportForms/reward/winnews_bar@2x.png") 2x);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
        left: 1.5625rem;
        top: 10.125rem;
        .notice-swipe {
          height: 1.75rem;
          line-height: 1.75rem;
        }
    }
    .earning-times, .my-award {
        width: 8.125rem;
        height: 2.5rem;
        text-align: center;
        line-height: 2.5rem;
        color: #FAE9D0;
        background-image: image-set(url("~@static/reportForms/reward/button_red.png") 1x, url("~@static/reportForms/reward/button_red@2x.png") 2x);
        background-repeat: no-repeat;
        background-size: 100% 100%;
        position: absolute;
    }
    .earning-times {
        left: 2.625rem;
        bottom: 3.25rem;
    }
    .my-award {
        right: 2.625rem;
        bottom: 3.25rem;
    }
    /deep/ .huo-dong-gui-ze {
      background: none;
      border: 0.0625rem solid #FFF9AE;
      text-align: left;
      .van-dialog__header {
        display: none;
      }
      .van-dialog__content {
        height: 30.3125rem;
        background: #3E4359;
        color: #FDDDA0;
        position: relative;
        .is-close {
          font-size: 1.625rem;
          position: absolute;
          right: 0.75rem;
          top: 0.75rem;
        }
        .is-title {
          width: 100%;
          height: 2.8125rem;
          text-align: center;
          line-height: 2.8125rem;
          font-size: 0.875rem;
        }
        .rule-content {
          width: 100%;
          height: 26.5625rem;
          font-size: 0.775rem;
          padding: 0rem 0.3125rem;
          box-sizing: border-box;
          overflow-y: auto;
        }
      }
      .van-dialog__footer {
        display: none;
      }
    }
    /deep/ .zhong-jiang {
      background: none;
      .van-dialog__header {
        display: none;
      }
      .van-dialog__content {
        height: 14.375rem;
        background: #FFFFFF;
        position: relative;
        .ki-close {
          width: 1.5rem;
          position: absolute;
          right: 0.625rem;
          top: 0.625rem;
          z-index: 5;
        }
        .ki-title {
          width: 100%;
          height: 1.5625rem;
          display: flex;
          align-items: center;
          justify-content: center;
          position: absolute;
          left: 0rem;
          top: 0.625rem;
          img {
            height: 100%;
          }
        }
        .ki-content {
          width: 6.25rem;
          height: 5.625rem;
          position: absolute;
          left: 5.3125rem;
          top: 3.25rem;
        }
        p {
          width: 100%;
          height: 1.5625rem;
          text-align: center;
          line-height: 1.5625rem;
          color: #A7A7A7;
          font-size: 0.8125rem;
          position: absolute;
          left: 0rem;
          bottom: 3.4375rem;
        }
        button {
          width: 100%;
          height: 3.125rem;
          text-align: center;
          line-height: 3.125rem;
          color: #181818;
          font-size: 0.9375rem;
          border-top: 0.1875rem solid #F6F6F6;
          position: absolute;
          left: 0rem;
          bottom: 0rem;
        }
      }
      .van-dialog__footer {
        display: none;
      }
    }
    /deep/ .zhuan-qu-ci-shu {
       background: #3E4359;
       border-top: 0.0625rem solid #D7C094;
       color: #DFC594;
       .van-icon-close {
         color: #DFC594;
       }
       .zs-title {
          width: 100%;
          height: 2.8125rem;
          text-align: center;
          line-height: 2.8125rem;
          font-size: 0.875rem;
        }
        .task-box {
          width: 100%;
          height: 22.1875rem;
          padding: 0.625rem 0.9375rem 0rem 0.9375rem;
          box-sizing: border-box;
          overflow-y: auto;
          li {
            width: 100%;
            height: 4.125rem;
            background: #30364E;
            border-radius: 0.625rem;
            margin-bottom: 0.625rem;
            position: relative;
            img {
              width: 2.8125rem;
              height: 2.8125rem;
              position: absolute;
              left: 0.625rem;
              top: 0.625rem;
            }
            p:nth-of-type(1) {
              font-size: 0.875rem;
              color: #FDFDFD;
              position: absolute;
              left: 3.875rem;
              top: 0.625rem;
            }
            p:nth-of-type(2) {
              font-size: 0.75rem;
              color: #8D8F98;
              position: absolute;
              left: 3.875rem;
              top: 2.25rem;
            }
            .jin-du {
              width: 4.5rem;
              height: 2rem;
              text-align: center;
              line-height: 2rem;
              border: 0.0625rem solid #968976;
              background: none;
              border-radius: 0.625rem;
              color: #ECCF98;
              font-size: 0.875rem;
              position: absolute;
              right: 0.625rem;
              top: 1rem;
            }
            .wan-cheng {
              color: #9D9FA3;
              background: #3E445D;
              border: none;
            }
          }
        }
        .geng-xin {
          width: 100%;
          height: 2.8125rem;
          text-align: center;
          line-height: 2.8125rem;
          font-size: 0.75rem;
          color: #8C8E97;
        }
    }

    /deep/ .wo-de-jiang-li {
       background: #3E4359;
       border-top: 0.0625rem solid #D7C094;
       color: #DFC594;
       .van-icon-close {
         color: #DFC594;
       }
       .zs-title {
          width: 100%;
          height: 2.8125rem;
          text-align: center;
          line-height: 2.8125rem;
          font-size: 0.875rem;
        }
        .ri-qi {
          width: 100%;
          height: 2.8125rem;
          padding: 0.625rem 0.9375rem 0 0.9375rem;
          box-sizing: border-box;
          button {
            width: 5rem;
            height: 1.625rem;
            text-align: center;
            line-height: 1.625rem;
            font-size: 0.8125rem;
            color: #555562;
            background: #3E4359;
            border: 0.0625rem solid #494C5D;
          }
          button:nth-of-type(1) {
            float: left;
          }
          button:nth-of-type(2) {
            float: left;
            margin-left: 3.25rem;
          }
          button:nth-of-type(3) {
            float: right;
          }
          .date-active {
            background: #3E4359;
            border: 0.0625rem solid #79736F;
            color: #C9B48C;
          }
        }
        .task-box, .no-data {
          width: 100%;
          height: 23.125rem;
          padding: 0.625rem 0.9375rem 0rem 0.9375rem;
          box-sizing: border-box;
          overflow-y: auto;
          li {
            width: 100%;
            height: 4.125rem;
            background: #30364E;
            border-radius: 0.625rem;
            margin-bottom: 0.625rem;
            position: relative;
            p:nth-of-type(1) {
              font-size: 0.875rem;
              color: #FDFDFD;
              position: absolute;
              left: 0.625rem;
              top: 0.625rem;
            }
            p:nth-of-type(2) {
              font-size: 0.75rem;
              color: #8D8F98;
              position: absolute;
              left: 0.625rem;
              top: 2.25rem;
            }
            .ling-qu {
              width: 4.1875rem;
              height: 2rem;
              text-align: center;
              line-height: 1.875rem;
              background: none;
              border: 0.0625rem solid #968976;
              border-radius: 0.9375rem;
              color: #ECCF98;
              font-size: 0.875rem;
              position: absolute;
              right: 0.625rem;
              top: 1rem;
            }
            .wan-cheng {
              color: #9D9FA3;
              background: #3E445D;
              border: none;
            }
          }
        }
        .no-data {
          div {
            width: 100%;
            height: 4.5rem;
            margin-top: 5rem;
            display: flex;
            align-items: center;
            justify-content: center;
            img {
              height: 100%;
            }
          }
          p {
            width: 100%;
            height: 1.5625rem;
            text-align: center;
            line-height: 1.5625rem;
            color: #C0C0C0;
            font-size: 0.8125rem;
            margin-top: 1.875rem;
          }
        }
    }
}
</style>


