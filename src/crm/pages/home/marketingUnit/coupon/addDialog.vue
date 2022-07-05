<template>
    <section id="addDialog">
        <el-dialog
            :title="dialog_title"
            :visible.sync="dialogVisible"
            width="800px"
            :close-on-click-modal="false"
            >
            <section class="mercury">
                <el-form :model="withForm" :rules="rulesCheck" ref="withForm" label-width="100px">
                    <el-form-item label="优惠券类型:" prop="type">
                        <el-select v-model="withForm.type" placeholder="请选择">
                            <el-option
                            v-for="item in typeOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="优惠券名称:" prop="name">
                        <el-input v-model="withForm.name"></el-input>
                    </el-form-item>
                    <el-form-item label="适用平台:" prop="platform">
                        <el-select v-model="withForm.platform" placeholder="请选择">
                            <el-option
                            v-for="item in platformOptions"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="总发行量:" prop="publishCount">
                        <el-input v-model.number="withForm.publishCount" placeholder="只能输入正整数"></el-input>
                    </el-form-item>
                    <el-form-item label="面额:" prop="amount">
                        <el-input v-model.number="withForm.amount" placeholder="面值只能是数值，限2位小数">
                            <template slot="append">元</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="每人限领:">
                        <el-input v-model="withForm.perLimit" placeholder="只能输入正整数">
                            <template slot="append">张</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="使用门槛：" prop="minPoint">
                        <el-input v-model.number="withForm.minPoint" placeholder="只能输入正整数">
                        <template slot="prepend">满</template>
                        <template slot="append">元可用</template>
                        </el-input>
                    </el-form-item>
                    <el-form-item label="领取日期：" prop="enableTime">
                        <el-date-picker type="date" placeholder="选择日期" v-model="withForm.enableTime"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="有效期：">
                        <el-date-picker type="date" placeholder="选择日期" v-model="withForm.startTime" style="width: 150px"></el-date-picker>
                        <span style="margin-left: 20px;margin-right: 20px">至</span>
                        <el-date-picker type="date" placeholder="选择日期" v-model="withForm.endTime" style="width: 150px"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="可使用商品：">
                        <el-radio-group v-model="withForm.useType">
                            <el-radio-button :label="0">全场通用</el-radio-button>
                            <el-radio-button :label="1">指定分类</el-radio-button>
                            <el-radio-button :label="2">指定商品</el-radio-button>
                        </el-radio-group>
                    </el-form-item>


                    <el-form-item v-show="withForm.useType===1">
                        <el-cascader
                            v-model="productCategoryId"
                            :options="product_category_list"
                            :props="defaultProps">
                        </el-cascader>

                        <!-- <el-button @click="handleAddProductCategoryRelation()">添加</el-button>
                        <el-table ref="productCateRelationTable"
                                :data="withForm.productCategoryRelationList"
                                style="width: 100%;margin-top: 20px"
                                border>
                        <el-table-column label="分类名称" align="center">
                            <template slot-scope="scope">{{scope.row.parentCategoryName}}>{{scope.row.productCategoryName}}</template>
                        </el-table-column>
                        <el-table-column label="操作" align="center" width="100">
                            <template slot-scope="scope">
                            <el-button size="mini"
                                        type="text"
                                        @click="handleDeleteProductCateRelation(scope.$index, scope.row)">删除
                            </el-button>
                            </template>
                        </el-table-column>
                        </el-table> -->


                    </el-form-item>
                    <el-form-item v-show="withForm.useType===2">
                        8888
                        <!-- <el-select
                        v-model="selectProduct"
                        filterable
                        remote
                        reserve-keyword
                        placeholder="商品名称/商品货号"
                        :remote-method="searchProductMethod"
                        :loading="selectProductLoading">
                        <el-option
                            v-for="item in selectProductOptions"
                            :key="item.productId"
                            :label="item.productName"
                            :value="item.productId">
                            <span style="float: left">{{ item.productName }}</span>
                            <span style="float: right; color: #8492a6; font-size: 13px">NO.{{ item.productSn }}</span>
                        </el-option>
                        </el-select> -->
                        <!-- <el-button @click="handleAddProductRelation()">添加</el-button>
                        <el-table ref="productRelationTable"
                                :data="withForm.productRelationList"
                                style="width: 100%;margin-top: 20px"
                                border>
                        <el-table-column label="商品名称" align="center">
                            <template slot-scope="scope">{{scope.row.productName}}</template>
                        </el-table-column>
                        <el-table-column label="货号" align="center"  width="120" >
                            <template slot-scope="scope">NO.{{scope.row.productSn}}</template>
                        </el-table-column>
                        <el-table-column label="操作" align="center" width="100">
                            <template slot-scope="scope">
                            <el-button size="mini"
                                        type="text"
                                        @click="handleDeleteProductRelation(scope.$index, scope.row)">删除
                            </el-button>
                            </template>
                        </el-table-column>
                        </el-table> -->

                    </el-form-item>


                    <el-form-item label="备注:" prop="note">
                        <el-input type="textarea" v-model="withForm.note" maxlength="100" show-word-limit></el-input>
                    </el-form-item>
                </el-form>
            </section>
            <section slot="footer" class="dialog-footer">
                <el-button @click="cancelWay">取 消</el-button>
                <el-button type="primary" @click="sureWay">确 定</el-button>
            </section>
        </el-dialog>
    </section>
