<template>
<section>
    <el-pagination
      @size-change="sizeChange"
      @current-change="currentChange"
      :current-page="pagination.page"
      :page-sizes="[10]"
      :page-size="pagination.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="pagination.total">
    </el-pagination>
</section>
</template>
<script>
  export default {
    name: 'page',
    props: ['pagination'],
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

