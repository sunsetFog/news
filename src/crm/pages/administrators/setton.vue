<template>
    <div id="setton">
        <!-- <div class="top">
            <el-button type="primary">原版el-table</el-button>
        </div> -->
        <div class="add">
            <el-button type="primary" @click="dialogVisible=true" size="small">添加</el-button>
            <el-button type="primary" @click="penDetail" size="small">详情页</el-button>
        </div>
        <div>
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                prop="id"
                label="ID"
                width="180">
                </el-table-column>
                <el-table-column
                prop="user"
                label="用户名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="name"
                label="真实姓名"
                width="180">
                </el-table-column>
                <el-table-column
                prop="role"
                label="角色">
                </el-table-column>
                <el-table-column
                prop="condition"
                label="状态"
                width="180">
                </el-table-column>
                <el-table-column
                prop="date"
                label="加入时间"
                width="180">
                </el-table-column>
                <el-table-column
                prop="operation"
                label="操作"
                width="180">
                <template slot-scope="scope">
                    <el-button
                    size="mini"
                    @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                    <el-button
                    size="mini"
                    type="danger"
                    @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page.sync="currentPage3"
            :page-size="100"
            layout="prev, pager, next, jumper"
            :total="1000">
            </el-pagination>
        </div>

        <el-dialog
            title="添加管理员"
            :visible.sync="dialogVisible"
            width="450px">
            <div class="bingo">
                <ul>
                    <li>
                        <span>用户名 </span>
                        <el-input v-model="bingo_user"></el-input>
                    </li>
                    <li>
                        <span>角&nbsp;&nbsp;&nbsp;色 </span>
                        <template>
                            <el-select v-model="value" placeholder="请选择">
                                <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                                </el-option>
                            </el-select>
                        </template>
                    </li>
                    <li>
                        <span>密&nbsp;&nbsp;&nbsp;码 </span>
                        <el-input type="password" v-model="bingo_pass"></el-input>
                    </li>
                    <li><span>姓&nbsp;&nbsp;&nbsp;名 </span><el-input v-model="bingo_set"></el-input></li>
                    <li><span>状&nbsp;&nbsp;&nbsp;态 </span><el-checkbox label="禁用" name="type"></el-checkbox></li>
                </ul>
                
            </div>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false" size="small">提 交</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    data() {
      return {
        tableData: [{
          id: '1',
          user: 'admin',
          name: '王小虎',
          role: '系统管理员',
          condition: '正常',
          date: '2016-05-02',
          operation: '操作'
        }, {
          id: '2',
          user: 'admin',
          name: '王小虎',
          role: '系统管理员',
          condition: '正常',
          date: '2016-05-04',
          operation: '操作'
        }, {
          id: '3',
          user: 'admin',
          name: '王小虎',
          role: '系统管理员',
          condition: '正常',
          date: '2016-05-06',
          operation: '操作'
        }, {
          id: '4',
          user: 'admin',
          name: '王小虎',
          role: '系统管理员',
          condition: '正常',
          date: '2016-05-08',
          operation: '操作'
        }],
        currentPage1: 5,
        currentPage2: 5,
        currentPage3: 5,
        currentPage4: 4,
        dialogVisible: false,
        options: [{
          value: '选项1',
          label: '系统管理员'
        },
        {
          value: '选项2',
          label: '开发人员'
        },
        {
          value: '选项3',
          label: '测试人员'
        }],
        bingo_user: '',
        value: '',
        bingo_pass: '',
        bingo_set: '',
        bingo_good: '',

      }
    },
    created () {
    },
    methods: {
        penDetail () {
            this.$store.commit('addPane',{
                title: '详情页',
                path: '/administrators/detail',
                id: sessionStorage.getItem('menuIndex'),
                save_bread: JSON.parse(sessionStorage.getItem('bread')),
                tab_active: false
            })
            this.$store.commit('chaActive', 'zuohou')
            this.$router.push({ path: '/administrators/detail' })
        },
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
        handleSizeChange(val) {
            console.log(`每页 ${val} 条`);
        },
        handleCurrentChange(val) {
            console.log(`当前页: ${val}`);
        }
    }
}
</script>

<style lang="less" scoped>
    #setton{
        width: 100%;
        height: 100%;
        padding: 0px 10px;
        box-sizing: border-box;
        .top{
            width: 100%;
            height: 40px;
            position: relative;
            border-bottom: 1px solid green;
            button{
                background: green;
                position: absolute;
                top: 3px;
                left: 50px;
                border: none;
            }
        }
        .add{
            width: 100%;
            height: 40px;
            button{
                background: green;
                border: none;
                float: right;
                margin-left: 10px;
            }
        }
        .block{
            width: 100%;
            height: 70px;
            padding: 30px 0 0 0;
            box-sizing: border-box;
        }
        .bingo{
            padding: 10px 20px 0 40px;
            ul{
                li{
                    list-style: none;
                    width: 100%;
                    height: 40px;
                    padding-top: 10px;
                    box-sizing: border-box;
                    // margin-bottom: 3px;
                    // background: orchid;
                    span{
                        margin-right: 10px;
                    }
                    .el-input{
                        width: 170px;
                    }
                    /deep/input{
                        width: 170px;
                        height: 25px;
                    }
                    // input{
                    //     width: 170px;
                    //     height: 20px;
                    //     -outline-color:red;
                    //     -outline-width: 0.4px;
                    //     border: 0.2px solid #B7CADD;
                    //     border-radius: 2px;
                    // }
                    // input:focus {
                    //     color: #00FF00;
                    //     border: 0.2px solid blue;
                    // } 
                }
                li:nth-child(1){
                    
                }
            }
            
        }
    }
</style>