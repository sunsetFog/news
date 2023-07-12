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
        <button :class="{'prev': true, 'btn-active': pointNum == 0 }" @click="prevWay"></button>
        <button :class="{'next': true, 'btn-active': pointNum == 10 }" @click="nextWay"></button>
        <main>
            <ul :style="moveApt" @mousedown="downWay" @mousemove="moveWay" id="to-go">
                <!-- 
                    前后多了空li，因为中间那个才是选中页
                 -->
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
        <p class="shadow">{{moveApt}}</p>
    </section>
</template>
<!-- 
    需要精密计算

    问题：拖拽卡顿？
    查看性能消耗：
        Chrome Performance 工具尝试查找性能瓶颈
    卡顿原因：
        鼠标移动事件触发非常多，动画用computed执行了，computed是vue的属性绑定，渲染过多会导致性能消耗大，从而卡顿
    解决卡顿：
        拖动中执行的动画要用js操作Dom
    如何丝滑？
        在Vue中，渲染过多的数据可能会导致滑动卡顿。因此，我们需要注意减少渲染的数据量，只渲染当前可视区域的数据
        可以使用Vue的虚拟滚动组件来实现
 -->
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
            pointNum: 0,// 第几页
            li_width: 450,// 一页的宽度，只是用来计算
            startX: 0, // 鼠标开始拖动的x坐标
            saveNum: 0, // 开始拖动时，当前位置值
            takeNum: -1, // 拖动中，第几页
        }
    },
    computed: {
        moveApt: {
            get() {
                console.log("--get--")
                return 'transform: translate3d(-' + Math.abs(this.pointNum*this.li_width) + 'px, 0px, 0px);transition: all 0.45s linear;';
            },
            set(value) {// set没用过
                console.log("--set--", value)
                this.pointNum = value;
            }
        }
    },
    created () {
        window.addEventListener("mouseup", this.upWay);
    },
    methods: {
        // 上一页
        prevWay() {
            if(this.pointNum != 0) {
                this.pointNum--;
            }
            console.log("--prevWay--", this.pointNum);
        },
        // 下一页
        nextWay() {
            if (this.pointNum != 10) {
                this.pointNum++;
            }
            console.log("--nextWay--", this.pointNum);
        },
        // 鼠标按下事件
        downWay(event) {
            event.preventDefault();// 解决拖动mouseup不触发
            // console.log("--downWay--", event);
            this.startX = event.clientX;
            // 当前位置值
            let toGo = document.getElementById("to-go");
            this.saveNum = toGo.style.transform.split('translate3d(')[1].split('px, 0px, 0px)')[0];
            this.saveNum = Number(this.saveNum);
        },
        // 鼠标移动事件，触发很多
        moveWay(event) {
            if(this.startX != 0) {
                // 已知拖动距离，正数是左拖动，负数是右拖动
                let movingDistance = event.clientX - this.startX;
                // 已知拖至位置值
                let toNum = this.saveNum + movingDistance;
                console.log("--moveWay--", event.clientX, ' - ', this.startX, ' = ', movingDistance, ' + ', this.saveNum, ' = ', toNum);
                // 限制拖动范围
                if (toNum > 0) {
                    toNum = 0;
                } else if (toNum < -this.li_width*10) {
                    toNum = -this.li_width*10;
                }
                // 已知第几页，需要整数
                this.takeNum = Math.abs(toNum)/this.li_width;
                console.log("--小数--", this.takeNum);
                this.takeNum = Math.round(this.takeNum);
                console.log("--四舍五入--", this.takeNum, -this.li_width*10);
                //  拖动中动画，去掉过渡
                let toGo = document.getElementById("to-go");
                toGo.style = 'transform: translate3d(-' + Math.abs(toNum) + 'px, 0px, 0px);transition: none;';
            }
        },
        // 鼠标抬起事件，别绑定在小范围标签上，因为移出范围就不触发了
        upWay(event) {
            if(this.takeNum != -1) {
                console.log("--upWay--", this.takeNum == this.pointNum);
                
                let toGo = document.getElementById("to-go");
                /*
                    鼠标抬起动画
                        1.pointNum值没变化，触发不了computed的
                        解决：用js操作Dom，执行动画
                        2.用computed动画，因为pointNum值需要改变
                */
                if (this.takeNum == this.pointNum) {
                    toGo.style = 'transform: translate3d(-' + Math.abs(this.takeNum*this.li_width) + 'px, 0px, 0px);transition: all 0.45s linear;';
                } else {
                    // 拖动完，加回过渡
                    toGo.style.transition = 'all 0.45s linear';
                    this.pointNum = this.takeNum;
                }
                // 拖动完，鼠标开始坐标变0，判断用
                this.startX = 0;
                this.saveNum = 0;
                this.takeNum = -1;
            }
        },
    },
    destroyed() {
        window.removeEventListener("mouseup", this.upWay);
    }
}
</script>

<style lang="less" scoped>
@li-width: 450px;// 一页的宽度
@main-height: 320px;
@header-height: 200px;
#rotationChart {
    width: @li-width * 3 + 120;
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
                background-size: @li-width * 3 100%;// 重点在图片的宽、div的宽
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
            cursor: pointer;
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
    .btn-active {
        opacity: 0.4;
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

