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




    
    

    

    
    

    

    

    

    数据字典、多种动态换肤、多环境发布、导入导出日志











    

    
  
