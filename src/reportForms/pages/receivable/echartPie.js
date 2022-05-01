export default {
  demo01 (self, item1 = 0, item2 = 0) {
    if (Number(item1) === 0 && Number(item2) === 0) {
      return { message: '暂无数据' }
    }
    const wordColor = '#C9CACB'
    const textStyle01 = { color: wordColor, fontSize: self.$means.pxAndRem(10) }
    const seriesColor = self.$means.colorFlowers(2)
    return {
      backgroundColor: '',
      // color: ['#23B7E5', '#4A90E2'], // series中按顺序上颜色

      title: {
        text: '',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },

      tooltip: {
        trigger: 'item',
        textStyle: textStyle01,
        extraCssText: 'z-index: 2',
        // backgroundColor: 'rgba(74,144,266,0.75)',
        formatter: function (value) {
          return self.$means.tipFormatter(value, [], seriesColor)
        }
      },
      series: [
        {
          name: '按揭逾期回款',
          type: 'pie',
          radius: '75%', // 饼图大小
          center: ['50%', '50%'], // 位置
          data: [
            { value: item1, name: '本年逾期按揭回款' },
            { value: item2, name: '本年正常按揭回款' }
          ].sort(function (a, b) { return b.value - a.value }), // 排序
          roseType: 'radius',
          label: { // 标签
            formatter: '{d}%', // 格式化程序
            color: '#fff',
            fontSize: self.$means.pxAndRem(12)
          },
          labelLine: { // 线
            lineStyle: {
              color: '#4A90E2'
            },
            smooth: 0.2,
            length: 10,
            length2: 20
          },
          itemStyle: { // 项
            // color: 'green', // 饼颜色
            color: function (params) {
              // console.log('params=', params.dataIndex)
              return seriesColor[params.dataIndex]
            },
            shadowBlur: 2, // 阴影
            shadowColor: '#4A90E2'
          },

          animationType: 'scale', // 放大动画
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200
          }
        }
      ]
    }
  }
}
