<template>
    <section id="customer" ref="refUnit">
        <searchDesign @queryWay="queryWay" ref="refHeader" @addWay="addWay" :chongzhi="true" @resetWay="resetWay">
            <el-form ref="form" :model="queryData" label-width="100px">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="商品名称：">
                            <el-input v-model="queryData.keyword" placeholder="请输入商品名称"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="商品货号：">
                            <el-input v-model="queryData.productSn" placeholder="请输入商品货号"></el-input>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="商品分类：">
                            <el-cascader
                            v-model="queryData.productCategoryId"
                            :options="product_category_list"
                            :props="defaultProps">
                            </el-cascader>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="商品品牌：">
                            <el-select v-model="queryData.brandId" placeholder="请选择">
                                <el-option
                                v-for="item in brand_list"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item label="上架状态：">
                            <el-select v-model="queryData.publishStatus" placeholder="请选择">
                                <el-option
                                v-for="item in publish_list"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item label="审核状态：">
                            <el-select v-model="queryData.verifyStatus" placeholder="请选择">
                                <el-option
                                v-for="item in verify_list"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-row>
            </el-form>
        </searchDesign>
        <!-- 
            1.table的滚动条是height值影响的
            2.要是table在mouted生命周期不重新渲染了，强制刷新渲染也没用，那么用v-if="tableHeight != 0"控制渲染延后
        -->
        <el-table
            :data="tableData"
            border
            style="width: 100%"
            v-if="tableHeight != 0"
            :height="tableHeight"
            ref="refTable"
        >
            <el-table-column width="50" type="index" label="序号"></el-table-column>
            <el-table-column min-width="60">
                <template slot="header">商品图片</template>
                <template slot-scope="scope">
                    <previewPictures :photoList="[scope.row.pic]"></previewPictures>
                </template>
            </el-table-column>
            <el-table-column prop="name" label="商品名称" min-width="100"></el-table-column>
            <el-table-column min-width="100">
                <template slot="header">价格/货号</template>
                <template slot-scope="scope">
                    <div>价格: {{scope.row.price}}</div>
                    <div>货号: {{scope.row.productSn}}</div>
                </template>
            </el-table-column>
            <el-table-column min-width="80">
                <template slot="header">标签</template>
                <template slot-scope="scope">
                    <div>上架: <el-switch v-model="scope.row.status" @change="(val)=>{switchChange(val, scope.row)}"></el-switch></div>
                    <div>新品: <el-switch v-model="scope.row.status" @change="(val)=>{switchChange(val, scope.row)}"></el-switch></div>
                    <div>推荐: <el-switch v-model="scope.row.status" @change="(val)=>{switchChange(val, scope.row)}"></el-switch></div>
                </template>
            </el-table-column>
            <el-table-column prop="sort" label="排序" min-width="60"></el-table-column>
            <el-table-column min-width="60">
                <template slot="header">SKU库存</template>
                <template slot-scope="scope">
                    <i class="el-icon-edit"></i>
                </template>
            </el-table-column>
            <el-table-column prop="sale" label="销量" min-width="60"></el-table-column>
            <el-table-column min-width="80">
                <template slot="header">审核状态</template>
                <template slot-scope="scope">
                    <div>未审核</div>
                    <div>审核详情</div>
                </template>
            </el-table-column>

            <el-table-column width="180" fixed="right">
                <template slot="header">操作</template>
                <template slot-scope="scope">
                    <el-button type="text" @click="editWay(scope.row)">编辑</el-button>
                    <el-button type="text" @click="deleteWay(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination :pagingObj="pagingObj" @emitWay="queryWay"></pagination>



        <el-dialog
            :title="dialog_title"
            :visible.sync="dialogVisible"
            width="800px"
            :close-on-click-modal="false"
            >
            <section class="mercury">
                <el-steps :active="guide_active" finish-status="success" style="margin-bottom: 25px;">
                    <el-step title="填写商品信息"></el-step>
                    <el-step title="填写商品促销"></el-step>
                    <el-step title="填写商品属性"></el-step>
                    <el-step title="选择商品关联"></el-step>
                </el-steps>

                <el-form v-if="guide_active == 0" :model="formOf01" :rules="rulesCheck" ref="formOf01" label-width="100px">
                    <el-form-item label="商品分类:" prop="productCategoryId">
                        <el-cascader
                        v-model="formOf01.productCategoryId"
                        :options="product_category_list"
                        :props="defaultProps">
                        </el-cascader>
                    </el-form-item>
                    <el-form-item label="商品名称:" prop="name">
                        <el-input v-model="formOf01.name" placeholder="请输入商品名称"></el-input>
                    </el-form-item>
                    <el-form-item label="副标题:" prop="subtitle">
                        <el-input v-model="formOf01.subtitle" placeholder="请输入副标题"></el-input>
                    </el-form-item>
                    <el-form-item label="商品品牌:" prop="brandId">
                        <el-select v-model="formOf01.brandId" placeholder="请选择">
                            <el-option
                            v-for="item in brand_list"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品介绍:" prop="introduce">
                        <el-input type="textarea" v-model="formOf01.introduce" maxlength="100" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item label="商品货号:" prop="productSn">
                        <el-input v-model="formOf01.productSn" placeholder="请输入商品货号"></el-input>
                    </el-form-item>
                    <el-form-item label="商品售价:" prop="price">
                        <el-input v-model="formOf01.price" placeholder="请输入商品售价"></el-input>
                    </el-form-item>
                    <el-form-item label="市场价:" prop="market_value">
                        <el-input v-model="formOf01.market_value" placeholder="请输入市场价"></el-input>
                    </el-form-item>
                    <el-form-item label="商品库存:" prop="stock">
                        <el-input v-model="formOf01.stock" placeholder="请输入商品库存"></el-input>
                    </el-form-item>
                    <el-form-item label="计算单位:" prop="company">
                        <el-input v-model="formOf01.company" placeholder="请输入计算单位"></el-input>
                    </el-form-item>
                    <el-form-item label="商品重量:" prop="weight">
                        <el-input v-model="formOf01.weight" placeholder="请输入商品重量">
                            <div slot="suffix">克</div>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="排序:" prop="sort">
                        <el-input v-model="formOf01.sort" placeholder="请输入排序"></el-input>
                    </el-form-item>
                </el-form>


                <el-form v-if="guide_active == 1" :model="formOf02" :rules="rulesCheck" ref="formOf02" label-width="100px">
                    <el-form-item label="赠送积分:" prop="integral">
                        <el-input v-model="formOf02.integral" placeholder="请输入赠送积分"></el-input>
                    </el-form-item>
                    <el-form-item label="赠送成长值:" prop="grow">
                        <el-input v-model="formOf02.grow" placeholder="请输入赠送成长值"></el-input>
                    </el-form-item>
                    <el-form-item label="积分购买限制:" prop="buyLimit">
                        <el-input v-model="formOf02.buyLimit" placeholder="请输入积分购买限制"></el-input>
                    </el-form-item>
                    <el-form-item label="预告商品:" prop="advanceNotice">
                        <el-switch v-model="formOf02.advanceNotice"></el-switch>
                    </el-form-item>
                    <el-form-item label="商品上架:" prop="putOn">
                        <el-switch v-model="formOf02.putOn"></el-switch>
                    </el-form-item>
                    <el-form-item label="商品推荐:">
                        新品&nbsp;&nbsp;<el-switch v-model="formOf02.newProduct"></el-switch>&nbsp;&nbsp;&nbsp;
                        推荐&nbsp;&nbsp;<el-switch v-model="formOf02.recommend"></el-switch>
                    </el-form-item>
                    <el-form-item label="服务保证:" prop="price">
                        <el-checkbox-group v-model="formOf02.serviceList">
                            <el-checkbox label="无忧退货"></el-checkbox>
                            <el-checkbox label="快速退款"></el-checkbox>
                            <el-checkbox label="免费包邮"></el-checkbox>      
                        </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="详细页标题:" prop="detailTitle">
                        <el-input v-model="formOf02.detailTitle" placeholder="请输入详细页标题"></el-input>
                    </el-form-item>
                    <el-form-item label="详细页描述:" prop="description">
                        <el-input v-model="formOf02.description" placeholder="请输入详细页描述"></el-input>
                    </el-form-item>
                    <el-form-item label="商品关键字:" prop="keyword">
                        <el-input v-model="formOf02.keyword" placeholder="请输入商品关键字"></el-input>
                    </el-form-item>
                    <el-form-item label="商品备注:" prop="remarks">
                        <el-input type="textarea" v-model="formOf02.remarks" maxlength="100" show-word-limit></el-input>
                    </el-form-item>
                    <el-form-item label="选择优惠方式:">
                        <el-tabs type="border-card">
                            <el-tab-pane label="无优惠">无优惠</el-tab-pane>
                            <el-tab-pane label="特惠促销">特惠促销</el-tab-pane>
                            <el-tab-pane label="会员价格">会员价格</el-tab-pane>
                            <el-tab-pane label="阶梯价格">阶梯价格</el-tab-pane>
                            <el-tab-pane label="满减价格">满减价格</el-tab-pane>
                        </el-tabs>
                    </el-form-item>
                </el-form>


                <el-form v-show="guide_active == 2" :model="formOf03" :rules="rulesCheck" ref="formOf03" label-width="100px">
                    <el-form-item label="属性类型:" prop="productAttributeCategoryId">
                        <el-select v-model="formOf03.productAttributeCategoryId" placeholder="请选择">
                            <el-option
                            v-for="item in attribute_type_list"
                            :key="item.id"
                            :label="item.name"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="商品规格:"></el-form-item>
                    <el-form-item label="商品参数:"></el-form-item>
                    <el-form-item label="商品相册:">
                        <upload1 ref="refUpload"></upload1>
                    </el-form-item>
                    <el-form-item label="规格参数:">
                        <el-tabs type="border-card">
                            <el-tab-pane label="电脑端详情">电脑端详情</el-tab-pane>
                            <el-tab-pane label="移动端详情">移动端详情</el-tab-pane>
                        </el-tabs>
                    </el-form-item>
                </el-form>


                <el-form v-if="guide_active == 3" :model="formOf04" :rules="rulesCheck" ref="formOf04" label-width="100px">
                    <el-form-item label="关联专题:">
                        <el-transfer
                            filterable
                            :filter-method="filterMethod1"
                            filter-placeholder="请输入"
                            v-model="subject_value"
                            :data="subject_list"
                            :titles="['待选择', '已选择']"
                            :props="asProps1">
                        </el-transfer>
                    </el-form-item>
                    <el-form-item label="关联优选:">
                        <el-transfer
                            filterable
                            :filter-method="filterMethod2"
                            filter-placeholder="请输入"
                            v-model="optimization_value"
                            :data="optimization_list"
                            :titles="['待选择', '已选择']"
                            :props="asProps2">
                        </el-transfer>
                    </el-form-item>
                </el-form>



            </section>
            <section slot="footer" class="dialog-footer">
                <el-button @click="cancelWay">取 消</el-button>
                <el-button type="primary" @click="backWay" v-if="guide_active != 0">上一步</el-button>
                <el-button type="primary" @click="nextWay"  v-if="guide_active != 3">下一步</el-button>
                <el-button type="primary" @click="sureWay">确 定</el-button>
            </section>
        </el-dialog>

    </section>
