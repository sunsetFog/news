<template>
    <section id="isLess">
        <el-button class="is-variable">
            isLess<span class="milk">---</span>
        </el-button>
        <button>apple</button>
        <br/><br/><br/>
        <div class="sanjiao">--哈喽--</div>
    </section>
</template>

<script>
/*
    less官网: https://less.bootcss.com/

    npm install less less-loader --save      注意版本报错

    build\webpack.base.conf.js  配置
    {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader'
    }


    在vue项目全局中引入less----因为main.js文件加载不了less/scss文件，只能加载css文件
    npm install sass-resources-loader --save-dev
    build\utils.js 配置
    将
    less: generateLoaders('less')
    修改为
    less: generateLoaders('less').concat({
      loader: 'sass-resources-loader',
      options: {
        resources: path.resolve(__dirname, '../static/capital/common.less') // 记得修改文件路径
      }
    })



    html中直接引入： link引入less样式   或   script 引入less.js

    scoped 组件作用域，使组件样式互不影响
*/
export default {
    name: 'isLess'
}
</script>

<style lang="less" scoped>
// 嵌套

// 变量   变量与字符串拼接时： 用@{}  .fee@{text-color} {}
@text-color: red;



/*
    混合Mixins    .点是class方法, #是id方法
*/
.circle-1{
    height: 70px;
}

// 定义函数
.circle-2(@size: 25px){
    font-size: @size;
}

// 运算 --- 围绕一个值计算的使用
@div-width: 100px;

// 函数
// background: fadeout(#004590, 50%); 降低颜色透明度的函数

// 映射
#colors-box() {
  primary: blue;
  secondary: green;
}
// 命名空间和访问符
#orange {
    .milk {
        color: brown;
    }
}

#isLess {
    width: 100%;
    height: 100%;
    .is-variable {
        color: @text-color;
        .circle-1;
        .circle-2(22px);
        width: @div-width * 2;
        color: #colors-box[primary];// 映射
        background: fadeout(#004590, 50%);// 解释后为background: rgba(0, 69, 144, 0.5);
        .milk {
            #orange.milk();
        }
    }
}




.sanjiao {
    height: 60px;
    .actionFb();
    .hoverShadow();
}
</style>


