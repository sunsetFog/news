<template>
    <section id="lianxi">

    </section>
</template>

<script>
export default {
    name: "移动端练习",
    data(){
        return{

        }
    },
    created(){
        // 前端关于自己模拟接口做测试
        // https://blog.csdn.net/w_s_x_b/article/details/92613421
        // https://www.mocky.io/  这是接口模拟工具  https://designer.mocky.io
    },
    mounted(){

    },
    methods:{
        //商品管理-商品数据获取
        getJson(){
            let that = this;
            let json = {store_id: 12};//店铺id
            that.$http.post('plugin.store-cashier.frontend.store.goods.get-goods-list',json).then((res) => {

                let res2={
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

            }).catch((err)=>{
                console.error('error',err);
            })
        },
        //商品管理-商品删除
        commodityDelete(){
            let that = this;
            let json = {
                            goods_id: ''//商品id
                        };
            that.$http.post('plugin.store-cashier.frontend.store.goods.destroy-goods',json).then((res) => {

                let res2 = {result: 1}//1是成功状态，其他失败状态

            }).catch((err)=>{
                console.error('error',err);
            })
        },
        //商品分类
        category(){
            let that = this;
            let json = {store_id: 12};//店铺id
            that.$http.post('plugin.store-cashier.frontend.store.goods-category.get-category-by-store-id',json).then((res) => {
                let res2 = [
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


            }).catch((err)=>{
                console.error('error',err);
            })
        },
        //上传图片接口
        upload(){
            //https://jsonplaceholder.typicode.com/posts/
        },
        //发布商品
        publish(){
            let that = this;
            let json = {
                            store_id: 12,//店铺id
                            title: '',//商品名称
                            company: '',//商品单位
                            category_pid: '',//商品分类一级id
                            category_cid: '',//商品分类二级id
                            thumb: '../../../../static/meitu/dian/lizhi.jpg',//商品图片
                            price: '',//商品现价
                            original_price: '',//商品原价
                            cost: '',//商品成本
                            stock: '',//库存
                            virtual_sales: ''//虚拟销量
                        };
            that.$http.post('plugin.store-cashier.frontend.store.goods.add-goods',json).then((res) => {
                let res2 = {result: 1}//1是成功状态，其他失败状态


            }).catch((err)=>{
                console.error('error',err);
            })
        },
        //获取单条商品数据
        getGoodsJson(){
            let that = this;
            let json = {
                            goods_id: ''//商品id
                        };
            that.$http.post('plugin.store-cashier.frontend.store.goods.get-goods-detail',json).then((res) => {



            }).catch((err)=>{
                console.error('error',err);
            })
        },
        //确认编辑
        editor(){
            let that = this;
            let json = {
                            store_id: 12,//店铺id
                            id: '',//商品id
                            title: '',//商品名称
                            company: '',//商品单位
                            category_pid: '',//商品分类一级id
                            category_cid: '',//商品分类二级id
                            thumb: '../../../../static/meitu/dian/lizhi.jpg',//商品图片
                            price: '',//商品现价
                            original_price: '',//商品原价
                            cost: '',//商品成本
                            stock: '',//库存
                            virtual_sales: ''//虚拟销量
                        };
            that.$http.post('plugin.store-cashier.frontend.store.goods.edit-goods',json).then((res) => {
                let res2 = {result: 1}//1是成功状态，其他失败状态


            }).catch((err)=>{
                console.error('error',err);
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>