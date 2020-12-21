<template>
  <section id="receivable">
    <header-bar :title="title"></header-bar>
    <div class="header-box">

    </div>

    <article class="contain">
        <div class="grid">
          <div class="grid-cell" v-for="(item,index) in first_stage" :key="index">
            <p>{{item.title}}</p>
            <p><span>{{item.value}}</span>{{item.sign}}</p>
          </div>
        </div>

        <div class="income-change">
          <label>近一年应收变动情况</label>
          <div class="box">
            <cloud-echart dynamic_width="21.5rem" dynamic_height="11.53rem" :option_list="option_01"></cloud-echart>
          </div>
        </div>
        <div class="income-contrast">
          <label>各区域应收对比</label>
          <cloud-echart dynamic_width="21.5rem" :dynamic_height="height_02" :option_list="option_02" @xAxisEvent="xAxisEvent"></cloud-echart>
        </div>

        <div class="structure">
          <label>各区域应收结构分析</label>
          <div class="format">
            <div class="format-cell" v-for="(item, index) in payment_list" :key="index">
              <ul>
                <li>{{item.title}}</li>
                <li>{{item.money}}亿</li>
                <li>占比{{item.percentage}}%</li>
              </ul>
            </div>
          </div>
          <div class="columnar">
            <div class="columnar-cell">分期款</div>
            <div :class="{'columnar-cell': true, 'scroll-active': levelType !== 1 && levelType !== 2}">
              <cloud-echart :dynamic_width="width_03" dynamic_height="14.36rem" :option_list="option_03" @xAxisEvent="xAxisEvent"></cloud-echart>
            </div>
            <div class="columnar-cell">按揭款</div>
            <div :class="{'columnar-cell': true, 'scroll-active': levelType !== 1 && levelType !== 2}">
              <cloud-echart :dynamic_width="width_04" dynamic_height="14.36rem" :option_list="option_04" @xAxisEvent="xAxisEvent"></cloud-echart>
            </div>
          </div>
        </div>

        <div class="be-overdue">
          <label>逾期处理情况</label>
          <div class="situation">
            <cloud-echart dynamic_width="21.5rem" dynamic_height="7.5rem" :option_list="option_05"></cloud-echart>
          </div>
        </div>

        <div class="mortgage-analysis">
          <label>按揭分析</label>
          <div class="house">
            <div :class="{'house-cell': true,'col34': index==2||index==3,'house-active': item.active}" v-for="(item,index) in house_list" :key="index" @click="houseEvent(index)">
              {{item.name}}
              <div class="triangle" v-if="item.active"></div>
            </div>
          </div>
          <div class="tag1" v-show="tag_index == 0">
            <div class="proportion1">
              <ul>
                <li>本月按揭回款<span>{{tab1_list.mtd_rec_amt}}亿</span></li>
                <li>环比<span>{{tab1_list.lm_mtd_rec_amt}}亿</span><span>{{tab1_list.mtd_rec_mom_rate}}%</span></li>
                <li>同比<span>{{tab1_list.ly_mtd_rec_amt}}亿</span><span>{{tab1_list.rec_yoy_rate}}%</span></li>
              </ul>
              <ul>
                <li>本年按揭回款<span>{{tab1_list.ytd_rec_amt}}亿</span></li>
                <li>环比<span>{{tab1_list.lm_ytd_rec_amt}}亿</span><span>{{tab1_list.ytd_rec_mom_rate}}%</span></li>
                <li>同比<span>{{tab1_list.ly_ytd_rec_amt}}亿</span><span>{{tab1_list.ly_rec_yoy_rate}}%</span></li>
              </ul>
            </div>
            <cloud-echart dynamic_width="20.85rem" :dynamic_height="height_06" :option_list="option_06" @xAxisEvent="xAxisEvent"></cloud-echart>
          </div>
          <div class="tag2" v-show="tag_index == 1">
            <div class="proportion2">
              <ul>
                <li>本月按揭在途<span>{{tab2_list.PLAN_AMOUNT}}亿</span></li>
                <li>环比年初<span>{{tab2_list.BOY_PLAN_AMONT}}亿</span><span>{{tab2_list.MOY_RATE}}%</span></li>
              </ul>
            </div>
            <cloud-echart dynamic_width="20.85rem" :dynamic_height="height_07" :option_list="option_07" @xAxisEvent="xAxisEvent"></cloud-echart>
          </div>
          <div class="tag3" v-show="tag_index == 2">
            <div class="interest-rate">
              <ul>
                <li>本月按揭回款逾期率</li>
                <li>{{tab1_list.mtd_overdue_rec_amt_rate}}%</li>
              </ul>
              <ul>
                <li>本年按揭回款逾期率</li>
                <li>{{tab1_list.ytd_overdue_rec_amt_rate}}%</li>
              </ul>
            </div>
            <div class="footprint"></div>
            <div class="pie-box">
              <cloud-echart dynamic_width="20.85rem" dynamic_height="3.75rem" :option_list="option_08"></cloud-echart>
            </div>
            <div class="proportion3">
              <ul>
                <li>本年正常按揭回款<span>{{tab1_list.ytd_normal_rec_amt}}亿</span></li>
                <li>环比<span>{{tab1_list.lm_ytd_normal_rec_amt}}亿</span><span>{{tab1_list.ytd_normal_mom_rate}}%</span></li>
                <li>同比<span>{{tab1_list.ly_ytd_normal_rec_amt}}亿</span><span>{{tab1_list.normal_yoy_rate}}%</span></li>
              </ul>
              <ul>
                <li>本年逾期按揭回款<span>{{tab1_list.ytd_overdue_rec_amt}}亿</span></li>
                <li>环比<span>{{tab1_list.lm_ytd_overdue_rec_amt}}亿</span><span>{{tab1_list.ytd_overdue_mom_rate}}%</span></li>
                <li>同比<span>{{tab1_list.ly_ytd_overdue_rec_amt}}亿</span><span>{{tab1_list.overdue_yoy_rate}}%</span></li>
              </ul>
            </div>
            <cloud-echart dynamic_width="20.85rem" :dynamic_height="height_09" :option_list="option_09" @xAxisEvent="xAxisEvent"></cloud-echart>
          </div>
          <div class="tag4" v-show="tag_index == 3">
            <div class="proportion4">
              <ul>
                <li>本月平均回款时长:<span>{{tab4_list.month_cur_avg_times}}天</span></li>
                <li>环比<span>{{tab4_list.month_mom_rate}}%</span></li>
                <li>同比<span>{{tab4_list.month_yoy_rate}}%</span></li>
              </ul>
              <ul>
                <li>本年平均回款时长:<span>{{tab4_list.year_cur_avg_times}}天</span></li>
                <li>环比<span>{{tab4_list.year_mom_rate}}%</span></li>
                <li>同比<span>{{tab4_list.year_yoy_rate}}%</span></li>
              </ul>
            </div>
            <cloud-echart dynamic_width="20.85rem" dynamic_height="20.76rem" :option_list="option_10" @xAxisEvent="xAxisEvent"></cloud-echart>
          </div>
        </div>
    </article>
  </section>
