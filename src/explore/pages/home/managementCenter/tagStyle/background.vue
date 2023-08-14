<template>
    <section id="backgroundUnit">
        <LineTextLine>background能分解为background-*</LineTextLine>

        <div class="peach">

        </div>
        <LineTextLine>根据用户设备的分辨率匹配合适的图像</LineTextLine>
        <div class="goods">

        </div>
        <br/>
        <div class="duck">
            <!-- 推荐
                2x可改1000w  宽度
            -->
            <img src="@static/picture/breezy/logo.png" srcset="@static/picture/breezy/logo_2x.png 2x,@static/picture/breezy/logo_3x.png 3x" />
            <!-- <img src="~@static/reportForms/luckDraw/choujiang_bg.png" srcset="~@static/reportForms/luckDraw/choujiang_bg.png 2x,~@static/reportForms/luckDraw/choujiang_bg.png 3x"/> -->
        </div>
        <LineTextLine>渐变</LineTextLine>
        <!--
            线性渐变
            参数1：角度，顺时针旋转
                0deg 从下到上
                45deg 从左下角到右上角
                90deg 从左到右
                180deg 从上到下---默认
                270deg 从右到左
                或to top | to right | to left
            参数2：颜色 百分比
            参数3：颜色 百分比

            多块
            background-image: linear-gradient(),linear-gradient(),linear-gradient();

            径向渐变--有兼容性
            background-image: radial-gradient(shape size at position, color 百分比, ..., );
                shape确定圆的类型:
                    ellipse (默认): 指定椭圆形的径向渐变
                    circle ：指定圆形的径向渐变
                size渐变的大小
                    farthest-corner (默认) : 指定径向渐变的半径长度为从圆心到离圆心最远的角
                    closest-side ：指定径向渐变的半径长度为从圆心到离圆心最近的边
                    closest-corner ： 指定径向渐变的半径长度为从圆心到离圆心最近的角
                    farthest-side ：指定径向渐变的半径长度为从圆心到离圆心最远的边
                position渐变的位置
                    center（默认）：设置中间为径向渐变圆心的纵坐标值。
                    top：设置顶部为径向渐变圆心的纵坐标值。
                    bottom：设置底部为径向渐变圆心的纵坐标值。
                    或值60% 55%
            background-image: radial-gradient(circle farthest-side at 60% 55%, red 10%, yellow 60%, green 100%);
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
