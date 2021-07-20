// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import router from './router'
import 'babel-polyfill'// 浏览器兼容 IE8
Vue.config.productionTip = false //生产提示
// es6Promise .polyfill();
Vue.use(iView);



import './database/index'; // 不能用if动态加载js
// if (true) {
//   require('./database/index') // 可以动态加载，不报错
// }
import '../static/capital/rem.js'


import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);



import means from './public/index.js';
Vue.prototype.$means = means;
import store from './vuex/index.js';
// Vue.prototype.$store = store;

// https://www.cnblogs.com/zhaojunhao/p/9622299.html
//md5加密-type是字符串
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;

// 使用vue-cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import apiHttp from './api/http.js';
Vue.prototype.$apihttp = apiHttp;


/* 全局注册子组件 */
import cloudEchart from './components/echarts/cloudEchart.vue'
import recharge from './components/recharge.vue';
import withdrawal from './components/withdrawal.vue';
import manageBank from './components/manageBank.vue';
import addBank from './components/addBank.vue';
import manageAlipay from './components/manageAlipay.vue';
import addAlipay from './components/addAlipay.vue';
import withdrawalPassword from './components/withdrawalPassword.vue';
import know from './components/know.vue';
import mail from './components/mail.vue';
import notice from './components/notice.vue';
import pagination from './components/pagination.vue';
import consult from './components/consult.vue';
import loginPassword from './components/loginPassword.vue';
import gameTheme from './components/game_theme.vue';
import safeDeposit from './components/safeDeposit.vue';
import portrait from './components/portrait.vue';
import rechargeRecord from './components/rechargeRecord.vue';
Vue.component('cloudEchart',cloudEchart);
Vue.component('recharge',recharge);
Vue.component('withdrawal',withdrawal);
Vue.component('manageBank',manageBank);
Vue.component('addBank',addBank);
Vue.component('manageAlipay',manageAlipay);
Vue.component('addAlipay',addAlipay);
Vue.component('withdrawalPassword',withdrawalPassword);
Vue.component('know',know);
Vue.component('mail',mail);
Vue.component('notice',notice);
Vue.component('pagination',pagination);
Vue.component('consult',consult);
Vue.component('loginPassword',loginPassword);
Vue.component('gameTheme',gameTheme);
Vue.component('safeDeposit',safeDeposit);
Vue.component('portrait',portrait);
Vue.component('rechargeRecord',rechargeRecord);

// 全局注册自定义指令
import * as directives from '@/directive'
Object.keys(directives).forEach(key => {
  directives[key].install(Vue)
})
// 全局注册过滤器
import filters from '@/filters';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})
/*
相当于
Vue.filter("numPercent", function(value) {
    return value + 4;
})
用法:{{num | numPercent}}
*/

import penCache from './vuex/index.js';
import penMeans from './public/index.js';

//vuex 中保存错误日志数组,展示table里
if (process.env.NODE_ENV === 'production') {
  Vue.config.errorHandler = function(err, vm, info, a) {
    Vue.nextTick(() => {
      // penCache.dispatch('addErrorLog', {
      //   err,
      //   vm,
      //   info,
      //   url: window.location.href
      // })
      console.error('错误日志', err, vm, info, a);
    })
  }
}

import NProgress from 'nprogress'; // 路由变化的转圈进度条
import 'nprogress/nprogress.css'; // 加载转圈进度条样式
// 路由拦截（路由守卫）   用来拦截改变跳转页
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    // if (to.path == '/login') { // 登录页面，删除token缓存
    //     sessionStorage.removeItem('token');
    // }
    // // to.path != '/login' 判断要加这个，否则会死循环
    // if (to.path != '/login' && !sessionStorage.getItem('token')) { // 检查有无token，无则跳回登录
    //   next({path: '/login'}); // next页面跳转
    // }
    // if(from.path == '/' && sessionStorage.getItem('token')){ // 刷新判断，vuex刷新丢失数据，需要重新赋值
      penCache.dispatch('getPlayerInfo',penMeans.amateur_getPlayer()); //调用vuex和全局方法
    // }

    // 通过刷新判断，跳转至/neutralgear页面
    // let routeScreen = ['/login','/neutralgear'];
    // if(routeScreen.indexOf(to.path)==-1&&from.path == '/'){ // 刷新判断
    //     if(to.path=='/game'){
    //         sessionStorage.setItem('save_path','/home');
    //     }else{
    //         sessionStorage.setItem('save_path',to.path);
    //     }
    //     next({path: '/neutralgear'}); // next页面跳转
    // }

    NProgress.start(); // 开始动画
    next(); // next默认跳转
}); 
router.afterEach(transition => {
  NProgress.done(); // 结束动画
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
