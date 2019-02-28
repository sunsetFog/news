
<template>
    <section id="backToTop">
        <div style="width: 34.5rem;margin: 1.5rem 0rem 0rem 1.5rem;height: 150rem;background: white;"></div>
        <div @click="backTop" class="toTop">
            <img src="../../../static/image/backToTop.png"/>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
        }
    },
    created(){
        // 不限制高度，要在body里加背景颜色
        var body_color = document.getElementsByTagName('body')[0];
        body_color.style.background = "#f2f2f2";
    },
    methods:{
        // 返回顶部
        backTop() {
            var scrollHight = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset
            console.log('scrollTop',scrollHight);
            if (scrollHight > 50) {
                document.documentElement.scrollTop = document.body.scrollTop = (scrollHight - 40)
                setTimeout(() => {
                this.backTop()
                }, 10)
            } else {
                document.documentElement.scrollTop = document.body.scrollTop = 0
            }
        }

    }
}
</script>

<style lang="less" rel="stylesheet/less" scoped>
#backToTop{
    width: 100%;
    .toTop{
        width: 5rem;
        height: 5rem;
        position: fixed;
        bottom: 5rem;
        right: 2rem;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
