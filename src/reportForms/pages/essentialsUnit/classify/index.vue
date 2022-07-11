<template>
    <section id="classify">
        <section class="cartoon-apt">
            <van-sidebar v-model="venus_active" style="width: 100%;" @change="winChange">
                <van-sidebar-item title="服装" url="#box1"/>
                <van-sidebar-item title="橱柜" url="#box2"/>
                <van-sidebar-item title="配件" url="#box3"/>
            </van-sidebar>
        </section>

        <section class="comic-apt" ref="box0">
            <div id="box1" ref="box1">
                <ul>
                    <li v-for="(item, index) in mercury_list">
                        <div class="honey">
                            <img :src="item.icon"/>
                        </div>
                        <span>{{item.title}}</span>
                    </li>
                </ul>
            </div>
            <div id="box2" ref="box2"></div>
            <div id="box3" ref="box3"></div>
        </section>
    </section>
</template>

<script>
export default {
    name: "classify",
    data() {
        return {
            venus_active: 0,
            mercury_list: [
                { title: '内裤', icon: 'p0', path: '' },
                { title: '内衣', icon: 'p1', path: '' },
                { title: '袜子', icon: 'p2', path: '' },
                { title: '大衣', icon: 'p3', path: '' },
                { title: '家居服', icon: 'p4', path: '' },
                { title: '衬衫', icon: 'p5', path: '' },
                { title: '外套', icon: 'p6', path: '' }
            ]
        }
    },
    created() {
        for (let index = 0; index < this.mercury_list.length; index++) {
            let item = this.mercury_list[index];
            item.icon = require('@static/mall/classify/' + item.icon + '.png');
        }
    },
    methods: {
        winChange(value, item) {
            console.log("--value--", value)
            console.log("--item--", item)
        }
    }
}
</script>

<style lang="less" scoped>
#classify {
    width: 100%;
    .cartoon-apt {
        width: 100px;
        min-height: 600px;
        background: blueviolet;
        float: left;
    }
    .comic-apt {
        width: 275px;
        height: 600px;
        float: right;
        overflow-y: auto;
        background: yellowgreen;
        #box1 {
            width: 100%;
            height: 500px;
            background: hotpink;
            ul {
                width: 100%;
                li {
                    width: 102px;
                    height: 102px;
                    background: #fff;
                    float: left;
                    margin: 6px 17.5px;
                    .honey {
                        width: 100%;
                        height: 70px;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        img {
                            width: 42px;
                            height: 42px;
                        }
                    }
                    span {
                        width: 100%;
                        height: 15px;
                        text-align: center;
                        line-height: 15px;
                        font-size: 13px;
                        display: inline-block;
                    }
                }
            }
        }
        div:nth-of-type(2) {
            width: 100%;
            height: 500px;
            background: yellowgreen;
        }
        div:nth-of-type(3) {
            width: 100%;
            height: 500px;
            background: peru;
        }
    }
}
</style>


