
<template>
    <section id="back-to-top">
        <div style="width: 100%;margin: 15px 0px 0px 15px;height: 1500px;"></div>
        <div @click="backTop" class="to-top">
            <img src="../../../../static/study/img/backToTop.png"/>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
        }
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

<style lang="less" scoped>
#back-to-top{
    width: 100%;
    .to-top{
        width: 50px;
        height: 50px;
        position: fixed;
        bottom: 50px;
        right: 20px;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
            height: 100%;
        }
    }
}
</style>
