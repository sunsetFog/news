<template>
    <section>
        使用环境变量<br/><br/>
        <el-button @click="http4">调用接口</el-button>
    </section>
</template>

<script>
//配置main.js
// import apiHttp from './api/http.js';
// Vue.prototype.$apihttp = apiHttp;
import { login } from "@/explore/api/user";
import axios from 'axios';
export default {
    data(){
        return{

        }
    },
    created(){
        this.http2();
    },
    methods: {
        //不推荐---因为在mockjs中get请求，参数接收不到
        http1(){
            //这个是配置axios的请求方式
            let that = this;
            let json = {
                username: "admin",
                password: "123456"
            }
            that.$apihttp.post('http://localhost:2021/mock/geoJson',json).then((res) => {
                console.log('H-http',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        //推荐
        http2(){
            let that = this;
            let json = {
                username: "admin",
                password: "123456"
            }
            that.$apihttp({
                url: 'http://localhost:2021/mock/geoJson',
                method: 'post',
                params: json, // 不管get还是post，参数都是拼接到url上
                // data: json, // 不管get还是post，参数都是body里
                // headers: {} // headers设置
            }).then((res) => {
                console.log('H-http',res);
            }).catch((err)=>{
                console.log('error',err);
            })

        },
        //封装接口在一处，单个变量用
        interface(){
            let params = {
                pageNum: 1,
                pageSize: 3
            }
            login(params).then(res => {
                console.log('返回的参数',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        // 没封装过的axios
        http3(){
            let that = this;
            let json = {
                username: "admin",
                password: "123456"
            }
            axios({
                url: 'http://localhost:2021/mock/geoJson',
                method: 'post',
                params: json, // 不管get还是post，参数都是拼接到url上
                // data: json, // 不管get还是post，参数都是body里
                // headers: {} // headers设置
            }).then((res) => {
                console.log('H-http',res);
            }).catch((err)=>{
                console.log('error',err);
            })

        },
        async http4(){
            let that = this;
            let params = {
                pageNum: 1,
                pageSize: 3
            }
            let res = await login(params).catch((err)=>{
                console.log('error',err);
            });// 可以不写catch
            console.log('--http4--', res);
        },
    }
}
</script>

<style lang="less" scoped>

</style>
