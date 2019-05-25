<template>
    <section>
        项目大厅
    </section>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    //创建前，跳回登陆界面
    beforeCreate(){
        if(!sessionStorage.getItem('token')){
            this.$router.push({path:'/login'});
        }
    },
}
</script>

<style>

</style>
