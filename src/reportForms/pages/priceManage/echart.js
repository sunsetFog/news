export default {
  demo01 (self, item1 = [], item2 = [], item3 = [], item4 = [], xAxis = [], type = '') {
    if (Number(item1.length) === 0 && Number(item2.length) === 0 && Number(item3.length) === 0 && Number(item4.length) === 0) {
      return { message: '暂无数据，切换其它业态试试' }
    }
    let engineering = [{ name: '经营方案版', unit: '元/㎡' }, { name: '年度预算版', unit: '元/㎡' }, { name: '实际均价', unit: '元/㎡' }, { name: '实际成交面积', unit: '㎡' }]
    let yMax = 10000
    let company = '元/㎡'
    if (type === 'car') {
      engineering = [{ name: '经营方案版', unit: '元/㎡' }, { name: '年度预算版', unit: '元/㎡' }, { name: '实际均价', unit: '元/㎡' }, { name: '实际成交套数', unit: '套' }]
      yMax = 1000
      company = '元/套'
    }
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    const wordColor = 'white'
    const seriesColor = ['#00AAAF', '#D0427C', '#99CCFF', '#5BD6D2']
    const gradients = ['#00AAAF', '#D0427C', '#99CCFF', '#3FE366']
    const textStyle01 = { color: wordColor, fontSize: self.$means.pxAndRem(12), fontWeight: 'normal' }
    // console.log('legend===', engineering, legendData)
    return {
      backgroundColor: '', // 背景颜色
      title: { // 标题
        text: company, // 主标题
        // subtext: '元/㎡',
        textStyle: textStyle01,
        x: self.$means.pxAndRem(10),
        y: self.$means.pxAndRem(26)
      },
      tooltip: { // 提示弹窗
        trigger: 'axis', // 触发类型,'item'散点图,'axis'柱状图，折线图
        backgroundColor: 'rgba(0,32,47,0.8)',
        textStyle: textStyle01,
        extraCssText: 'z-index: 2',
        formatter: function (value) {
          // console.log('value[1].marker', value)
          return self.$means.tipFormatter(value, engineering, seriesColor, gradients)
        }
      },
      legend: { // 图例
        textStyle: textStyle01,
        x: 'center', // left right center 填写数字
        y: 'top', // top bottom center 填写数字
        padding: 10,
        icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(10), // 高度
        itemGap: self.$means.pxAndRem(5), // 间距
        data: legendData
      },
      grid: { // 位置
        left: '3%',
        right: '3%',
        bottom: '3%',
        top: '15%', // 距离类名line-chart的盒子上面的距离
        containLabel: true
      },
      // toolbox: { // 下载
      //   feature: {
      //     saveAsImage: {} // 下载为图片
      //   }
      // },
      xAxis: { // x轴
        // name: '月',
        type: 'category',
        boundaryGap: true, // 坐标轴两边留白
        // data: ['9月', '10月', '11月', '12月', '1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月'],
        data: xAxis,
        axisLabel: {
          show: true,
          interval: 0, // 显示全部
          margin: self.$means.pxAndRem(5),
          // rotate: -40, // 倾斜40角度
          // showMaxLabel: true, // 最后一个刻度显示
          textStyle: textStyle01,
          formatter: function (value) {
            return self.$means.verticalShape(value, '月')
          }
        },
        axisLine: {
          lineStyle: {
            color: wordColor,
            width: 2
          }
        },
        nameLocation: 'end', // 坐标位置，支持start,end，middle
        nameTextStyle: {
          color: wordColor,
          fontSize: self.$means.pxAndRem(12),
          fontWeight: 'bold',
          padding: [0, 0, 0, 0]
        }
      },
      yAxis: [
        { // y轴
          type: 'value',
          scale: true, // 自适应，不从0开始
          axisLabel: {
            show: true,
            margin: self.$means.pxAndRem(5),
            textStyle: textStyle01,
            // formatter: '{value} (万)', // 单位
            formatter: function (value, index) {
              return self.$means.conversion(value, '万', '万')
            }
          },
          splitLine: {
            show: false, // 刻度分割线
            lineStyle: {
              color: [wordColor]
            }
          },
          axisLine: {
            lineStyle: {
              color: wordColor,
              width: 2
            }
          },
          // boundaryGap: [ 0, 0 ],
          minInterval: 1000, // 最小间隔
          splitNumber: 3 // 至少间隔个数
        },
        {
          type: 'value',
          scale: true,
          // name: '㎡',
          // nameTextStyle: {
          //   color: wordColor,
          //   fontSize: self.$means.pxAndRem(12),
          //   fontWeight: 'bold',
          //   padding: [0, 0, 0, 0]
          // },
          axisLabel: {
            show: true,
            margin: self.$means.pxAndRem(5),
            textStyle: textStyle01,
            formatter: function (value, index) {
              if (type === 'car') {
                return self.$means.conversion(value, '千', '千套')
              } else {
                return self.$means.conversion(value, '万', '万㎡')
              }
            }
          },
          splitLine: {
            show: false, // 刻度分割线
            lineStyle: {
              color: [wordColor]
            }
          },
          axisLine: {
            lineStyle: {
              color: wordColor,
              width: 2
            }
          },
          // max: yMax,
          max: function (value) {
            let count = value.max / 10000
            count = count.toFixed(0)
            return Number(count) * 10000 + yMax
          },
          min: 0,
          minInterval: 100, // 最小间隔
          boundaryGap: true
        }
      ],
      series: [ // 数据中心
        this.seriesLine1(self, '经营方案版', seriesColor[0], item1),
        this.seriesLine1(self, '年度预算版', seriesColor[1], item2),
        this.seriesLine1(self, '实际均价', seriesColor[2], item3),
        {
          name: legendData[3],
          type: 'bar',
          yAxisIndex: 1,
          // data: [12000, 13200, 19100, 23400, 19000, 23000, 21000, 19000, 15000, 16000, 23000, 11000],
          data: item4,
          barWidth: self.$means.pxAndRem(6),
          label: {
            show: false,
            position: 'top',
            textStyle: textStyle01
          },
          itemStyle: {
            color: self.$means.colorGradient(seriesColor[3], gradients[3]),
            barBorderRadius: self.$means.pxAndRem(4)
          }
        }
      ]
    }
  },
  seriesLine1 (self, name, color, data) {
    if (data === 1) {
      data = [52000, 9200, 10100, 13400, 9000, 23000, 21000, 20100, 22000, 28000, 23000, 28000]
    } else if (data === 2) {
      data = [22000, 23200, 19100, 23400, 29000, 33000, 31000, 29000, 25000, 16000, 23000, 31000]
    } else if (data === 3) {
      data = [18000, 20000, 24000, 33400, 28000, 22000, 16000, 19000, 24500, 26000, 23000, 21000]
    }
    let res = {
      name: name,
      type: 'line',
      // stack: '总量', // 去掉可以重叠线，数值正常
      // areaStyle: { normal: { color: '' } }, // 区域颜色
      symbolSize: self.$means.pxAndRem(3), // 折线点的大小
      itemStyle: {
        color: color // 折线点的颜色
      },
      lineStyle: { width: self.$means.pxAndRem(1.5), color: color }, // 折线
      label: {
        show: true,
        position: 'top',
        rotate: 40,
        offset: [20, -15],
        textStyle: { fontSize: self.$means.pxAndRem(10) },
        formatter: function (value) {
          value = value.value
          if (Number(value) === 0) {
            return ''
          }
          return self.$means.conversion(value, '万', '', 2)
        }
      }, // 每个折点都显示数值   该数值的样式
      data: data
    }
    return res
  }
}
