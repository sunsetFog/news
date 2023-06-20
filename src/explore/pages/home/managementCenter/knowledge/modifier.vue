<template>
    <section id="modifier">
        <LineTextLine>.trim 过滤首尾的空格</LineTextLine>
        <input type="text" v-model.trim="trimValue">
        &nbsp;&nbsp;&nbsp;
        +{{ trimValue }}+
        <LineTextLine>.lazy 失去焦点才会更新数据</LineTextLine>
        <input type="text" v-model.lazy="lazyValue">
        &nbsp;&nbsp;&nbsp;
        +{{ lazyValue }}+
        <LineTextLine>.number 限制输入只能是数字，失去焦点才过滤</LineTextLine>
        <input type="text" v-model.number="numberValue">
        &nbsp;&nbsp;&nbsp;
        +{{ numberValue }}+
        <LineTextLine>.stop 阻止事件冒泡</LineTextLine>
        <div @click="stopParent">
            <Button @click.stop="stopSon">阻止事件冒泡</Button>
        </div>
        <LineTextLine>.prevent 阻止默认行为 a标签的跳转就是默认事件</LineTextLine>
        <a @click.prevent="preventWay">a标签不跳转</a>
        <LineTextLine>.self 事件冒泡和捕获事件无效，点到自己才触发</LineTextLine>
        <div @click.self="stopParent">
            <Button @click="stopSon">子事件触发，父跳过事件冒泡不触发</Button>
        </div>
        <LineTextLine>.once 只执行一次，之后都不会再执行</LineTextLine>
        <Button @click.once="onceWay">只执行一次</Button>
        <LineTextLine>.capture事件顺序控制 先从外到里的捕获只执行.capture修饰的事件，然后从里到外的冒泡只执行没.capture修饰的事件</LineTextLine>
        <div @click="captureWay(1)">
            <div @click.capture="captureWay(2)">
                <Button @click="captureWay(3)">事件顺序控制</Button>
            </div>
        </div>
        <LineTextLine>.native 组件标签加事件,可以多个修饰符</LineTextLine>
        <footers @click.native.prevent="nativeWay"></footers>
        <LineTextLine>@keyup.enter 监听enter键的指令,要先input焦点，再按enter键才有效</LineTextLine>
        <input type="text" @keyup.enter="enterWay">
    </section>
</template>

<script>
import footers from '@/explore/components/footer.vue';
export default {
    name: "modifier",
    components: { footers },
    data() {
        return {
            trimValue: ' 哈喽 ',
            lazyValue: '懒更新',
            numberValue: 666,
        }
    },
    methods: {
        enterWay() {
            console.log('enter回车事件');
        },
        stopParent() {
            console.log("父盒子事件");
        },
        stopSon() {
            console.log("子盒子事件");
        },
        preventWay(event) {
            console.log("a标签不跳转了", event);
        },
        onceWay() {
            console.log("只执行一次");
        },
        captureWay(index) {
            console.log("事件顺序控制", index);
        },
        nativeWay() {
            console.log("组件标签加事件")
        }
    }
}
</script>

<style lang="less" scoped>
#modifier {

}
</style>
