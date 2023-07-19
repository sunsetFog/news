<template>
    <section id="base64">
        <!-- Base64加密解密站长工具  http://tool.chinaz.com/Tools/Base64.aspx -->
        <ul>
            <li v-for="item in encryption">
                ------原来: {{item.title1}}------加密: {{item.title2}}------解密: {{decodeWay(item.title2)}}
            </li>
        </ul>
    </section>
</template>

<script>
const Base64 = require("js-base64").Base64
export default {
    data(){
        return{
            encryption: [{title1: '彤彤'},{title1: '小彬'},{title1: '里克'},{title1: '123456'}],
        }
    },
    created() {
        for (let i = 0; i < this.encryption.length; i++) {
            let item = this.encryption[i];
            item.title2 = Base64.encode(item.title1);// base64加密
        }
    },
    methods: {
        decodeWay(value) {
            return Base64.decode(value);// // base64解密
        }
    }
}
</script>

<style lang="less" scoped>
#base64{
    ul{
        li{
            .mixin_li(100%,50px);
            color: @color_blueviolet;
        }
    }
}
</style>

