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




    
    

    

    
    

    
    
    //Vue实例化注册自定义过滤器
    
    
    import '@/explore/ierp/index' // 加载ierp应用初始化文件
    import './styles/common.css'
    import './router'
    import './store'
    import './lang'
    import * as filters from './filters'
    import * as directives from '@/explore/ierp/directive/iedi'
    

    

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





import Vue from 'vue';
let eventBus = new Vue()
eventBus.$on('editEcEmployeeTab', this.addTabs)
eventBus.$emit('refreshEcEmpIsDisabled',  false)
eventBus.$off('editEcEmployeeTab')


    

    
  
