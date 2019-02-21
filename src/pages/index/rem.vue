<template>
    <section>
        <!-- rem设置看本项目index.html -->
        <div class="adapt">移动端px转rem</div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style>
/* 375的设计图量像素除以16 */
/* 345/16=21.5625
    40/16=2.5
    15/16=0.9375 
    margin得转rem,除了百分比，横屏的都要自适应
*/
    .adapt{
        width: 21.5625rem;
        height: 2.5rem;
        margin-left: 0.9375rem;
        background: plum;
        text-align: center;
        line-height: 2.5rem;
        color: white;
    }
</style>


