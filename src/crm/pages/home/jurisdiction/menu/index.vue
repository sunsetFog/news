<template>
    <section id="menuUnit" ref="refUnit">
        <searchDesign ref="refHeader" @addWay="addWay" :sousuo="false"></searchDesign>

        <el-table
            :data="tableData"
            border
            style="width: 100%"
            v-if="tableHeight != 0"
            :height="tableHeight"
            ref="refTable"
            row-key="id"
            :tree-props="{children: 'children', hasChildren: 'hasChildren'}"
        >
            <el-table-column width="50" type="index" label="序号"></el-table-column>
            <el-table-column prop="title" label="菜单名称" min-width="120"></el-table-column>
            <!-- <el-table-column prop="path" label="组件路径" min-width="200"></el-table-column> -->
            <el-table-column prop="levelName" label="菜单级数" min-width="80"></el-table-column>
            <el-table-column prop="name" label="路由名称" min-width="80"></el-table-column>
            <el-table-column min-width="80">
                <template slot="header">图标</template>
                <template slot-scope="scope">
                    <!-- <i :class="scope.row.icon"></i> -->
                </template>
            </el-table-column>
            <el-table-column min-width="80">
                <template slot="header">菜单隐藏</template>
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.hidden" :active-value="1" :inactive-value="0" @change="(val)=>{switchChange(val, scope.row, 'hidden')}"></el-switch>
                </template>
            </el-table-column>
            <el-table-column min-width="80">
                <template slot="header">是否缓存</template>
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.cache" :active-value="1" :inactive-value="0" @change="(val)=>{switchChange(val, scope.row, 'cache')}"></el-switch>
                </template>
            </el-table-column>

            <el-table-column width="100" fixed="right">
                <template slot="header">操作</template>
                <template slot-scope="scope">
                    <el-button type="text" @click="editWay(scope.row)">编辑</el-button>
                    <el-button type="text" @click="deleteWay(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- <pagination :pagingObj="pagingObj" @emitWay="menuWay"></pagination> -->



        <el-dialog
            :title="dialog_title"
            :visible.sync="dialogVisible"
            width="500px"
            :close-on-click-modal="false"
            >
            <section class="mercury">
                <el-form :model="addAndEditForm" :rules="rulesCheck" ref="addAndEditForm" label-width="100px">
                    <el-form-item label="菜单名称:" prop="title">
                        <el-input v-model="addAndEditForm.title" placeholder="请输入菜单名称"></el-input>
                    </el-form-item>
                    <el-form-item label="上级菜单:">
                        <el-cascader
                            v-model="addAndEditForm.parentId"
                            :options="level_list"
                            :props="defaultProps">
                            </el-cascader>
                    </el-form-item>
                    <el-form-item label="路由名称:" prop="name">
                        <el-input v-model="addAndEditForm.name" placeholder="请输入路由名称"></el-input>
                    </el-form-item>
                    <el-form-item label="图标:" prop="icon">
                        <el-input v-model="addAndEditForm.icon" placeholder="请输入图标"></el-input>
                    </el-form-item>
                    <el-form-item label="路由路径:" prop="path">
                        <el-input v-model="addAndEditForm.path" placeholder="请输入路由路径"></el-input>
                    </el-form-item>
                    <el-form-item label="菜单隐藏:" prop="hidden">
                        <el-switch v-model="addAndEditForm.hidden" :active-value="1" :inactive-value="0"></el-switch>
                    </el-form-item>
                    <el-form-item label="是否缓存:" prop="cache">
                        <el-switch v-model="addAndEditForm.cache" :active-value="1" :inactive-value="0"></el-switch>
                    </el-form-item>
                    <el-form-item label="排序:" prop="sort">
                        <el-input v-model.number="addAndEditForm.sort" type="number" placeholder=""></el-input>
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
import addEdit from "./addEdit"
export default {
    name: "menuUnit",
    mixins: [addEdit],
    data() {
        return {
            queryData: {

            },
            // -----------------
            tableData: [],
            tableHeight: 0,
            // -----------------
            pagingObj: { pageNum: 1, pageSize: 10, total: 0 },
            id_list: []
        }
    },
    created() {
        this.menuWay();
    },
    mounted() {
        console.log('--refUnit-', this.$refs.refUnit.offsetHeight);
        console.log('--refHeader-$el指向模板根标签-', this.$refs.refHeader.$el.offsetHeight);
        this.tableHeight =
            this.$refs.refUnit.offsetHeight -
            (this.$refs.refHeader.$el.offsetHeight + 1);
        console.log('--tableHeight--', this.tableHeight);
    },
    methods: {
        menuWay() {
            let that = this;
            let params = {

            };
            that.$apihttp({
                url: process.env.core_url + '/sky/menu/treeList',
                method: 'get',
                params: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.tableData = res.data;
                        that.recursion(that.tableData);
                        that.level_list = JSON.parse(JSON.stringify(that.tableData));
                        // console.log("--level_list--", that.level_list);
                        
                        for (let i = 0; i < that.level_list.length; i++) {
                            let item = that.level_list[i];
                            delete item["children"];
                        }
                        that.level_list.unshift({ id: 0, title: "无上级菜单" });
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        recursion(arr) {
            arr = arr || []; //退出递归1. 空数组不会遍历，就不会调用自己了
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                if(item.level == 0) {
                    item.levelName = "一级"
                } else if (item.level == 1) {
                    item.levelName = "二级"
                }
                this.recursion(item.children);
            }
        },
        switchChange(value, row, key) {
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
                        parentId: row.parentId,
                        [key]: value
                    };
                    that.$apihttp({
                        url: process.env.core_url + '/sky/menu/update',
                        method: 'post',
                        data: params
                    })
                        .then(res => {
                            if (res.code == '200') {
                                that.menuWay();
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
                    that.menuWay();
                    that.$message({
                        type: 'info',
                        message: '已取消删除'
                    });
                });
        },
        idWay1(arr, id) {
            arr = arr || []; //退出递归1. 空数组不会遍历，就不会调用自己了
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                if(item.id == id) {
                    this.idWay2(item.children);
                    break;
                }
                this.idWay1(item.children, id);
            }
        },
        idWay2(arr) {
            arr = arr || []; //退出递归1. 空数组不会遍历，就不会调用自己了
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                this.id_list.push(item.id);
                this.idWay2(item.children);
            }
        },
        deleteWay(row) {
            let that = this;
            that.$confirm('是否要删除该菜单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    that.id_list = [row.id]
                    that.idWay1(that.tableData, row.id);
                    let params = {
                        ids: that.id_list.join(",")
                    };
                    that.$apihttp({
                        url: process.env.core_url + '/sky/menu/delete',
                        method: 'get',
                        params: params
                    })
                        .then(res => {
                            if (res.code == '200') {
                                that.menuWay();
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
#menuUnit {
    height: 100%;
}
</style>

