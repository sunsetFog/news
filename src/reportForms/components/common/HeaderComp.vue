/* eslint-disable vue/valid-v-else */
<template>
  <div class="header-comp-content">
    <div class="header-container">
      <img class="back-btn" @click.stop="backPage" src="../../assets/img/NavigationBar02@2x.png">
      <span class="header-title">{{title}}</span>
      <img v-show="tipsShow && $route.path !== '/priceManage/PriceAnalysis'" src="../../assets/img/tip.png" class="open-menu tips1" @click="showAlert">
      <span v-show="$route.path === '/priceManage/PriceAnalysis'" class="explain-price" @click="showAlert">口径说明</span>
      <img :class="{'open-menu': true, 'explain-refresh': $route.path === '/priceManage/PriceAnalysis'}" @click="refresh" v-show="$route.path !== '/' && $route.path !== '/treeSelect' && $route.path !== '/tips'" src="../../assets/img/refresh.png">
      <!-- <img class="open-menu tips" @click="showAlert" v-show="$route.path === '/'" src="../../assets/img/tip.png"> -->
    </div>
    <van-overlay :show="show" @click.stop="show = false">
      <div class="wrapper">
        <div class="block" @click.stop>
          <div class="tips tip-header" v-show="!tipsShow">
            <img src="../../assets/img/tipheader.png">
            <span >启明星</span>
          </div>
          <div class="tips tip-container" v-show="!tipsShow">
            <h5>更新说明</h5>
            <p>1、供销存，去化率 上线试运行</p>
            <p>2、超龄库存 上线试运行</p>
          </div>
          <div class="tips tip-container" v-show="$route.path == '/storage'">
            <h5>口径说明</h5>
            <p>数据范围：全口径项目，包含责任制表内管理项目+责任制表外管理项目</p>
            <p>项目首次签约日期：项目最早的签约归属日期</p>
            <p>近半年月均销售去化面积:</p>
            <p>1、统计日期距离项目首次签约归属日期>=180天:从统计日期往前推6个月加一天，统计这6个月的实际销售面积，再除以6</p>
            <p>2、30天&lt;=统计日期距离项目首次签约归属日期&lt;180天:使用累计销售面积除以累计销售天数再乘以30。</p>
            <p>3、统计日期距离项目首次签约归属日期&lt;30天:使用累计销售面积。</p>
            <p>存销：未售面积 = 总产能表【可售未推未售可售面积】+ 【可售已推未售可售面积】<br>存销比 = 未售面积/近半年月均销售去化面积</p>
            <p>供销：预供货面积 = 总产能表【预供货可售面积】<br>供销比 = 预供货面积/近半年月均销售去化面积</p>
            <p>储销：未开工面积 = 总产能表【未开工可售面积】<br>存销比 = 未开工面积/近半年月均销售去化面积</p>
           </div>
          <div class="tips tip-container" v-show="$route.path == '/RemovalRate'">
            <h5>口径说明</h5>
            <p>数据范围：全口径项目，包含责任制表内管理项目+责任制表外管理项目</p>
            <p>数据口径：全业态 或 不含车位储藏室</p>
            <p>可售面积(可售未推未售阶段)：取《总土地产能表》可售未推未售中可售面积 ①</p>
            <p>可售面积(可售已推未售阶段)：取《总土地产能表》可售已推未售中可售面积 ②</p>
            <p>本年累计签约面积：项目当年累计签约面积（含退换房）③</p>
            <p>年度累计去化率： ④ = ③ / (③+①+②)</p>
            <p>年度目标去化率：由集团财务提供，后台导入。作为去化率完成情况的达标参考 ⑤</p>
            <p>差异：=④-⑤</p>
          </div>
          <div class="tips tip-container" v-show="$route.path == '/productivity'">
            <h5>口径说明</h5>
            <p>未开工： (统计日期&lt;开工日期 或 无开工日期)楼栋的产能</p>
            <p>预供货：已开工未计入库存楼栋的产能(开工日期≤统计日期＜计入库存日期 或 无计入库存日期)</p>
            <p>可售未售(自持)：已计入库存(计入库存日期≤统计日期)且 房间为自持的产能</p>
            <p>可售未推未售：已计入库存未推盘(计入库存日期≤统计日期＜推盘日期 或 无推盘日期)且 房间不为自持 且 未推盘的产能</p>
            <p>可售已推未售：已推盘未签约(推盘日期≤统计日期＜签约归属日期 或 无签约归属日期)且 房间不为自持 的产能</p>
            <p>已售未交付：(签约归属日期≤统计日期＜通知书约定交楼起始日期 或 无通知书约定交楼起始日期)且 房间不为自持 的产能</p>
            <p>已售已交付：(通知书约定交楼起始日期≤统计日期)且 房间不为自持 的产能</p>
            <p>总产能=未开工+预供货+可售未售（自持）+可售未推未售+可售已推未售+已售未交付+已售已交付</p>
          </div>
          <div class="tips tip-container" v-show="$route.path == '/INVAGE'">
            <h5>口径说明</h5>
            <p>数据口径: 全业态 或 不含车位储藏室</p>
            <p>总库存：未售土储(包含：可售未推未售、可售已推未售阶段)</p>
            <p>超龄库存：房间未签约，且在主数据系统中维护的计入超龄日期小于等于统计日期，归为超龄</p>
            <p>本月库存去化-认购：认购归属日期在当月的认购数据</p>
            <p>本月库存去化-签约：签约归属日期在当月的签约数据</p>
            <p>超龄面积占比：超龄面积/库存面积</p>
          </div>
          <div class="tips tip-container" v-show="$route.path == '/priceManage/PriceAnalysis'">
            <h5>口径说明</h5>
            <p>1、项目范围：全口径项目</p>
            <p>2、更新频率：每6小时</p>
            <p>3、业态分类:<br>①住宅：洋房、高层、小高层、超高层;<br>②别墅：叠拼别墅、独立别墅、双拼别墅、联排别墅；<br>③商办：商业、商办、酒店下所有二级业态；<br>④车位：普通车位（即只计产权车位）</p>
            <p>4、价格取值：<br>①本月均价：慧销售系统签约均价。<br>&nbsp;&nbsp;【如：住宅价格=当月住宅类业态总签约金额 / 签约面积，若当月该项目无签约则沿用上月销售均价）】<br>②经营方案版价格：经营计划书申报系统价格。<br>&nbsp;&nbsp;【如：住宅价格= （所有住宅类业态的价格 X 面积之和）/ 住宅类业态汇总面积】<br>③年度预算版价格：后台导入财务年度预算版审批数据<br>&nbsp;&nbsp;【如：住宅价格= 住宅类业态汇总签约金额 / 住宅类业态签约面积】</p>
          </div>
          <div class="tips tip-footer">
            <img src="../../assets/img/tipfooter.png">
          </div>
        </div>
      </div>
    </van-overlay>
  </div>
