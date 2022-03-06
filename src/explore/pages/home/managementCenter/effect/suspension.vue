<template>
    <section id="suspension">
        <div class="portrait-center" @mouseover="mouseover" @mouseleave="mouseleave">
            <div>
                <img src="@static/reportForms/image/invoice.png"/>
            </div>
            <div v-show="show_plus">
                <i class="el-icon-plus"></i>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'suspension',
    data() {
        return {
            show_plus: false
        }
    },
    methods: {
        // 鼠标移入
        mouseover () {
            console.log('mouseover')
            this.show_plus = true
        },
        // 鼠标移出
        mouseleave () {
            console.log('mouseleave')
            this.show_plus = false
        },
    }
}
</script>

<style lang="less" scoped>
#suspension {
    width: 100%;
    .portrait-center {
        width: 100px;
        height: 100px;
        position: relative;
        div:nth-of-type(1) {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            img {
                width: 100%;
                height: 100%; 
            }
        }
        div:nth-of-type(2) {
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.7);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            position: absolute;
            left: 0px;
            top: 0px;
            z-index: 2;
            i {
                font-size: 26px;
                color: #8c939d;
            }
        }
    }
}
</style>

