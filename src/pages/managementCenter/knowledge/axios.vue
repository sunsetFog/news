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
        //推荐
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
        //不推荐-只是写法不一样
        http2(){
            let that = this;
            that.$apihttp({
                url: 'http://10.1.101.120/backend/account/checklogin',
                methods: 'post',
                data: {username: "gggg", password: "1234567890"}
            }).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
        },
        getHttp(){//get请求头的两种不同传参写法
            let that = this;
            //1.如下
            let json = {
                params:{//params传参到链接上
                    id: '007',
                    title: 'title'
                }
            }
            that.$apihttp.get('http://10.1.101.120/backend/account/delete',json).then((res) => {
                console.log('H-token',res);
            }).catch((err)=>{
                console.log('error',err);
            })
            //2.自己字符串和变量拼接参数
            let id = '007';
            let title = 'title';
            let url = 'http://10.1.101.120/backend/account/delete?id='+id+'&title='+title;
            that.$apihttp.get(url).then((res) => {
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
