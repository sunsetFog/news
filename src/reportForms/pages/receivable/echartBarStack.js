export default {
  demo01 (self, item1 = [], item2 = [], item3 = [], item4 = [], xAxis = []) {
    if (Number(item1.length) === 0 && Number(item2.length) === 0 && Number(item3.length) === 0 && Number(item4.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [{ name: '已到期金额', unit: '亿' }, { name: '本月到期金额', unit: '亿' }, { name: '次月到年末到期金额', unit: '亿' }, { name: '次年到以后到期金额', unit: '亿' }]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    const wordColor = '#fff'
    const seriesColor = self.$means.colorFlowers(4)
    const textStyle01 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    return {
      tooltip: {
        trigger: 'axis',
        textStyle: textStyle01,
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        extraCssText: 'z-index: 2',
        formatter: function (value) {
          return self.$means.tipFormatter(value, engineering, seriesColor, [], '亿')
        }
      },
      legend: {
        textStyle: textStyle01,
        x: 'center',
        y: 'bottom',
        padding: 10,
        // icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(7), // 高度
        itemGap: self.$means.pxAndRem(6), // 间距
        data: legendData
      },
      grid: {
        left: '3%',
        right: '9%',
        top: '3%',
        bottom: '18%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 0, // 显示全部
          // formatter: '{value}万', // 单位
          // rotate: 40, // 倾斜40角度
          // showMaxLabel: true, // 最后一个刻度显示
          textStyle: textStyle01,
          formatter: function (value, index) {
            return self.$means.conversion(value, '亿', '亿')
          }
        },
        minInterval: 10000, // 最小间隔
        splitNumber: 3 // 至少间隔个数
      },
      yAxis: {
        type: 'category',
        triggerEvent: true,
        axisLabel: {
          show: true,
          textStyle: textStyle01
          // formatter: '{value}' // 单位
          // formatter: function (value, index) {
          //   value = value / 10000 + '万'
          //   return value
          // }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: wordColor,
            width: 2
          }
        },
        // data: ['华中', '华北', '皖苏', '沪苏', '西南', '珠三角', '川渝']
        data: xAxis
      },
      series: [
        this.seriesBar(self, '已到期金额', seriesColor[0], item1),
        this.seriesBar(self, '本月到期金额', seriesColor[1], item2),
        this.seriesBar(self, '次月到年末到期金额', seriesColor[2], item3),
        this.seriesBar(self, '次年到以后到期金额', seriesColor[3], item4)
      ]
    }
  },
  demo02 (self, item1 = [], item2 = [], item3 = [], item4 = [], item5 = [], item6 = [], item7 = [], item8 = [], xAxis = []) {
    if (Number(item1.length) === 0 && Number(item2.length) === 0 && Number(item3.length) === 0 && Number(item4.length) === 0 && Number(item5.length) === 0 && Number(item6.length) === 0 && Number(item7.length) === 0 && Number(item8.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [
      { name: '未网签备案', unit: '亿' }, { name: '资料不齐,未面签', unit: '亿' }, { name: '审批中(商贷)', unit: '亿' }, { name: '待放款(商贷)', unit: '亿' },
      { name: '审批中,待放款(公积金)', unit: '亿' }, { name: '首付分期未齐', unit: '亿' }, { name: '工程进度未达', unit: '亿' }, { name: '问题客户', unit: '亿' }
    ]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    const wordColor = '#fff'
    const seriesColor = self.$means.colorFlowers(8)
    const textStyle01 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    return {
      tooltip: {
        trigger: 'axis',
        textStyle: textStyle01,
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        extraCssText: 'z-index: 2',
        formatter: function (value) {
          return self.$means.tipFormatter(value, engineering, seriesColor, [], '亿')
        }
      },
      legend: {
        textStyle: textStyle01,
        x: 'center',
        y: 'bottom',
        padding: 10,
        // icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(7), // 高度
        itemGap: self.$means.pxAndRem(5), // 间距
        data: legendData
      },
      grid: {
        left: '3%',
        right: '9%',
        top: '3%',
        bottom: '22%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 0, // 显示全部
          // formatter: '{value}万', // 单位
          // rotate: 40, // 倾斜40角度
          // showMaxLabel: true, // 最后一个刻度显示
          textStyle: textStyle01,
          formatter: function (value, index) {
            return self.$means.conversion(value, '亿', '亿')
          }
        },
        minInterval: 10000, // 最小间隔
        splitNumber: 3 // 至少间隔个数
      },
      yAxis: {
        type: 'category',
        triggerEvent: true,
        axisLabel: {
          show: true,
          textStyle: textStyle01
          // formatter: '{value}' // 单位
          // formatter: function (value, index) {
          //   value = value / 10000 + '万'
          //   return value
          // }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: wordColor,
            width: 2
          }
        },
        // data: ['华中', '华北', '皖苏', '沪苏', '西南', '珠三角', '川渝']
        data: xAxis
      },
      series: [
        this.seriesBar(self, '未网签备案', seriesColor[0], item1),
        this.seriesBar(self, '资料不齐,未面签', seriesColor[1], item2),
        this.seriesBar(self, '审批中(高贷)', seriesColor[2], item3),
        this.seriesBar(self, '待放款(高贷)', seriesColor[3], item4),
        this.seriesBar(self, '审批中,待放款(公积金)', seriesColor[4], item5),
        this.seriesBar(self, '首付分期未齐', seriesColor[5], item6),
        this.seriesBar(self, '工程进度未达', seriesColor[6], item7),
        this.seriesBar(self, '问题客户', seriesColor[7], item8)
      ]
    }
  },
  demo03 (self, item1 = []) {
    if (Number(item1.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [{ name: '逾期处理情况', unit: '亿' }]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    const wordColor = '#fff'
    const seriesColor = self.$means.colorFlowers(1)
    const textStyle01 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    return {
      tooltip: {
        trigger: 'axis',
        textStyle: textStyle01,
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        extraCssText: 'z-index: 2',
        formatter: function (value) {
          return value[0].axisValue + ':&nbsp;' + self.$means.conversion(value[0].value, '亿', '亿', 2)
        }
      },
      legend: {
        show: false,
        textStyle: textStyle01,
        x: 'center',
        y: 'bottom',
        padding: 10,
        // icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(7), // 高度
        itemGap: self.$means.pxAndRem(5), // 间距
        data: legendData
      },
      grid: {
        left: '3%',
        right: '7%',
        top: '6%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 0, // 显示全部
          // formatter: '{value}亿', // 单位
          // rotate: 40, // 倾斜40角度
          // showMaxLabel: true, // 最后一个刻度显示
          textStyle: textStyle01,
          formatter: function (value, index) {
            return self.$means.conversion(value, '亿', '亿')
          }
        },
        minInterval: 10000, // 最小间隔
        splitNumber: 3 // 至少间隔个数
      },
      yAxis: {
        type: 'category',
        axisLabel: {
          show: true,
          textStyle: textStyle01
          // formatter: '{value}' // 单位
          // formatter: function (value, index) {
          //   value = value / 10000 + '万'
          //   return value
          // }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: wordColor,
            width: 2
          }
        },
        data: ['年末逾期余额', '本年累计清理', '本年累计新增', '年初逾期余额']
      },
      series: [
        this.seriesBar(self, '逾期处理情况', '#3F9FE3', item1)
      ]
    }
  },
  demo04 (self, item1 = [], item2 = [], item3 = [], xAxis = []) {
    if (Number(item1.length) === 0 && Number(item2.length) === 0 && Number(item3.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [{ name: '上年平均', unit: '天' }, { name: '上月平均', unit: '天' }, { name: '本月平均', unit: '天' }]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    const wordColor = '#fff'
    const seriesColor = self.$means.colorFlowers(3)
    const textStyle01 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    return {
      tooltip: {
        trigger: 'axis',
        textStyle: textStyle01,
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        extraCssText: 'z-index: 2',
        formatter: function (value) {
          return self.$means.tipFormatter(value, engineering, seriesColor, [])
        }
      },
      legend: {
        textStyle: textStyle01,
        x: 'center',
        y: 'top',
        top: '5%',
        padding: 10,
        // icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(7), // 高度
        itemGap: self.$means.pxAndRem(15), // 间距
        data: legendData
      },
      grid: {
        left: '3%',
        right: '7%',
        top: '16%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: {
        type: 'value',
        axisLabel: {
          show: true,
          interval: 0, // 显示全部
          // formatter: '{value}天', // 单位
          // rotate: 40, // 倾斜40角度
          // showMaxLabel: true, // 最后一个刻度显示
          textStyle: textStyle01,
          formatter: function (value, index) {
            return value + '天'
          }
        },
        minInterval: 0.1, // 最小间隔
        splitNumber: 3 // 至少间隔个数
      },
      yAxis: {
        type: 'category',
        triggerEvent: true,
        axisLabel: {
          show: true,
          textStyle: textStyle01
          // formatter: '{value}' // 单位
          // formatter: function (value, index) {
          //   value = value / 10000 + '万'
          //   return value
          // }
        },
        axisLine: {
          show: true,
          lineStyle: {
            color: wordColor,
            width: 2
          }
        },
        // data: ['华北', '浙江', '珠三角', '辽宁']
        data: xAxis
      },
      series: [
        this.seriesBar(self, '上年平均', seriesColor[0], item1, ''),
        this.seriesBar(self, '上月平均', seriesColor[1], item2, ''),
        this.seriesBar(self, '本月平均', seriesColor[2], item3, '')
      ]
    }
  },
  seriesBar (self, name, color, data, stack = '总量') {
    if (data === 1) {
      data = [32, 30, 30, 33, 39, 33, 32]
    } else if (data === 2) {
      data = [12, 13, 10, 13, 9, 23, 21]
    } else if (data === 3) {
      data = [22, 18, 19, 23, 29, 33, 31]
    } else if (data === 4) {
      data = [15, 21, 20, 15, 19, 33, 41]
    }
    let res = {
      name: name,
      type: 'bar',
      stack: stack,
      barMaxWidth: self.$means.pxAndRem(15),
      label: {
        show: false,
        position: 'insideRight'
      },
      itemStyle: {
        normal: {
          color: color,
          lineStyle: { width: self.$means.pxAndRem(1.5), color: color }
        }
      },
      data: data
    }
    return res
  }
}
