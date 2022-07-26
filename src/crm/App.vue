<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
    name: 'App',
    data() {
        return {};
    },
    created() {
        // window.addEventListener("beforeunload", (e) => this.beforeunloadFn(e));
    },
    mounted() {
        //   window.onbeforeunload = function (e) {
        //       e = e || window.event;
        //       if (e) {
        //           console.log("监听刷新或关闭9987");
        //         // e.returnValue = '关闭提示';
        //       }
        //       sessionStorage.setItem('token', '000000000000000');
        //       console.log("监听刷新或关闭099");
        //     //   return '关闭提示';
        //     };
    },
    methods: {
        // beforeunloadFn(e) {
        //   console.log("监听刷新或关闭");
        //   sessionStorage.setItem("token", "111111111111");
        // },
    },
    destroyed() {
        // window.removeEventListener("beforeunload", (e) => this.beforeunloadFn(e));
    },
};
</script>

<style lang="less">
/* @import 加载 */
@import './assets/app.less';
.pen-is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
}
.cool-dropdown {
    display: none !important;
}
/*公共样式--开始*/
@import '~@static/capital/whole.less';
</style>