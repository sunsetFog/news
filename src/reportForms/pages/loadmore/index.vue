<template>
<section id="loadmore">
    <!-- 移动端加载更多 -->
    
    <ul class="task-box">
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
            <li v-for="item in stores">{{ item }}</li>
        </van-list>
    </ul>
    
</section>    
</template>

<script>
export default {
    data(){
        return{
            loading: false,
            finished: false,
            stores: [],
            pageNum: 1 // 第几页
        }
    },
    methods:{
        onLoad () {
            console.log('--onLoad--')
            this.pageNum += 1
            this.getStores()
        },
        getStores() {
                var that = this;
                // var json = {page: this.pageNum}//传给后台的页数
                // $http.get('plugin.get-store-list-to-page', json).then((response) => {
                        var response = {list: [1,2,3,4,5,6,7,8,9,10],
                                        total: 20,
                                        current_page: 1,
                                        total_page: 2
                                        }//模拟的后台数据

                        that.loading = false;// 停止加载
                        /*
                            第一页赋值（或清空数组），以下页拼接数组
                         */
                        that.stores = response.current_page == 1 ? response.list : that.stores.concat(response.list);
                        /*
                            最后一页和没数据，不再触发 load 事件
                        */
						if (response.current_page == response.total_page || response.total == 0) {
							that.finished = true;
						}
                // }), (err) => {
                //      console.log(err);
                // }
        }
    }
}
</script>

<style lang="less" scoped>
#loadmore{
    width: 100%;
    height: 700px;
    .task-box {
        width: 100%;
        height: 22.1875rem;
        padding: 0.625rem 0.9375rem 0rem 0.9375rem;
        box-sizing: border-box;
        overflow-y: auto;
        li {
            width: 100%;
            height: 4.125rem;
            background: #30364E;
            border-radius: 0.625rem;
            color: #fff;
        }
    }
}
</style>



