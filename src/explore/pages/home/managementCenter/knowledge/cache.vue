<template>
    <section id="cache">
<!-- 浏览器缓存 -->
        <el-button type="text" @click="addData">添加数据</el-button>
        <br>
        <el-button type="text" @click="updateData">修改数据</el-button>
        <br>
        <el-button type="text" @click="deleteData">删除数据</el-button>
        <LineTextLine>原生cookie</LineTextLine>
        <el-button type="text" @click="$means.setCookie('password', '12345678', 1, true)">添加cookie</el-button>
        <br/>
        <el-button type="text" @click="getCookie">获取cookie</el-button>
        <br/>
        <el-button type="text" @click="$means.deleteCookie('password')">删除cookie</el-button>
    </section>
</template>

<script>

export default {
    data(){
        return{

        }
    },
    created(){
        this.cookies();
    },
    methods: {
        //浏览器开启都存在，关闭就删除   运行在服务器端
        sessionStorage(){
            // ---要点要点---
            //设置    参数2要是数组或对象，请转化成字符串
            sessionStorage.setItem('test_session',JSON.stringify(['2021']));
            //获取  字符串再转回数组或对象
            let te = JSON.parse(sessionStorage.getItem('test_session')) || [];
            // sessionStorage.removeItem('test_session');//删除
        },
        //永久，除非浏览器上手动删除
        localStorage(){
            localStorage.setItem('test_local','8sk-sy9');
            // localStorage.getItem('test_local');
            // localStorage.removeItem('test_local');
        },
        //可以设置有效时间，过了就删除  运行在客户端
        cookies(){
            // https://www.jianshu.com/p/535b53989b39
            // npm install vue-cookies --save
            // main.js配置
            // import VueCookies from 'vue-cookies'
            // Vue.use(VueCookies)

            // this.$cookies.set("key", "value", "expireTimes", "path", "domain", "secure");
            
            this.$cookies.set("test_cookies","GH1.1.1689020474.1484362313","2m");
            // this.$cookies.get("test_cookies");
            // this.$cookies.remove("test_cookies");
        },
        getCookie() {
            console.log('--password--', this.$means.getCookie('password', true));
        },
        // study: indexDb缓存(本地数据库)
        // 添加数据
        addData() {
            let list = [
                { id: 1, name: '张三', age: 24, email: 'zhangsan@example.com' }
            ]
            this.$means.addData(this.$database, 'ex_table_name', list);
        },
        // 修改数据
        updateData() {
            let list = [
                { id: 2, name: '九九', age: 22, email: 'jiujiu@example.com' }
            ]
            this.$means.updateData(this.$database, 'ex_table_name', list);
        },
        // 删除数据
        deleteData() {
            this.$means.deleteData(this.$database, 'ex_table_name', 2, function(value) {
                console.log("--deleteData--", value);
            });
        }
    }
}
</script>

<style lang="less" scoped>
#cache{

}
</style>


