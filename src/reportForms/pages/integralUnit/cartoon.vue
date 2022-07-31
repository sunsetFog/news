<template>
    <div class="cartoon-apt">
        <ul>
            <li v-for="(item, index) in with_list" @click="appleWay(item, index)">
                <p>{{item.title}}</p>
                <p>{{item.value}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "cartoon",
    data() {
        return {
            with_list: [
                { title: '累计获得', value: 1000, path: '/integralUnit/index' },
                { title: '累计使用', value: 800, path: '' },
                { title: '累计节省', value: '￥8.00', path: '' }
            ],
        }
    },
    methods: {
        appleWay(item, index) {
            this.$router.push({
                path: item.path
            })
        }
    }
}
</script>

<style lang="less" scoped>
.cartoon-apt {
    width: 100%;
    height: 72px;
    background: #fff;
    border: 1px solid @color_edge;
    ul {
        width: 100%;
        height: 100%;
        li {
            width: 33.3%;
            height: 100%;
            float: left;
            padding: 10px 0 0 0;
            box-sizing: border-box;
            border-right: 1px solid @color_edge;
            p {
                width: 100%;
                padding: 4px 0;
                box-sizing: border-box;
                font-size: 13px;
            }
            p:nth-of-type(1) {

            }
            p:nth-of-type(2) {
                font-size: 15px;
                color: @color_lv;
                font-weight: 600;
            }
        }
        li:last-child {
            border: none;
        }
    }
}
</style>