</template>

<script>
export default {
    name: "addDialog",
    data() {
        return {
            dialog_title: '添加优惠券',
            dialogVisible: false,
            // ----------
            withForm: {
                type: 0,
                name: '',
                platform: 0,
                publishCount: 0,
                amount: 0,
                perLimit: 0,
                minPoint: 0,
                enableTime: '',
                startTime: '',
                endTime: '',
                useType: 0,

                note: ''
            },
            rulesCheck: {

            },
            save_row: {},
            typeOptions: [
                {
                    label: '全场赠券',
                    value: 0
                },
                {
                    label: '会员赠券',
                    value: 1
                },
                {
                    label: '购物赠券',
                    value: 2
                },
                {
                    label: '注册赠券',
                    value: 3
                }
            ],
            platformOptions: [
                {
                    label: '全平台',
                    value: 0
                },
                {
                    label: '移动平台',
                    value: 1
                },
                {
                    label: 'PC平台',
                    value: 2
                }
            ],
            // ----------------
            productCategoryId: '',
            product_category_list: [],
            defaultProps: {// 替换结构字段，不用处理数据
                children: 'children',
                value: 'id',
                label: 'name'
            },
            // ----------------
        }
    },
    created() {
        this.categoryWay();
    },
    methods: {
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
        initForm(row = {}) {
            this.dialog_title = JSON.stringify(row) == "{}" ? "添加优惠券" : "编辑优惠券";
            this.dialogVisible = true;
            this.withForm = {
                type: row.type || 0,
                name: row.name || '',
                platform: row.platform || 0,
                publishCount: row.publishCount || 0,
                amount: row.amount || 0,
                perLimit: row.perLimit || 0,
                minPoint: row.minPoint || 0,
                enableTime: row.enableTime || '',
                startTime: row.startTime || '',
                endTime: row.endTime || 0,
                useType: row.useType || 0,
                note: row.note || ''
            }
            this.save_row = row
        },
        cancelWay() {
            this.dialogVisible = false;
        },
        sureWay() {
            if (this.dialog_title == '添加优惠券') {
                this.addSure();
            } else if (this.dialog_title == '编辑优惠券') {
                this.editSure();
            }
        },
        addSure() {
            let that = this;
            let params = that.withForm;
            that.$apihttp({
                url: process.env.core_url + '/sky/coupon/add',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.$emit("sureWay");
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
                id: that.save_row.id,
                ...that.withForm
            }
            that.$apihttp({
                url: process.env.core_url + '/sky/coupon/update',
                method: 'post',
                data: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.$emit("sureWay");
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
</script>

<style lang="less" scoped>
#addDialog {

}
</style>
