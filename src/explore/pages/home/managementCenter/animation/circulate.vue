<template>
    <section>
        <LineTextLine>无缝连接向上滚动</LineTextLine>
        九宫格抽奖1
        <br/>
        位置：news\src\reportForms\pages\luckDraw\upAndDown.vue
        <LineTextLine>上下移动</LineTextLine>
        <img class="sendOut" src="@static/picture/breezy/sendOut.png"/>
        <LineTextLine>水波</LineTextLine>
        <div class="ripple">
            <img src="@static/picture/breezy/1.png"/>
            <img src="@static/picture/breezy/2.png"/>
        </div>
    </section>
</template>

<script>
</script>

<style lang="less" scoped>
section {
    .sendOut {
        width: 70px;
        height: 70px;
        animation: joyous 2s linear infinite alternate;
    }
    @keyframes joyous {
        from {
            transform: translate3d(0, 0, 0);
        }

        to {
            transform: translate3d(0,20px,0);
        }
    }
    .ripple {
        width: 90px;
        height: 90px;
        margin: 0 auto;
        position: relative;
        img:nth-of-type(1) {
            width: 100%;
            height: 100%;
            opacity: 0.5;
            animation: heart-animate 2s linear infinite;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 1;
        }
        img:nth-of-type(2) {
            width: 100%;
            height: 100%;
            opacity: 0.5;
            animation: heart-animate 2s linear 0.3s infinite;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 2;
        }
        @keyframes heart-animate {
            0% {
                opacity: 1;
                transform: scale(1);
            }

            15% {
                opacity: 0.5;
                transform: scale(1.25);
            }

            30% {
                opacity: 0;
                transform: scale(1.5);
            }

            100% {
                opacity: 0;
                transform: scale(1);
            }
        }
    }
}
</style>