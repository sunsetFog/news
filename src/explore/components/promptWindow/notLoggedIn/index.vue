<template>
    <section id="notLoggedIn" v-if="showActive" @click.self="showActive = false">
        <main>
            <header>
                温馨提示
                <img src="@/explore/assets/notLoggedIn/close.png" @click="closeWay"/>
            </header>
            <div v-if="isType == 0">
                请先登录账号,才能了解更多
            </div>
            <div v-if="isType == 1">
                 您需要绑定手机号！
            </div>
            <footer v-if="isType == 0">
                <button @click="sureWay">确定</button>
            </footer>
            <footer v-if="isType == 1">
                <button @click="showActive = false">暂不绑定</button>
                <button @click="sureWay" style="margin-left: 40px;">前往绑定</button>
            </footer>
        </main>
    </section>
</template>

<script>
export default {
    name: "notLoggedIn",
    data() {
        return {
            showActive: false,
            isType: 0
        }
    },
    methods: {
        // 判断token是否存在、判断vuex的手机号是否存在
        determineWay(type) {
            this.showActive = true
            this.isType = type
        },
        closeWay() {
            this.showActive = false
        },
        sureWay() {
            // 跳转登录页、绑定手机页
        }
    }
}
</script>

<style lang="less" scoped>
#notLoggedIn {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
    main {
        width: 480px;
        height: 242px;
        border-radius: 16px;
        overflow: hidden;
        animation-duration: .3s!important;
        background: linear-gradient(180deg,#fdfeff 13.02%,#fdfeff 86.98%,#edf7ff);
        box-shadow: 0 4px 10px rgba(125,168,207,.35), inset 0 -2px 0 #93b6d3, inset 0 -3px 2px #aecce4, inset 0 1px 1px #fff;
        header {
            width: 100%;
            height: 52px;
            background: linear-gradient(270deg,#6ac4ff .24%,#2ea7ff 3.89%,#20a0ff 19.27%,#3d72fa 97.33%,#20a0ff);
            text-align: center;
            line-height: 52px;
            font-size: 18px;
            font-weight: 700;
            color: #fff;
            position: relative;
            img {
                width: 32px;
                height: 32px;
                cursor: pointer;
                transition: all .6s;
                position: absolute;
                right: 10px;
                top: 10px;
                &:hover {
                    opacity: 0.9;
                    transform: rotate(-180deg);
                }
            }
        }
        div {
            min-height: 120px;
            padding: 30px;
            font-size: 16px;
            line-height: 1.6;
            color: #3f5075;
            text-align: center;
        }
        footer {
            display: flex;
            justify-content: center;
            padding: 0 20px 30px;
            button {
                width: 126px;
                height: 40px;
                background: linear-gradient(180deg,#fff 27.36%,#d4e4f3 74.94%,#f2f8fc);
                border: 0.5px solid #d5e7f9;
                box-shadow: 0 1px 0 #c8ddef, 0 2px 6px #d5e7f9, inset 0 -2px 4px #fff, inset 0 2px 4px #e9f3fd;
                border-radius: 6px;
                color: #3f5075;
                &:hover {
                    color: #fff;
                    background: linear-gradient(180deg,#81d1ff 3.57%,#1771f9 65.65%,#41afff 97.36%);
                    border: 1px solid #65b5ff;
                    box-shadow: 0 2px 0 #309bfd, 0 4px 8px #b5daff, inset 0 -2px 8px #91caff;
                }
            }
        }
    }
}
</style>
