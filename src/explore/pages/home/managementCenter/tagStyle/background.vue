<template>
    <section id="backgroundUnit">
        <LineTextLine>background能分解为background-*</LineTextLine>
        <!--
            css函数
            hsla(0,0%,0%,0.*);
            参数1：色调  取值为：0 - 360
                0(或360)表示红色，120表示绿色，240表示蓝色
            参数2：饱和度  取值为：0.0% - 100.0%
            参数3: 亮度  取值为：0.0% - 100.0%
            参数4: 透明度  取值0~1之间。

            rgba(255,0,0,0.3);
            参数1：红色  取值0 到 255的整数
            参数2：绿色  取值0 到 255的整数
            参数3：蓝色  取值0 到 255的整数
            参数4: 透明度  取值 0~1 之间

            css颜色
            https://www.runoob.com/cssref/css-colors.html
         -->
        <div class="peach">

        </div>
        <LineTextLine>根据用户设备的分辨率匹配合适的图像</LineTextLine>
        <div class="goods">

        </div>
        <br/>
        <div class="duck">
            <!-- 推荐 -->
            <img src="~@static/reportForms/luckDraw/choujiang_bg.png" srcset="~@static/reportForms/luckDraw/choujiang_bg.png 2x,~@static/reportForms/luckDraw/choujiang_bg.png 3x"/>
        </div>
        <LineTextLine>渐变</LineTextLine>
        <!--
            参数1：角度，顺时针旋转
                0deg 从下到上
                45deg 从左下角到右上角
                90deg 从左到右
                180deg 从上到下---默认
                270deg 从右到左
            参数2：颜色 百分比
            参数3：颜色 百分比

            多块
            background-image: linear-gradient(),linear-gradient(),linear-gradient();
         -->
        <div class="monkey">

        </div>
        <LineTextLine>阴影</LineTextLine>
        <!--
            参数1：x轴 必需的   正数是右侧，负数是左侧
            参数2: y轴 必需的   正数是下方，负数是上方
            参数3: 模糊距离 可选
            参数4: 阴影的大小 可选 前提要有模糊距离  正数扩大，负数缩小
            参数5: 颜色 可选
            参数6：投影方式  默认外阴影，inset内阴影，inset放前面也能识别

            可逗号重复6个参数
         -->
        <div class="lover">

        </div>
    </section>
</template>

<script>
</script>

<style lang="less">
#backgroundUnit {
    background: #fff;
    padding: 20px;
    .peach {
        width: 320px;
        height: 180px;
        border: 1px solid #3f5075;
        background-image: url("~@static/video/yujie.jpg");// 要使用的背景图像
        background-size: 100% 100%;// 背景图片的尺寸
        background-repeat: no-repeat;// 如何重复
        background-position: 12px 0;// 位置
        background-color: #FF8A00;// 背景颜色
        //background: #00FF00 url(bgimage.gif) no-repeat fixed top;// 可以设置所有的背景属性
    }
    .goods {
        width: 320px;
        height: 180px;
        // 不推荐  兼容性  https://blog.csdn.net/JackieDYH/article/details/113850806
        background-image: image-set(
            url("~@static/reportForms/luckDraw/choujiang_bg.png") 1x,
            url("~@static/reportForms/luckDraw/choujiang_bg@2x.png") 2x
        );
        background-repeat: no-repeat;
        background-size: 100% 100%;
    }
    .duck {
        width: 320px;
        height: 180px;
        img {
            width: 100%;
            height: 100%;
        }
    }
    .monkey {
        width: 320px;
        height: 180px;
        background-image: linear-gradient(45deg,#87f 60%,#f78 60%);
    }
    .lover {
        width: 320px;
        height: 180px;
        box-shadow: 0 4px 10px rgba(125,168,207,.35), inset 0 -2px 0 #93b6d3, inset 0 -3px 2px #aecce4, inset 0 1px 1px #fff;
    }
}
</style>
