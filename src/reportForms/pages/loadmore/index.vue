<template>
<section id="loadmore">
    <!-- 移动端加载更多 -->
    
    <ul class="task-box">
        <van-list
            v-model:loading="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
            :immediate-check="false"
        >
            <li v-for="item in stores">{{ item.name }}</li>
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
    created() {
        this.getStores()
    },
    methods:{
        /*
            vant List列表使用踩坑总结：https://www.cnblogs.com/willsoo/p/14784129.html
            list初始化后会加载一次onLoad事件，但是当第一次不足以填满一个屏幕时候，会一直加载知道填满一屏幕
            :immediate-check="false" 属性关闭初始化调用onLoad
         */
        onLoad () {
            console.log('--onLoad--')
            this.getStores()
        },
        getStores() {
                let that = this;
                let params = {
                    pageNum: that.pageNum,
                    pageSize: 3
                }

                that.$apihttp({
                    url: process.env.core_url + '/sky/shop/list',
                    method: 'post',
                    data: params
                }).then((res) => {
                        this.pageNum += 1
                        let response = res.data;
                        // let response = {content: [1,2,3,4,5,6,7,8,9,10],
                        //                 totalSize: 20,
                        //                 pageNum: 1,
                        //                 totalPages: 2
                        //                 }//模拟的后台数据

                        that.loading = false;// 停止加载
                        /*
                            第一页赋值（或清空数组），以下页拼接数组
                         */
                        that.stores = response.pageNum == 1 ? response.content : that.stores.concat(response.content);
                        /*
                            最后一页和没数据，不再触发 load 事件
                        */
						if (response.pageNum == response.totalPages || response.totalSize == 0) {
							that.finished = true;
						}
                }).catch((err)=>{
                     console.log('error',err);
                })
        }
    }
}
</script>

<style lang="less" scoped>
#loadmore{
    width: 100%;
    .task-box {
        width: 100%;
        height: 300px;
        padding: 10px 15px 0px 15px;
        box-sizing: border-box;
        overflow-y: auto;
        border: 1px solid #fff;
        li {
            width: 100%;
            height: 120px;
            background: #30364E;
            border-radius: 10px;
            color: #fff;
            margin-bottom: 10px;
        }
    }
}
</style>



