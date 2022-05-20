<template>
  <section id="userAccount">
    <section class="header-box">
        <el-button type="primary" @click="addWay()">添加</el-button>
        <el-button type="primary" v-operation-auth="'user:add'">二哈</el-button>
    </section>
    <el-table :data="tableData" style="width: 100%" height="250">
      <el-table-column width="50" type="index" label="序号"></el-table-column>
      <el-table-column prop="name" label="昵称" width="120"></el-table-column>
      <el-table-column prop="province" label="用户名" width="120"></el-table-column>
      <el-table-column prop="city" label="角色" width="120"></el-table-column>
      <el-table-column prop="address" label="创建时间" width="300"></el-table-column>
      <el-table-column prop="zip" label="最近修改时间" width="120"></el-table-column>

      <el-table-column width="120" fixed="right">
        <template slot="header">操作</template>
        <template slot-scope="scope">
          <el-button type="text" @click="editWay('编辑', scope.row)">编辑</el-button>
          <el-button type="text" @click="deleteWay(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>


    <el-dialog
      :title="dialog_title"
      :visible.sync="dialogVisible"
      width="500px"
      :close-on-click-modal="false"
    >
        <section class="mercury">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px">
            <el-form-item label="用户名:" prop="rechargeAmount">
                <el-input v-model="ruleForm.rechargeAmount" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item label="密码:" prop="rechargeAmount">
                <el-input v-model="ruleForm.rechargeAmount" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item label="角色:" prop="rechargeAmount">
                <el-input v-model="ruleForm.rechargeAmount" placeholder="请输入角色"></el-input>
            </el-form-item>
            <el-form-item label="昵称:" prop="rechargeAmount">
                <el-input v-model="ruleForm.rechargeAmount" placeholder="请输入昵称"></el-input>
            </el-form-item>
        </el-form>
        </section>
        <section slot="footer" class="dialog-footer">
            <el-button @click="cancelWay">取 消</el-button>
            <el-button type="primary" @click="sureWay"
            >确 定</el-button
            >
        </section>
    </el-dialog>
  </section>
</template>

<script>
export default {
    name: 'userAccount',
    data() {
        return {
            dialog_title: '新建用户',
            dialogVisible: false,
            ruleForm: {
                rechargeAmount: ''
            },
            rules: {

            },
            tableData: [
                {
                    date: '2016-05-03',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-02',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-04',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-01',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-08',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-06',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
                {
                    date: '2016-05-07',
                    name: '王小虎',
                    province: '上海',
                    city: '普陀区',
                    address: '上海市普陀区金沙江路 1518 弄',
                    zip: 200333,
                },
            ],
        };
    },
    methods: {
        addWay() {
            this.dialogVisible = true;
        },
        editWay() {},
        deleteWay() {},
        cancelWay() {
            this.dialogVisible = false;
        },
        sureWay() {
            this.dialogVisible = false;
        }
    },
};
</script>

<style lang="less" scoped>
#userAccount {
    .header-box {
        padding: 0 0 8px 0;
        box-sizing: border-box;
    }
}
</style>