</template>

<script>
import headerBar from '../../components/headerBar.vue'
import drawingLine from './echartLine.js'
import echartLineBar from './echartLineBar.js'
import echartBarStack from './echartBarStack.js'
import echartBar from './echartBar.js'
import echartPie from './echartPie.js'
export default {
  name: 'receivable',
  data () {
    return {
      title: '置业应收账款分析',
      loading: false,
      levelType: 1,
      cityId: '',
      date: window.defaultDate,
      time: '',
      organizationId: '',
      house_list: [{ name: '按揭回款', active: true }, { name: '在途按揭', active: false }, { name: '按揭逾期回款', active: false }, { name: '按揭回款时长', active: false }],
      first_stage: [
        { title: '应收总额', value: '', sign: '亿' },
        { title: '逾期总额', value: '', sign: '亿' },
        { title: '逾期率', value: '', sign: '%' }
      ],
      payment_list: [
        { title: '内部员工分期', money: '', percentage: '' },
        { title: '外部客户分期', money: '', percentage: '' },
        { title: '商业贷款', money: '', percentage: '' },
        { title: '公积金贷款', money: '', percentage: '' }
      ],
      xJson: [],
      monthSort: [],
      tag_index: 0,
      tab1_list: {},
      tab2_list: {},
      tab4_list: {},
      height_02: '12.4rem',
      height_06: '20.76rem',
      height_07: '22.5rem',
      height_09: '14.06rem',
      width_03: '16.4rem',
      width_04: '16.4rem',
      option_01: {},
      option_02: {},
      option_03: {},
      option_04: {},
      option_05: {},
      option_06: {},
      option_07: {},
      option_08: {},
      option_09: {},
      option_10: {},
      record_list: []
    }
  },
  created () {
    this.interlinking(this.$route.query.level, this.$route.query.name, this.$route.query.code, this.$route.query.parentCode)
    this.init()
  },
  mounted () {
  },
  watch: {
    date () {
      this.init()
    }
  },
  methods: {
    interfaceError (value) {
      // 获取信息列表失败,请检查网络！
      if (!value) {
        return
      }
      this.$dialog.alert({
        title: '提醒',
        message: value
      })
    },
    init () {
      // this.dateSort()
      // this.selectBylist1()
      // this.structuralAnalysisList()
      // this.structuralMortgage()
      // this.overdueProcessingTotal()
      // this.overdueActualTime1()
      // this.overdueActualTime2()
      // this.overdueMortgageTotal1()
      // this.overdueMortgageTotal2()
      // this.inTransitMortgage1()
      // this.inTransitMortgage2()
    },
    interlinking (level, name, code, parentCode) {
      if (level) {
        this.levelType = Number(level)
        this.title = name
      }
      if (parentCode && Number(level) === 3) {
        this.organizationId = parentCode
        this.cityId = code
      } else {
        this.organizationId = code
      }
      if (this.levelType + 1 === 4) {
        this.height_02 = '23.43rem'
        this.height_09 = '23.43rem'
        this.height_06 = '23.43rem'
        this.height_07 = '23.43rem'
        this.width_03 = '23.43rem'
        this.width_04 = '23.43rem'
      }
    },
    xContent (value, level) {
      if (value.ORG_NAME) {
        if (level === 2) {
          return value.ORG_NAME.split('区域')[0]
        } else if (level === 3) {
          return value.ORG_CITY_NAME
        } else if (level === 4) {
          return value.PROJECT_NAME
        }
      } else {
        if (level === 2) {
          return value.org_name.split('区域')[0]
        } else if (level === 3) {
          return value.org_city_name
        } else if (level === 4) {
          return value.project_name
        }
      }
    },
    billion (num, unit = 100000000, digit = 1) {
      if (num) {
        num = (num / unit).toFixed(digit)
        return Number(num)
      } else {
        return '-'
      }
    },
    rate (num) {
      return Number(num.toFixed(1))
    },
    dateSort () {
      this.monthSort = []
      this.xJson = []
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
        this.xJson.push(saveArr[i] + '月')
        let item = i + 1
        this.monthSort.push(item.toString())
      }
      this.monthSort = this.monthSort.reverse()
      // console.log('month', this.monthSort, this.xJson)
    },
    dayByday (value) {
      let dBy = false
      if (dBy) {
        return value
      } else {
        return this.date.split('-').join('')
      }
    },
    orgKey (level, type) {
      level = Number(level)
      if (level === 1) {
        return ''
      } else if (level === 2 && type === '单') {
        return this.organizationId
      } else if (level === 2 && type === '列') {
        return ''
      } else if (level === 3 && type === '单') {
        return this.organizationId
      } else if (level === 3 && type === '列') {
        return this.organizationId
      } else if (level === 4) {
        return this.organizationId
      }
    },
    cityKey (level, type) {
      level = Number(level)
      if (level === 1) {
        return ''
      } else if (level === 2) {
        return ''
      } else if (level === 3 && type === '单') {
        return this.cityId
      } else if (level === 3 && type === '列') {
        return ''
      } else if (level === 4) {
        return this.cityId
      }
    },
    xAxisEvent (params) {
      // console.log('xAxis====', params.value, this.record_list, this.levelType + 1)
      let orgName = 'org_name'
      let orgId = 'org_id'
      let orgCityName = 'org_city_name'
      let orgCityId = 'org_city_id'
      for (let key in this.record_list[0]) {
        if (key === 'ORG_NAME') {
          orgName = orgName.toUpperCase()
          orgId = orgId.toUpperCase()
          orgCityName = orgCityName.toUpperCase()
          orgCityId = orgCityId.toUpperCase()
        }
      }
      for (let i = 0; i < this.record_list.length; i++) {
        if (this.record_list[i][orgName]) {
          if (this.levelType === 1 && params.value === this.record_list[i][orgName].split('区域')[0]) {
            this.interlinking(this.levelType + 1, this.record_list[i][orgName], this.record_list[i][orgId], '')
            this.init()
            break
          }
        }
        if (this.levelType === 2 && params.value === this.record_list[i][orgCityName]) {
          this.interlinking(this.levelType + 1, this.record_list[i][orgCityName], this.record_list[i][orgCityId], this.record_list[i][orgId])
          this.init()
          break
        }
      }
    },
    inTransitMortgage1 () {
      const self = this
      let param = { periodWid: self.dayByday('20201017'), orgId: self.orgKey(self.levelType, '单'), type: self.levelType, cityId: self.cityKey(self.levelType, '单') }
      this.$apihttp({
        url: '/accountsReceivable/inTransitMortgage',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        for (let i = 0; i < container.length; i++) {
          self.tab2_list.PLAN_AMOUNT = self.billion(container[i].PLAN_AMOUNT)
          self.tab2_list.BOY_PLAN_AMONT = self.billion(container[i].BOY_PLAN_AMONT)
          self.tab2_list.MOY_RATE = self.rate(container[i].MOY_RATE)
        }
        console.log('在途按揭1', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    inTransitMortgage2 () {
      const self = this
      let param = { periodWid: self.dayByday('20201017'), orgId: self.orgKey(self.levelType + 1, '列'), type: self.levelType + 1, cityId: self.cityKey(self.levelType + 1, '列') }
      this.$apihttp({
        url: '/accountsReceivable/inTransitMortgage',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        self.record_list = container
        let xAxis = []
        let item1 = []
        let item2 = []
        let item3 = []
        let item4 = []
        for (let i = 0; i < container.length; i++) {
          xAxis.push(self.xContent(container[i], self.levelType + 1))
          item1.push(container[i].BOY_WWQ_PLAN_AMOUNT)
          item2.push(container[i].BOY_YWQ_PLAN_AMOUNT)
          item3.push(container[i].WWQ_PLAN_AMOUNT)
          item4.push(container[i].YWQ_PLAN_AMOUNT)
        }
        self.option_07 = echartBar.demo02(self, item1, item2, item3, item4, xAxis)
        console.log('在途按揭2', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    selectBylist1 () {
      const self = this
      let param = { periodWid: self.dayByday('20200911'), orgId: self.orgKey(self.levelType, '单'), type: self.levelType, cityId: self.cityKey(self.levelType, '单') }
      this.$apihttp({
        url: '/accountsReceivable/selectBylist',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        let item1 = []
        let item2 = []
        for (let i = 0; i < container.length; i++) {
          item1 = self.combination(container, i, 'ys_sum_amt')
          item2 = self.combination(container, i, 'yq_sum_amt')
          self.first_stage[0].value = self.billion(container[i].ys_sum_amt1, undefined, 2)
          self.first_stage[1].value = self.billion(container[i].yq_sum_amt1, undefined, 2)
          self.first_stage[2].value = self.rate(container[i].yq_rate1)
        }
        self.selectBylist2()
        self.option_01 = drawingLine.demo01(self, item1, item2, self.xJson)
        console.log('近一年应收变动情况', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    selectBylist2 () {
      const self = this
      let param = { periodWid: self.dayByday('20200911'), orgId: self.orgKey(self.levelType + 1, '列'), type: self.levelType + 1, cityId: self.cityKey(self.levelType + 1, '列') }
      this.$apihttp({
        url: '/accountsReceivable/selectBylist',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        self.record_list = container
        let item1 = []
        let item2 = []
        let item3 = []
        let xAxis = []
        for (let i = 0; i < container.length; i++) {
          item1.push(container[i].ys_sum_amt1)
          item2.push(container[i].yq_sum_amt1)
          item3.push(self.rate(container[i].yq_rate1))
          xAxis.push(self.xContent(container[i], self.levelType + 1))
        }
        self.option_02 = echartLineBar.demo01(self, item1, item2, item3, xAxis, self.first_stage[2].value)
        console.log('各区域应收对比', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    combination (container, i, key) {
      let emptyArr = []
      emptyArr.push(
        container[i][key + this.monthSort[0]],
        container[i][key + this.monthSort[1]],
        container[i][key + this.monthSort[2]],
        container[i][key + this.monthSort[3]],
        container[i][key + this.monthSort[4]],
        container[i][key + this.monthSort[5]],
        container[i][key + this.monthSort[6]],
        container[i][key + this.monthSort[7]],
        container[i][key + this.monthSort[8]],
        container[i][key + this.monthSort[9]],
        container[i][key + this.monthSort[10]],
        container[i][key + this.monthSort[11]]
      )
      // console.log('数组=', emptyArr)
      return emptyArr
    },
    structuralAnalysisList () {
      const self = this
      let param = { periodWid: self.dayByday('20201008'), orgId: self.orgKey(self.levelType + 1, '列'), type: self.levelType + 1, cityId: self.cityKey(self.levelType + 1, '列') }
      this.$apihttp({
        url: '/accountsReceivable/structuralAnalysisList',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        self.record_list = container
        let xAxis = []
        let item1 = []
        let item2 = []
        let item3 = []
        let item4 = []
        let count1 = 0
        let count2 = 0
        let count3 = 0
        let count4 = 0
        let total = 0
        for (let i = 0; i < container.length; i++) {
          xAxis.push(self.xContent(container[i], self.levelType + 1))
          item1.push(container[i].fq_ydq_amt)
          item2.push(container[i].fq_bydq_amt)
          item3.push(container[i].fq_nextyear_amt)
          item4.push(container[i].fq_nrxt_amt)
          count1 += container[i].indoor_fq_amt
          count2 += container[i].outside_fq_amt
          count3 += container[i].sy_amt
          count4 += container[i].gjj_amt
          total += container[i].ys_sum_amt
        }
        self.payment_list[0].money = self.billion(count1, undefined, 2)
        self.payment_list[1].money = self.billion(count2, undefined, 2)
        self.payment_list[2].money = self.billion(count3, undefined, 2)
        self.payment_list[3].money = self.billion(count4, undefined, 2)
        self.payment_list[0].percentage = self.rate(count1 / total * 100)
        self.payment_list[1].percentage = self.rate(count2 / total * 100)
        self.payment_list[2].percentage = self.rate(count3 / total * 100)
        self.payment_list[3].percentage = self.rate(count4 / total * 100)
        self.option_03 = echartBarStack.demo01(self, item1, item2, item3, item4, xAxis)
        console.log('结构分析-分期', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    structuralMortgage () {
      const self = this
      let param = { periodWid: self.dayByday('20201008'), orgId: self.orgKey(self.levelType + 1, '列'), type: self.levelType + 1, cityId: self.cityKey(self.levelType + 1, '列') }
      this.$apihttp({
        url: '/accountsReceivable/structuralMortgage',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        self.record_list = container
        let xAxis = []
        let item1 = []
        let item2 = []
        let item3 = []
        let item4 = []
        let item5 = []
        let item6 = []
        let item7 = []
        let item8 = []
        for (let i = 0; i < container.length; i++) {
          if (!container[i].org_name) {
            continue
          }
          xAxis.push(self.xContent(container[i], self.levelType + 1))
          item1.push(container[i].wwqba_amt)
          item2.push(container[i].zlbqwmq_amt)
          item3.push(container[i].spz_amt)
          item4.push(container[i].dfk_amt)
          item5.push(container[i].spzdfk_amt)
          item6.push(container[i].sffqwq_amt)
          item7.push(container[i].gcjdwd_amt)
          item8.push(container[i].khwt_amt)
        }
        self.option_04 = echartBarStack.demo02(self, item1, item2, item3, item4, item5, item6, item7, item8, xAxis)
        console.log('应收结构分析-按揭', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    overdueProcessingTotal () {
      const self = this
      let param = { periodWid: self.dayByday('20200915'), orgId: self.orgKey(self.levelType, '单'), type: self.levelType, cityId: self.cityKey(self.levelType, '单') }
      this.$apihttp({
        url: '/accountsReceivable/overdueProcessingTotal',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        let item1 = []
        for (let i = 0; i < container.length; i++) {
          item1.push(container[i].end_amt)
          item1.push(container[i].ytd_clear_amt)
          item1.push(container[i].ytd_add_amt)
          item1.push(container[i].begin_amt)
        }
        self.option_05 = echartBarStack.demo03(self, item1)
        console.log('逾期处理情况', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    overdueActualTime1 () {
      const self = this
      let param = { periodWid: self.dayByday('20200918'), orgId: self.orgKey(self.levelType, '单'), type: self.levelType, cityId: self.cityKey(self.levelType, '单') }
      this.$apihttp({
        url: '/accountsReceivable/overdueActualTime',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        for (let i = 0; i < container.length; i++) {
          self.tab4_list.month_cur_avg_times = self.billion(container[i].month_cur_avg_times, 1, 0)
          self.tab4_list.month_mom_rate = self.rate(container[i].month_mom_rate)
          self.tab4_list.month_yoy_rate = self.rate(container[i].month_yoy_rate)
          self.tab4_list.year_cur_avg_times = self.billion(container[i].year_cur_avg_times, 1, 0)
          self.tab4_list.year_mom_rate = self.rate(container[i].year_mom_rate)
          self.tab4_list.year_yoy_rate = self.rate(container[i].year_yoy_rate)
        }
        console.log('按揭回款时长1', container, self.tab4_list)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    overdueActualTime2 () {
      const self = this
      let param = { periodWid: self.dayByday('20200918'), orgId: self.orgKey(self.levelType + 1, '列'), type: self.levelType + 1, cityId: self.cityKey(self.levelType + 1, '列') }
      this.$apihttp({
        url: '/accountsReceivable/overdueActualTime',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        self.record_list = container
        let xAxis = []
        let item1 = []
        let item2 = []
        let item3 = []
        for (let i = 0; i < container.length; i++) {
          xAxis.push(self.xContent(container[i], self.levelType + 1))
          item1.push(container[i].month_cur_avg_times)
          item2.push(container[i].month_pre_avg_times)
          item3.push(container[i].month_last_avg_times)
        }
        self.option_10 = echartBarStack.demo04(self, item1, item2, item3, xAxis)
        console.log('按揭回款时长2', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    overdueMortgageTotal1 () {
      const self = this
      let param = { periodWid: self.dayByday('20200831'), orgId: self.orgKey(self.levelType, '单'), type: self.levelType, cityId: self.cityKey(self.levelType, '单') }
      this.$apihttp({
        url: '/accountsReceivable/overdueMortgageTotal',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        for (let i = 0; i < container.length; i++) {
          self.tab1_list.mtd_overdue_rec_amt_rate = self.rate(container[i].mtd_overdue_rec_amt_rate)
          self.tab1_list.ytd_overdue_rec_amt_rate = self.rate(container[i].ytd_overdue_rec_amt_rate)

          self.tab1_list.pie_zc_rate = self.rate(container[i].ytd_normal_rec_amt / container[i].ytd_rec_amt)
          self.tab1_list.pie_yq_rate = self.rate(container[i].ytd_overdue_rec_amt / container[i].ytd_rec_amt)

          self.tab1_list.mtd_rec_amt = self.billion(container[i].mtd_rec_amt)
          self.tab1_list.lm_mtd_rec_amt = self.billion(container[i].lm_mtd_rec_amt)
          self.tab1_list.mtd_rec_mom_rate = self.rate(container[i].mtd_rec_mom_rate)
          self.tab1_list.ly_mtd_rec_amt = self.billion(container[i].ly_mtd_rec_amt)
          self.tab1_list.rec_yoy_rate = self.rate(container[i].rec_yoy_rate)

          self.tab1_list.ytd_rec_amt = self.billion(container[i].ytd_rec_amt)
          self.tab1_list.lm_ytd_rec_amt = self.billion(container[i].lm_ytd_rec_amt)
          self.tab1_list.ytd_rec_mom_rate = self.rate(container[i].ytd_rec_mom_rate)
          self.tab1_list.ly_ytd_rec_amt = self.billion(container[i].ly_ytd_rec_amt)
          self.tab1_list.ly_rec_yoy_rate = self.rate(container[i].ly_rec_yoy_rate)

          self.tab1_list.ytd_normal_rec_amt = self.billion(container[i].ytd_normal_rec_amt)
          self.tab1_list.lm_ytd_normal_rec_amt = self.billion(container[i].lm_ytd_normal_rec_amt) // 上月正常环比值
          self.tab1_list.ytd_normal_mom_rate = self.rate(container[i].ytd_normal_mom_rate) // 上月正常环比率
          self.tab1_list.ly_ytd_normal_rec_amt = self.billion(container[i].ly_ytd_normal_rec_amt) // 上年正常同比值
          self.tab1_list.normal_yoy_rate = self.rate(container[i].normal_yoy_rate) // 上年正常同比率

          self.tab1_list.ytd_overdue_rec_amt = self.billion(container[i].ytd_overdue_rec_amt)
          self.tab1_list.lm_ytd_overdue_rec_amt = self.billion(container[i].lm_ytd_overdue_rec_amt) // 上月逾期环比值
          self.tab1_list.ytd_overdue_mom_rate = self.rate(container[i].ytd_overdue_mom_rate) // 上月逾期环比率
          self.tab1_list.ly_ytd_overdue_rec_amt = self.billion(container[i].ly_ytd_overdue_rec_amt) // 上年逾期同比值
          self.tab1_list.overdue_yoy_rate = self.rate(container[i].overdue_yoy_rate) // 上年逾期同比率
        }
        self.houseEvent(0)
        self.option_08 = echartPie.demo01(self, self.tab1_list.pie_zc_rate, self.tab1_list.pie_yq_rate)
        console.log('按揭逾期回款1', container, self.tab1_list)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    overdueMortgageTotal2 () {
      const self = this
      let param = { periodWid: self.dayByday('20200831'), orgId: self.orgKey(self.levelType + 1, '列'), type: self.levelType + 1, cityId: self.cityKey(self.levelType + 1, '列') }
      this.$apihttp({
        url: '/accountsReceivable/overdueMortgageTotal',
        method: 'post',
        data: param
      }).then((res) => {
        let container = res.data.data
        if (Number(container.length) === 0) {
          return
        }
        self.record_list = container
        let tiao1 = []
        let tiao2 = []
        let item1 = []
        let item2 = []
        let item3 = []
        let xAxis = []
        for (let i = 0; i < container.length; i++) {
          tiao1.push(container[i].lm_mtd_rec_amt)
          tiao2.push(container[i].mtd_rec_amt)
          item1.push(container[i].ytd_normal_rec_amt)
          item2.push(container[i].ytd_overdue_rec_amt)
          item3.push(self.rate(container[i].ytd_overdue_rec_amt_rate))
          xAxis.push(self.xContent(container[i], self.levelType + 1))
        }
        self.option_06 = echartBar.demo01(self, tiao1, tiao2, xAxis)
        self.option_09 = echartLineBar.demo02(self, item1, item2, item3, xAxis)
        console.log('按揭逾期回款2', container)
      }).catch(error => {
        console.log(error)
        self.interfaceError()
        self.loading = false
      })
    },
    houseEvent (index) {
      this.tag_index = index
      for (let i = 0; i < this.house_list.length; i++) {
        this.house_list[i].active = false
      }
      this.house_list[index].active = true
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
      location.reload()
    },
    receive (value) {
      // let code = '15CF7AEB-FB72-4483-8F97-F6DFE86A36FA'
      this.$router.push({ path: '/PriceAnalysis', query: { code: value } })
    },
    setDate (val) {
      if (!val) {
        this.date = window.defaultDate
        return false
      }
      this.date = val
      window.defaultDate = val
    }
  },
  components: {
    headerBar
  }
}
</script>

<style lang="less" scoped>
#receivable {
  position: relative;
  width: 100%;
  background-color: #001018;
  color: #ffffff;
  font-family: PingFangSC-Medium;
  label {
    width: 100%;
    height: 20px;
    display: inline-block;
    line-height: 20px;
    text-align: left;
    color: #fff;
    font-weight: bold;
    font-size: 12px;
  }
  .header-box {
    width: 100%;
    height: 50px;
    position: fixed;
    top: 50px;
    left: 0;
    z-index: 999999999;
    background-color: #001018;
  }
  .contain {
    width: 100%;
    min-height: 650px;
    padding: 100px 15px 15px 15px;
    box-sizing: border-box;
    .grid {
      display: flex;
      justify-content: space-between;
      .grid-cell {
        flex: 0 0 30%;
        height: 50px;
        background: #48566F;
        p {
          margin: 0;
        }
        p:nth-of-type(1) {
          height: 20px;
          line-height: 20px;
          text-indent: 10px;
          color: #fff;
          font-weight: bold;
          font-size: 12px;
        }
        p:nth-of-type(2) {
          height: 30px;
          line-height: 30px;
          text-align: center;
          color: #FFFFFF;
          font-size: 12px;
          span {
            font-size: 14px;
          }
        }
      }
    }
  }
  .income-change {
    width: 100%;
    height: 185px;
    background: #48566F;
    margin: 15px 0 0 0;
    position: relative;
    label {
      position: absolute;
      left: 0px;
      top: 0px;
    }
    .box {
      position: absolute;
      left: 0px;
      top: 0px;
      height: 100%;
      z-index: 2;
    }
  }
  .income-contrast {
    width: 100%;
    min-height: 220px;
    background: #48566F;
    margin: 15px 0 0 0;
  }
  .structure {
    width: 100%;
    min-height: 335px;
    background: #48566F;
    margin: 15px 0 0 0;
    padding: 0 0 5px 0;
    box-sizing: border-box;
    .format {
      margin-top: 5px;
      display: flex;
      justify-content: space-around;
      .format-cell {
        flex: 0 0 24%;
        height: 40px;
        background: #333B4B;
        color: #ffffff;
        ul {
          li {

          }
          li:nth-of-type(1) {
            width: 100%;
            height: 20px;
            text-align: center;
            line-height: 20px;
            font-size: 11px;
          }
          li:nth-of-type(2) {
            height: 20px;
            float: left;
            font-size: 9px;
            line-height: 20px;
            margin-left: 1px;
          }
          li:nth-of-type(3) {
            height: 20px;
            text-align: left;
            line-height: 20px;
            float: right;
            margin-right: 1px;
            font-size: 9px;
          }
        }
      }
    }
    .columnar {
      display: flex;
      width: 335px;
      min-height: 462px;
      flex-wrap: wrap;
      margin: 5px 5px 0 5px;
      border-radius: 8);
      border: 1px solid #C9CACB;
      .scroll-active {
        overflow: scroll;
      }
      .columnar-cell:nth-of-type(1) {
        flex: 0 0 20%;
        float: left;
        height: 230px;
        border-right: 1px solid #C9CACB;
        border-bottom: 1px solid #C9CACB;
        text-align: center;
        line-height: 230px;
        font-size: 11px;
        background: #48566F;
        border-top-left-radius: 8px;
      }
      .columnar-cell:nth-of-type(2) {
        flex: 0 0 80%;
        float: left;
        height: 230px;
        border-bottom: 1px solid #C9CACB;
        border-top-right-radius: 8px;
      }
      .columnar-cell:nth-of-type(3) {
        flex: 0 0 20%;
        float: left;
        height: 230px;
        border-right: 1px solid #C9CACB;
        text-align: center;
        line-height: 230px;
        font-size: 11px;
        background: #48566F;
        border-bottom-left-radius: 8px;
      }
      .columnar-cell:nth-of-type(4) {
        flex: 0 0 80%;
        float: left;
        height: 230px;
        border-bottom-right-radius: 8px;
      }
    }
  }
  .be-overdue {
    width: 100%;
    min-height: 140px;
    background: #48566F;
    margin: 15px 0 0 0;
    .situation {
      width: 100%;
      height: 120px;
    }
  }
  .mortgage-analysis {
    width: 345px;
    min-height: 330px;
    background: #48566F;
    margin-top: 15px;
    padding: 0 0 5px 0;
    box-sizing: border-box;
    .house {
      display: flex;
      padding: 0 15px;
      box-sizing: border-box;
      justify-content: space-between;
      margin-top: 10px;
      .house-cell {
        flex: 0 0 18%;
        height: 25px;
        text-align: center;
        line-height: 25px;
        background: #fff;
        color: #333B4B;
        border-radius: 4px;
        font-size: 12px;
        position: relative;
        .triangle {
          width: 10px;
          height: 10px;
          border-left: 1px solid #C9CACB;
          border-top: 1px solid #C9CACB;
          background: #586B8D;
          -webkit-transform: rotate(45deg);
          -moz-transform: rotate(45deg);
          -ms-transform: rotate(45deg);
          -o-transform: rotate(45deg);
          position: absolute;
          left: 22px;
          top: 40.2px;
          z-index: 2;
        }
      }
      .col34 {
        flex: 0 0 25%;
      }
      .house-active{
        background: #4A90E2;
        color: #fff;
      }
    }
    .tag1, .tag2, .tag3, .tag4 {
      width: 335px;
      min-height: 394px;
      margin: 20px 0 0 5px;
      border: 1px solid #C9CACB;
      background: #586B8D;
      padding: 8px 0 0 0;
      box-sizing: border-box;
    }
    .proportion1 {
      width: 100%;
      padding: 0 0 5px 0;
      box-sizing: border-box;
      ul {
        font-size: 10px;
        background: #333B4B;
        color: #fff;
        width: 325px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        li {
          float: left;
          span {
            margin-left: 3px;
          }
        }
        li:nth-of-type(1) {
          width: 34%;
          text-indent: 3px;
          text-align: left;
        }
        li:nth-of-type(2) {
          width: 33%;
          text-align: center;
        }
        li:nth-of-type(3) { // 环比
          width: 33%;
          text-align: center;
        }
      }
      ul:nth-of-type(1) {
        margin-bottom: 8px;
      }
    }
    .proportion2 {
      width: 100%;
      padding: 0 0 5px 0;
      box-sizing: border-box;
      ul {
        font-size: 10px;
        background: #333B4B;
        color: #fff;
        width: 325px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-align: center;
        li {
          float: left;
          span {
            margin-left: 10px;
          }
        }
        li:nth-of-type(1) {
          width: 40%;
          text-align: left;
          text-indent: 3px;
        }
        li:nth-of-type(2) {
          width: 60%;
          text-align: center;
        }
      }
    }
    .proportion3 {
      width: 100%;
      padding: 0 0 5px 0;
      box-sizing: border-box;
      ul {
        font-size: 10px;
        background: #333B4B;
        color: #fff;
        width: 325px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-align: center;
        li {
          float: left;
          span {
            margin-left: 3px;
          }
        }
        li:nth-of-type(1) {
          width: 38%;
          text-align: left;
          text-indent: 1px;
        }
        li:nth-of-type(2) {
          width: 31%;
          text-align: center;
        }
        li:nth-of-type(3) { // 环比
          width: 31%;
          text-align: center;
        }
      }
      ul:nth-of-type(1) {
        margin-bottom: 8px;
      }
    }
    .proportion4 {
      width: 100%;
      padding: 0 0 5px 0;
      box-sizing: border-box;
      ul {
        font-size: 10px;
        background: #333B4B;
        color: #fff;
        width: 325px;
        height: 20px;
        line-height: 20px;
        margin: 0 auto;
        text-align: center;
        li {
          float: left;
          span {
            margin-left: 8px;
          }
        }
        li:nth-of-type(1) {
          width: 40%;
          text-align: left;
          text-indent: 3px;
        }
        li:nth-of-type(2) {
          width: 30%;
          text-align: center;
        }
        li:nth-of-type(3) { // 环比
          width: 30%;
          text-align: center;
        }
      }
      ul:nth-of-type(1) {
        margin-bottom: 8px;
      }
    }
    .interest-rate {
      width: 100%;
      min-height: 45px;
      position: relative;
      ul {
        width: 120px;
        background: #333B4B;
        color: #fff;
        position: absolute;
        li {
          width: 100%;
          height: 20px;
          text-align: center;
          line-height: 20px;
          font-size: 10px;
        }
        li:nth-of-type(2) {
          font-size: 12px;
        }
      }
      ul:nth-of-type(1) {
        top: 0px;
        left: 35px;
      }
      ul:nth-of-type(2) {
        top: 0px;
        right: 35px;
      }
    }
    .footprint {
      width: 315px;
      height: 1px;
      border-bottom: 0.6px solid #C9CACB;
      margin-left: 10px;
    }
    .pie-box {
      width: 100%;
      min-height: 60px;
      box-sizing: border-box;
      -border: 1px solid blue;
    }
  }
}
</style>
