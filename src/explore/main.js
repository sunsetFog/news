// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App'; //引入App.vue

import router from './router'; // 引入路由
import 'babel-polyfill'; // 浏览器兼容 IE8
Vue.config.productionTip = false; //生产提示
// es6Promise .polyfill();

import iView from 'iview';
import 'iview/dist/styles/iview.css';
Vue.use(iView);

// font-awesome图标
import 'font-awesome/css/font-awesome.min.css';

import '@/explore/database/index'; // 不能用if动态加载js
// if (true) {
//   require('./database/index') // 可以动态加载，不报错
// }
// import '@static/capital/rem.js'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI, { size: 'small', zIndex: 3000 });

console.log('process.env==', process.env);

import means from '@/explore/public/index.js';
Vue.prototype.$means = means;
import store from '@/explore/vuex/index.js';
// Vue.prototype.$store = store;

// https://www.cnblogs.com/zhaojunhao/p/9622299.html
//md5加密-type是字符串
import md5 from 'js-md5';
Vue.prototype.$md5 = md5;


sessionStorage.setItem("entry_config", "explore");

// 使用vue-cookies
import VueCookies from 'vue-cookies';
Vue.use(VueCookies);

import Viewer from 'v-viewer';
import 'viewerjs/dist/viewer.css';
Vue.use(Viewer);
Viewer.setDefaults({
    Options: {
        inline: true,
        button: true,
        navbar: true,
        title: true,
        toolbar: true,
        tooltip: true,
        movable: true,
        zoomable: true,
        rotatable: true,
        scalable: true,
        transition: true,
        fullscreen: true,
        keyboard: true,
        url: 'data-source',
    },
});

Vue.prototype.$eventBus = new Vue();

/* 全局注册子组件：用的不多就局部注册，全局注册会消耗性能 */
import cloudEchart from '@/explore/components/echarts/cloudEchart.vue';
import recharge from '@/explore/components/recharge.vue';
import withdrawal from '@/explore/components/withdrawal.vue';
import manageBank from '@/explore/components/manageBank.vue';
import addBank from '@/explore/components/addBank.vue';
import manageAlipay from '@/explore/components/manageAlipay.vue';
import addAlipay from '@/explore/components/addAlipay.vue';
import withdrawalPassword from '@/explore/components/withdrawalPassword.vue';
import know from '@/explore/components/know.vue';
import mail from '@/explore/components/mail.vue';
import notice from '@/explore/components/notice.vue';
import pagination from '@/explore/components/pagination.vue';
import consult from '@/explore/components/consult.vue';
import loginPassword from '@/explore/components/loginPassword.vue';
import gameTheme from '@/explore/components/game_theme.vue';
import safeDeposit from '@/explore/components/safeDeposit.vue';
import portrait from '@/explore/components/portrait.vue';
import rechargeRecord from '@/explore/components/rechargeRecord.vue';
Vue.component('cloudEchart', cloudEchart);
Vue.component('recharge', recharge);
Vue.component('withdrawal', withdrawal);
Vue.component('manageBank', manageBank);
Vue.component('addBank', addBank);
Vue.component('manageAlipay', manageAlipay);
Vue.component('addAlipay', addAlipay);
Vue.component('withdrawalPassword', withdrawalPassword);
Vue.component('know', know);
Vue.component('mail', mail);
Vue.component('notice', notice);
Vue.component('pagination', pagination);
Vue.component('consult', consult);
Vue.component('loginPassword', loginPassword);
Vue.component('gameTheme', gameTheme);
Vue.component('safeDeposit', safeDeposit);
Vue.component('portrait', portrait);
Vue.component('rechargeRecord', rechargeRecord);

import apiHttp from '@/explore/api/http.js';
Vue.prototype.$apihttp = apiHttp;

// 全局注册自定义指令
import * as directives from '@/explore/directive';
Object.keys(directives).forEach(key => {
    directives[key].install(Vue);
});
// 全局注册过滤器
import filters from '@/explore/filters';
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key]);
});
/*
相当于
Vue.filter("numPercent", function(value) {
    return value + 4;
})
用法:{{num | numPercent}}
*/

import penCache from '@/explore/vuex/index.js';
import penMeans from '@/explore/public/index.js';

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
        });
    };
}

console.log('--end00--');

import NProgress from 'nprogress'; // 转圈进度条，路由变化触发
import 'nprogress/nprogress.css'; // 加载转圈进度条样式
// 路由拦截（路由守卫）   用来拦截改变跳转页
router.beforeEach((to, from, next) => {
    document.title = to.meta.title;
    // 刷新执行，且不是登录页，且要有token
    if (from.path == '/' && to.path != '/login') {
        if (VueCookies.get('token')) {
            penCache.dispatch('routerApple').then(function(value) {
                console.log('--then结束--', value);
                router.addRoutes(value);
            });
        } else {
            next({ path: '/login' });
        }
    }

    if (to.path == '/login') { // 登录页面，删除token缓存
        VueCookies.remove("token");
    }
    // // to.path != '/login' 判断要加这个，否则会死循环
    // if (to.path != '/login' && !sessionStorage.getItem('token')) { // 检查有无token，无则跳回登录
    //   next({path: '/login'}); // next页面跳转
    // }
    // if(from.path == '/' && sessionStorage.getItem('token')){ // 刷新判断，vuex刷新丢失数据，需要重新赋值
    penCache.dispatch('getPlayerInfo', penMeans.amateur_getPlayer()); //调用vuex和全局方法
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
    // 创建和挂载vue实例
    el: '#app', // 绑定index.html的id
    router, // 路由
    store, // vue原型的vuex
    components: { App }, // 入口组件App.vue
    template: '<App/>', // 模板名
});
