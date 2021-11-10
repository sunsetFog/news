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
    mounted(){//在dom操作的生命周期里添加监听
        window.addEventListener("resize", this.renderResize, false);
        window.addEventListener("scroll", this.handleScroll);
        this.keyboard();
    },
    destroyed:function(){//在销毁的生命周期里删除监听
        window.removeEventListener("resize", this.renderResize, false);
        window.removeEventListener("scroll", this.handleScroll);
    },
    methods: {
        renderResize(){//1.
            console.log('监听浏览器窗口大小变化');
        },
        handleScroll(){//2.
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
        keyboard(){//3.监听电脑键盘
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