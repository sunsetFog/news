<template>
  <section id="echarts">
    <div v-show="!nothingTip" ref="showChart" class="show-chart" :style="{width: dynamic_width,height: dynamic_height}"></div>
    <div v-show="nothingTip" class="nothing-tip" :style="{width: dynamic_width==='10rem'?'7rem':dynamic_width,height: dynamic_height,lineHeight: dynamic_height}">{{nothing_name}}</div>
  </section>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'showChart',
  data () {
    return {
      nothingTip: true,
      drawing: undefined,
      nothing_name: '暂无数据'
    }
  },
  props: {
    dynamic_width: {
      type: String,
      default: () => '9.2rem'
    },
    dynamic_height: {
      type: String,
      default: () => '6rem'
    },
    option_list: {
      type: Object,
      default: () => {}
    }
  },
  watch: {
    option_list: {
      handler: function (cur) {
        if (!cur) {
          this.nothingTip = true
          return
        } else if (cur.message) {
          this.nothing_name = cur.message
          this.nothingTip = true
          return
        } else {
          this.nothingTip = false
        }
        this.initial()
      },
      deep: true
    }
  },
  mounted () {
    const self = this
    // 图表宽别设固定，设百分比才有用
    window.onresize = function () {
      if (self.drawing) {
        self.drawing.resize()
      }
    }
  },
  methods: {
    initial () {
      const self = this
      echarts.dispose(self.$refs.showChart)
      self.drawing = echarts.init(self.$refs.showChart, null, { renderer: 'svg' })
      self.drawing.setOption(self.option_list)
      self.drawing.on('click', function (params) {
        if (params.componentType === 'xAxis' || params.componentType === 'yAxis') {
          self.$emit('xAxisEvent', params)
        }
      })
    }
  },
  destroyed () {
    if (this.drawing) {
      this.drawing.dispose()
    }
  }
}
</script>

<style lang="less" scoped>
#echarts {
  width: 100%;
  color: black;
  .show-chart,.nothing-tip{
    width: 100%;
  }
  .nothing-tip {
    text-align: center;
    font-size: 13px;
  }
}
</style>
