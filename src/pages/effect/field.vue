<template>
    <section style="padding-top: 50px;box-sizing:border-box;">
        <div class="article">
            <!-- :sign="item.sign"是给盒子加属性，可用于座位表标志，好知道位置点。相当于js的setAttribute('sign') -->
            <section v-for="(item,index) in article_list" :sign="item.sign">
                <div class="wonderful_article" :class="{'active_color': item.active_color}">
                    <div class="wonderful_article_left">{{item.name}}</div>
                    <div class="wonderful_article_right" @click="modify(index)">{{item.setting}}</div>
                </div>
                <div class="modify_content" v-if="item.setting != '设置'">修改内容</div>
            </section>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            article_list: []
        }
    },
    created(){
        this.getJson();
    },
    methods:{
        getJson(){
            //后台返回的数据
            var response = [
                {id: 1,sign: '1-1',name: '数据一'},
                {id: 2,sign: '1-2',name: '数据二'},
                {id: 3,sign: '1-3',name: '数据三'}
            ]
            //前端往里添加字段
            for(var i=0;i<response.length;i++){
                response[i].active_color = true;
                response[i].setting = '设置';
            }
            this.article_list = response;
            console.log('文章',this.article_list);
        },
        //设置修改内容
        modify(index){
            //初始化
            for(var i=0;i<this.article_list.length;i++){
                this.article_list[i].setting = '设置';
                this.article_list[i].active_color = true;
            }
            this.article_list[index].setting = '保存';
            this.article_list[index].active_color = false;
        }
    }
}
</script>

<style lang="less" scoped>
    .article{
        border-top: 1px solid #ebeef5;
        .active_color{
            border-bottom: 1px solid #ebeef5;
        }
        .wonderful_article{
            width: 100%;
            height: 40px;
            line-height: 40px;
            .wonderful_article_left{
                width: 80%;
                height: 40px;
                float: left;
                text-indent: 20px;
            }
            .wonderful_article_right{
                width: 20%;
                height: 40px;
                float: right;
                text-align: right;
                padding-right: 20px;
                box-sizing: border-box;
                cursor: pointer;
            }
        }
        .modify_content{
            width: 100%;
            height: 80px;
            padding: 5px 20px 0px 20px;
            box-sizing: border-box;
            border-bottom: 1px solid #ebeef5;
        }
    }
</style>
