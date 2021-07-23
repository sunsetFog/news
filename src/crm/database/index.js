import Mock from 'mockjs' // npm install mockjs --save

/**
 * 接受所以暴露export default
 * import * as obj from './'
 */
import crmLogin from './login/login.js'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})
//    url:      /\/user\/login/    指的是  /user/login
//    请求方式:    /get|post/i    指的是get和post请求都可以


/**
 * 查询该全部数据
 * @param { store_id: 12, current_page: 1, page_size: 10 } 店铺id
 */
Mock.mock(process.env.mock_url + "/crm/login", "post", crmLogin.crmLogin);
/**





/**
 * 无需暴露，main.js加载加载过mock就行
 * export default Mock;
 */
