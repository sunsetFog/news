export default {
    data() {
        return {
            dialog_title: '添加用户',
            dialogVisible: false,
            guide_active: 0,
            // ------------
            formOf01: {
                productCategoryId: [],
                name: '',
                subtitle: '',
                brandId: '',
                introduce: '',
                productSn: '',
                price: 0,
                market_value: 0,
                stock: 0,
                company: '',
                weight: '',
                sort: 0
            },
            rulesCheck: {},
            // -------------
            formOf02: {
                integral: 0,
                grow: 0,
                buyLimit: 0,
                advanceNotice: false,
                putOn: false,
                newProduct: false,
                recommend: false,
                serviceList: [],
                detailTitle: '',
                description: '',
                keyword: '',
                remarks: ''
            },
            // ------------
            formOf03: {
                productAttributeCategoryId: ''
            },
            attribute_type_list: [],
            // ------------
            formOf04: {},
            subject_value: [],
            subject_list: [],
            asProps1: {
                key: 'id',
                label: 'title',
                disabled: 'disabled'
            },
            optimization_value: [],
            optimization_list: [],
            asProps2: {
                key: 'id',
                label: 'name',
                disabled: 'disabled'
            },
            // ------------
            editSaveRow: {}
        }
    },
    created () {
        this.attributeWay();
        this.subjectWay();
        this.optimizationWay();
    },
    methods: {
        // 商品属性分类
        attributeWay() {
            let that = this;
            let params = {
                pageNum: 1,
                pageSize: 9999
            };
            that.$apihttp({
                url: process.env.core_url + '/sky/PmsProductAttributeCategory/list',
                method: 'get',
                params: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.attribute_type_list = res.data.content;
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        filterMethod1(query, item) {
            return item.title.indexOf(query) > -1;
        },
        filterMethod2(query, item) {
            return item.name.indexOf(query) > -1;
        },
        // 商品专题
        subjectWay() {
            let that = this;
            let params = {

            };
            that.$apihttp({
                url: process.env.core_url + '/sky/subject/list',
                method: 'get',
                params: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.subject_list = res.data;
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        optimizationWay() {
            let that = this;
            let params = {

            };
            that.$apihttp({
                url: process.env.core_url + '/sky/prefrenceArea/list',
                method: 'get',
                params: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.optimization_list = res.data;
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        addWay() {
            this.dialog_title = "添加用户";
            this.dialogVisible = true;
            this.initForm();
        },
        editWay(row) {
            this.editSaveRow = row
            this.dialog_title = "编辑用户";
            this.dialogVisible = true;
            this.initForm(row);
        },
        initForm(row = {}) {
            let that = this;
            // that.formOf01.username = row.username || '';
            // that.formOf01.icon = row.icon || '';
            // that.formOf01.nickName = row.nickName || '';
            // that.formOf01.email = row.email || '';
            // that.formOf01.password = row.password || '';
            // that.formOf01.note = row.note || '';
            // that.formOf01.status = row.status || true;
        },
        backWay() {
            if(this.guide_active != 0) {
                this.guide_active--;
            }
        },
        nextWay() {
            if(this.guide_active++ > 3) {
                this.guide_active = 0
            }
        },
        cancelWay() {
            this.dialogVisible = false;
        },
        sureWay() {
            if (this.dialog_title == '添加用户') {
                this.addSure();
            } else if (this.dialog_title == '编辑用户') {
                this.editSure();
            }
        },
        addSure() {
            let that = this;
            let brandName = '';
            for (let index = 0; index < that.brand_list.length; index++) {
                let item = that.brand_list[index];
                if(item.id == that.formOf01.brandId) {
                    brandName = item.name;
                }
            }
            let productCategoryName = '';
            for (let i = 0; i < that.product_category_list.length; i++) {
                let item = that.product_category_list[i];
                for (let y = 0; y < item.children.length; y++) {
                    let element = item.children[y];
                    if(element.id == that.formOf01.productCategoryId[1]) {
                        productCategoryName = element.name;
                    }
                }
            }
            let params = {
                "albumPics": that.$refs.refUpload.download_url, // @ApiModelProperty(value = "画册图片，连产品图片限制为5张，以逗号分割")
                "brandId": that.formOf01.brandId, // 品牌id
                "brandName": brandName, // @ApiModelProperty(value = "品牌名称")
                "deleteStatus": 0, // @ApiModelProperty(value = "删除状态：0->未删除；1->已删除")
                "description": that.formOf01.introduce, // 商品介绍 @ApiModelProperty(value = "商品描述")
                "detailDesc": that.formOf02.description, 
                "detailHtml": "<p>qqqqqqqqqqqq</p>", // 电脑端详情 @ApiModelProperty(value = "产品详情网页内容")
                "detailMobileHtml": "", // 移动端详情 @ApiModelProperty(value = "移动端网页详情")
                "detailTitle": that.formOf02.detailTitle, // 详细页标题
                "feightTemplateId": 0, // ?id
                "flashPromotionCount": 0, // ? 删
                "flashPromotionId": 0, // ? 删
                "flashPromotionPrice": 0, // ? 删
                "flashPromotionSort": 0, // ? 删
                "giftPoint": that.formOf02.integral, // @ApiModelProperty(value = "赠送的积分")
                "giftGrowth": that.formOf02.grow, // @ApiModelProperty(value = "赠送的成长值") 
                "keywords": that.formOf02.keyword, // 商品关键字
                "lowStock": 0, // @ApiModelProperty(value = "库存预警值")
                "name": that.formOf01.name, // 商品名称
                "newStatus": that.formOf02.newProduct ? 1 : 0, // @ApiModelProperty(value = "新品状态:0->不是新品；1->新品")
                "note": that.formOf02.remarks, // 商品备注
                "originalPrice": that.formOf01.market_value, // @ApiModelProperty(value = "市场价")
                "pic": "", // 规格参数 图片 ？
                "memberPriceList": [ // @ApiModelProperty("商品会员价格设置")
                    // {
                    //     "memberLevelId": 1, 
                    //     "memberLevelName": "黄金会员"
                    // }, 
                    // {
                    //     "memberLevelId": 2, 
                    //     "memberLevelName": "白金会员"
                    // }, 
                    // {
                    //     "memberLevelId": 3, 
                    //     "memberLevelName": "钻石会员"
                    // }
                ], 
                "productFullReductionList": [ // @ApiModelProperty("商品满减价格设置")
                    // {
                    //     "fullPrice": 0, 
                    //     "reducePrice": 0
                    // }
                ], 
                "productLadderList": [ // @ApiModelProperty("商品阶梯价格设置")
                    // {
                    //     "count": 0, 
                    //     "discount": 0, 
                    //     "price": 0
                    // }
                ], 
                "previewStatus": that.formOf02.advanceNotice ? 1 : 0, // @ApiModelProperty(value = "是否为预告商品：0->不是；1->是")
                "price": that.formOf01.price, // 商品售价
                "productAttributeCategoryId": 1, // 属性分类id
                "productAttributeValueList": [ // @ApiModelProperty("商品参数及自定义规格属性")
                    // {
                    //     "productAttributeId": 24, 
                    //     "value": "21"
                    // }, 
                    // {
                    //     "productAttributeId": 25, 
                    //     "value": "春季"
                    // }, 
                    // {
                    //     "productAttributeId": 37, 
                    //     "value": "儿童"
                    // }, 
                    // {
                    //     "productAttributeId": 38, 
                    //     "value": "2018年春"
                    // }, 
                    // {
                    //     "productAttributeId": 39, 
                    //     "value": "中袖"
                    // }
                ], 
                "skuStockList": [ ], // @ApiModelProperty("商品的sku库存信息")
                "subjectProductRelationList": [ // @ApiModelProperty("专题和商品关系")
                    // { "subjectId": 1 }
                ],
                "prefrenceAreaProductRelationList": [ // @ApiModelProperty("优选专区和商品的关系")
                    // { "prefrenceAreaId": 1 }
                ],
                "productCategoryId": that.formOf01.productCategoryId[1], // 商品分类id
                "productCategoryName": productCategoryName, // @ApiModelProperty(value = "商品分类名称")
                "productSn": that.formOf01.productSn, // @ApiModelProperty(value = "货号")
                "promotionEndTime": "", // @ApiModelProperty(value = "促销结束时间")
                "promotionPerLimit": 0, // @ApiModelProperty(value = "活动限购数量")
                "promotionPrice": null, // @ApiModelProperty(value = "促销价格")
                "promotionStartTime": "", // @ApiModelProperty(value = "促销开始时间")
                "promotionType": 0, // @ApiModelProperty(value = "促销类型：0->没有促销使用原价;1->使用促销价；2->使用会员价；3->使用阶梯价格；4->使用满减价格；5->限时购")
                "publishStatus": that.formOf02.putOn ? 1 : 0, // 商品上架 @ApiModelProperty(value = "上架状态：0->下架；1->上架")
                "recommandStatus": that.formOf02.recommend ? 1 : 0, // @ApiModelProperty(value = "推荐状态；0->不推荐；1->推荐")
                "sale": 0, // @ApiModelProperty(value = "销量")
                "serviceIds": "1", // @ApiModelProperty(value = "以逗号分割的产品服务：1->无忧退货；2->快速退款；3->免费包邮")
                "sort": that.formOf01.sort, // @ApiModelProperty(value = "排序")
                "stock": that.formOf01.stock, // @ApiModelProperty(value = "库存")
                "subTitle": that.formOf01.subtitle, // @ApiModelProperty(value = "副标题")
                "unit": that.formOf01.company, // @ApiModelProperty(value = "单位")
                "usePointLimit": that.formOf02.buyLimit, // @ApiModelProperty(value = "限制使用的积分数")
                "verifyStatus": 0, // @ApiModelProperty(value = "审核状态：0->未审核；1->审核通过")
                "weight": that.formOf01.weight // @ApiModelProperty(value = "商品重量，默认为克")
            }
            that.$apihttp({
                url: process.env.core_url + '/sky/product/add',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.queryWay();
                        that.dialogVisible = false;
                        that.$message({
                            type: 'success',
                            message: '添加成功!'
                        });
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        editSure() {
            let that = this;
            let params = {
                id: that.editSaveRow.id,
                username: that.formOf01.username,
                icon: that.$refs.refUpload.download_url,
                nickName: that.formOf01.nickName,
                email: that.formOf01.email,
                password: that.formOf01.password,
                note: that.formOf01.note,
                status: that.formOf01.status ? 1 : 0
            }
            that.$apihttp({
                url: process.env.core_url + '/sky/product/update',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.queryWay();
                        that.dialogVisible = false;
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