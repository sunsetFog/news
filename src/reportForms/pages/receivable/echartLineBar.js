export default {
  demo01 (self, item1 = [], item2 = [], item3 = 0, xAxis = [], average = '') {
    if (Number(item1.length) === 0 && Number(item2.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [{ name: '应收余额', unit: '亿' }, { name: '逾期应收', unit: '亿' }, { name: '逾期率', unit: '%' }]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    average = { name: 'Y 轴值为 100 的水平线', yAxis: average }
    const wordColor = '#fff'
    let seriesColor = self.$means.colorFlowers(2)
    seriesColor.push('#FFA362')
    let gradients = self.$means.colorFlowers(2)
    gradients.push('#FFA362')
    const textStyle01 = { color: wordColor, fontSize: self.$means.pxAndRem(12), fontStyle: 'normal', fontWeight: 'normal' }
    const textStyle02 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    return {
      title: {
        text: '',
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
        bottom: '2%',
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
          nameLocation: 'top',
          nameTextStyle: textStyle02,
          axisLabel: {
            // formatter: '{value} 亿',
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
          minInterval: 10000,
          splitNumber: 4
        },
        {
          type: 'value',
          name: '',
          nameTextStyle: textStyle02,
          axisLabel: {
            formatter: '{value} %',
            textStyle: textStyle02
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: wordColor
            }
          },
          splitLine: {
            show: false
          }
        }
      ],
      grid: {
        left: '3%',
        right: '3%',
        bottom: '10%',
        top: '9%',
        containLabel: true
      },
      series: [
        this.seriesBar(self, '应收余额', seriesColor[0], item1, gradients[0]),
        this.seriesBar(self, '逾期应收', seriesColor[1], item2, gradients[1]),
        this.seriesLine(self, '逾期率', seriesColor[2], item3, average)
      ],
      // color: seriesColor,
      tooltip: {
        trigger: 'axis',
        textStyle: textStyle02,
        axisPointer: {
          type: 'line',
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
  demo02 (self, item1 = [], item2 = [], item3 = 0, xAxis = []) {
    if (Number(item1.length) === 0 && Number(item2.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [{ name: '本年回款中未逾期金额', unit: '亿' }, { name: '本年回款中逾期金额', unit: '亿' }, { name: '按揭回款逾期率', unit: '%' }]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    let average = { type: 'average', name: '平均值' }
    const wordColor = '#fff'
    let seriesColor = self.$means.colorFlowers(2)
    seriesColor.push('#FFA362')
    let gradients = self.$means.colorFlowers(2)
    gradients.push('#FFA362')
    const textStyle01 = { color: '#94BFF1', fontSize: self.$means.pxAndRem(10), fontStyle: 'normal', fontWeight: '500' }
    const textStyle02 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    return {
      title: {
        text: '',
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
        top: '3%',
        // left: '6%'
        x: 'center',
        // icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(7), // 高度
        itemGap: self.$means.pxAndRem(5), // 间距
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
          // nameLocation: 'top',
          nameTextStyle: textStyle02,
          axisLabel: {
            // formatter: '{value} 亿',
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
          minInterval: 10000,
          splitNumber: 4
        },
        {
          type: 'value',
          name: '',
          nameTextStyle: textStyle02,
          axisLabel: {
            formatter: '{value} %',
            textStyle: textStyle02
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: wordColor
            }
          },
          splitLine: {
            show: false
          }
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
        this.seriesBar(self, '本年回款中未逾期金额', seriesColor[0], item1, gradients[0]),
        this.seriesBar(self, '本年回款中逾期金额', seriesColor[1], item2, gradients[1]),
        this.seriesLine(self, '按揭回款逾期率', seriesColor[2], item3, average)
      ],
      // color: seriesColor,
      tooltip: {
        trigger: 'axis',
        textStyle: textStyle02,
        axisPointer: {
          type: 'line',
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
  seriesBar (self, name, color, data, gradients) {
    if (data === 1) {
      data = ['67.59', '158.04', '85.67', '48.13', '77.40', '65.32', '37.62', '28.23', '65.31', '45.00', '21.03', '0.47']
    } else if (data === 2) {
      data = ['77.59', '138.04', '95.67', '58.13', '77.40', '65.32', '57.62', '38.23', '45.31', '55.00', '31.03', '5.47']
    }
    let res = {
      name: name,
      type: 'bar',
      barWidth: self.$means.pxAndRem(6),
      label: {
        show: false,
        position: 'top',
        textStyle: { color: '', fontSize: self.$means.pxAndRem(9) }
      },
      itemStyle: {
        color: self.$means.colorGradient(color, gradients)
        // barBorderRadius: self.$means.pxAndRem(4)
      },
      data: data
    }
    return res
  },
  seriesLine (self, name, color, data, average) {
    if (data === 1) {
      data = [74.76, 67.33, 65.88, 61.69, 55.28, 48.38, 47.03, 45.28, 43.52, 42.86, 42.04, 0]
    }
    let res = {
      name: name,
      type: 'line',
      smooth: true,
      yAxisIndex: 1,
      symbolSize: self.$means.pxAndRem(4),
      itemStyle: {
        color: color
      },
      lineStyle: {
        width: self.$means.pxAndRem(2)
      },
      label: {
        normal: {
          show: true,
          position: 'top',
          formatter: function (value) {
            return Number(value.value).toFixed(1) + '%'
          },
          textStyle: { color: '', fontSize: self.$means.pxAndRem(9) }
        }
      },
      markLine: {
        label: {
          show: true,
          position: 'insideEndTop',
          textStyle: { color: '', fontSize: self.$means.pxAndRem(10) }
        },
        data: [
          average
        ]
      },
      data: data
    }
    return res
  }
}
