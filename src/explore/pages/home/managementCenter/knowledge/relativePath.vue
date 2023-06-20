<template>
    <section id="relativePath">
        <img src="@/explore/assets/lizhi.jpg"/>
        <!-- build\webpack.base.conf.js 设置的全局路径变量 -->
        <img src="@static/picture/breezy/mangguo.jpg"/>
        <h3>src绑定变量时：import相对变量</h3>
        <img :src="import_ai"/>
        <!-- <h3>src绑定变量时：require准确路径</h3>
        <img :src="require_ai"/> -->
    </section>
</template>

<script>

/*
用require不正确写法报错：
./src/assets ^\.\/.*$
Module not found: Error: Can't resolve 'style-loader' in

相对路径：从当前目录开始定位，形成的路径
绝对定位: 从顶级目录src开始定位，形成的路径

样式下
background: url('~@/explore/assets/theme/logo_blue.png') no-repeat center center;

1.相对路径: "./assets/logo_blue.png" 用的多，就是路径打包易报错，找不到
2.相对路径，没前缀 "assets/logo_blue.png" 被webpack解析为 相对路径
推荐3.绝对路径，带~  "~@/explore/assets/theme/logo_blue.png" 被webpack解析为 require(src/assets/theme/logo_blue.png) 动态引入   @等于/src
4.绝对路径，相对根目录的路径 "/assets/logo_blue.png" webpack不解析----没效果

*/
import lizhi from '@/explore/assets/lizhi.jpg'
export default {
    name: 'relativePath',
    data () {
        return {
            import_ai: '',
            require_ai: ''
        }
    },
    created(){
        this.importAi();
        this.requireAi();
    },
    methods:{
        importAi(){
            this.import_ai = lizhi;
            console.log('import=', this.import_ai)
        },
        requireAi(){
            // this.require_ai = require('@/explore/assets/lizhi.jpg');
            let imgName = 'lizhi.jpg'
            // this.require_ai = require('@/explore/assets/' + imgName);
            this.require_ai = require(`@/explore/assets/${imgName}`);
            console.log('require=', this.require_ai);
        }
    }
}
</script>

<style lang="less" scoped>
#relativePath {
    color: yellowgreen;
    img {
        width: 100px;
        height: 100px;
    }
}
</style>
