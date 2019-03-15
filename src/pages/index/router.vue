<template>
    <section>
        <!-- https://segmentfault.com/a/1190000012393587 -->
        <Button type="primary" @click="jump()">路由跳转</Button>
        <Button type="error" @click="multiplexing">页面复用性</Button>
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
            this.$router.push({path: 'Params?id=100&status=true'});//建议用这个，没刷新问题
            // this.$router.push({name: 'Params',params: {id: 100,status: true}});
        },
        multiplexing(){
            this.$router.push({name: 'ParamsOther',params: {id: 999,supplier: 'supplier'}})
        }
    }
}
</script>

<style>

</style>

