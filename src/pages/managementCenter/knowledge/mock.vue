<template>
    <section id="mock">
      <!--mock本地模拟数据-->
    </section>
</template>

<script>
//npm install mockjs --save
export default {
    data() {
        return {
        list: []
        };
    },
    created() {
        this.is_delete();
        // this.is_login();
    },
    methods: {
        is_delete(){
            let that = this;
            that.$axios({
                url: 'plugin.store-cashier.frontend.store.goods.destroy-goods',
                method: 'get',
                data: {goods_id: 2}
            }).then((res) => {
                console.log('返回的数据',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        is_login(){
            let that = this;
            that.$axios({
                url: '/user/login',
                method: 'get',
                data: {username: "admin", password: "123456"}
            }).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },

    }
}
</script>

<style lang="less" scoped>
#mock {
}
</style>
