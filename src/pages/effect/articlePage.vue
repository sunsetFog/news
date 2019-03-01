<template>
<section style="padding: 3rem 0rem 0rem 3rem;box-sizing:border-box;">
    <div style="width: 100%;margin-bottom: 6rem;">
        <el-input v-model="title" placeholder="请输入内容" style="float:left;margin-left: 2rem;width: 10rem;"></el-input>
        <el-button type="success" style="float:right;margin-right: 2rem;" @click="search">搜索</el-button>
    </div>
    <div>
        <div style="float: right;margin-right: 2rem;">
            <!--Pagination在main.js里已经建立子父组件关系了 -->
            <Pagination :pagination="pagination" @emitWay="getTableJson"></Pagination>
        </div>
    </div>
</section>    
</template>

<script>
export default {
    data(){
        return{
            title: '',//查询条件
            pagination: {page: 1, pagesize: 25, total: 50},//分页器
            article: []//表格数据
        }
    },
    methods: {
        getTableJson(){
            var that = this
            // that.$http({
            //     url: '/api/backoffice/cms/AreaManage/query?page=' + that.pagination.page + '&pagesize=' + that.pagination.pagesize,//url传page和pagesize
            //     method: 'post',
            //     data: {'title': that.title}//传查询内容
            // }).then(res => {
                var res = {data:{list:[],total: 80}};//模拟后台数据
                that.article = res.data.list;
                that.pagination.total = res.data.total;//只拿total,不拿page和pagesize
            // }).catch(err => {
            //     console.log(err);
            // })            
        },
        search(){
            //page和pagesize要初始化
            this.pagination.page = 1;
            this.pagination.pagesize = 25;
            this.getTableJson();
        }
    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
</style>

