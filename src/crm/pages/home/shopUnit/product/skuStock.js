export default {
    data() {
        return {
            dialogGoods: false,
            save_goods: {},
            sku_value: '',
            sku_list: []
        }
    },
    methods: {
        // sku商品库存
        skuList() {
            let that = this;
            let params = {
                keyword: that.sku_value
            };
            that.$apihttp({
                url: process.env.core_url + '/sky/sku/list/' +  that.save_goods.id,
                method: 'get',
                params: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.sku_list = res.data;
                        for (let index = 0; index < that.sku_list.length; index++) {
                            let item = that.sku_list[index];
                            item.spData = JSON.parse(item.spData);
                        }
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        skuStockShow(row) {
            this.dialogGoods = true;
            this.save_goods = row;
            this.skuList();
        },
        cancelGoodsWay() {
            this.dialogGoods = false;
        },
        sureGoodsWay() {
            let that = this;
            let arr = JSON.parse(JSON.stringify(that.sku_list));
            for (let index = 0; index < arr.length; index++) {
                let item = arr[index];
                item.spData = JSON.stringify(item.spData);
            }
            that.$apihttp({
                url: process.env.core_url + '/sky/sku/update/' +  that.save_goods.id,
                method: 'post',
                data: arr
            })
                .then(res => {
                    if (res.code == '200') {
                        that.queryWay();
                        that.dialogGoods = false;
                        that.$message({
                            type: 'success',
                            message: '修改成功!'
                        });
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        }
    }
}