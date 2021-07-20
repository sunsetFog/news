<template>
<section id="nicePager">
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="pagination.page"
      :page-sizes="pageStep"
      :page-size="pagination.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
</section>
</template>
<script>
  export default {
    name: 'page',
    props: {
      pagination: {
        type: Object,
        default: {}
      },
      pageStep: {
        type: Array,
        default: [10]
      }
    },
    data () {
      return {
      }
    },
    methods: {
      sizeChange (val) {
        //console.log('pagesize+++', val)
        this.pagination.pagesize = val
        this.$emit('emitWay')
      },
      currentChange (val) {
        //console.log('currentPage++', val)
        this.pagination.page = val
        this.$emit('emitWay')
      }
    }
  }
</script>
<style lang="less" scoped>
#nicePager{
  width: 100%;
  height: 45px;
  padding: 6px 0 0 0;
}
</style>

