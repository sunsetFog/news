<template>
  <div id="app">
    <div class="watermark" v-if="watermark_list.indexOf($route.path) != -1"></div>
    <router-view></router-view>
    <PopupUnit></PopupUnit>
  </div>
</template>

<script>
import PopupUnit from '@/reportForms/components/popupUnit/index';
export default {
  name: "App",
  components: { PopupUnit },
  data() {
    return {
        watermark_list: [
        '/home',
        '/priceManage/PriceAnalysis',
        '/priceManage/index',
        '/receivable/AR'
        ]
    };
  },
  watch: {

  },
  methods: {

  }
};
</script>


<style lang="less">
@import "~@static/capital/globalBaseStyle.less";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-size: 12px;
  color: #2c3e50;
  -color: white;
  height: 100%;
  .watermark {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background: #001018;
    z-index: -1;
  }
  // 输入框滑动或多次点击时警告
  * { touch-action: pan-y; }
}
</style>
