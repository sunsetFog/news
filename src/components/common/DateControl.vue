<template>
  <div class="date-control">
    <!-- <input class="date-input" type="date"
    :id="id"
    :value="date" @input="inputHanle($event.target.value)"
    @change="changeDate($event)"
    required> -->
    <div class="date-box" @click="showPicker = true">
      <img src="../../assets/img/date@2x.png">
      <!-- <label :for="id">
      </label>
      <input readonly
      class="form-control"
      :value="date"
      type="text"
      :id="id"
      @input="inputHanle($event.target.value)"
      placeholder=""> -->
      {{date}}
    </div>
    <!-- <div class="time" v-show="time">更新时间：{{time}}</div> -->
    <span class="open-menu" @click="openMenu" v-if="this.$route.path !== '/ManageIncome'">
      <img src="../../assets/img/menu.png">组织切换
    </span>
    <!-- <span class="table" @click="selectTable" v-if="this.$route.path == '/manageData'">
      <img src="../../assets/img/form.png">{{falg ? '返回首页' : '表格模式'}}
    </span> -->
    <van-popup v-model="showPicker" position="bottom">
      <van-datetime-picker
        :item-height="130"
        v-model="currentDate"
        :type="datepicker"
        :max-date="maxDate"
        :min-date="minDate"
        @confirm="inputHanle"
        @cancel="showPicker = false"
      />
    </van-popup>
  </div>
</template>

<script>
import _ from 'lodash'
import dayjs from 'dayjs'

export default {
  name: 'dateControl',
  data () {
    return {
      id: _.uniqueId('date-'),
      currentDate: this.type === 'ym' ? new Date(this.date.replace(/-/g, '/') + '/01') : new Date(this.date.replace(/-/g, '/')),
      showPicker: false,
      maxDate: new Date(),
      falg: false,
      currentPath: this.$route.path
    }
  },
  props: {
    date: {
      type: String,
      default: function () {
        return window.defalutDate
      }
    },
    time: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'date'
    }
  },
  computed: {
    datepicker () {
      return this.type === 'ym' ? 'year-month' : 'date'
    },
    minDate () {
      const date = new Date()
      date.setMonth(date.getMonth() - 12)
      return date
    }
  },
  methods: {
    inputHanle (val) {
      let date = ''
      if (this.type === 'ym') date = dayjs(val).format('YYYY-MM')
      else date = dayjs(val).format('YYYY-MM-DD')
      this.$emit('refreshDate', date)
      this.showPicker = false
    },
    changeDate (val) {
      // console.log('changeDate val=', val)
    },
    selectTable () {
      this.falg = !this.falg
      this.$emit('changeTable', this.falg)
    },
    openMenu () {
      this.$router.push({ path: '/treeSelect', query: { backPath: this.currentPath } })
    }
  },
  created () {
  },
  mounted () {
    // let that = this
    // let calendar = new LCalendar()
    // // console.log('calendar=', calendar)
    // calendar.init({
    //   'trigger': '#' + that.id, // 标签id
    //   'type': that.type // date 调出日期选择 datetime 调出日期时间选择 time 调出时间选择 ym 调出年月选择
    //   // 'minDate':'1900-1-1', // 最小日期 注意：该值会覆盖标签内定义的日期范围
    //   // 'maxDate':'2020-3-18' // 最大日期 注意：该值会覆盖标签内定义的日期范围
    // })

    // new rolldate.Date({
    //   el: '#' + that.id,
    //   format: 'YYYY-MM-DD',
    //   beginYear: 2000,
    //   endYear: 2100,
    //   theme: 'blue',
    //   tapBefore: function (el) {
    //     console.log('插件开始触发')
    //   },
    //   moveEnd: function (el, iscroll) {
    //     console.log('滚动结束')
    //   },
    //   confirmBefore: function (el, date) {
    //     console.log('确定按钮触发')
    //   },
    //   confirmEnd: function (el, date) {
    //     console.log('插件运行结束')
    //   }
    // })
  }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/rem.scss';

.date-control {
  height: px2rem(50);
  padding-left: px2rem(15);
  font-size: px2rem(14);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 99999999;
  .date-box {
    display: flex;
    // justify-content: space-between;
    align-items: center;
  }

  .open-menu {
    margin-right: px2rem(15);
  }
  img {
    width: px2rem(16);
    height: px2rem(16);
    margin-right: px2rem(4);
    vertical-align: sub;
  }

  input {
    max-width: px2rem(120);
    padding: 0;
    text-align: left;
    border: none;
    background: none;
    color: #ffffff;
    // border: 1px solid rgba(200,0,0,1);
  }
  input:focus {
    border: none;
    outline: none;
  }
  .time {
    padding-right: px2rem(10);
    text-align: right;
    color: rgba(255,255,255,0.8);
    font-size: px2rem(12);
    // border: 1px solid rgba(200,0,0,1);
  }
}
</style>

<style>
.van-picker__cancel, .van-picker__confirm, .van-picker-column__item {
  font-size: 18px;
  color: #24E6F6;
}
.van-picker__toolbar {
  background-color: #062E41;
  height: 55px;
}
.van-picker-column {
  background-color: #000000;
}
.van-picker__mask {
  background-image: linear-gradient(180deg,hsla(0,0%,0%,.9),hsla(0,0%,0%,.4)),linear-gradient(0deg,hsla(0,0%,0%,.9),hsla(0,0%,0%,.4));
}
.van-hairline--top-bottom::after {
  content: '';
  display: none;
}
.van-hairline-unset--top-bottom::after {
  border-width: 0.05px 0;
}
</style>
