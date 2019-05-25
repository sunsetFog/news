import Vue from 'vue';
import Router from 'vue-router';

import Login from '../pages/login/login.vue';
import Main from '../pages/main/main.vue';
import Subroute from '../pages/index/subroute';
import Nail from '../pages/index/route/nail';
import Other from '../pages/index/route/other';
import Ergodic from '../pages/index/ergodic';
import Vuex from '../pages/index/vuex';
import Canvas from '../pages/index/canvas';
import Echarts from '../pages/index/echarts';
import Children from '../pages/index/children';
import Parent from '../pages/index/parent';
import Public from '../pages/index/public';
//引入路由的三种引入方式
// import Twelve from '../pages/index/twelve';
//@代表'/src'
//import Twelve from '@/components/miss/twelve';
//优化好
//const Twelve = resolve => require(['@/pages/index/twelve'],resolve);

import Class from '../pages/index/class';
import Watch from '../pages/index/watch';
import Computed from '../pages/index/computed';
import Refs from '../pages/index/refs';
import Filters from '../pages/index/filters';
import Element from '../pages/index/element';
import Mock from '../pages/index/mock';
import Transition from '../pages/index/transition';
import Quote from '../pages/index/quote';
import Es6 from '../pages/index/es6.vue';
import Base64 from '../pages/index/base64.vue';
import Route from '../pages/index/router.vue';
import Params from '../pages/index/route/params.vue';
import Rem from '../pages/index/rem.vue';
import BackToTop from '../pages/effect/backToTop.vue';
import ArticlePage from '../pages/effect/articlePage.vue';
import LoadMore from '../pages/effect/loadmore.vue';
import Upload from '../pages/effect/upload.vue';
import Upload1 from '../pages/effect/upload1.vue';
import Address from '../pages/effect/address.vue';
import Copy from '../pages/effect/copy.vue';
import MemberDate from '../pages/effect/member_date.vue';
import Field from '../pages/effect/field.vue';
import Video from '../pages/effect/video.vue';
import Lazy from '../pages/effect/lazy.vue';



// import jiaoshikebiao from '../components/items/jiaoshikebiao';
// import youjianxiang from '../components/items/youjianxiang';
// import fayoujian from '../components/items/fayoujian';
// import bumenshezhi from '../components/items/bumenshezhi';
// import changdishezhi from '../components/items/changdishezhi';
// import jiaoshiguanli from '../components/items/jiaoshiguanli';
// import zongwubaoxiu from '../components/items/zongwubaoxiu';
// import gerendangan from '../components/items/gerendangan';
// import jiaoyujiaoxue from '../components/items/jiaoyujiaoxue';
// import fangjian from '../components/items/fangjian';
// import banjitoupiao from '../components/items/banjitoupiao';
// import banjishiji from '../components/items/banjishiji';
// import banjikebiao from '../components/items/banjikebiao';
// import kanmeitu from '../components/items/kanmeitu';
// import lianxiren from '../components/items/lianxiren';
// import chengji from '../components/items/chengji';
// import jibenxinxi from '../components/items/jibenxinxi';
// import jiangxian from '../components/items/jiangxian';
// import hebin from '../components/items/hebin';


Vue.use(Router)

