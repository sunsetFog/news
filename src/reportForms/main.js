// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
Vue.config.productionTip = false
// es6Promise .polyfill();



import './database/index';
import '@static/capital/rem.js';


import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
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
