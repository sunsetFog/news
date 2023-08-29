<template>
    <section id="comeOnStage">
        <LineTextLine>平移和放大</LineTextLine>
        <header>
            <button :class="{ 'is-active': isActive == 0 }" @click="isActive = 0">花香电竞</button>
            <button :class="{ 'is-active': isActive == 1 }" @click="isActive = 1">开心电竞</button>
        </header>
        <main v-if="isActive == 0">
            <div class="box-left">
                <label>以客为尊 用心感受</label>
                <p>盘内提供英雄时时乐独特玩法，激情不间断，比赛之余小憩更精彩</p>
            </div>
            <div class="box-right">
                <img src="@static/picture/breezy/electronic01.png" />
            </div>
        </main>
        <main v-if="isActive == 1">
            <div class="box-left">
                <label>以客为尊 用心感受</label>
                <p>盘内提供英雄时时乐独特玩法，激情不间断，比赛之余小憩更精彩</p>
            </div>
            <div class="box-right">
                <img src="@static/picture/breezy/electronic02.png" />
            </div>
        </main>
        <LineTextLine>三秒后消失</LineTextLine>
        <el-button @click="play = !play">开始动画{{play}}</el-button>
        <span class="cartoon" v-if="play">+1</span>
    </section>
</template>

<script>
export default {
    data() {
        return {
            isActive: 0,
            play: false
        }
    }
}
</script>

<style lang="less" scoped>
#comeOnStage {
    header {
        button {
            width: 148px;
            height: 52px;
            padding: 0 0 7px 0;
            background: none;
            box-sizing: border-box;
            background-image: url('~@static/picture/breezy/btn01.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
            color: #3f5075;
        }

        button:nth-of-type(1) {
            margin-right: 15px;
        }

        .is-active {
            color: #fff !important;
            background-image: url('~@static/picture/breezy/btn02.png') !important;
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }

    main {
        width: 100%;
        height: 600px;

        .box-left {
            width: calc(100% - 728px);
            height: 100%;
            float: left;
            animation: content-animation 0.5s ease-in-out;

            label {
                font-size: 16px;
                font-weight: 600;
                color: rgba(0, 0, 0, .85);
            }

            p {
                font-size: 14px;
                color: #3f5075;
                color: #fff;
            }
        }

        @keyframes content-animation {
            0% {
                margin-left: -100px;
                opacity: 0;
            }

            100% {
                margin-left: 0;
                opacity: 1;
            }
        }

        .box-right {
            width: 728px;
            height: 100%;
            float: right;

            img {
                width: 100%;
                height: 100%;
                animation: scale-animation 0.5s ease-out;
            }

            @keyframes scale-animation {
                0% {
                    opacity: 0;
                    transform: scale(0);
                }

                100% {
                    opacity: 1;
                    transform: scale(1);
                }
            }
        }
    }

    @keyframes overturn {
        0% {
            opacity: 1;
        }

        60% {
            opacity: 1;
        }

        100% {
            opacity: 0;
        }
    }
    .cartoon {
        opacity: 0;
        animation: overturn 3s linear;
    }
}</style>