export default new Router({
  mode: 'history',//vue 路径去掉#
  routes: [
    {path: '/login',component: Login,name: 'Login',meta:{title: '用户登陆',foot: false,crux: false}},
    {path: '/',component: Main,name: 'Main',meta:{title: '主角',foot: false,crux: false}},
 {
   path: '/subroute',component: Subroute,redirect: '/subroute/nail',name: 'Subroute',meta:{title: '甲',foot: true},
   children:[//必用知识点,children
     {path: 'nail',component: Nail,name: 'Nail',meta:{title: '必学',foot: true}},
     {path: 'other',component: Other,name: 'Other',meta:{title: '必会',foot: false}},
     {path: '/',redirect: '/subroute/nail'}//默认指向路径
   ]
 },
 //重点:路由参数解决刷新丢失问题
 // 1.meta是路由参数,却不在path路径上,可以打印this或者打印this.$route看,用this.$route.meta获取
 // 2.路由传参,在路径上
 {path: '/ergodic',component: Ergodic,name: 'Ergodic',meta:{title: '组件遍历',foot: false,navigation: 0}},//1.title标题 2.foot组件显示 3.重点:navigation是导航栏高亮刷新问题
 {path: '/vuex',component: Vuex,name: 'Vuex',meta:{title: 'vuex',foot: false,navigation: 1}},
 {path: '/canvas',component: Canvas,name: 'Canvas',meta:{title: '画布',foot: true,navigation: 2}},
 {path: '/echarts',component: Echarts,name: 'Echarts',meta:{title: '图表',foot: true}},
 {path: '/children',component: Children,name: 'Children',meta:{title: '子组件',foot: true}},
 {path: '/parent',component: Parent,name: 'Parent',meta:{title: '父组件',foot: true}},
 {path: '/public',component: Public,name: 'Public',meta:{title: '全局公用',foot: true}},
 {path: '/class',component: Class,name: 'Class',meta:{title: '样式',foot: true}},
 {path: '/watch',component: Watch,name: 'Watch',meta:{title: '监视',foot: true}},
 {path: '/computed',component: Computed,name: 'Computed',meta:{title: '计算',foot: true}},
 {path: '/refs',component: Refs,name: 'Refs',meta:{title: 'refs',foot: true}},
 {path: '/filters',component: Filters,name: 'Filters',meta:{title: '过滤',foot: true}},
 {path: '/element',component: Element,name: 'Element',meta:{title: '元素',foot: true}},
 {path: '/mock',component: Mock,name: 'Mock',meta:{title: 'mock',foot: true}},
 {path: '/transition',component: Transition,name: 'Transition',meta:{title: '过渡',foot: true}},
 {path: '/quote',component: Quote,name: 'Quote',meta:{title: '引用',foot: true}},
 {path: '/es6',component: Es6,name: 'Es6',meta:{title: 'es6',foot: true}},
 {path: '/base64',component: Base64,name: 'Base64',meta:{title: 'base64',foot: true}},
 {path: '/route',component: Route,name: 'Route',meta:{title: '路由传参',foot: true}},
 {path: '/params/:id/:status',component: Params,name: 'Params',meta:{title: '路由跳转',foot: true}},
 {path: '/params/:id/:supplier',component: Params,name: 'ParamsOther',meta:{title: '复用性跳转',foot: true}},
 {path: '/rem',component: Rem,name: 'Rem',meta:{title: 'px转rem',foot: false,crux: false}},
 {path: '/backtotop',component: BackToTop,name: 'backTopTop',meta:{title: '返回顶部',foot: false,crux: false}},
 {path: '/page',component: ArticlePage,name: 'ArticlePage',meta:{title: '分页封装',foot: false,crux: false}},
 {path: '/loadmore',component: LoadMore,name: 'LoadMore',meta:{title: '下拉加载',foot: false,crux: false}},
 {path: '/upload',component: Upload,name: 'Upload',meta:{title: '上传图片列表',foot: false,crux: false}},
 {path: '/upload1',component: Upload1,name: 'Upload1',meta:{title: '单个上传图片',foot: false,crux: false}},
 {path: '/address',component: Address,name: 'Address',meta:{title: '地址管理',foot: false,crux: false}},
 {path: '/copy',component: Copy,name: 'Copy',meta:{title: '复制',foot: false,crux: false}},
 {path: '/date',component: MemberDate,name: 'MemberDate',meta:{title: '日期',foot: false,crux: false}},
 {path: '/field',component: Field,name: 'Field',meta:{title: '字段变量',foot: false,crux: false}},
 {path: '/video',component: Video,name: 'Video',meta:{title: 'mp4',foot: false,crux: false}},
 {path: '/lazy',component: Lazy,name: 'Lazy',meta:{title: '懒加载',foot: false,crux: false}},





    // {path: '/jiaoshikebiao',component: jiaoshikebiao,name: '教室课表',meta:{title: '教师课表',foot: true}},
    // {path: '/youjianxiang',component: youjianxiang,name: '邮件箱',meta:{title: '邮件箱',foot: true}},
    // {path: '/fayoujian',component: fayoujian,name: '发邮件',meta:{title: '发邮件',foot: true}},
    // {path: '/bumenshezhi',component: bumenshezhi,name: '部门设置',meta:{title: '部门设置',foot: true}},
    // {path: '/changdishezhi',component: changdishezhi,name: '场地设置',meta:{title: '场地设置',foot: true}},
    // {path: '/jiaoshiguanli',component: jiaoshiguanli,name: '教室管理',meta:{title: '教室管理',foot: true}},
		// {path: '/zongwubaoxiu',component: zongwubaoxiu,name: '总务报修',meta:{title: '总务报修',foot: true}},
		// {path: '/gerendangan',component: gerendangan,name: '个人档案',meta:{title: '个人档案',foot: true}},
		// {path: '/jiaoyujiaoxue',component: jiaoyujiaoxue,name: '教育教学',meta:{title: '教育教学',foot: true}},
		// {path: '/fangjian',component: fangjian,name: '房间',meta:{title: '房间',foot: true}},
		// {path: '/banjitoupiao',component: banjitoupiao,name: '班级投票',meta:{title: '班级投票',foot: true}},
		// {path: '/banjishiji',component: banjishiji,name: '班级事迹',meta:{title: '班级事迹',foot: true}},
		// {path: '/banjikebiao',component: banjikebiao,name: '班级课表',meta:{title: '班级课表',foot: true}},
		// {path: '/kanmeitu',component: kanmeitu,name: '轮播图',meta:{title: '轮播图',foot: true}},
		// {path: '/lianxiren',component: lianxiren,name: '联系人',meta:{title: '联系人',foot: true}},
		// {path: '/chengji',component: chengji,name: '成绩',meta:{title: '成绩',foot: true}},
		// {path: '/jibenxinxi',component: jibenxinxi,name: '基本信息',meta:{title: '基本信息',foot: true}},
		// {path: '/jiangxian',component: jiangxian,name: '奖项',meta:{title: '奖项',foot: true}},
		// {path: '/hebin',component: hebin},
  ]
})


//				{
//          path: '/login',
//          component: resolve => require(['../components/page/Login.vue'], resolve)
//      },