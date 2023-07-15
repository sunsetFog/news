<template>
  <section class="price-manage">
    <header-bar title="项目价格动态分析"></header-bar>
    <gaode-amap @receive="receive" ref="gaode"></gaode-amap>
  </section>
</template>

<script>
import headerBar from '@/reportForms/components/headerBar.vue'
import GaodeAmap from './GaoDeAmap'
export default {
  name: 'PriceManage',
  data () {
    return {

    }
  },
  created () {
    sessionStorage.setItem('immortal', '0')
  },
  mounted () {
  },
  methods: {
    // 返回上一页
    back () {
      this.$router.go(-1)
    },
    openMenu () {
      this.$store.commit('updateShowMask', true)
    },
    intermediary () {
      this.$refs.gaode.intermediary()
    },
    // 刷新
    refresh () {
      location.reload()
      // history.go(0)
    },
    receive (value) {
      // let code = '15CF7AEB-FB72-4483-8F97-F6DFE86A36FA'
      this.$router.push({ path: '/priceManage/PriceAnalysis', query: { code: value } })
    }
  },
  destroyed () {
    // this.$destroy()
    // location.reload()
  },
  components: {
    headerBar,
    GaodeAmap
  }
}
</script>

<style lang="less" scoped>
.price-manage {
  position: relative;
  width: 100%;
  background-color: #001018;
  color: #ffffff;
  font-family: PingFangSC-Medium;
  -webkit-overflow-scrolling: touch;
}
</style>
