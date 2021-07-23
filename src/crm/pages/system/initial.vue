<template>
    <div id="initial">
        <div class="cont">
            <ul>
                <li>
                    <span>网站名称 </span>
                    <el-input v-model="init_name"></el-input>
                </li>
                <li>
                    <span>状&nbsp;&nbsp;&nbsp;态 </span>
                    <el-switch
                    v-model="value"
                    active-color="#13ce66"
                    inactive-color="#ff4949">
                    </el-switch>
                </li>
            </ul>
            <span slot="footer" class="dialog-footer">
                <el-button type="primary" @click="dialogVisible = false" size="small">提 交</el-button>
            </span>
        </div>
        <nations :ationData='pagination' @emitWay="getJson"></nations>
    </div>
</template>

<script>
import nations from '../../components/nation'
export default {
    components: {nations},
    data () {
        return {
            init_name: '',
            value: true,
            pagination: {current_page: 1,page_size: 5,total: 10},
        }
    },
    methods: {
        getJson(val){
            let that = this;
            let json = {store_id: 12,current_page: that.pagination.current_page, page_size: that.pagination.page_size};//店铺id
            that.$http.post("http://mock-api-success.com/store/goods-list",json).then((res) => {
                
                // console.log('json',json)
                // console.log('shuju+=7777',res,);

                // for(let i=0;i<res.data.list.length;i++){
                //     that.goods_list.push(res.data.list[i])
                // }
                // that.nana = res.data.total;


                // this.loading = false; // 关闭加载动画
                // if (this.goods_list.length >= res.data.total) { // 不能大于总条数
                //     console.log('finish====',this.goods_list.length)
                //     this.finished = true; // 禁调用load方法
                // }

            }).catch((err)=>{
                console.error('error',err);
            })
        },
    }
}
</script>

<style lang="less" scoped>
    #initial{
        width: 100%;
        height: 100%;
        padding: 30px 20px;
        box-sizing: border-box;
        .cont{
            ul{
                li{
                    list-style: none;
                    width: 100%;
                    height: 40px;
                    padding-top: 10px;
                    box-sizing: border-box;
                    span{
                        margin-right: 10px;
                    }
                    .el-input{
                        width: 170px;
                    }
                    /deep/input{
                        width: 170px;
                        height: 25px;
                    }
                }
                li:nth-child(2){
                    margin-bottom: 10px;
                }
            }
        }
        
    }
</style>