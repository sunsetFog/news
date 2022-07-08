<template>
  <div id="app">
    <div class="watermark" v-if="$route.path == '/home'"></div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {

    };
  },
  watch: {

  },
  methods: {

  }
};
</script>


<style lang="less">
@import "~@static/capital/app2.less";
@import "~@static/capital/whole.less";
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
    width: 100%;
    height: 100%;
    position: fixed;
    background: #001018;
    z-index: -1;
  }
  // 输入框滑动或多次点击时警告
  * { touch-action: pan-y; }
}
</style>
