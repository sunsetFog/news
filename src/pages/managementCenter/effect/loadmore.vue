<template>
<section id="loadmore">
    <!-- 移动端下拉加载 -->
    <mt-loadmore :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" bottomPullText='上拉刷新' bottomDropText='释放更新' :autoFill='false'>
        <ul style="border-top: 1px solid rgb(242, 242, 242);border-bottom: 1px solid rgb(242, 242, 242);">
            <li v-for="item in stores">{{ item }}</li>
        </ul>
        <div style="width: 100%;height: 40px;line-height: 40px;text-align: center;" v-if="loading">暂无数据</div>
    </mt-loadmore>    
</section>    
</template>

<script>
import { Loadmore } from 'mint-ui';
export default {
    data(){
        return{
            stores: [],
            allLoaded: false,
            loading: false,
            pageNum: 1
        }
    },
    activated(){
		this.pageNum = 1;
        this.loading = false;
        this.allLoaded = false;
		this.stores = [];
		this.getStores();   
    },
    methods:{
        loadTop() {
            this.$refs.loadmore.onTopLoaded();
        },
        loadBottom() {
            console.log('load++-');
            this.getStores();
            this.$refs.loadmore.onBottomLoaded();
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
                        that.pageNum = Number(that.pageNum) + 1;
						// 搜索结果为空
						if (response.total == 0) {
							that.loading = true;
							that.allLoaded = true;
							return;
						}
                        that.stores = that.stores.concat(response.list);
						if (response.current_page == response.total_page) {
							that.loading = true;
							that.allLoaded = true;
							return;
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
    
}
</style>



