// import Vue from 'vue'
import Mock from 'mockjs'
// process.env.NODE_ENV === "development" ? Vue.use(Mock) : null;

import tableAPI from './money'
import salesAPI from './sales'
import userAPI from './user'
import shopAPI from './shop'

// 设置全局延时 没有延时的话有时候会检测不到数据变化 建议保留
Mock.setup({
    timeout: '300-600'
})
//    url:      /\/user\/login/    指的是  /user/login
//    请求方式:    /get|post/i    指的是get和post请求都可以
// 资金相关
// 资金流水  传参  endTime:"",(结束时间)limit:20,(1页显示多少条)name:"",(用户名)page:1,(当前位于哪页)startTime:""(开始时间)
Mock.mock(/\/money\/get/, 'get', tableAPI.getMoneyList)
//资金流水-删除          传参 {id:"EAB42c1A-AEba-CDdb-bd9E-9366c96DeCd8"}
Mock.mock(/\/money\/remove/, 'get', tableAPI.deleteMoney)
//资金流水-批量删除   传参  ids:""
Mock.mock(/\/money\/batchremove/, 'get', tableAPI.batchremoveMoney)
//资金流水-添加  传参  accoutCash:账户现金(填数字),income: 收入(填数字),incomePayType:收资类型(填写0),pay:支出(填数字),remarks:备注,username:"用户名"
Mock.mock(/\/money\/add/, 'get', tableAPI.createMoney)
//资金流水-编辑  传参   accoutCash:账户现金(填数字),income: 收入(填数字),incomePayType:收资类型(填写0),pay:支出(填数字),remarks:备注,username:"用户名"
Mock.mock(/\/money\/edit/, 'get', tableAPI.updateMoney)
// sales相关
// 销售数据表格(首页倒数第三表)   传参  空对象{}
Mock.mock(/\/sales\/get/, 'get', salesAPI.getSalesList)

// user相关
//登录  传参 {username: 'admin',(用户名)password: '123456'(密码)}
Mock.mock(/\/user\/login/, 'get', userAPI.login)
//登出  传参  无
Mock.mock(/\/user\/logout/, 'get', userAPI.logout)
//用户信息  传参 {token: ''}
Mock.mock(/\/user\/info\/get/, 'get', userAPI.getUserInfo)
//用户管理  传参  {limit: '',(1页显示多少条)page: ''(当前位于哪页)}
Mock.mock(/\/user\/list\/get/, 'get', userAPI.getUserList)


//查询该全部数据    传参 {store_id: 12} 店铺id
Mock.mock("plugin.store-cashier.frontend.store.goods.get-goods-list","post",shopAPI.store);
//查询该单条数据   传参 {goods_id: ''}  商品id
Mock.mock("plugin.store-cashier.frontend.store.goods.get-goods-detail","post",shopAPI.is_single);
// 数据的删除操作   传参 {goods_id: ''}  商品id
Mock.mock("plugin.store-cashier.frontend.store.goods.destroy-goods","get",shopAPI.is_delete);
// 数据的添加操作  传参  store_id: 12,(店铺id)title: '',(商品名称)company: '',(商品单位)category_pid: '',(商品分类一级id)category_cid: '',(商品分类二级id)thumb: '../../../../static/meitu/dian/lizhi.jpg',(商品图片)price: '',(商品现价)original_price: '',(商品原价)cost: '',(商品成本)stock: '',(库存)virtual_sales: ''(虚拟销量)
Mock.mock("plugin.store-cashier.frontend.store.goods.add-goods","post",shopAPI.is_add);
// 数据的修改操作  传参   store_id: 12,(店铺id)id: '',(商品id)title: '',(商品名称)company: '',(商品单位)category_pid: '',(商品分类一级id)category_cid: '',(商品分类二级id)thumb: '../../../../static/meitu/dian/lizhi.jpg',(商品图片)price: '',(商品现价)original_price: '',(商品原价)cost: '',(商品成本)stock: '',(库存)virtual_sales: ''(虚拟销量)
Mock.mock("plugin.store-cashier.frontend.store.goods.edit-goods","post",shopAPI.is_update);
//查询分类数据   传参   {store_id: 12}; 店铺id
Mock.mock("plugin.store-cashier.frontend.store.goods-category.get-category-by-store-id","post",shopAPI.is_classify);





export default Mock;