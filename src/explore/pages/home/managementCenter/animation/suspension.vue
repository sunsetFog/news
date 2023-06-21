<template>
    <section id="suspension">
        <!-- 方法1：  -->
        <div class="portrait-center" @mouseover="mouseover" @mouseleave="mouseleave">
            <div>
                <img src="@static/reportForms/image/invoice.png"/>
            </div>
            <div v-show="show_plus">
                <i class="el-icon-plus"></i>
            </div>
        </div>

        <br><br>
        <!-- 方法2： -->
        <div class="domineering">
            <img src="@static/video/play-open.png"/>
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
        // 鼠标移入
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
        div:nth-of-type(1) {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            img {
                width: 100%;
                height: 100%;
            }
        }
        div:nth-of-type(2) {
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
            i {
                font-size: 26px;
                color: #8c939d;
            }
        }
    }

    .domineering {
        width: 288px;
        height: 160px;
        background-image: url("~@static/video/yujie.jpg");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
            width: 25px;
            height: 25px;
            opacity: 0;
            transition: all 0.25s ease-out;// 过渡特效
        }
        &:hover img {
            opacity: 1;
            transform: scale(2.5);// 放大
        }
    }
    .activity-list {
        width: 100%;
        ul {
            width: 100%;
            li {
                width: 100%;
                height: 252px;
                padding: 12px;
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
        transition: .3s;
        padding: 47px 0 0;
        &:hover {
            font-size: 16px;
            color: #249cfc;
        }
    }
}
</style>

