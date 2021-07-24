<template>
    <section>
        <!-- 
            $tc , $t , $te , v-t
            1.$tc 用于复数，例如英文一般分单复数
            apple: 'no apples | one apple | {count} apples',

            2.$t用于非复数
            3.$te 返回的是boolean值，判断key是否存在。

            4.v-t 指令
            写法：字符串---双单引号包裹
            <p v-t="'hello'"></p >
            写法：数据绑定
            <p v-t="path"></p >
         -->
        ----{{$t("button.assignRole")}}-----{{$t("home.title")}}-----
            <el-button @click="translate('zh')">中文翻译</el-button>----<el-button@click="translate('en')">英文翻译</el-button>
        <h3>ui组件多语言翻译:</h3>
        <pagination :pagination="queryData" :pageStep="[10,15]" @emitWay="sunQuery"></pagination>
    </section>
</template>

<script>
import pagination from '@/explore/components/pagination.vue';
export default {
    name: 'multilingual',
    components: { pagination },
    data(){
        return {
            queryData: {
                page: 1,
                pagesize: 15,
                total: 0
            }
        }
    },
    beforeCreate() {
        const lang = this.$i18n.locale;
        console.log("lang==", lang);
        const locals = require(`../locals/${this.$options.name}_${lang}`).default;
        this.$i18n.mergeLocaleMessage(lang, locals);// 动态添加语言
    },
    methods: {
        sunQuery(){

        },
        translate(value) {
            if (value == "zh") {
                // this.$i18n.locale = 'en'
                sessionStorage.setItem("language", "zh");
            } else if (value == "en") {
                // this.$i18n.locale = 'zh'
                sessionStorage.setItem("language", "en");
            }
            window.location.reload();
        }
    }
}
</script>

<style lang="less" scoped>

</style>