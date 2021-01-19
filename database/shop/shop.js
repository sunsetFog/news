import store from './store.json'
import classify from './classify.json'

let idParams = 'goods_id' // id名传参
let addParams = { // 添加传参
    title: null,
    // company: null,
    // category_pid: null,
    // category_cid: null,
    thumb: null,
    price: null,
    // original_price: null,
    // cost: null,
    stock: null,
    virtual_sales: null
}
let modifyParams = { // 修改传参
    goods_id: null, // 相比添加，修改一般多个id
    title: null,
    // company: null,
    // category_pid: null,
    // category_cid: null,
    thumb: null,
    price: null,
    // original_price: null,
    // cost: null,
    stock: null,
    virtual_sales: null
}
/* 
|- total: 3, 商品数量
|- current_page: 1, 当前页
|- page_size: 15, 一页多少条数据
|- total_page: 1, 总页数
|- list
    |- store_id: 12, 店铺id
    |- goods_id: 1, 商品id
    |- title: '', 商品名称
    |- company: '包', 商品单位
    |- category_pid: 201, 商品分类一级id
    |- category_cid: 202, 商品分类二级id
    |- thumb: '', 商品图片
    |- price: 110, 商品现价
    |- original_price: 160, 商品原价
    |- cost: 25, 商品成本
    |- stock: 1000, 库存
    |- virtual_sales: 2300 虚拟销量

注意:
    1.对应的store.list和store.total
    2.下面别改，改上面传入参数就行
    3.其他传入参数可以无视，下面没限制
*/

function limitField(obj, params) { // 判断字段：添加和修改用
    let arr = []
    for (let item in params) {
        arr.push(item)
    }
    for (let i = 0; i < arr.length; i++) {
        if (!obj.hasOwnProperty(arr[i])) {
            return { code: 100, message: '参数错误' }
        }
        if (!obj[arr[i]]) {
            return { code: 100, message: '参数不能为空' }
        }
    }
}
function sortObj(obj) { // 对象排序
    let allField = [] // 所有字段
    for (let item in store.list[0]) {
        allField.push(item)
        if (!obj.hasOwnProperty(item)) { // 额外字段：组合传参没有的字段
            obj[item] = store.list[0][item]
        }
    }
    let newObj = {}
    for (let i = 0; i < allField.length; i++) {
        newObj[allField[i]] = obj[allField[i]]
    }
    return newObj
}

//查询该单条数据
let isSingle = function (options) {
    let id = Number(JSON.parse(options.body)[idParams]); // 获取请求的id，将options.body转换为JSON对象
    for (let i = 0; i < store.list.length; i++) {
        if (store.list[i][idParams] == id) {
            return store.list[i];
        }
    }
    return { code: 100, message: '传参错误' }
}

// 数据的删除操作
let isDelete = function (options) {
    let id = Number(JSON.parse(options.body)[idParams]); // 获取请求的id，将options.body转换为JSON对象
    let save_length = store.list.length;
    store.list = store.list.filter(function (val) {
        return val[idParams] != id;  // 过滤掉前台传过来的id对应的相应数据，并重新返回
    });
    for (let i = 0; i < store.list.length; i++) { // 删除后重新排列id
        store.list[i][idParams] = i + 1
    }
    if (save_length.length !== store.list.length) {
        store.total = store.total - 1;
        return { code: 200, message: '删除成功' }
    } else {
        return { code: 100, message: '传参错误' }
    }
}

// 数据的添加操作
let isAdd = function (options) {
    let obj = JSON.parse(options.body);
    if (limitField(obj, addParams)) {
        return limitField(obj, addParams)
    }
    store.total = store.list.length + 1;
    obj[idParams] = store.list.length + 1;

    obj = sortObj(obj)
    store.list = store.list.concat(obj);  // 将前台返回来的数据，拼接到数组中。
    return { code: 200, message: '添加成功' }
    // return store
}

// 数据的修改操作
let isUpdate = function (options) {
    let obj = JSON.parse(options.body);
    if (limitField(obj, modifyParams)) {
        return limitField(obj, modifyParams)
    }
    obj = sortObj(obj)
    store.list = store.list.map(val => {  // 将需要替换的数据替换掉
        return Number(val[idParams]) === Number(obj[idParams]) ? obj : val;
    });
    return { code: 200, message: '修改成功' }
    // return store

}


export default {
    store, // 查询所有数据用的
    classify, // 查询分类数据    这两个没做啥处理，不用写function
    isSingle,
    isDelete,
    isAdd,
    isUpdate
};
