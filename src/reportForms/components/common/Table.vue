<template lang="pug">
<el-table :data="tableData"  fit :row-class-name="rowClass" @cell-click="cellClick">
              <el-table-column fixed prop="orgName" label="区域" :width="tableColum3"></el-table-column>
              <el-table-column label="截止上月底总库存">
                  <el-table-column prop="lmInvarea" label="面积" :width="tableColum2"></el-table-column>
                  <el-table-column prop="lmInvamt" label="金额" :width="tableColum2"></el-table-column>
              </el-table-column>
              <el-table-column label="截止上月底超龄库存">
                  <el-table-column prop="lmOverageArea" label="面积" :width="tableColum2"></el-table-column>
                  <el-table-column prop="lmOverageAmt" label="金额" :width="tableColum2"></el-table-column>
                  <el-table-column prop="lmInvareaRate" label="面积占比" :width="tableColum3"></el-table-column>
              </el-table-column>
              <el-table-column label="本月新增超龄库存">
                  <el-table-column prop="newOverageArea" label="面积" :width="tableColum2"></el-table-column>
                  <el-table-column prop="newOverageAmt" label="金额" :width="tableColum2"></el-table-column>
              </el-table-column>
              <el-table-column label="本月超龄库存去化">
                  <el-table-column prop="tmOrderArea" label="认购面积" :width="tableColum2"></el-table-column>
                  <el-table-column prop="tmOrderAmt" label="认购金额" :width="tableColum2"></el-table-column>
                  <el-table-column prop="tmSignArea" label="签约面积" :width="tableColum2"></el-table-column>
                  <el-table-column prop="tmSignAmt" label="签约金额" :width="tableColum2"></el-table-column>
              </el-table-column>
              <el-table-column label="当前超龄库存">
                  <el-table-column prop="tmOverageArea" label="面积" :width="tableColum2"></el-table-column>
                  <el-table-column prop="tmOverageAmt" label="金额" :width="tableColum2"></el-table-column>
              </el-table-column>
              <el-table-column prop="tmInvareaRate" label="当前超龄面积占比" :width="tableColum3"></el-table-column>
      </el-table>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: {
    tableData: Array
  }
}
</script>
<style scoped>

</style>
