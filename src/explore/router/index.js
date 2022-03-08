import Vue from 'vue'
import Router from 'vue-router'
// import Login from '@/explore/pages/login/login'

Vue.use(Router)


//Error: Avoided redundant navigation to current location
//重复点菜单，路由重复跳转报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
  // return originalPush.call(this, location)
}



export default new Router({
  //  mode: 'history',//去掉路由路径#    默认mode: 'hash'  ---最好别加，apache服务器或其他服务器，部署项目时有刷新404问题
  // base: '/root/', // 添加根目录,对应服务器部署子目录 ---最好别加
  routes: [
    /* 
      路由配置要点:
      命名：最好path与文件夹路径一致
      path: '*'找不到路径， 相当于if的else判断
      path: '/'  默认路由
      children是用来搭建路由视图，包有{ path: '/', redirect: '/home' }  默认值：children里的重定向
      children里的path前没有/，表示path叠加，若加了/就不会叠加
      meta路由元信息，是用来存路由参数，比如title

      有children字段的，没有name字段和meta字段

      redirect重定：A找B要图片资源，B说C那才有，最后A改找C-------url的path变化了   302
      转发：A找B要图片资源，B没有，B去问C要到了，最后B发给了A------url的path没变  307
    */
    { path: '*', name: 'error', meta: { title: '找不到该页',key: -1}, component: resolve => require(['@/explore/pages/404.vue'], resolve) },
    { path: '/noPermission', name: 'noPermission', meta: { title: '无权限访问该页',key: -1}, component: resolve => require(['@/explore/pages/401.vue'], resolve) },
    { path: '/', name: 'defaultPath', meta: { title: '默认路由',key: 0}, component: resolve => require(['@/explore/pages/defaultPath'], resolve) },
    {
      path: '/home', component: resolve => require(['@/explore/pages/home/index.vue'], resolve),
      children: [
        { path: 'homeIndex', name: 'homeIndex', meta: { title: '首页',key: 0}, component: resolve => require(['@/explore/pages/home/homeIndex/index.vue'], resolve) },
        { path: 'lottery', meta: { title: '福气',key: 1}, component: resolve => require(['@/explore/pages/home/lottery/index.vue'], resolve) },
        { path: 'realPerson', name: 'realPerson', meta: { title: '真人',key: 2}, component: resolve => require(['@/explore/pages/home/realPerson/index.vue'], resolve) },
        { path: 'sports', name: 'sports', meta: { title: '体育',key: 3}, component: resolve => require(['@/explore/pages/home/sports/index.vue'], resolve) },
        { path: 'videoGame', name: 'videoGame', meta: { title: '电玩',key: 4}, component: resolve => require(['@/explore/pages/home/videoGame/index.vue'], resolve) },
        { path: 'agentSystem', name: 'agentSystem', meta: { title: '代理',key: 5}, component: resolve => require(['@/explore/pages/home/agentSystem/index.vue'], resolve) },
        {
          path: 'managementCenter', component: resolve => require(['@/explore/pages/home/managementCenter/index.vue'], resolve),
          children: [
            { path: 'crux', name: 'crux', meta: { title: '管理中心',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/crux.vue'], resolve) },

            { path: 'tagStyle/css', name: 'css', meta: { title: '样式',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/tagStyle/css.vue'], resolve) },
            { path: 'tagStyle/tags', name: 'tags', meta: { title: '标签',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/tagStyle/tags.vue'], resolve) },
            { path: 'tagStyle/flex', name: 'flex', meta: { title: 'flex弹性布局',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/tagStyle/flex.vue'], resolve) },
            { path: 'tagStyle/cssDemo', name: 'cssDemo', meta: { title: '样式例子',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/tagStyle/cssDemo.vue'], resolve) },
            { path: 'tagStyle/table', name: 'table', meta: { title: '完整table',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/tagStyle/table.vue'], resolve) },
            { path: 'tagStyle/cssDemo2', name: 'cssDemo2', meta: { title: '样式例子2',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/tagStyle/cssDemo2.vue'], resolve) },

            { path: 'javaScript/isString', name: 'isString', meta: { title: '字符串',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/isString.vue'], resolve) },
            { path: 'javaScript/isObject', name: 'isObject', meta: { title: '对象',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/isObject.vue'], resolve) },
            { path: 'javaScript/isArray', name: 'isArray', meta: { title: '数组',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/isArray.vue'], resolve) },
            { path: 'javaScript/learn1', name: 'learn1', meta: { title: '必学1',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/learn1.vue'], resolve) },
            { path: 'javaScript/learn2', name: 'learn2', meta: { title: '必学2',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/learn2.vue'], resolve) },
            { path: 'javaScript/learn3', name: 'learn3', meta: { title: '必学3',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/learn3.vue'], resolve) },
            { path: 'javaScript/processing', name: 'processing', meta: { title: '处理数据',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/processing.vue'], resolve) },
            { path: 'javaScript/es6', name: 'es6', meta: { title: 'es6',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/es6.vue'], resolve) },
            { path: 'javaScript/jsDemo', name: 'jsDemo', meta: { title: 'js例子',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/jsDemo.vue'], resolve) },
            { path: 'javaScript/research', name: 'research', meta: { title: '赋值-浅拷贝-深拷贝',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/research.vue'], resolve) },
            { path: 'javaScript/url_base64_blob', name: 'url_base64_blob', meta: { title: 'url_base64_blob',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/url_base64_blob.vue'], resolve) },
            { path: 'javaScript/isDate', name: 'isDate', meta: { title: '时间日期',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/javaScript/isDate.vue'], resolve) },

            { path: 'knowledge/v_tag', name: 'v_tag', meta: { title: 'vue指令',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/v_tag.vue'], resolve) },
            { path: 'knowledge/modifier', name: 'modifier', meta: { title: 'vue修饰符',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/modifier.vue'], resolve) },
            { path: 'knowledge/lifeCycle', name: 'lifeCycle', meta: { title: '生命周期',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/lifeCycle.vue'], resolve) },
            { path: 'knowledge/vuex', name: 'vuex', meta: { title: 'vuex',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/vuex.vue'], resolve) },
            { path: 'knowledge/router', name: 'router', meta: { title: '路由传参',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/router.vue'], resolve) },
            { path: 'knowledge/class', name: 'class', meta: { title: '动态样式',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/class.vue'], resolve) },
            { path: 'knowledge/exportImport', name: 'exportImport', meta: { title: '导出与导入',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/exportImport.vue'], resolve) },
            { path: 'knowledge/parent', name: 'parent', meta: { title: '子父通讯',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/parent.vue'], resolve) },
            { path: 'knowledge/public', name: 'public', meta: { title: '全局方法',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/public.vue'], resolve) },
            { path: 'knowledge/watch', name: 'watch', meta: { title: 'watch监听',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/watch.vue'], resolve) },
            { path: 'knowledge/computed', name: 'computed', meta: { title: 'computed',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/computed.vue'], resolve) },
            { path: 'knowledge/filters', name: 'filters', meta: { title: 'filters过滤器',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/filters.vue'], resolve) },
            { path: 'knowledge/transition', name: 'transition', meta: { title: 'transition动画',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/transition.vue'], resolve) },
            { path: 'knowledge/refs', name: 'refs', meta: { title: 'refs操作Dom',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/refs.vue'], resolve) },
            { path: 'knowledge/mock', name: 'mock', meta: { title: 'mock模拟接口',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/mock.vue'], resolve) },
            { path: 'knowledge/cache', name: 'cache', meta: { title: '浏览器缓存',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/cache.vue'], resolve) },
            { path: 'knowledge/axios', name: 'axios', meta: { title: 'axios配置',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/axios.vue'], resolve) },
            { path: 'knowledge/relativePath', name: 'relativePath', meta: { title: '图片相对路径',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/relativePath.vue'], resolve) },
            { path: 'knowledge/vueMixin', name: 'vueMixin', meta: { title: 'mixins混合',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/vueMixin.vue'], resolve) },
            { path: 'knowledge/vueExtend', name: 'vueExtend', meta: { title: '动态渲染组件',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/vueExtend.vue'], resolve) },
            { path: 'knowledge/isLess', name: 'isLess', meta: { title: 'less预处理样式',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/isLess.vue'], resolve) },
            { path: 'knowledge/isSassScss', name: 'isSassScss', meta: { title: 'scss预处理样式',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/knowledge/isSassScss.vue'], resolve) },

            { path: 'effect/download', name: 'isDownload', meta: { title: '下载',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/download.vue'], resolve) },
            { path: 'effect/copy', name: 'copy', meta: { title: 'copy复制',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/copy.vue'], resolve) },
            { path: 'effect/field', name: 'field', meta: { title: '字段变量',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/field.vue'], resolve) },
            { path: 'effect/backToTop', name: 'backToTop', meta: { title: '返回顶部',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/backToTop.vue'], resolve) },
            { path: 'effect/pagination', name: 'pagination', meta: { title: '分页封装',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/pagination.vue'], resolve) },
            { path: 'effect/upload', name: 'upload', meta: { title: '上传图片列表',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/upload.vue'], resolve) },
            { path: 'effect/upload1', name: 'upload1', meta: { title: '单个上传图片',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/upload1.vue'], resolve) },
            { path: 'effect/lazy', name: 'lazy', meta: { title: '懒加载',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/lazy.vue'], resolve) },
            { path: 'effect/video', name: 'video', meta: { title: '视频',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/video.vue'], resolve) },
            { path: 'effect/editor', name: 'editor', meta: { title: '文本编辑器',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/editor.vue'], resolve) },
            { path: 'effect/vueqr', name: 'vueqr', meta: { title: '二维码',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/vueqr.vue'], resolve) },
            { path: 'effect/listener', name: 'listener', meta: { title: '浏览器监听',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/listener.vue'], resolve) },
            { path: 'effect/websocket', name: 'websocket', meta: { title: 'websocket',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/websocket.vue'], resolve) },
            { path: 'effect/windowTab', name: 'windowTab', meta: { title: '开新窗口',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/windowTab.vue'], resolve) },
            { path: 'effect/svgIcons', name: 'svgIcons', meta: { title: 'svg',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/svgIcons.vue'], resolve) },
            { path: 'effect/awesomeIcons', name: 'awesomeIcons', meta: { title: 'font-awesome',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/awesomeIcons.vue'], resolve) },
            { path: 'effect/guide', name: 'guide', meta: { title: '分步引导',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/guide.vue'], resolve) },
            { path: 'effect/screenfull', name: 'screenfull', meta: { title: '全屏',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/screenfull.vue'], resolve) },
            { path: 'effect/isAudio', name: 'isAudio', meta: { title: '音频',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/isAudio.vue'], resolve) },
            { path: 'effect/previewPictures', name: 'previewPictures', meta: { title: '图片预览',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/previewPictures.vue'], resolve) },
            { path: 'effect/inputeCheck', name: 'inputeCheck', meta: { title: '表单校验',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/inputeCheck.vue'], resolve) },
            { path: 'effect/customAvatar', name: 'customAvatar', meta: { title: '头像上传裁切',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/customAvatar.vue'], resolve) },
            { path: 'effect/suspension', name: 'suspension', meta: { title: '悬浮图片',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/suspension.vue'], resolve) },

            { path: 'reportForm/demo1', name: 'echartsDemo1', meta: { title: 'echart图表',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/reportForm/demo1.vue'], resolve) },

            { path: 'expand/canvas', name: 'canvas', meta: { title: 'canvas',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/expand/canvas.vue'], resolve) },
            { path: 'expand/base64', name: 'base64', meta: { title: 'base64解密',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/expand/base64.vue'], resolve) },

            { path: 'talk/talk1', name: 'talk1', meta: { title: '面试要点1',key: 6}, component: resolve => require(['@/explore/pages/home/managementCenter/talk/talk1.vue'], resolve) },
            { path: '/', redirect: '/home/managementCenter/crux' }
          ]
        },
        { path: '/', redirect: '/home/homeIndex' }
      ]
    },
    { path: '/adaption', name: 'adaption', meta: { title: 'pc自适应',key: -1}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/adaption.vue'], resolve) },
    { path: '/wave', name: 'wave', meta: { title: '水波',key: -1}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/wave.vue'], resolve) },
    { path: '/login', name: 'Login', meta: { title: '登陆',key: -1}, component: resolve => require(['@/explore/pages/login/index'], resolve) },
    { path: '/line', name: 'Line', meta: { title: '线路检测',key: -1}, component: resolve => require(['@/explore/pages/login/line'], resolve) },
    { path: '/register', name: 'Register', meta: { title: '注册',key: -1}, component: resolve => require(['@/explore/pages/register/index'], resolve) },
    { path: '/game', name: 'game', meta: { title: '首页',key: -1}, component: resolve => require(['@/explore/pages/game/index.vue'], resolve) },
    { path: '/neutralgear', name: 'neutralGear', meta: { title: '加载中',key: -1}, component: resolve => require(['@/explore/pages/neutralGear/index'], resolve) },
    { path: '/download', name: 'download', meta: { title: '下载中心',key: -1}, component: resolve => require(['@/explore/pages/download/index'], resolve) },
    { path: '/attachmentUpload', name: 'attachmentUpload', meta: { title: '发票识别',key: -1}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/attachmentUpload.vue'], resolve) },
    { path: '/openTab', name: 'openTab', meta: { title: '浏览器新开窗口',key: -1}, component: resolve => require(['@/explore/pages/home/managementCenter/effect/openTab.vue'], resolve) },
    { path: '/priceManage', name: 'priceManage', meta: { title: '价格地图',key: -1}, component: resolve => require(['@/explore/pages/priceManage/index.vue'], resolve) },
    { path: '/vueForm', name: 'vueForm', meta: { title: '活动素材',key: -1}, component: resolve => require(['@/explore/pages/vueForm/index.vue'], resolve) },
    { path: '/vueForm2', name: 'vueForm2', meta: { title: '活动素材',key: -1}, component: resolve => require(['@/explore/pages/vueForm/index2.vue'], resolve) },
    { path: '/formDesign', name: 'formDesign', meta: { title: 'Schema生成器',key: -1}, component: resolve => require(['@/explore/pages/vueForm/formSchemaDesign/Editor.vue'], resolve) },
    { path: '/activityEditor', name: 'activityEditor', meta: { title: '活动编辑器',key: -1}, component: resolve => require(['@/explore/pages/vueForm/activityEditor/Editor.vue'], resolve) }

  ]
})
