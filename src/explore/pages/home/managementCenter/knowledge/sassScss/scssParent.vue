<template>
    <section id="scssParent">
        <el-button class="is-variable">
            scssParent---<span class="is-mechanism">condition</span>
        </el-button>

        <div class="card-0"></div>
        <div class="card-1"></div>
        <div class="card-2"></div>
        <div class="card-3"></div>
        <scssSon></scssSon>
    </section>
</template>

<script>
/*
    scss官网：https://www.sass.hk/guide/

    如何在VUE项目中使用SCSS: https://www.jianshu.com/p/2823f27f9dd7

    npm install node-sass sass-loader -D       注意版本报错
    {
        test: /\.scss$/,
        loaders: ["style", "css", "sass"]
    }

    在vue项目全局中引入scss
    npm install sass-resources-loader --save-dev
    build\utils.js 配置
    将
    scss: generateLoaders('sass')
    修改为
    scss: generateLoaders('sass').concat({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, '../static/capital/variable.scss') // 记得修改文件路径
      }
    })

*/
import scssSon from './scssSon'
export default {
    name: 'scssParent',
    components: { scssSon }
}
</script>

<style lang="scss" scoped>
// 嵌套

// 变量
$mechanism: 'mechanism';
$text-color: red;

// 运算
$div-width: 150px;

// 继承
.circle {
    font-size: 22px;
}

// mixin
@mixin rounded($height) {
    height: $height;
}

// if 条件语句
$condition: "condition";

// 遍历的用法
$num: 6;

/* 自定义函数  */
@function double($n) {
    @return $n*2
}


#scssParent {
    /*
        如何跳过组件scoped样式模块化?
            方式一  /deep/深度选择器
            方式二  :global
            只能改子组件样式, 一般与!important一起用
            优先级/deep/ 大于 :global
            这两个在scss、less都能用
    */
    /deep/ .exit-login {
        color: yellowgreen !important;
    }

    /deep/ .scssSon {
        color: indianred !important;
    }

    :global {
        .exit-login {
            color: yellowgreen !important;
        }

        .scssSon {
            -color: chartreuse !important;
        }
    }

    .is-variable {
        color: $text-color;

        width: $div-width * 2;
        width: double(250px);

        @extend .circle;

        @include rounded(80px);

        @if $condition =='condition' {
            background: #00BCD4;
        }

        @else {
            background: rebeccapurple;
        }
    }

    .is-#{$mechanism} {
        // 拼接字符的写法
        color: blueviolet;
    }

    @for $i from 1 to 4 {

        // 留首不留尾，此时有1，2，3
        .card-#{$i} {
            width: 100%;
            height: 30px;
            background: brown;
            margin-top: 10px;
        }
    }

    @each $member in 1,
    2,
    3,
    4 {
        .image-#{$member} {
            background-image: url("~@static/picture/portrait/ui_headBox_#{$member}.png");
        }
    }

}</style>
