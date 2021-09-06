const steps = [
    {
      element: '.reserve',// 绑定的Dom
      popover: {
        title: '面包屑导航',
        description: '用于显示当前导航菜单的位置',
        position: 'bottom'
      }
    },
    {
      element: '.welcome',
      popover: {
        title: 'Breadcrumb',
        description: 'Indicate the current page location',
        position: 'bottom'
      }
    },
    {
      element: '.manage-content-left',
      popover: {
        title: 'Page Search',
        description: 'Page search, quick navigation',
        position: 'right'
      },
    //   padding: 0
    }
  ]
  
  export default steps
  