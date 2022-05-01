export default {
  demo01 (self, item1 = [], item2 = [], xAxis = []) {
    if (Number(item1.length) === 0 && Number(item2.length) === 0) {
      return { message: '暂无数据' }
    }
    let engineering = [{ name: '应收金额', unit: '亿' }, { name: '逾期金额', unit: '亿' }]
    for (let i = 0; i < engineering.length; i++) {
      engineering[i].value = '暂无数据'
    }
    let legendData = engineering.map(function (item) {
      return item.name
    })
    const color01 = '#fff'
    const seriesColor = self.$means.colorFlowers(2)
    const gradients = self.$means.colorFlowers(2)
    const textStyle01 = { color: color01, fontSize: self.$means.pxAndRem(10) }
    const textStyle02 = { color: color01, fontSize: self.$means.pxAndRem(12), fontWeight: 'normal' }
    return {
      backgroundColor: '', // 背景颜色
      title: { // 标题
        text: '', // 主标题
        // subtext: '副标题',
        textStyle: textStyle02,
        x: 0,
        y: self.$means.pxAndRem(1)
      },
      tooltip: { // 提示弹窗
        trigger: 'axis', // 触发类型,'item'散点图,'axis'柱状图，折线图
        textStyle: textStyle01,
        extraCssText: 'z-index: 2',
        formatter: function (value) {
          return self.$means.tipFormatter(value, engineering, seriesColor, gradients, '亿')
        }
      },
      legend: { // 图例
        textStyle: textStyle01,
        x: 'center', // left right center 填写数字
        y: 'bottom', // top bottom center 填写数字
        padding: 10,
        icon: 'circle', // 形状  类型包括 circle rect roundRect triangle diamond pin arrow none
        itemWidth: self.$means.pxAndRem(12), // 宽度
        itemHeight: self.$means.pxAndRem(10), // 高度
        itemGap: self.$means.pxAndRem(30), // 间距
        data: legendData
      },
      grid: { // 位置
        left: '3%',
        right: '7%',
        bottom: '15%',
        top: '20%', // 距离类名line-chart的盒子上面的距离
        containLabel: true
      },
      // toolbox: { // 下载按钮
      //   feature: {
      //     saveAsImage: {} // 下载为图片
      //   }
      // },
      xAxis: { // x轴
        type: 'category',
        boundaryGap: false,
        // data: [9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8],
        data: xAxis,
        axisLabel: {
          show: true,
          interval: 0, // 显示全部
          // rotate: 40, // 倾斜40角度
          // showMaxLabel: true, // 最后一个刻度显示
          textStyle: textStyle01,
          formatter: function (value) {
            return self.$means.verticalShape(value, '月')
          }
        },
        axisLine: {
          lineStyle: {
            color: color01,
            width: 2
          }
        }
      },
      yAxis: { // y轴
        type: 'value',
        // name: '元/㎡',
        scale: true, // 自适应，不从0开始
        axisLabel: {
          show: true,
          textStyle: textStyle01,
          // formatter: '{value}亿' // 单位
          formatter: function (value, index) {
            return self.$means.conversion(value, '亿', '亿')
          }
        },
        splitLine: {
          show: false, // 刻度分割线
          lineStyle: {
            color: [color01]
          }
        },
        nameTextStyle: {
          fontSize: self.$means.pxAndRem(9),
          color: [color01]
        },
        axisLine: {
          lineStyle: {
            color: color01,
            width: 2
          }
        },
        // min: 8000, // 最小值
        // max: 50000, // 最大值
        minInterval: 10000, // 最小间隔
        splitNumber: 4 // 至少间隔个数
      },
      series: [ // 数据中心
        this.seriesLine(self, '应收金额', seriesColor[0], item1),
        this.seriesLine(self, '逾期金额', seriesColor[1], item2)
      ]
    }
  },
  seriesLine (self, name, color, data) {
    if (data === 1) {
      data = [52000, 9200, 10100, 13400, 9000, 23000, 21000, 20100, 22000, 28000, 23000, 28000]
    } else if (data === 2) {
      data = [22000, 23200, 19100, 23400, 29000, 33000, 31000, 29000, 25000, 16000, 23000, 31000]
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
        textStyle: { fontSize: self.$means.pxAndRem(9) },
        formatter: function (value) {
          value = value.value
          return self.$means.conversion(value, '亿', '', 2)
        }
      }, // 每个折点都显示数值   该数值的样式
      data: data
    }
    return res
  }
}
