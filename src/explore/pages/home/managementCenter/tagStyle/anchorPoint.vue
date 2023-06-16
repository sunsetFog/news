<template>
    <section id="anchorPoint">
        <h3 id="sign1">喵星人</h3>
        <div style="width: 100%;height: 400px;background: blue;"></div>

        <h3 id="sign2">汪星人</h3>
        <!-- <a name="sign2">汪星人</a> -->
        <div style="width: 100%;height: 1200px;background: red;"></div>

        <button>
            <a href="#sign1">去找喵星人</a>
        </button>

        <button @click="toGo">
            去找汪星人
        </button>
    </section>
</template>

<script>
/*

锚点
定位跳至指定位置
滚动不精确 document.documentElement.scrollTop = document.body.scrollTop = 500
标记点id、name属性都行

*/
export default {
    name: "anchorPoint",
    data() {
        return {

        }
    },
    methods: {
        // js方式创建a标签
        toGo() {
        //     let a = document.createElement('a');
        //     a.href = '#sign2';
        //     document.body.appendChild(a);
        //     a.click();
        //     document.body.removeChild(a);

            /*
                问题：锚点能改变url, 使刷新报404
            */
            document.querySelector('#sign2').scrollIntoView(true);
        }
    }
}
</script>

<style lang="less" scoped>
#anchorPoint {
    a {
        color: white;
        margin: 0 20px;
    }

}
</style>


