import Vue from 'vue'
import App from './App'
//引入路由功能
import VueRouter from 'vue-router'
Vue.use(VueRouter);

//引入iview组件
import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(iView);
//使用mint-ui
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI);
//引入ydui
import YDUI from 'vue-ydui';
import 'vue-ydui/dist/ydui.rem.css';
Vue.use(YDUI);
//公用方法
import fancy from './common/index.js';
Vue.prototype.$fancy = fancy;
import regular from './common/regular';
Vue.prototype.$regular = regular;
//引入vue-resource得不能用$http
//vue模拟本地数据接口
import VueResource from 'vue-resource'
Vue.use(VueResource)

//用vue axios
import axios from 'axios'
Vue.prototype.$axios = axios


//引入muse-ui组件
//import Vue from 'vue'
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)


//vue的原型
//公用调用式：赋值原型给vue,就能用$toast.state.hobby的数据读取用法
import Toast from './vuex/store.js'
Vue.prototype.$store =Toast

//方法一    这里建路由
//创建router实例
// let router = new VueRouter({
//   mode: 'history',
//   routes: [
 
//     ]
// });
//方法二   
import router from './router'



// vue-router中使用router.beforeEach来判断用户的是否登录再决定跳转到登录页面
//可否访问前过滤方法
// https://segmentfault.com/q/1010000012121359
router.beforeEach(function(to, from, next) {
  console.log('rrrrr',to,from,next);
	next();
});




// vue全局函数存储cookie读取cookie
// https://www.cnblogs.com/HONGYE1994/p/8078951.html
//设置cookie,放在main.js
Vue.prototype.setCookie = function(c_name,value,expiredays) {
  var exdate=new Date()
  exdate.setDate(exdate.getDate()+expiredays)
  document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
};
//获取cookie
Vue.prototype.getCookie=function(c_name) {
  if (document.cookie.length>0)
  {
    var  c_start=document.cookie.indexOf(c_name + "=")
    if (c_start!=-1)
    {
      c_start=c_start + c_name.length+1
     var c_end=document.cookie.indexOf(";",c_start)
      if (c_end==-1) c_end=document.cookie.length
      return unescape(document.cookie.substring(c_start,c_end))
    }
  }
  return ""
};

Vue.prototype.$teacher = function(){
  return '有趣极了';
}







Vue.config.productionTip = false

//创建和挂载根实例。
//new一个vue实例,挂载在index文件的id
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<app/>'
})
