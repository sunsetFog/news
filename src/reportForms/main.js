// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
Vue.config.productionTip = false
// es6Promise .polyfill();

sessionStorage.setItem("entry_config", "reportForms");

import './database/index';
import '@static/capital/rem.js';


import Vant from 'vant';
import 'vant/lib/index.css';
Vue.use(Vant);


import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
// ------ 环信 -------
import webimconfig from '@/reportForms/pages/liveBroadcast/webim.config.js'
import websdk from 'easemob-websdk'

let WebIM = window.WebIM = websdk
WebIM.config = webimconfig
// 环信实例
// eslint-disable-next-line new-cap
var conn = WebIM.conn = new WebIM.connection({
  appKey: WebIM.config.appkey,
  isHttpDNS: WebIM.config.isHttpDNS,
  isMultiLoginSessions: WebIM.config.isMultiLoginSessions,
  https: WebIM.config.https,
  url: WebIM.config.socketServer,
  apiUrl: WebIM.config.apiURL,
  isAutoLogin: true,
  heartBeatWait: WebIM.config.heartBeatWait,
  autoReconnectNumMax: WebIM.config.autoReconnectNumMax,
  autoReconnectInterval: WebIM.config.autoReconnectInterval,
  isStropheLog: WebIM.config.isStropheLog,
  delivery: WebIM.config.delivery
})
// 账号密码登录配置
var optionsIm = {
  apiUrl: WebIM.config.apiURL,
  user: '', // 换成自己申请的账号就行，密码也需要换
  pwd: '123456',
  appKey: WebIM.config.appkey,
  success: function (re) {
    console.log('环信登录成功')
  },
  error: function (err) {
    console.log('环信登录失败')
    console.log(err)
  }
}
Vue.prototype.$WebIM = WebIM
Vue.prototype.$imconn = conn
Vue.prototype.$imoption = optionsIm
Vue.use(websdk)












/**
 * 事件的发生顺序: touchstart---touchmove---touchend,大约过300ms触发click事件，用来判断是否有双击事件
 * 在混合使用touch与click时，会导致点击穿透！
 * fastclick: 去掉touch，解决了穿透，禁了双击，触发click事件没有了300ms延迟
 */
import FastClick from 'fastclick'
FastClick.attach(document.body);// 绑定节点

import cloudEchart from './components/echarts/cloudEchart'
Vue.component('cloudEchart', cloudEchart)

import means from './public/index.js';
Vue.prototype.$means = means;
import store from './vuex/index.js';
// Vue.prototype.$store = store;



// 使用vue-cookies
import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

import apiHttp from '@/explore/api/http.js';
Vue.prototype.$apihttp = apiHttp;

// 全局注册自定义指令
import * as directives from '@/explore/directive'
Object.keys(directives).forEach(key => {
  directives[key].install(Vue)
})
// 全局注册过滤器
import filters from '@/explore/filters';
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})






router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    next()
}); 
router.afterEach(transition => {

});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
