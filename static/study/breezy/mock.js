
//链接
// vue+vuecli+webpack中使用mockjs模拟后端数据
// https://blog.csdn.net/yw00yw/article/details/81272632
// 在vue-cli项目中使用Mock模拟数据的增删改查操作：
// https://blog.csdn.net/yw00yw/article/details/81328126


//npm install mockjs --save
//import mock from "../../../../static/study/mock.js";  放在vue文件里
//npm install axios --save
// 在main.js加入
// import axios from 'axios';
// Vue.prototype.$axios = axios;

import Mock from 'mockjs';

var store =  {
                count: 3,//商品数量
                list:   [
                            {
                                store_id: 12,//店铺id
                                id: 1,//商品id
                                title: '5斤装桂味荔枝现摘现发',//商品名称
                                company: '包',//商品单位
                                category_pid: 201,//商品分类一级id
                                category_cid: 202,//商品分类二级id
                                thumb: '../../../../static/meitu/dian/lizhi.jpg',//商品图片
                                price: 110,//商品现价
                                original_price: 160,//商品原价
                                cost: 25,//商品成本
                                stock: 1000,//库存
                                virtual_sales: 2300//虚拟销量    
                            },
                            {
                                store_id: 12,
                                id: 2,
                                title: '海南金煌新鲜芒果',
                                company: '箱',
                                category_pid: 301,
                                category_cid: 302,
                                thumb: '../../../../static/meitu/dian/mangguo.jpg',
                                price: 120,
                                original_price: 180,
                                cost: 20,
                                stock: 1500,
                                virtual_sales: 3500
                            },
                            {
                                store_id: 12,
                                id: 3,
                                title: '新鲜采摘龙眼甜桂圆肉',
                                company: '袋',
                                category_pid: 401,
                                category_cid: 402,
                                thumb: '../../../../static/meitu/dian/longyan.jpg',
                                price: 140,
                                original_price: 220,
                                cost: 35,
                                stock: 800,
                                virtual_sales: 4700
                            }
                        ]
                }



//查询该全部数据
Mock.mock("plugin.store-cashier.frontend.store.goods.get-goods-list","post",store);
//查询该单条数据
let is_single = function(options){
    let rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
    let only = [];
    switch (rtype) {
        case 'get':
            return {result: "请求方式错误"}
        case 'post':
            let id = parseInt(JSON.parse(options.body).goods_id); // 获取请求的id，将options.body转换为JSON对象
            for(let i=0;i<store.list.length;i++){
                if(store.list[i].id==id){
                    only = store.list[i];
                }
            }
            if(only.length!=0){
                return only
            }else{
                return {result: "传参错误"}
            }
        default:
            break;
    }
    
}
Mock.mock("plugin.store-cashier.frontend.store.goods.get-goods-detail",/get|post/i,is_single);


// 数据的删除操作
let is_delete = function(options){
    let rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
    switch (rtype) {
        case 'get':
            return {result: "请求方式错误"}
        case 'post':
            let id = parseInt(JSON.parse(options.body).goods_id); // 获取请求的id，将options.body转换为JSON对象
            let save_length = store.list.length;
            store.list = store.list.filter(function(val) {
                return val.id != id;  // 过滤掉前台传过来的id对应的相应数据，并重新返回
            });
            if(save_length.length!=store.list.length){
                store.count = store.count - 1;
                return {result: 1}
            }else{
                return {result: "传参错误"}
            }
        default:
            break;
    }
}
Mock.mock("plugin.store-cashier.frontend.store.goods.destroy-goods",/get|post/i,is_delete);


// 数据的添加操作
let is_add = function(options){
    let rtype = options.type.toLowerCase(); //获取请求的类型
    switch (rtype) {
        case 'get':
            return {result: "请求方式错误"}
        case 'post':
            let obj = JSON.parse(options.body);
            if(obj.title==''||obj.company==''||obj.thumb==''||obj.price==''||obj.original_price==''||obj.cost==''||obj.stock==''||obj.virtual_sales==''){
                return {result: "参数不能为空"}
            }
            obj.id = store.count + 1;
            store.count = store.count + 1;
            store.list = store.list.concat(obj);  // 将前台返回来的数据，拼接到数组中。
            return {result: 1}
        default:
            break;
    }
}
Mock.mock("plugin.store-cashier.frontend.store.goods.add-goods",/get|post/i,is_add);



// 数据的修改操作
let is_update = function(options){
    let rtype = options.type.toLowerCase(); //获取请求的类型
    switch (rtype) {
        case 'get':
            return {result: "请求方式错误"}
        case 'post':
        // 获取前端返回的参数,要字符串转对象
            let obj = JSON.parse(options.body);
            if(obj.title==''||obj.company==''||obj.thumb==''||obj.price==''||obj.original_price==''||obj.cost==''||obj.stock==''||obj.virtual_sales==''){
                return {result: "参数不能为空"}
            }
            store.list = store.list.map(val => {  // 将需要替换的数据替换掉
                return Number(val.id) === Number(obj.id) ? obj : val ;
            });
            return {result: 1}
        default:
            break;
    }
}
Mock.mock("plugin.store-cashier.frontend.store.goods.edit-goods",/get|post/i,is_update);








//查询分类数据
var classify = [
                    {   
                        id: 'shipin',
                        label: '食品',
                        children: [{id: 'yinpin',label: '饮品'},{id: 'shuiguo',label: '水果'},{id: 'lingshi',label: '零食'},{id: 'cha',label: '茶'}]
                    },
                    {   
                        id: 'shengxian',
                        label: '生鲜',
                        children: [{id: 'roulei',label: '肉类'},{id: 'shuichan',label: '水产'},{id: 'liaoli',label: '料理'},{id: 'shucai',label: '蔬菜'}]
                    },
                    {   
                        id: 'jiazhuang',
                        label: '家装',
                        children: [{id: 'jiaju',label: '家具'},{id: 'wujin',label: '五金'},{id: 'jiancai',label: '建材'}]
                    }
                ]

            let is_classify = function(options){
                let rtype = options.type.toLowerCase(); //获取请求的类型并转换为小写
                switch (rtype) {
                    case 'get':
                        return {result: "请求方式错误"}
                    case 'post':
                        let id = parseInt(JSON.parse(options.body).store_id); // 获取请求的id，将options.body转换为JSON对象
                        if(id==12){
                            return classify
                        }else{
                            return {result: "参数不对"}
                        }
                    default:
                        break;
                }
                
            }
            Mock.mock("plugin.store-cashier.frontend.store.goods-category.get-category-by-store-id",/get|post/i,is_classify);




