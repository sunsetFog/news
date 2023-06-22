<template>
    <section id="suspension">
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

