<template>
    <section id="import-ex">
        <div class="quality">
            <span>{{loading}}</span>
        </div>
    </section>
</template>

<script>
// 引用js
import constroller from './quote/quote_constroller.js';
export default constroller;
</script>

<style lang="less" scoped>
// 引入less
@import './quote/quote_constroller.less';
</style>
