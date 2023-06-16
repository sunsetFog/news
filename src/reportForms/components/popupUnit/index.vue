<template>
    <section id="popupUnit" @touchStart="touchStart" @touchMove="touchMove">
        <van-popup v-model:show="showLeft" position="left" :style="{ width: '70%', height: '100%', background: '#c7d7e9' }">
            <main>
                <van-tree-select
                :items="menuList"
                :active-id.sync="activeId"
                :main-active-index.sync="activeIndex"
                height="100%"
                @click-item="goWay"
                ></van-tree-select>
            </main>
        </van-popup>
        <van-icon name="apps-o" size="15" color="#2AB795" @click="showLeft = true"/>
    </section>
</template>
<!--
    利用vant组件快速简单的制作一个滑动弹窗 https://blog.csdn.net/weixin_74418395/article/details/128661752
 -->
<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
export default {
    name: "popupUnit",
    data() {
        return {
            showLeft: false,
            startX: 0,
            moveX: 0,
            activeId: 0,
            activeIndex: 0,
            // menuList: [
            //     { text: '浙江', children: [
            //         { id: 1, text: '杭州', path: '/home' },
            //         { id: 2, text: '温州', path: '/login' }
            //     ] },
            //     { text: '江苏', children: [
            //         { id: 3, text: '南京', path: '/home' },
            //         { id: 4, text: '苏州', path: '/login' }
            //     ] },
            // ]
        }
    },
    computed:{
        ...mapGetters(['menuList'])
    },
    watch: {
        menuList(cur, old) {
            this.recursion(this.menuList);
        }
    },
    created() {

    },
    methods: {
        touchStart(event) {
            this.startX = event.touches[0].clientX;
        },
        touchMove(event) {
            this.moveX = event.touches[0].clientX;
            if (this.startX - this.moveX <= 0) {
                this.showLeft = true;
            } else {
                this.showLeft = false;
            }
        },
        goWay(item) {
            console.log("--goWay--", item);
            this.showLeft = false;
            this.$router.push({
                path: item.path
            })
        },
        recursion(arr, index = 0) {
            arr = arr || [];
            for (let i = 0; i < arr.length; i++) {
                let item = arr[i];
                if(this.$route.path == item.path) {
                    console.log("--欧克--", index);
                    this.activeIndex = index;
                    this.activeId = item.id;
                }
                if (!item.children) {
                    continue;
                }
                this.recursion(item.children, i);
            }
        }
    }
}
</script>

<style lang="less" scoped>
#popupUnit {
    width: 100%;
    .van-icon-apps-o {
        position: fixed;
        left: 0px;
        top: 45%;
        z-index: 999;
    }
    main {
        width: 100%;
        height: 100%
    }
}
</style>
