<template>
    <section>

    </section>
</template>

<script>
//配置main.js
// import apiHttp from './api/http.js';
// Vue.prototype.$apihttp = apiHttp;
export default {
    data(){
        return{

        }
    },
    methods: {
        //不推荐---因为再mockjs中get请求，参数接收不到
        http1(){
            //这个是配置axios的请求方式
            let that = this;
            let json = {
                username: "gggg",
                password: "1234567890"
            }
            that.$apihttp.post('http://10.1.101.120/backend/account/checklogin',json).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        //推荐
        http2(){
            let that = this;
            let json = {
                username: "gggg",
                password: "1234567890"
            }
            that.$apihttp({
                url: 'http://10.1.101.120/backend/account/checklogin',
                method: 'get',
                data: json
            }).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>
