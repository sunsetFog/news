import store from './store.json'
import classify from './classify.json'

/* 
|- count: 3, // 商品数量
|- list
    |- store_id: 12, // 店铺id
    |- id: 1, // 商品id
    |- title: '5斤装桂味荔枝现摘现发', // 商品名称
    |- company: '包', // 商品单位
    |- category_pid: 201, // 商品分类一级id
    |- category_cid: 202, // 商品分类二级id
    |- thumb: '../../../../static/meitu/dian/lizhi.jpg', // 商品图片
    |- price: 110, // 商品现价
    |- original_price: 160, // 商品原价
    |- cost: 25, // 商品成本
    |- stock: 1000, // 库存
    |- virtual_sales: 2300 // 虚拟销量 
*/
let idDemo = 'goods_id'
//注意替换对应的store.list和store.count
let addDemo = {
    title: null,
    company: null,
    category_pid: null,
    category_cid: null,
    thumb: null,
    price: null,
    original_price: null,
    cost: null,
    stock: null,
    virtual_sales: null
}
let aiArr = []
for (let item in addDemo) {
    aiArr.push(item)
}
let external = {}
let sortArr = []
for (let item in store.list[0]) {
    sortArr.push(item)
    if (aiArr.indexOf(item) === -1 && item !== 'id') {
        external[item] = store.list[0][item]
    }
}
function sortObj(obj) {
    let newObj = {}
    for (let i = 0; i < sortArr.length; i++) {
        newObj[sortArr[i]] = obj[sortArr[i]]
    }
    return newObj
}
// console.log('external---', external, sortArr)

//查询该单条数据
let is_single = function (options) {
    let id = Number(JSON.parse(options.body)[idDemo]); // 获取请求的id，将options.body转换为JSON对象
    for (let i = 0; i < store.list.length; i++) {
        if (store.list[i].id == id) {
            return store.list[i];
        }
    }
    return { code: 400, message: '传参错误' }
}

// 数据的删除操作
let is_delete = function (options) {
    let id = Number(JSON.parse(options.body)[idDemo]); // 获取请求的id，将options.body转换为JSON对象
    let save_length = store.list.length;
    store.list = store.list.filter(function (val) {
        return val.id != id;  // 过滤掉前台传过来的id对应的相应数据，并重新返回
    });
    if (save_length.length !== store.list.length) {
        store.count = store.count - 1;
        return { code: 1, message: '删除成功' }
    } else {
        return { code: 400, message: '传参错误' }
    }
}

// 数据的添加操作
let is_add = function (options) {
    let obj = JSON.parse(options.body);
    for (let i = 0; i < aiArr.length; i++) {
        if (!obj.hasOwnProperty(aiArr[i])) {
            return { code: 400, message: '参数错误' }
        }
        if (!obj[aiArr[i]]) {
            return { code: 400, message: '参数不能为空' }
        }
    }
    store.count = store.count + 1;

    for (let item in external) {
        obj[item] = external[item]
    }
    obj.id = store.count;

    obj = sortObj(obj)
    store.list = store.list.concat(obj);  // 将前台返回来的数据，拼接到数组中。
    // return { code: 1, message: '添加成功' }
    return store
}

// 数据的修改操作
let is_update = function (options) {
    let obj = JSON.parse(options.body);
    for (let i = 0; i < aiArr.length; i++) {
        if (!obj.hasOwnProperty(aiArr[i])) {
            return { code: 400, message: '参数错误' }
        }
        if (!obj[aiArr[i]]) {
            return { code: 400, message: '参数不能为空' }
        }
    }
    for (let item in external) {
        obj[item] = external[item]
    }
    obj = sortObj(obj)
    store.list = store.list.map(val => {  // 将需要替换的数据替换掉
        return Number(val.id) === Number(obj.id) ? obj : val;
    });
    // return { code: 1, message: '修改成功' }
    return store

}

//查询分类数据
let is_classify = function (options) {
    let obj = JSON.parse(options.body); // 获取请求的id，将options.body转换为JSON对象
    return classify
}

let shop_json = {
    store,
    is_single,
    is_delete,
    is_add,
    is_update,
    is_classify
}

export default shop_json;
