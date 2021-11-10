<template>
    <section>
        <!-- 
            vue项目网页全屏功能screenfull   https://blog.csdn.net/yang1393214887/article/details/105687717
         -->
         <el-button icon="el-icon-full-screen" v-if="!isFullscreen" type="primary" @click.prevent.stop="screenfull">
            全屏
        </el-button>
    </section>
</template>

<script>
import screenfull from 'screenfull'
export default {
    name: 'screenfull',
    data() {
        return {
            isFullscreen: false
        }
    },
    mounted() {
        if (screenfull.enabled) {
            screenfull.on('change', this.change)
        }
    },
    methods: {
        screenfull() {
            if (!screenfull.enabled) {
                this.$message({
                    message: 'you browser can not work',
                    type: 'warning'
                })
                return false
            }
            screenfull.toggle()
        },
        change() {// 监听控制按钮显示隐藏
            this.isFullscreen = screenfull.isFullscreen;
        }
    },
    beforeDestroy(){
        if (screenfull.enabled) {
            screenfull.off('change', this.change)
        }
    }
}
</script>
