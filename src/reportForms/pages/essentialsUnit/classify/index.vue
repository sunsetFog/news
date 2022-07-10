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
            <div id="box1" ref="box1"></div>
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
            venus_active: 0
        }
    },
    methods: {
        winChange(value, item) {
            console.log("--value--", value)
            console.log("--item--", item)
            this.gundong()
        },
        gundong() {
            let tata = this.$refs.box0;
            // let scrollHight = tata.documentElement.scrollTop || tata.body.scrollTop;
            console.log("-----7766-----", tata);

            let yyaa = this.$refs.box2;
            // let yatw = yyaa.documentElement.scrollTop || yyaa.body.scrollTop;
            console.log("-----5522-----", yyaa);
            
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
        div:nth-of-type(1) {
            width: 100%;
            height: 500px;
            background: hotpink;
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


