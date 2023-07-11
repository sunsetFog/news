<template>
    <section id="rotationChart">
        <header>
            <ul>
                <li v-for="(item, index) in vip_list" :key="index" @click="pointNum = index">
                    <img :src="require(`@static/picture/rotationChart/vipIcon/vip_icon_${index}_ash.png`)"/>
                    <p>{{ item.name }}</p>
                </li>
                <div></div>
                <div :style="{width: 135*pointNum + 'px'}"></div>
            </ul>
        </header>
        <button class="prev" @click="prevWay"></button>
        <button class="next" @click="nextWay"></button>
        <main>
            <ul :style="moveWay">
                <li></li>
                <li v-for="(item, index) in vip_list" :key="index">
                    <div :class="{'parallax': pointNum == index}">
                        <img :src="require(`@static/picture/rotationChart/card_vip${index}.png`)"/>
                        <img v-if="index < 5" :src="require(`@static/picture/rotationChart/vip_icon_unlock.png`)"/>
                        <img v-else :src="require(`@static/picture/rotationChart/vip_icon_locked.png`)"/>
                    </div>
                </li>
                <li></li>
            </ul>
        </main>
        <p class="shadow">{{moveWay}}</p>
    </section>
</template>

<script>
export default {
    name: 'rotationChart',
    data() {
        return {
            vip_list: [
                { name: 'vip0' },
                { name: 'vip1' },
                { name: 'vip2' },
                { name: 'vip3' },
                { name: 'vip4' },
                { name: 'vip5' },
                { name: 'vip6' },
                { name: 'vip7' },
                { name: 'vip8' },
                { name: 'vip9' },
                { name: 'vip10' }
            ],
            pointNum: 0,
        }
    },
    computed: {
        moveWay: function(){
            console.log("--moveWay--", this.pointNum);
            return 'transform: translate3d(-' + this.pointNum*450 + 'px, 0px, 0px);';
        }
    },
    methods: {
        prevWay() {
            if(this.pointNum != 0) {
                this.pointNum--;
            }
            console.log("--prevWay--", this.pointNum);
        },
        nextWay() {
            if (this.pointNum != 10) {
                this.pointNum++;
            }
            console.log("--nextWay--", this.pointNum);
        },
    }
}
</script>

<style lang="less" scoped>
@li-width: 450px;
@main-height: 320px;
@header-height: 200px;
#rotationChart {
    width: @li-width * 3 + 120;// 1420
    padding: @header-height 60px 44px 60px;
    background-color: #f1f6fc;
    margin: 0 auto;
    position: relative;
    header {
        width: 100%;
        height: @header-height;
        padding: 0 60px;
        position: absolute;
        left: 0;
        top: 0;
        ul {
            width: 100%;
            height: 100%;
            position: relative;
            li {
                width: 64px;
                float: left;
                position: absolute;
                z-index: 3;
                img {
                    width: 100%;
                    height: 64px;
                }
                p {
                    width: 100%;
                    height: 22px;
                    margin-top: 4px;
                }
            }
            @init-left: -28px;
            @add-height: 9.2px;
            @add-width: 70.9px;
            li:nth-of-type(1) {
                left: @init-left;
                top: 85px;
            }
            li:nth-of-type(2) {
                left: @init-left + 64 * 1 + @add-width * 1;
                top: 70px;
            }
            li:nth-of-type(3) {
                left: @init-left + 64 * 2 + @add-width * 2;
                top: 58px;
            }
            li:nth-of-type(4) {
                left: @init-left + 64 * 3 + @add-width * 3;
                top: 47px;
            }
            li:nth-of-type(5) {
                left: @init-left + 64 * 4 + @add-width * 4;
                top: 41px;
            }
            li:nth-of-type(6) {
                left: @init-left + 64 * 5 + @add-width * 5;
                top: 40px;
            }
            li:nth-of-type(7) {
                left: @init-left + 64 * 6 + @add-width * 6;
                top: 42px;
            }
            li:nth-of-type(8) {
                left: @init-left + 64 * 7 + @add-width * 7;
                top: 47.5px;
            }
            li:nth-of-type(9) {
                left: @init-left + 64 * 8 + @add-width * 8;
                top: 56px;
            }
            li:nth-of-type(10) {
                left: @init-left + 64 * 9 + @add-width * 9;
                top: 70px;
            }
            li:nth-of-type(11) {
                left: @init-left + 64 * 10 + @add-width * 10;
                top: 88px;
            }
            div {
                height: 52px;
                background: yellowgreen;
                position: absolute;
                left: 0;
                top: (@header-height - 52)/2;
            }
            div:nth-of-type(1) {
                width: @li-width * 3;
                background: url('~@static/picture/rotationChart/vipIcon/line_un.png');
                background-size: 100% 100%;
                background-repeat: no-repeat;
                z-index: 1;

            }
            div:nth-of-type(2) {
                background: url('~@static/picture/rotationChart/vipIcon/line_ac.png');
                background-size: @li-width * 3 100%;
                background-repeat: no-repeat;
                transition: all 0.3s linear;
                z-index: 2;
            }
        }
    }
    main {
        width: @li-width * 3;
        height: @main-height;
        overflow: hidden;
        ul {
            width: @li-width * 13;
            height: 100%;
            transition: all 0.45s linear;
            li {
                width: @li-width;
                height: 100%;
                float: left;
                padding: (@main-height - 188)/2 (@li-width - 390)/2 (@main-height - 188)/2 (@li-width - 390)/2;
                div {
                    width: 100%;
                    height: 100%;
                    position: relative;
                    img:nth-of-type(1) {
                        width: 100%;// 390
                        height: 100%;// 188
                        transition: all 0.45s linear;
                    }
                    img:nth-of-type(2) {
                        width: 90px;
                        height: 42px;
                        position: absolute;
                        left: 0;
                        top: 0;
                    }
                }
                .parallax {
                    transform: scale(1.13) translate3d(0px, 0px, 20px);
                }
            }
        }
    }
    .prev, .next {
        width: 40px;
        height: 64px;
        position: absolute;
        top: (@main-height - 64)/2 + @header-height;
    }
    .prev {
        left: 10px;
        background: url('~@static/picture/rotationChart/vip_icon_left_sele.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &:hover {
            background: url('~@static/picture/rotationChart/vip_icon_left.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }
    .next {
        right: 10px;
        background: url('~@static/picture/rotationChart/vip_icon_right_sele.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        &:hover {
            background: url('~@static/picture/rotationChart/vip_icon_right.png');
            background-size: 100% 100%;
            background-repeat: no-repeat;
        }
    }
    .shadow {
        width: @li-width;
        height: 44px;
        background: url('~@static/picture/rotationChart/shadow.png');
        background-size: 100% 100%;
        background-repeat: no-repeat;
        position: absolute;
        left: (@li-width * 2 + 120)/2;
        bottom: 0px;
    }
}
</style>

