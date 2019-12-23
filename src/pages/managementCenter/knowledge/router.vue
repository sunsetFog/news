<template>
    <section id="router">
        <!-- https://segmentfault.com/a/1190000012393587 -->
        <el-button>
            <router-link to="/crux?id=888&status=false">
                路由router-link跳转
            </router-link>
        </el-button>
        
        <el-button type="primary" @click="jump()">路由跳转</el-button>
    </section>    
</template>

<script>
export default {
    data(){
        return{

        }
    },
    methods: {
        jump(){
            this.$router.push({path: '/crux?id=100&status=true'});//推荐用这个，没刷新问题
            // query没刷新问题  params要路由path:'/router/:id',才无刷新丢失数据问题
            // this.$router.push({name: 'crux',query: {id: 100,status: true}});//可用
            // this.$router.push({name: 'crux',params: {id: 1010,status: true}});//不建议使用
            console.log('查看路由参数',this.$route);
        }
    }
}
</script>

<style lang="less" scoped>
#router{
    
}
</style>


