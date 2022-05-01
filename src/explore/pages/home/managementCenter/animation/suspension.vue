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
        }
    }
    .domineering:hover img {
        opacity: 1;
        transform: scale(2.5);// 放大
        transition: all 0.25s ease-out;// 过渡特效
    }
}
</style>

