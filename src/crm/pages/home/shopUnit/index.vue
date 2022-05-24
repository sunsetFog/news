<template>
  <section id="shopUnit">
    <section class="header-box">
      <el-button type="primary" @click="addWay('新建用户')">添加</el-button>
      <el-button type="primary" v-operation-auth="'user:add'">二哈</el-button>
    </section>
    <el-table :data="tableData" style="width: 100%" height="450">
      <el-table-column width="50" type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="商品名" min-width="120"></el-table-column>
      <el-table-column min-width="180">
        <template slot="header">商品图片</template>
        <template slot-scope="scope">
          <viewer :images="[scope.row.imgUrl]">
            <span v-for="(item,index) in [scope.row.imgUrl]" :key="index">
              <img style="width: 30px;height: 25px;margin-right:8px;" v-if="item" :src="item">
            </span>
          </viewer>
        </template>
      </el-table-column>

      <el-table-column width="120" fixed="right">
        <template slot="header">操作</template>
        <template slot-scope="scope">
          <el-button type="text" @click="editWay('编辑用户', scope.row)">编辑</el-button>
          <el-button type="text" @click="deleteWay(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination :pagination="pagination" @emitWay="getJson"></pagination>

    <el-dialog
      :title="dialog_title"
      :visible.sync="dialogVisible"
      width="500px"
      :close-on-click-modal="false"
    >
      <section class="mercury">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
          <el-form-item label="商品名称:" prop="tradeName">
            <el-input v-model="ruleForm.tradeName" placeholder="请输入商品名称"></el-input>
          </el-form-item>
          <el-form-item label="商品图片:">
            <upload1 ref="refUpload"></upload1>
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
import upload1 from '@/explore/pages/home/managementCenter/effect/upload/upload1.vue';
import pagination from '@/explore/components/pagination.vue';
export default {
    name: 'shopUnit',
    components: { upload1, pagination },
    data() {
        return {
            dialog_title: '新建用户',
            dialogVisible: false,
            ruleForm: {
                id: null,
                tradeName: '',
            },
            rules: {},
            tableData: [],
            pagination: {page: 1, pagesize: 10, total: 60},
        };
    },
    created() {
        this.getJson();
    },
    methods: {
        getJson() {
            let that = this;
            let params = {
                pageNum: 1,
                pageSize: 15,
            };
            that.$apihttp({
                url: process.env.core_url + '/sky/shop/list',
                method: 'post',
                data: params
            })
                .then(res => {
                    console.log('--login--', res);
                    if (res.code == '200') {
                        that.tableData = res.data.content;
                        for (let index = 0; index < that.tableData.length; index++) {
                            let item = that.tableData[index];
                            item.download_url = item.imgUrl;
                            item.imgUrl = process.env.core_url + '/sky' + item.imgUrl;
                        }
                    }
                })
                .catch(err => {
                    console.log('error', err);
                });
        },
        addWay(value) {
            this.dialog_title = value;
            this.dialogVisible = true;
            this.initForm();
        },
        initForm(row = {}) {
            let that = this;
            that.ruleForm.id = row.id || null;
            that.ruleForm.tradeName = row.name || '';
            that.$nextTick(function(){
                that.$refs.refUpload.download_url = row.download_url || '';
                that.$refs.refUpload.imageUrl = row.imgUrl || '';
            })
        },
        editWay(value, row) {
            this.dialog_title = value;
            this.dialogVisible = true;
            this.initForm(row);
        },
        deleteWay(row) {
            let that = this;
            that.$confirm('确定删除此商品吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                let params = {
                    id: row.id
                }
                that.$apihttp({
                    url: process.env.core_url + '/sky/shop/delete',
                    method: 'get',
                    params: params
                })
                    .then(res => {
                        console.log('--login--', res);
                        if (res.code == '200') {
                            that.getJson();
                            that.$message({
                                type: 'success',
                                message: '删除成功!'
                            });
                        }
                    })
                    .catch(err => {
                        console.log('error', err);
                    });
                
            }).catch(() => {
                that.$message({
                    type: 'info',
                    message: '已取消删除'
                });          
            });

        },
        cancelWay() {
            this.dialogVisible = false;
        },
        sureWay() {
            let that = this;
            if(that.dialog_title == "新建用户") {
                let params = {
                    name: that.ruleForm.tradeName,
                    // imgUrl: "/img/avatorImages/1653064967678apply@2x.png",
                    imgUrl: that.$refs.refUpload.download_url
                };
                that.$apihttp({
                    url: process.env.core_url + '/sky/shop/add',
                    method: 'post',
                    data: params
                })
                    .then(res => {
                        console.log('--login--999', res);
                        if (res.code == '200') {
                            that.getJson();
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

            } else if(that.dialog_title == "编辑用户") {
                let params = {
                    id: that.ruleForm.id,
                    name: that.ruleForm.tradeName,
                    // imgUrl: "/img/avatorImages/1653064967678apply@2x.png",
                    imgUrl: that.$refs.refUpload.download_url
                };
                that.$apihttp({
                    url: process.env.core_url + '/sky/shop/update',
                    method: 'post',
                    data: params
                })
                    .then(res => {
                        console.log('--login--000', res);
                        if (res.code == '200') {
                            that.getJson();
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
        },
    },
};
</script>

<style lang="less" scoped>
#shopUnit {
    .header-box {
        padding: 0 0 8px 0;
        box-sizing: border-box;
    }
}
</style>

