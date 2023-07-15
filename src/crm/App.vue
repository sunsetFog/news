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
};
</script>

<style lang="less">
/* @import 加载 */
@import './assets/app.less';
// 加载样式   study: 皮肤切换
@import "~@static/crm/themeUnit/themeSkin1/index.less";
.pen-is-disabled {
    color: #c0c4cc;
    cursor: not-allowed;
}
.cool-dropdown {
    display: none !important;
}
// var()使用root:样式变量   study: 皮肤切换
#app {
  background: var(--background);
}
.system-box {
    width: 100%;
    ul {
        width: 100%;
        li {
            width: 100%;
            height: 30px;
            float: left;
            position: relative;
            i {
                font-size: 20px;
                cursor: pointer;
                cursor: pointer;
                position: absolute;
                left: 8px;
                top: 6px;
            }
            span {
                font-size: 14px;
                cursor: pointer;
                position: absolute;
                left: 35px;
                top: 7px;
            }
        }
        li:hover {
            background: #EBEEF5;
        }
    }
}
/*公共样式--开始*/
@import '~@static/capital/globalBaseStyle.less';
</style>
