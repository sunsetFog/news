<template>
    <section>
        <el-button @click="http2">调用接口</el-button>
    </section>
</template>

<script>
//配置main.js
// import apiHttp from './api/http.js';
// Vue.prototype.$apihttp = apiHttp;
import { login } from "@/explore/api/user";
export default {
    data(){
        return{

        }
    },
    created(){
        this.http2();
    },
    methods: {
        //不推荐---因为再mockjs中get请求，参数接收不到
        http1(){
            //这个是配置axios的请求方式
            let that = this;
            let json = {
                username: "admin",
                password: "123456"
            }
            that.$apihttp.post('http://localhost:1199/mock/geoJson',json).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        //推荐
        http2(){
            // let that = this;
            // let json = {
            //     username: "admin",
            //     password: "123456"
            // }
            // that.$apihttp({
            //     url: 'http://localhost:1199/mock/geoJson',
            //     method: 'post',
            //     params: json // 不管get还是post，这个都是拼接参数到url上
            //     // data: json // 不管get还是post，这个都不拼接参数到url上
            // }).then((res) => {
            //     console.log('H-token',res);
            // }).catch((err)=>{
            //     console.log('error',err);
            // })

            let that = this;
            let json = {
                id: 156,
                goodsName: "苹果"
            }
            // that.$apihttp({
            //     url: 'http://192.168.1.102:8081/agentApi/sys/login',
            //     method: 'post',
            //     params: json
            // }).then((res) => {
            //     console.log('H-token',res);
            // }).catch((err)=>{
            //     console.log('error',err);
            // })
            that.$apihttp({
                url: 'http://localhost:8062/sky/xiaoyue/apple',
                method: 'get',
                params: json
            }).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        //封装接口在一处，单个变量用
        interface(){
            let json = {
                username: "admin",
                password: "123456"
            }
            login(json).then(res => {
                console.log('返回的参数',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        }
    }
}
</script>

<style lang="less" scoped>

</style>
