<template>
    <section id="import-ex">
        <div class="quality">
            <span>{{loading}}</span>
        </div>
    </section>
</template>

<script>
/*

导出：export            导入必须花括号,取名一致：import {  }
默认导出：export default     每个模块只允许一个默认导出,导入不需要花括号，取名可不一致
导入：import

*/

// 对应---默认导出：export default
import haha2 from './quote/exportImport'
console.log('--export default--', haha2)

// 对应---导出：export
import { gogo } from './quote/exportImport'
console.log('导入---取对象属性', gogo)

// 对应---导出：export
import { gogo as mingming } from './quote/exportImport'
console.log('导入---as重命名', mingming)

// 对应---导出：export 和 默认导出
import * as suoyou from './quote/exportImport'
console.log('获取所有导出并合并成一个对象', suoyou)



// 导入js
import constroller from './quote/quote_constroller.js';
export default constroller;
</script>

<style lang="less" scoped>
// 导入样式
@import './quote/quote_constroller.less';
</style>
