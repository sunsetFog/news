// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import i18n from '@/crm/i18n/lang'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(ElementUI);
Vue.use(ElementUI, {
  size: 'mini',
  i18n: (key, value) => i18n.t(key, value)
})

import store from './vuex/index'

import './database/index'; // 不能用if动态加载js

import https from '../explore/api/http.js'
Vue.prototype.$https = https



Vue.config.productionTip = false



router.beforeEach((to, from, next) => {
  console.log('beforeEach--3983', to,from);
  document.title = to.meta.title;
  sessionStorage.setItem('currentPath',to.path);
  if(to.path == '/login'){
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('bread');
    sessionStorage.removeItem('tabList');
  }
  console.log('-asj--',sessionStorage.getItem('token'),'---',to.path)
  // if (!sessionStorage.getItem('token') && to.path == '/'){
  //   console.log('----------login---00')
  //   next({ path: '/login' });
  // }
  if(from.path == '/' && sessionStorage.getItem('bread')&& sessionStorage.getItem('tabList')){ // 刷新判断
    store.commit('modifyTab',JSON.parse(sessionStorage.getItem('tabList')));
  }

  if (sessionStorage.getItem('token')&&store.getters.addRouters.length == 0) {  //如果未匹配到路由
    let loginJson = JSON.parse(sessionStorage.getItem('loginJson'));
    store.dispatch('GenerateRoutes',loginJson).then(function(res){
      console.log('动态添加菜单路由---',res)
      router.addRoutes(res)
      next({ path: sessionStorage.getItem('currentPath') });
      // next({ ...to, replace: true })
    })
  }
  if (!sessionStorage.getItem('token') && to.path == '/'){
    console.log('----------login---00')
    next({ path: '/login' });
  } else {
    next();    //如果匹配到正确跳转
  }
    
}); 
router.afterEach(transition => {
  // console.log('router.afterEach---', transition)
});
router.onError((error) => {
  // console.log('router.onError---',error);
  const pattern = /Loading chunk (\d)+ failed/g
  const isChunkLoadFailed = error.message.match(pattern)
  const targetPath = router.history.pending.fullPath
  if (isChunkLoadFailed) {
    router.replace(targetPath)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  i18n,
  components: { App },
  template: '<App/>'
})
