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
        >
            <el-table-column width="50" type="index" label="序号"></el-table-column>
            <el-table-column prop="title" label="菜单名称" min-width="80"></el-table-column>
            <el-table-column prop="levelName" label="菜单级数" min-width="80"></el-table-column>
            <el-table-column prop="name" label="前端名称" min-width="100"></el-table-column>
            <el-table-column min-width="80">
                <template slot="header">前端图标</template>
                <template slot-scope="scope">
                    <!-- <i :class="scope.row.icon"></i> -->
                </template>
            </el-table-column>
            <el-table-column min-width="80">
                <template slot="header">是否启用</template>
                <template slot-scope="scope">
                    <el-switch v-model="scope.row.status" @change="(val)=>{switchChange(val, scope.row)}"></el-switch>
                </template>
            </el-table-column>

            <el-table-column width="180" fixed="right">
                <template slot="header">操作</template>
                <template slot-scope="scope">
                    <el-button type="text" @click="levelWay(scope.row.id)" v-if="queryData.parentId == 0">设置下级</el-button>
                    <el-button type="text" @click="levelWay(0)" v-else>返回上级</el-button>
                    <el-button type="text" @click="editWay(scope.row)">编辑</el-button>
                    <el-button type="text" @click="deleteWay(scope.row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <pagination :pagingObj="pagingObj" @emitWay="queryWay"></pagination>



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
                        <el-select v-model="addAndEditForm.parentId" placeholder="请选择">
                            <el-option
                            v-for="item in level_list"
                            :key="item.id"
                            :label="item.title"
                            :value="item.id">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="前端名称:" prop="name">
                        <el-input v-model="addAndEditForm.name" placeholder="请输入前端名称"></el-input>
                    </el-form-item>
                    <el-form-item label="前端图标:" prop="icon">
                        <el-input v-model="addAndEditForm.icon" placeholder="请输入前端图标"></el-input>
                    </el-form-item>
                    <el-form-item label="是否显示:" prop="status">
                        <el-switch v-model="addAndEditForm.status"></el-switch>
                    </el-form-item>
                    <el-form-item label="排序:" prop="sort">
                        <el-input v-model="addAndEditForm.sort" placeholder=""></el-input>
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
                parentId: 0
            },
            // -----------------
            tableData: [],
            tableHeight: 0,
            saveData: [],
            // -----------------
            pagingObj: { pageNum: 1, pageSize: 10, total: 0 },
        }
    },
    created() {
        this.queryWay();
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
        queryWay() {
            console.log("---搜索---");
            let that = this;
            let params = {
                parentId: that.queryData.parentId,
                pageNum: that.pagingObj.pageNum,
                pageSize: that.pagingObj.pageSize
            };
            that.$apihttp({
                url: process.env.core_url + '/sky/menu/list',
                method: 'post',
                params: params
            })
                .then(res => {
                    if (res.code == '200') {
                        that.pagingObj.total = res.data.totalSize;
                        if(that.queryData.parentId == 0) {
                            that.saveData = res.data.content;
                        }
                        that.tableData = res.data.content;
                        for (let index = 0; index < that.tableData.length; index++) {
                            let item = that.tableData[index];
                            if(item.level == 0) {
                                item.levelName = "一级"
                            } else if (item.level == 1) {
                                item.levelName = "二级"
                            }
                            if (item.hidden == 0) {
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
                        url: process.env.core_url + '/sky/menu/update',
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
            that.$confirm('是否要删除该菜单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    let params = {

                    };
                    that.$apihttp({
                        url: process.env.core_url + '/sky/menu/delete/' + row.id,
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
        },
        levelWay(id) {
            this.queryData.parentId = id;
            this.queryWay();
        }
    }
}
</script>

<style lang="less" scoped>
#menuUnit {
    height: 100%;
}
</style>

