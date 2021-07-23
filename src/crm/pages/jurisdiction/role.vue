<template>
    <div id="role">
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
            prop="role"
            label="角色名称">
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
</template>

<script>
export default {
    data () {
        return {
            tableData: [{
            id: '1',
            
            role: '系统管理员',
            
            operation: '操作'
            }, {
            id: '2',
            role: '开发人员',
            operation: '操作'
            }, {
            id: '3',
            role: '测试人员',
            operation: '操作'
            }],
        }
    },
    methods: {
        handleEdit(index, row) {
            console.log(index, row);
        },
        handleDelete(index, row) {
            console.log(index, row);
        },
    }
}
</script>

<style lang="less" scoped>
    #role{
        width: 100%;
        height: 100%;
    }
</style>