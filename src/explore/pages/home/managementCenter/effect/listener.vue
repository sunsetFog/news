<template>
    <section id="listener">
        <el-button @click="gundongweizhi()">滚动位置</el-button>
        <el-button class="xianshi" v-show="roll_ios">显示按钮</el-button>
    </section>
</template>

<script>
export default {
    name: 'listener',
    data(){
        return{
            roll_ios: true
        }
    },
    created () {
        // 监听浏览器窗口大小
        window.addEventListener("resize", this.renderResize);
        // 监听浏览器键盘
        window.addEventListener("keyup", this.keyUpBoard);
        // 监听浏览器关闭和刷新
        window.addEventListener('beforeunload', this.beforeunloadHandler)
    },
    mounted(){
        // 监听浏览器滚动
        window.addEventListener("scroll", this.handleScroll);
        // this.keyboard();
    },
    destroyed:function(){// 在销毁的生命周期里删除监听
        window.removeEventListener("resize", this.renderResize);
        window.removeEventListener("scroll", this.handleScroll);
        window.removeEventListener("keyup", this.keyUpBoard);
        window.removeEventListener('beforeunload', this.beforeunloadHandler)
    },
    methods: {
        beforeunloadHandler() {
            console.log('--value--')
        },
        renderResize(){
            console.log('监听浏览器窗口大小变化');
        },
        handleScroll(){
            console.log('监听滚动变化');
            var big_box_scroll = document.getElementById('app');
            // console.log('app++999',big_box_scroll)
            var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            // console.log('top-666',scrollTop,big_box_scroll.offsetHeight*0.02)
            if(scrollTop>big_box_scroll.offsetHeight*0.02){
                // console.log('111111')
                this.roll_ios = true;
            }else{
                this.roll_ios = false;
                // console.log('0000000000')
            }
        },
        keyUpBoard(e){//3.监听电脑键盘
            console.log('--键码--', e.keyCode);
            if(e.keyCode == 27) {

            }
        },
        keyboard(){// 监听电脑键盘 这个有些键无效
            let that = this;
            document.onkeypress = function(e) {
                var keycode = document.all ? event.keyCode : e.which;
                console.log('keycode',keycode);
                if (keycode == 13) {//13是键盘Enter键
                        
                }
            };
        },
        gundongweizhi(){
            var big_box = document.getElementById('app');
            document.documentElement.scrollTop = document.body.scrollTop = big_box.offsetHeight*0.02;
        }
    }
}
</script>

<style lang="less" scoped>
#listener{
    .xianshi{
        position: fixed;
        right: 80px;
        bottom: 700px;
    }
}
</style>