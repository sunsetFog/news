<template>
    <section id="modifier">
        <!-- .trim过滤首尾的空格 -->
            <input type="text" v-model.trim="value">
        <hr>
        <!-- .lazy鼠标离开input框才会更新数据 -->
            <input type="text" v-model.lazy="value">
        <hr>
        <!-- 限制输入只能是数字 -->
            <input type="text" v-model.number="value">
        <hr>
        <!-- 阻止事件冒泡1 -->
            <Button @click.stop="test">test</Button>
        <hr>
        <!-- 阻止默认行为 比如表单的提交、a标签的跳转就是默认事件-->
            <a @click.prevent="test">a标签</a>
        <hr>
        <!-- 阻止事件冒泡2 -->
            <Button @click.self="test">self</Button>
        <hr>
        <!-- 只执行一次之后都不会再执行 -->
            <Button @click.once="test">once</Button>
        <hr>
        <!-- 事件触发是目标往外冒泡,先1 后2 -->
            <div @click.capture="test(1)">
                <Button @click="test(2)">capture</Button>
            </div>
        <hr>
        <!-- 
            组件事件无效，需要用native才能触发，注意ui组件的使用
            报错时用：Unable to preventDefault inside passive event listener due to target being treated as passive. See
        -->
            <!-- <My-component @click.native="shout(3)"></My-component> -->

        <!-- prevent 阻止浏览器默认动作 ，相当于原生的event.preventDefault() -->
            <!-- <My-component @click.native.prevent="shout(3)"></My-component> -->
        <hr>
        <!-- 监听enter键的指令,要先input焦点，再按enter键才有效 -->
            <input type="text" @keyup.enter="test(1)">
            <Button @click.enter="test(1)">enter</Button>
    </section>
</template>

<script>
export default {
    name: "modifier",
    data(){
        return{
            value: 0
        }
    },
    methods: {
        test(index){
            console.log('触发事件',index);
        }
    }
}
</script>

<style lang="less" scoped>

</style>