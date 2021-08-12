<template>
  <section class="page page-index" v-show="immortal">
    <header-bar title="项目价格动态分析"></header-bar>
    <div class="location-box">
      <span class="where-place" @click="wherePlace"><van-icon name="location"/>{{where_place}}</span>
      <div class="open-menu" @click="cityEvent">
        切换项目
        <img src="@static/image/menu.png">
      </div>
    </div>
    <div class="pen-content">
      <div class="price-dynamic">
        <div class="where-dynamic">{{where_dynamic}}</div>
        <div class="grid">
          <div class="grid-cell month-bidding">本月住宅均价</div>
          <div class="grid-cell col02" style="color: #898C8E">比上月</div>
          <div class="grid-cell col02" style="color: #898C8E">比去年</div>
        </div>
        <div class="grid">
          <div class="grid-cell" style="color: #99CCFF">
            <span v-if="material_list.deal_PRICE">{{material_list.deal_PRICE|quantile}}元/㎡</span>
            <span v-else>暂无</span>
          </div>
          <div class="grid-cell">
            <i class="el-icon-caret-top" style="color: #D0021B;" v-if="material_list.mom_rate>=0"></i>
            <i class="el-icon-caret-bottom" style="color: #6BCB04;" v-else></i>
            {{material_list.mom_rate}}%
          </div>
          <div class="grid-cell">
            <i class="el-icon-caret-top" style="color: #D0021B;" v-if="material_list.yoy_RATE>=0"></i>
            <i class="el-icon-caret-bottom" style="color: #6BCB04;" v-else></i>
            {{material_list.yoy_RATE}}%
          </div>
        </div>
        <div class="footprint mar-top"></div>
        <div class="decontamination">
          <ul>
            <li>全周期累计去化率</li>
            <li>{{material_list.REMOVAL_RATE_ALL}}%</li>
            <li>{{material_list.REMOVAL_RATE_YTD}}%</li>
            <li>本年累计去化率</li>
          </ul>
        </div>
        <div class="footprint"></div>
      </div>
      <div class="house">
        <div :class="{'house-cell': true,'house-active': item.active}" v-for="(item,index) in house_list" :key="index" @click="houseEvent(index)">
          <span v-if="index === 0">{{item.name}}<i class="el-icon-arrow-down" v-if="!card_active"></i><i class="el-icon-arrow-up" v-else></i></span>
          <span v-else>{{item.name}}</span>
        </div>
      </div>
      <div class="card-box" v-show="card_active">
        <i class="el-icon-caret-top"></i>
        <button v-for="(item, index) in card_list" :key="index" @click="cardEvent(index)" :class="{'card-active': item.active}">{{item.name}}</button>
      </div>
      <div class="line-chart">
        <cloud-echart dynamic_width="21.5rem" dynamic_height="25rem" :option_list="option_01"></cloud-echart>
      </div>
    </div>
    <loading v-show="loading"></loading>
  </section>
</template>

