export default {
  demo01 (self, item1 = [], item2 = [], xAxis = []) {
    if (Number(item1.length) === 0 && Number(item2.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [{ name: '上月同期', unit: '亿' }, { name: '本月累计', unit: '亿' }]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    const wordColor = '#fff'
    const seriesColor = self.$means.colorFlowers(2)
    const gradients = self.$means.colorFlowers(2)
    const textStyle01 = { color: '#94BFF1', fontSize: self.$means.pxAndRem(10), fontStyle: 'normal', fontWeight: '500' }
    const textStyle02 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    return {
      title: {
        text: self.$means.title,
        lineStyle: {
          color: '#000'
        },
        top: '1%',
        x: 'left',
        textStyle: textStyle01
      },
      legend: {
        show: true,
        textStyle: textStyle02,
        top: '5%',
        // left: '6%'
        x: 'center',
        // icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(7), // 高度
        itemGap: self.$means.pxAndRem(15), // 间距
        data: legendData
      },
      xAxis: [{
        type: 'category',
        triggerEvent: true,
        axisLine: {
          onZero: false,
          lineStyle: {
            color: wordColor
          }
        },
        // data: ['皖苏北', '沪苏', '浙江', '赣闽', '华北', '珠三角', '川渝', '西南', '华中', '粤桂', '辽宁', '物业集团'],
        data: xAxis,
        axisLabel: {
          textStyle: textStyle02,
          formatter: function (value) {
            return self.$means.verticalShape(value)
          }
        }
      }],
      componentType: 'series',
      yAxis: [
        {
          type: 'value',
          name: '',
          axisLabel: {
            // formatter: '{value} 万',
            textStyle: textStyle02,
            formatter: function (value, index) {
              return self.$means.conversion(value, '亿', '亿')
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: wordColor
            }
          },
          splitLine: {
            show: false
          },
          minInterval: 10000, // 最小间隔
          splitNumber: 4 // 至少间隔个数
        }
      ],
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '15%',
        containLabel: true
      },
      series: [
        this.seriesBar(self, '上月同期', seriesColor[0], item1, gradients[0]),
        this.seriesBar(self, '本月累计', seriesColor[1], item2, gradients[1])
      ],
      color: seriesColor,
      tooltip: {
        trigger: 'axis',
        textStyle: textStyle02,
        axisPointer: {
          type: 'shadow',
          label: {
            show: false,
            backgroundColor: '#7B7DDC'
          }
        },
        extraCssText: 'z-index: 2',
        // backgroundColor: 'rgba(74,144,266,0.75)',
        formatter: function (value) {
          return self.$means.tipFormatter(value, engineering, seriesColor, gradients, '亿')
        }
      }
    }
  },
  demo02 (self, item1 = [], item2 = [], item3 = [], item4 = [], xAxis = []) {
    if (Number(item1.length) === 0 && Number(item2.length) === 0 && Number(item3.length) === 0 && Number(item4.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [{ name: '期末已网签', unit: '亿' }, { name: '期末未网签', unit: '亿' }, { name: '年初已网签', unit: '亿' }, { name: '年初未网签', unit: '亿' }]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    const wordColor = '#fff'
    const seriesColor = self.$means.colorFlowers(4)
    const gradients = self.$means.colorFlowers(4)
    const textStyle01 = { color: '#94BFF1', fontSize: self.$means.pxAndRem(10), fontStyle: 'normal', fontWeight: '500' }
    const textStyle02 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    return {
      title: {
        text: self.$means.title,
        lineStyle: {
          color: '#000'
        },
        top: '1%',
        x: 'left',
        textStyle: textStyle01
      },
      legend: {
        show: true,
        textStyle: textStyle02,
        top: '5%',
        // left: '6%'
        x: 'center',
        // icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(7), // 高度
        itemGap: self.$means.pxAndRem(12), // 间距
        data: legendData
      },
      xAxis: [{
        type: 'category',
        triggerEvent: true,
        axisLine: {
          onZero: false,
          lineStyle: {
            color: wordColor
          }
        },
        // data: ['皖苏北', '沪苏', '浙江', '赣闽', '华北', '珠三角', '川渝', '西南', '华中', '粤桂', '辽宁', '物业集团'],
        data: xAxis,
        axisLabel: {
          textStyle: textStyle02,
          formatter: function (value) {
            return self.$means.verticalShape(value)
          }
        }
      }],
      componentType: 'series',
      yAxis: [
        {
          type: 'value',
          name: '',
          axisLabel: {
            // formatter: '{value} 万',
            textStyle: textStyle02,
            formatter: function (value, index) {
              return self.$means.conversion(value, '亿', '亿')
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: wordColor
            }
          },
          splitLine: {
            show: false
          },
          minInterval: 10000, // 最小间隔
          splitNumber: 4 // 至少间隔个数
        }
      ],
      grid: {
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '15%',
        containLabel: true
      },
      series: [
        this.seriesBar(self, '期末已网签', seriesColor[0], item4, gradients[0], '总量', 0),
        this.seriesBar(self, '期末未网签', seriesColor[1], item3, gradients[1], '总量', 0),
        this.seriesBar(self, '年初已网签', seriesColor[2], item2, gradients[2], '年初', 0),
        this.seriesBar(self, '年初未网签', seriesColor[3], item1, gradients[3], '年初', 0)
      ],
      color: seriesColor,
      tooltip: {
        trigger: 'axis',
        textStyle: textStyle02,
        axisPointer: {
          type: 'shadow',
          label: {
            show: false,
            backgroundColor: '#7B7DDC'
          }
        },
        extraCssText: 'z-index: 2',
        // backgroundColor: 'rgba(74,144,266,0.75)',
        formatter: function (value) {
          return self.$means.tipFormatter(value, engineering, seriesColor, gradients, '亿')
        }
      }
    }
  },
  seriesBar (self, name, color, data, gradients, stack = '', radius = 4) {
    if (data === 1) {
      data = ['1667.59', '10158.04', '14085.67', '17048.13', '22577.40', '20465.32', '10367.62', '28028.23', '20065.31', '12045.00', '2021.03', '100.47']
    } else if (data === 2) {
      data = ['1077.59', '10138.04', '21795.67', '10958.13', '11077.40', '10675.32', '30257.62', '12038.23', '18045.31', '18055.00', '7031.03', '4205.47']
    }
    let res = {
      name: name,
      type: 'bar',
      stack: stack,
      barWidth: self.$means.pxAndRem(8),
      label: {
        show: false,
        position: 'top',
        textStyle: { color: '', fontSize: self.$means.pxAndRem(9) }
      },
      itemStyle: {
        color: self.$means.colorGradient(color, gradients)
        // barBorderRadius: self.$means.pxAndRem(radius)
      },
      data: data
    }
    return res
  }
}
