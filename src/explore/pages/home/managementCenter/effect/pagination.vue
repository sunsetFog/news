<template>
<section id="pagination">
  <!-- 请看components/pagination文件 -->
    <pagination :pagingObj="pagingObj" @emitWay="getJson"></pagination>
</section>
</template>
<script>
  export default {
    data () {
      return {
        pagingObj: {pageNum: 1,pageSize: 10,total: 60},
      }
    },
    methods: {
      getJson(){

      }
    }
  }
</script>

<style lang="less" scoped>
#pagination{

}
</style>

