<template>
    <div class="nation">
        <div class="block">
            <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="ationData.current_page"
            :page-sizes="[5,20,10]"
            :page-size="ationData.page_size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="ationData.total">
            </el-pagination>
        </div>
    </div>
</template>

<script>
export default {
    props: ['ationData'],
    data() {
      return {
        
      };
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
        this.ationData.page_size = val
        this.$emit('emitWay')
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
        this.ationData.current_page = val
        this.$emit('emitWay')
      }
    }
    
}
</script>

<style lang="less" scoped>

</style>