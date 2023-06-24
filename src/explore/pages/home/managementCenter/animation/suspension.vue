<template>
    <section id="suspension">
        <!--

            关键帧的书写1
            @keyframes  eason{
                from{}
                to{}
            }
            关键帧的书写2
            @keyframes myFrame{
                0%{}
            	30%{}
            	100%{}
            }

            动画名
            animation-name: mymove;

            动画等待5后开始
            animation-delay: 5s;

            动画持续时间为5s
            animation-duration：5s;

            速度曲线
                linear匀速
                默认ease低速开始—>加速—>结束前减速
                ease-in以低速开始
                ease-out以低速结束
                ease-in-out以低速开始和结束
                函数cubic-bezier(n,n,n,n)  取值0 到 1
            animation-timing-function：linear;

            动画播放次数为1次
            animatiom-iteration-count：1;
                xx数字
                infinite 无限次执行

            设置动画为反向播放
            animation-direction：alternate;
                默认nomal  执行完一次之后回到起点继续执行下一次
                alternate往返动画，执行完一次之后往回执行下一次
                reverse反向执行

            设置动画是否暂停
            animation-play-state: running;
                running 执行动画
                paused 暂停动画

            动画结束的最后一帧
            animation-fill-mode: none;
                none 不做任何改变
                forwards 让元素结束状态保持动画最后一帧的样式
                backwards 让元素等待状态的时候显示动画第一帧的样式
                both 等待状态显示第一帧，结束状态保持最后一帧

            animation 简写
            animation：动画名称 动画时长 动画运动速度 延迟时间 执行次数 往返动画
            animation: eason 0.3s linear infinite;

----------------------------------------------------------------------

            过渡的属性
            transition-property: none | all | property;
                none 没过渡效果
                all 所有属性都参与过渡效果
                property CSS属性名称列表   transition-property: width, background;
            过渡的持续时间
            transition-duration: .25s, 1s;  两个过渡属性的时间

            div:hover {
                width: 200px;
                background: blue;
            }

            过渡的动画类型
            transition-timing-function: linear;
                linear匀速
                默认ease低速开始—>加速—>结束前减速
                ease-in以低速开始
                ease-out以低速结束
                ease-in-out以低速开始和结束
                函数cubic-bezier(n,n,n,n)  取值0 到 1

            过渡效果延迟的时间
            transition-delay: time;

            transition过渡周期 简写
            transition: transition-property transition-duration transition-timing-function transition-delay;
            transition: width .25s linear 1.9s, background 1s 2s, transform 2s;

----------------------------------------------------------------------

            2D变形(CSS3) transform

            移动 translate(x, y)
                平移
                transform: translate(100px);
                水平方向移动（X轴移动）
                transform: translateX(100px);
                垂直方向移动（Y轴移动）
                transform: translateY(100px);
                水平方向和垂直方向同时移动（45度移动）
                transform: translate(100px,100px);

            缩放 scale(x, y)
                transform: scale(0.8);
                scale(X,Y)使元素水平方向和垂直方向同时缩放（也就是X轴和Y轴同时缩放）
                scaleX(x)元素仅水平方向缩放（X轴缩放）
                scaleY(y)元素仅垂直方向缩放（Y轴缩放）
                缩小：值0.01到0.99
                放大：值大于1
                默认值： 1
                只有一个参数，识别为scale(X,Y)

            旋转 rotate(deg)
                transform: rotate(45deg);
                transform: scale(0) rotate(360deg); 缩放比例、旋转角度
                正值为顺时针，负值为逆时针
                单位是 deg 度数

            transform-origin: x y; 可以调整元素转换变形的原点
                默认以中心为原点
                transform-origin: -10px 0px;

            倾斜 skew(x, y)
                transform: skew(30deg, 0deg); 水平倾斜30度

         -->
        <div class="portrait-center">
            <div class="tangerine1">
                <img src="@static/reportForms/image/invoice.png"/>
            </div>
            <div class="tangerine2">
                <i class="el-icon-plus"></i>
            </div>
        </div>

        <br><br>
        <div class="domineering">
            <div class="rabbit1">
                <img class="yujie" src="@static/video/yujie.jpg"/>
            </div>
            <div class="rabbit2">
                <img class="play-open" src="@static/video/play-open.png"/>
            </div>
        </div>

        <div class="activity-list">
            <ul>
                <li>
                    <img src="@static/picture/banner/6.jpg"/>
                </li>
                <li>
                    <img src="@static/picture/banner/8.jpg"/>
                </li>
            </ul>
        </div>
        <div class="limited-time">
            限时火热
        </div>
        <LineTextLine>向上滚动动画</LineTextLine>
        位置：news\src\reportForms\pages\luckDraw\upAndDown.vue
    </section>
</template>

<script>
export default {
    name: 'suspension',
    data() {
        return {
            show_plus: false
        }
    },
    methods: {
        // 鼠标移入  @mouseover="mouseover" @mouseleave="mouseleave"  没有动画过渡
        mouseover () {
            console.log('mouseover')
            this.show_plus = true
        },
        // 鼠标移出
        mouseleave () {
            console.log('mouseleave')
            this.show_plus = false
        },
    }
}
</script>

<style lang="less" scoped>
#suspension {
    width: 100%;
    .portrait-center {
        width: 100px;
        height: 100px;
        position: relative;
        .tangerine1 {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        .tangerine2 {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 2;
            opacity: 0;
            transition: all 0.45s ease-out;
            i {
                font-size: 26px;
                color: #8c939d;
            }
        }
        &:hover .tangerine2 {
            opacity: 1;
        }
    }

    .domineering {
        width: 320px;
        height: 180px;
        padding: 18px;// 为了从中心向外放大，不然会从左向右放大
        box-sizing: border-box;
        position: relative;
        border: 1px solid #3f5075;
        .rabbit1 {
            width: 100%;
            height: 100%;
            overflow: hidden;
            .yujie {
                width: 100%;
                height: 100%;
                transition: all 0.45s ease-out;// 过渡特效 鼠标移走动画变回原来大小也要过渡，所以放hover不合适
            }
        }
        .rabbit2 {
            width: calc(100% - 36px);
            height: calc(100% - 36px);
            background-color: rgba(0,0,0,.4);
            display: flex;
            align-items: center;
            justify-content: center;
            opacity: 0;
            transition: all 0.45s ease-out;
            position: absolute;
            left: 18px;
            top: 18px;
            .play-open {
                width: 25px;
                height: 25px;
                transition: all 0.45s ease-out;
            }
        }
        &:hover .yujie {
            transform: scale(1.1);// 放大
        }
        &:hover .rabbit2 {
            opacity: 1;
        }
        &:hover .play-open {
            transform: scale(1.8);
        }
    }
    .activity-list {
        width: 100%;
        ul {
            width: 100%;
            li {
                width: 100%;
                height: 252px;
                padding: 15px;
                border: 1px solid #3f5075;
                img {
                    width: 100%;
                    height: 100%;
                    border-radius: 16px;
                    transition: all .8s ease;
                    &:hover {
                        transform: scale(1.02);
                    }
                }
            }
        }
    }
    .limited-time {
        width: 100%;
        height: 70px;
        text-align: center;
        line-height: 70px;
        background: #fff;
        font-size: 14px;
        color: #3f5075;
        transition: .36s;
        &:hover {
            font-size: 16px;
            color: #249cfc;
        }
    }
}
</style>

