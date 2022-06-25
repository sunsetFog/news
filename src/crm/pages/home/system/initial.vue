<template>
    <div id="initial">
<el-button @click="visible = !visible">click 激活</el-button>
<el-button @click="appleWay">勾选</el-button>
<el-popover
  placement="right"
  width="400"
  @after-enter="waterWay"
  trigger="manual"
  v-model="visible"
  >





<el-table
    :row-key="getRowKeys"
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%"
    @selection-change="handleSelectionChange">
    <el-table-column
      type="selection"
      :reserve-selection="true"
      width="55">
    </el-table-column>
    <el-table-column
      label="日期"
      width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="姓名"
      width="120">
    </el-table-column>
    <el-table-column
      prop="address"
      label="地址"
      show-overflow-tooltip>
    </el-table-column>
  </el-table>




  <!-- <el-button slot="reference">click 激活</el-button> -->
</el-popover>


    </div>
</template>

<script>
export default {
    data () {
        return {
            visible: false,
            beanActive: false,


            tableData: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: []



        }
    },
    mounted() {
        // this.appleWay()
    },
    methods: {
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        getRowKeys(row) {
            return row.date
        },


        waterWay() {
            this.appleWay()
            // this.beanActive = true
        },
        appleWay() {
            let row = {}
            // row = {
            // date: '2016-05-02',
            // name: '王小虎',
            // address: '上海市普陀区金沙江路 1518 弄'
            // }
             row = this.tableData[2]
            console.log("--row--", row)
            this.$refs.multipleTable.toggleRowSelection(row, true);
        }
    }
}
</script>

<style lang="less" scoped>
    #initial{
        width: 100%;
        height: 100%;
    }
</style>