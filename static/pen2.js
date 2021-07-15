带入code
menuId是为了减轻遍历压力
匹配当前$route.meta.menuId     --- 无则隐藏hidden      el.style.visibility = 'hidden'
有授权列表和无授权列表
{
'11120783': [{
code: "iadmin_message_migrate_download",
disabled: "N",// 没有授权---Y禁用disabled      el.setAttribute('disabled', true)
displayed: "Y", // 有授权---Y展示show     el.style.visibility = 'visible'
menuId: 11120783
}]
}



&.title{
    &:nth-child(2){
    {tabs:true, height:'高度', subHeight:'高度差'}
    
    vuex:
    modules: {},
    getters
    
    main.js
    import 'babel-polyfill' // 兼容 IE8
    vuex 中保存错误日志数组,展示table里
    import Vue from 'vue'
    import store from './store'
    if (process.env.NODE_ENV === 'production') {
      Vue.config.errorHandler = function(err, vm, info, a) {
        Vue.nextTick(() => {
          store.dispatch('addErrorLog', {
            err,
            vm,
            info,
            url: window.location.href
          })
          console.error(err, info)
        })
      }
    }
    
    vue中使用svg-icon
    https://blog.csdn.net/shentibeitaokong/article/details/83039021
    <svg-icon icon-class="eye" />
    {
            test: /\.svg$/,
            loader: 'svg-sprite-loader',
            include: [resolve('src/portal/icons')],
            options: {
              symbolId: 'icon-[name]'
            }
          },
    import 'font-awesome/css/font-awesome.min.css' // font-awesome icon
    
    Object.keys(filters).forEach(key => {
      Vue.filter(key, filters[key])
    })
    //Vue实例化注册自定义过滤器
    Vue.filter("sum", function(value) {
       return value + 4;
    })
    {{message | sum}}
    
    import '@/ierp/index' // 加载ierp应用初始化文件
    import './styles/common.css'
    import './router'
    import './store'
    import './lang'
    import * as filters from './filters'
    import * as directives from '@/ierp/directive/iedi'
    

    

    数据字典、多种动态换肤、多环境发布、导入导出日志
- 错误页面
  - 401
  - 404

导入
const blob = res.data
        // for IE
        if (window.navigator && window.navigator.msSaveOrOpenBlob) {
          window.navigator.msSaveOrOpenBlob(res.data, _this.templateName + '.xlsx');
        } else {
          const a = document.createElement('a')
          a.download = _this.templateName + '.xlsx'
          a.href = window.URL.createObjectURL(new Blob([blob]))
          document.body.appendChild(a)
          a.click()
          document.body.removeChild(a)
        }


        页面缓存设置keep-alive


import Vue from 'vue';
let eventBus = new Vue()
eventBus.$on('editEcEmployeeTab', this.addTabs)
eventBus.$emit('refreshEcEmpIsDisabled',  false)
eventBus.$off('editEcEmployeeTab')


    

    
  