<script>
import headerBar from '@/explore/components/headerBar.vue'
import Loading from '@/explore/components/common/Loading'
import drawing from './echart.js'
export default {
  name: 'PriceAnalysis',
  data () {
    return {
      loading: false,
      immortal: false,
      where_place: '',
      center: [],
      where_dynamic: '',
      material_list: {},
      house_list: [{ name: '住宅', active: true }, { name: '别墅', active: false }, { name: '商办', active: false }, { name: '车位', active: false }],
      xJson: [],
      monthSort: [],
      card_active: false,
      card_list: [{ name: '住宅均价', active: true }, { name: '洋房', active: false }, { name: '小高层', active: false }, { name: '高层', active: false }, { name: '超高层', active: false }],
      card_index: 0,
      option_01: {}
    }
  },
  created () {
    if (Number(sessionStorage.getItem('immortal')) === 0) {
      sessionStorage.setItem('immortal', '1')
      location.reload()
      return
    }
    this.immortal = true
    if (this.$route.query.name) {
      this.where_dynamic = this.$route.query.name
    }
    this.dateSort()
    this.getJson()
  },
  mounted () {
  },
  computed: {
    token () {
      return this.$store.state.token
    }
  },
  filters: {
    quantile (num) {
      let dian = num.toFixed(0)
      return Number(dian).toLocaleString()
    }
  },
  watch: {
    token: {
      handler (newData, oldData) {
        if (newData !== 'test') {
          // this.getCapacity()
        }
      }
    }
  },
  methods: {
    interfaceError (value = '获取信息列表失败,请检查网络！') {
      this.$dialog.alert({
        title: '提醒',
        message: value
      })
    },
    dateSort () {
      let nowTime = new Date()
      let current = nowTime.getMonth() + 1
      let saveArr = []
      this.monthSort = []
      for (let i = current; i < 12; i++) {
        saveArr.push(i + 1)
      }
      for (let i = 0; i < current; i++) {
        saveArr.push(i + 1)
      }
      for (let i = 0; i < 12; i++) {
        let item = i + 1
        if (item.toString().length === 1) {
          this.monthSort.push('0' + item)
        } else {
          this.monthSort.push(item.toString())
        }
        this.xJson.push(saveArr[i] + '月')
      }
      this.monthSort = this.monthSort.reverse()
      // console.log('month', current, this.monthSort, this.xJson)
    },
    getJson () {
      this.loading = true
      const self = this
      let param = {
        'projectId': self.$route.query.code,
        'priceType': 'ACT_AVG'
      }
      this.$apihttp({
        url: '/priceAnalysis/priceAnalysisList',
        method: 'post',
        data: param
      }).then((res) => {
        if (res.data.length === 0) {
          self.loading = false
          self.interfaceError('暂无数据！')
          return
        }
        self.material_list = res.data[0]
        self.where_place = res.data[0].CITY_NAME
        self.where_dynamic = res.data[0].project_SALEname
        self.center = [res.data[0].project_long, res.data[0].project_lat]
        self.getEcharts()
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    cityEvent () {
      this.$router.push({ path: '/treeSelect', query: { backPath: this.$route.name } })
    },
    getEcharts () {
      const self = this
      let param = {
        // 'projectId': 'FCD47B9E-7F9B-4D76-B9A8-DE36A805FEB4'
        'projectId': self.$route.query.code
      }
      this.$apihttp({
        url: '/priceAnalysis/priceAnalysisTrendData',
        method: 'post',
        data: param
      }).then((res) => {
        self.loading = false
        // console.log('echarts---', res.data)
        let container = res.data
        for (let i = 0; i < container.length; i++) {
          self.loadList(container, i, 'MANAGER_AVG')
          self.loadList(container, i, 'PLAN_AVG')
          self.loadList(container, i, 'ACT_AVG')
          self.loadList(container, i, 'AREA')
        }
        self.option_01 = drawing.demo01(self, self.house_list[0].MANAGER_AVG, self.house_list[0].PLAN_AVG, self.house_list[0].ACT_AVG, self.house_list[0].AREA, self.xJson)
        // console.log('shuzu', self.house_list)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
      })
    },
    loadList (container, i, sign) {
      let self = this
      if (container[i].price_type === sign && container[i].sale_product_name === '住宅') {
        self.house_list[0][sign] = self.combination(container, i)
        self.card_list[0][sign] = self.combination(container, i)
      }
      if (container[i].price_type === sign && container[i].sale_product_name === '别墅') {
        self.house_list[1][sign] = self.combination(container, i)
      }
      if (container[i].price_type === sign && container[i].sale_product_name === '商办') {
        self.house_list[2][sign] = self.combination(container, i)
      }
      if (container[i].price_type === sign && container[i].sale_product_name === '车位') {
        self.house_list[3][sign] = self.combination(container, i)
      }
      if (container[i].price_type === sign && container[i].sale_product_name === '洋房') {
        self.card_list[1][sign] = self.combination(container, i)
      }
      if (container[i].price_type === sign && container[i].sale_product_name === '小高层') {
        self.card_list[2][sign] = self.combination(container, i)
      }
      if (container[i].price_type === sign && container[i].sale_product_name === '高层') {
        self.card_list[3][sign] = self.combination(container, i)
      }
      if (container[i].price_type === sign && container[i].sale_product_name === '超高层') {
        self.card_list[4][sign] = self.combination(container, i)
      }
    },
    combination (container, i) {
      let emptyArr = []
      emptyArr.push(
        container[i]['deal_price_' + this.monthSort[0]],
        container[i]['deal_price_' + this.monthSort[1]],
        container[i]['deal_price_' + this.monthSort[2]],
        container[i]['deal_price_' + this.monthSort[3]],
        container[i]['deal_price_' + this.monthSort[4]],
        container[i]['deal_price_' + this.monthSort[5]],
        container[i]['deal_price_' + this.monthSort[6]],
        container[i]['deal_price_' + this.monthSort[7]],
        container[i]['deal_price_' + this.monthSort[8]],
        container[i]['deal_price_' + this.monthSort[9]],
        container[i]['deal_price_' + this.monthSort[10]],
        container[i]['deal_price_' + this.monthSort[11]]
      )
      return emptyArr
    },
    // 返回上一页
    back () {
      this.$router.go(-1)
    },
    openMenu () {
      this.$store.commit('updateShowMask', true)
    },
    // 刷新
    refresh () {
      this.getJson()
    },
    houseEvent (index) {
      for (let i = 0; i < this.house_list.length; i++) {
        this.house_list[i].active = false
      }
      this.house_list[index].active = true
      if (index === 0) {
        if (this.card_active === false) {
          this.house_list[0].name = '住宅'
          this.cardEvent(this.card_index)
        } else {
          if (this.card_index !== 0) {
            this.house_list[0].name = this.card_list[this.card_index].name
          }
        }
        this.card_active = !this.card_active
        return
      } else {
        if (this.card_index !== 0) {
          this.house_list[0].name = this.card_list[this.card_index].name
        }
      }
      this.card_active = false
      let format = ''
      if (index === 3) {
        format = 'car'
      }
      this.option_01 = drawing.demo01(this, this.house_list[index].MANAGER_AVG, this.house_list[index].PLAN_AVG, this.house_list[index].ACT_AVG, this.house_list[index].AREA, this.xJson, format)
    },
    cardEvent (index) {
      this.card_index = index
      for (let i = 0; i < this.card_list.length; i++) {
        this.card_list[i].active = false
      }
      this.card_list[index].active = true
      this.option_01 = drawing.demo01(this, this.card_list[index].MANAGER_AVG, this.card_list[index].PLAN_AVG, this.card_list[index].ACT_AVG, this.card_list[index].AREA, this.xJson)
    },
    wherePlace () {
      this.$router.push({ path: '/PriceManage', query: { place: this.where_place, project_long: this.center[0], project_lat: this.center[1], project_id: this.$route.query.code, location: true } })
    }
  },
  components: {
    headerBar,
    Loading
  }
}
</script>

<style lang="less" scoped>
.page-index {
  width: 100%;
  .location-box {
    height: 100px;
    padding: 50px 15px 0 15px;
    font-size: 14px;
    .where-place {
      height: 50px;
      line-height: 50px;
      float: left;
      i {
        margin-right: 3px;
        vertical-align: middle;
      }
    }
    .open-menu {
      height: 50px;
      line-height: 50px;
      float: right;
      img {
        width: 20px;
        height: 20px;
        vertical-align: middle;
      }
    }
  }
  .pen-content {
    width: 345px;
    margin: 0 0 0 15px;
    background-color: #00273A;
    .price-dynamic {
      width: 100%;
      padding: 8px 30px 5px 30px;
      box-sizing: border-box;
      .where-dynamic {
        width: 100%;
        height: 35px;
        text-align: center;
        overflow: hidden;
        line-height: 35px;
        font-size: 16px;
        margin-bottom: 5px;
      }
      .month-bidding {
        text-align: left !important;
        font-size: 14px !important;
      }
      .col02 {
        text-align: left !important;
        text-indent: 40px;
      }
      .grid {
        display: flex;
        .grid-cell {
          flex: 1;
          height: 25px;
          line-height: 25px;
          text-align: center;
          font-size: 12px;
          i {
            margin-right: 4px;
          }
        }
      }
      .footprint {
        width: 100%;
        height: 1px;
        border-bottom: 0.6px solid #313B41;
      }
      .mar-top {
        margin-top: 10px;
      }
      .decontamination {
        width: 100%;
        height: 40px;
        line-height: 40px;
        font-size: 12px;
        ul {
          width: 100%;
          height: 100%;
          li {
            float: left;
          }
          li:nth-of-type(1) {
            margin-right: 5px;
          }
          li:nth-of-type(2) {
            color: #99CCFF;
          }
          li:nth-of-type(3) {
            float: right;
            color: #99CCFF;
          }
          li:nth-of-type(4) {
            float: right;
            margin-right: 5px;
          }
        }
      }
    }
    .house {
      display: flex;
      padding: 0 20px;
      box-sizing: border-box;
      justify-content: space-between;
      margin: 15px 0 15px 0;
      position: relative;
      .house-cell {
        flex: 0 0 20%;
        height: 32px;
        text-align: center;
        line-height: 28px;
        background: #10364C;
        border-radius: 4px;
        font-size: 12px;
        position: relative;
        i {
          font-size: 14px;
          position: absolute;
          left: 24px;
          bottom: -1px;
        }
      }
      .house-cell:nth-of-type(1) {
        -line-height: 24px;
      }
      .house-active{
        background: #5C6E79;
      }
    }
    .card-box {
      width: 345px;
      height: 94px;
      -border-radius: 4px;
      background-color: #00202F;
      -border: solid 1px #ccc;
      -box-shadow: 1px 1px 6px 0 #ccc;
      position: relative;
      .card-active {
        color: #fff;
        background: #5C6E79 !important;
      }
      i {
        font-size: 20px;
        color: #00202F;
        position: absolute;
        left: 41px;
        top: -14px;
      }
      button {
        border: none;
        outline: none;
        width: 61px;
        height: 32px;
        font-size: 12px;
        -border: 1px solid #dcdfe6;
        color: #fff;
        background: #10364C;
        border-radius: 4px;
      }
      button:nth-of-type(1) {
        width: 80px;
        position: absolute;
        left: 132.5px;
        top: 10px;
      }
      button:nth-of-type(2) {
        position: absolute;
        left: 20px;
        top: 52px;
      }
      button:nth-of-type(3) {
        position: absolute;
        left: 101.3px;
        top: 52px;
      }
      button:nth-of-type(4) {
        position: absolute;
        left: 182.6px;
        top: 52px;
      }
      button:nth-of-type(5) {
        position: absolute;
        left: 263.9px;
        top: 52px;
      }
    }
    .line-chart {
      width: 100%;
      min-height: 415px;
      padding: 15px 0 0 0;
      box-sizing: border-box;
    }
  }
}
</style>
