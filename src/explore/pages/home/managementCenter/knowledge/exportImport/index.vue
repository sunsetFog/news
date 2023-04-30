<template>
    <section id="import-ex">
        <div class="quality">
            <span>{{loading}}</span>
        </div>
    </section>
</template>

<script>
/*

导出变量：export            导入必须花括号,取名一致：import {  }
默认导出：export default     每个模块只允许一个默认导出,导入不需要花括号，取名可不一致
导入变量：import

*/

import haha2, { gogo } from './exportImport'
console.log('--export default默认导出--', haha2)

// import { gogo } from './exportImport'
console.log('--导出变量--', gogo)

import { gogo as mingming } from './exportImport'
console.log('导入变量---as重命名', mingming)

/*
    误解：
        1.获取的是js文件里的所有导出，而不是文件夹里的所有导出
        2.会合并一个对象的，vuex里的js里有四个状态不能合并的

 */
import * as suoyou from './exportImport'
console.log('获取所有导出并合并成一个对象', suoyou)



// 导入js
import constroller from './quote_constroller.js';
export default constroller;
</script>

<style lang="less" scoped>
// 导入样式
@import './quote_constroller.less';
</style>