</template>

<script>
import addEdit from "./addEdit"
export default {
    name: "customer",
    mixins: [addEdit],
    data() {
        return {
            queryData: {
                keyword: '',
                productSn: '',
                productCategoryId: [],
                brandId: '',
                publishStatus: '',
                verifyStatus: ''
            },
            product_category_list: [],
            defaultProps: {// 替换结构字段，不用处理数据
                children: 'children',
                value: 'id',
                label: 'name'
            },
            brand_list: [],
            publish_list: [
                { value: 1, label: '上架' },
                { value: 0, label: '下架'}
            ],
            verify_list: [
                { value: 1, label: '审核通过' },
                { value: 0, label: '未审核' }
            ],
            // -----------------
            tableData: [],
            tableHeight: 0,
            // -----------------
            pagingObj: { pageNum: 1, pageSize: 10, total: 0 },
        }
    },
    created() {
        this.queryWay();
        this.categoryWay();
        this.brandWay();
    },
    mounted() {
        console.log('--refUnit-', this.$refs.refUnit.offsetHeight);
        console.log('--refHeader-$el指向模板根标签-', this.$refs.refHeader.$el.offsetHeight);
        this.tableHeight =
            this.$refs.refUnit.offsetHeight -
            (this.$refs.refHeader.$el.offsetHeight + 50 + 1);
        console.log('--tableHeight--', this.tableHeight);
    },
    methods: {
        resetWay() {
            this.queryData.keyword = ''
            this.queryData.productSn = ''
            this.queryData.productCategoryId = []
            this.queryData.brandId = ''
            this.queryData.publishStatus = ''
            this.queryData.verifyStatus = ''
        },
        // 商品分类
        categoryWay() {
            let that = this;
            let params = {
            };
            that.$apihttp({
                url: process.env.core_url + '/sky/productCategory/treeList',
                method: 'get',
                params: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.product_category_list = res.data;
                        for (let i = 0; i < that.product_category_list.length; i++) {
                            let item = that.product_category_list[i];
                            for (let y = 0; y < item.children.length; y++) {
                                let element = item.children[y];
                                delete element["children"];
                            }
                        }
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        // 商品品牌
        brandWay() {
            let that = this;
            let params = {
                keyword: '',
                pageNum: 1,
                pageSize: 9999
            };
            that.$apihttp({
                url: process.env.core_url + '/sky/brand/list',
                method: 'get',
                params: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.brand_list = res.data.content;
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        queryWay() {
            console.log("---搜索---");
            let that = this;
            let params = {
                keyword: that.queryData.keyword,
                productSn: that.queryData.productSn,
                productCategoryId: that.queryData.productCategoryId.length == 0 ? '' : that.queryData.productCategoryId[0],
                brandId: that.queryData.brandId,
                publishStatus: that.queryData.publishStatus,
                verifyStatus: that.queryData.verifyStatus,
                pageNum: that.pagingObj.pageNum,
                pageSize: that.pagingObj.pageSize
            };
            that.$apihttp({
                url: process.env.core_url + '/sky/product/list',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.pagingObj.total = res.data.totalSize;
                        that.tableData = res.data.content;
                        for (let index = 0; index < that.tableData.length; index++) {
                            let item = that.tableData[index];
                            item.download_url = item.icon;
                            item.icon = process.env.core_url + '/sky' + item.icon;
                            if (item.status == 1) {
                                item.status = true
                            } else {
                                item.status = false
                            }
                        }
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        switchChange(value, row) {
            console.log("--switchChange--", value, row);
            let that = this;
            that.$confirm('是否要修改该状态?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    let params = {
                        id: row.id,
                        status: value ? 1 : 0
                    };
                    that.$apihttp({
                        url: process.env.core_url + '/sky/admin/update',
                        method: 'post',
                        data: params
                    })
                        .then(res => {
                            if (res.code == '200') {
                                that.queryWay();
                                that.$message({
                                    type: 'success',
                                    message: '修改成功!'
                                });
                            }
                        })
                        .catch(err => {
                            console.log('error', err);
                        });
                })
                .catch(() => {
                    that.queryWay();
                    that.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
        },
        deleteWay(row) {
            let that = this;
            that.$confirm('是否要进行删除操作?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    let params = {
                        ids: row.id
                    };
                    that.$apihttp({
                        url: process.env.core_url + '/sky/product/deleteStatus',
                        method: 'get',
                        params: params
                    })
                        .then(res => {
                            if (res.code == '200') {
                                that.queryWay();
                                that.$message({
                                    type: 'success',
                                    message: '删除成功!'
                                });
                            }
                        })
                        .catch(err => {
                            console.log('error', err);
                        });
                })
                .catch(() => {
                    that.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
        }
    }
}
</script>

<style lang="less" scoped>
#customer {
    height: 100%;
}
</style>

