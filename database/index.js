import Mock from 'mockjs' // npm install mockjs --save
import allKey from '../static/capital/allKey.json'

/**
 * 接受所以暴露export default
 * import * as obj from './'
 */
import shopAPI from './shop/shop'
import mapAPI from './map/map'

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
Mock.mock(allKey['mock-url'] + "/store/goods-list", "post", shopAPI.purchase);
/**
 * 搜索数据
 * @param { search_value: 12 } 店铺id
 */
Mock.mock(allKey['mock-url'] + "/store/search", "post", shopAPI.search);
/**
 * 查询该单条数据
 * @param { goods_id: '' }  商品id
 */
Mock.mock(allKey['mock-url'] + "/store/goods-detail", "post", shopAPI.isSingle);
/**
 * 数据的删除操作
 * @param { goods_id: '' }  商品id
 */
Mock.mock(allKey['mock-url'] + "/store/destroy-goods", "get", shopAPI.isDelete);
/**
 * 数据的添加操作
 * @param 看shop.js添加传参
 */
Mock.mock(allKey['mock-url'] + "/store/add-goods", "post", shopAPI.isAdd);
/**
 * 数据的修改操作
 * @param 看shop.js修改传参
 */
Mock.mock(allKey['mock-url'] + "/store/edit-goods", "post", shopAPI.isUpdate);
/**
 * 查询分类数据
 * @param { store_id: 12 } 店铺id
 */
Mock.mock(allKey['mock-url'] + "/store/goods/get-category", "post", shopAPI.classify);

/**
 * mock.vue调用的接口
 * @param {}
 */
Mock.mock(allKey['mock-url'] + "/store/price-list", "post", mapAPI.mapList);




/**
 * 无需暴露，main.js加载加载过mock就行
 * export default Mock;
 */
