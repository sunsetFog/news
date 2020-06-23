<template>
    <section id="mock">
      <!--mock本地模拟数据-->
    </section>
</template>

<script>
//npm install mockjs --save
import mock from "../../../../static/study/breezy/mock.js";
export default {
  data() {
    return {
      list: []
    };
  },
  created() {
    // this.getJson();
    // this.is_delete();
  },
  methods: {
    is_delete(){

        let json = {goods_id: 3};
        this.$axios.post("plugin.store-cashier.frontend.store.goods.destroy-goods",json).then(function(res) {
            console.log("delete++=", res);
        }).catch((err)=>{
            console.error('error',err);
        })
      
    },
    getJson() {
      //1.开发环境模拟本地数据    请查看see/build/webpack.dev.conf.js  这没有实用性，删除了
      //2.mock模拟本地数据
      //查找全部
      this.$axios.post('plugin.store-cashier.frontend.store.goods.get-goods-list').then(function(res){
          console.log('moon++=',res);
      }).catch((err)=>{
          console.error('error',err);
      })

      //查找单条
      // let json = {
      //   goods_id: 3 //商品id
      // };
      // this.$axios.post("plugin.store-cashier.frontend.store.goods.get-goods-detail",json).then(function(res) {
      //     console.log("single++=", res);
      // }).catch((err)=>{
      //   console.error('error',err);
      // })

      //查找分类
      // let json = {store_id: 12};
      // this.$axios.post('plugin.store-cashier.frontend.store.goods-category.get-category-by-store-id',json).then(function(res){
      //     console.log('cate++=',res);
      // }).catch((err)=>{
      //     console.error('error',err);
      // })


      //修改
      // let json = {
      //                       store_id: 12,//店铺id
      //                       id: 3,//商品id
      //                       title: '1',//商品名称
      //                       company: '1',//商品单位
      //                       category_pid: '1',//商品分类一级id
      //                       category_cid: '1',//商品分类二级id
      //                       thumb: '../../../../static/meitu/dian/lizhi.jpg',//商品图片
      //                       price: '1',//商品现价
      //                       original_price: '1',//商品原价
      //                       cost: '1',//商品成本
      //                       stock: '1',//库存
      //                       virtual_sales: '1'//虚拟销量
      //                   };
      // this.$axios.post('plugin.store-cashier.frontend.store.goods.edit-goods',json).then(function(res){
      //     console.log('cate++=',res);
      // }).catch((err)=>{
      //     console.error('error',err);
      // })


      //添加
        //     let json = {
        //                     store_id: 12,//店铺id
        //                     title: '2',//商品名称
        //                     company: '2',//商品单位
        //                     category_pid: '2',//商品分类一级id
        //                     category_cid: '2',//商品分类二级id
        //                     thumb: '../../../../static/meitu/dian/lizhi.jpg',//商品图片
        //                     price: '2',//商品现价
        //                     original_price: '2',//商品原价
        //                     cost: '2',//商品成本
        //                     stock: '2',//库存
        //                     virtual_sales: '2'//虚拟销量
        //                 };
        // this.$axios.post('plugin.store-cashier.frontend.store.goods.add-goods',json).then(function(res){
        //     console.log('cate++=',res);
        // }).catch((err)=>{
        //     console.error('error',err);
        // })
    }
  }
}
</script>

<style lang="less" scoped>
#mock {
}
</style>