</template>

<script>
export default {
  name: '',
  props: ['title'],
  data () {
    return {
      show: false
    }
  },
  computed: {
    tipsShow () {
      const path = this.$route.path
      return path === '/storage' || path === '/RemovalRate' || path === '/productivity' || path === '/INVAGE' || path === '/priceManage/PriceAnalysis'
    }
  },
  methods: {
    backPage () {
      this.$emit('backPage')
    },
    openMenu () {
      this.$emit('openMenu')
    },
    refresh () {
      this.$emit('refresh')
    },
    showTips () {
      this.$router.push('/tips')
    },
    showAlert () {
      if (this.$route.path === '/priceManage/index') {
        this.$parent.intermediary()
      }
      this.show = true
    },
    checkShowUpdateInfo () {
      const self = this
      this.$request({
        method: 'get',
        url: './CubeModule.json',
        data: {},
        headers: { 'usertoken': this.token }
      }).then((res) => {
        if (res.data.showUpdate) {
          const k = 'update' + res.data.build
          self.showUpdateInfo(k)
        }
      })
    },
    showUpdateInfo (k) {
      const now = this.$getCacheData(k)
      if (!now || now !== 'yes') {
        this.$setCacheData(k, 'yes')
        this.showAlert()
      }
    }
  },
  mounted () {
    this.checkShowUpdateInfo()
  }
}
</script>

<style lang="scss" scoped>
  @import '../../assets/style/rem.scss';
  .header-comp-content {
    width: 100%;
    height: 100%;
    z-index: 99999999;
    background-color: #001018;
    .header-container {
      position: relative;
      width: 100%;
      height: px2rem(50);
      line-height: px2rem(50);
      font-size: px2rem(18);
      text-align: center;
      background-color: #001E2D;
      // border: 1px solid rgb(255,0,0);
      .back-btn {
        position: absolute;
        height: px2rem(20);
        width: px2rem(20);
        left: px2rem(15);
        top: 50%;
        margin-top: px2rem(-10);
      }
      .header-title {
        position: absolute;
        left: px2rem(50);
        right: px2rem(50);
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .open-menu {
        position: absolute;
        height: px2rem(20);
        width: px2rem(20);
        // right: px2rem(45);
        right: px2rem(15);
        top: 50%;
        margin-top: px2rem(-10);
      }
      .explain-refresh {
        position: absolute;
        height: px2rem(20);
        width: px2rem(20);
        // right: px2rem(45);
        left: px2rem(58);
        top: 50%;
        margin-top: px2rem(-10);
      }
      .explain-price {
        position: absolute;
        height: px2rem(24);
        line-height: px2rem(24);
        display: inline-block;
        font-size: px2rem(14);
        right: px2rem(15);
        top: 50%;
        margin-top: -12px;
        text-decoration: underline;
      }
      .tips {
        position: absolute;
        right: px2rem(15);
        top: 50%;
        margin-top: px2rem(-10);
      }
      .tips1{
        position: absolute;
        height: px2rem(20);
        width: px2rem(20);
        // right: px2rem(45);
        right: px2rem(50);
        top: 50%;
        margin-top: px2rem(-10);
      }
    }
    .wrapper {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;
    }
    .block {
      width: px2rem(280);
      display: flex;
      flex-direction: column;
      border-radius: px2rem(6);
      background-color: #5BB7EB;
      overflow: hidden;
      .tips{
        line-height: 0;
        img {
          width: 100%;
        }
      }
      .tip-header {
        position: relative;
        .logo, span {
          width: auto;
          position: absolute;
          left: px2rem(20);
          top: px2rem(20);
          font-size: px2rem(16);
        }
      }
      .tip-container {
        line-height: px2rem(14);
        background-color: #5BB7EB;
        flex: 1;
        min-height: px2rem(180);
        h5 {
          margin-top: px2rem(20);
        }
        p {
          font-size: px2rem(12);
          text-align: left;
          padding: 0 px2rem(16);
          line-height: px2rem(15);
        }
      }
    }
  }
</style>
