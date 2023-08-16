<template>
    <section id="rootVariable">
        --rootVariable--

    </section>
</template>
<!--
    CSS 变量教程
    https://blog.csdn.net/qq_32247819/article/details/123788346

    var()函数 参数2表示变量的默认值。如果该变量不存在，就会使用这个默认值
    没单位时，用calc()计算函数，字符串拼接单位
    作用域: :root是html标签内能访问css变量
 -->
<script>
// 设置变量
document.body.style.setProperty('--boxHeight1', '250px');
document.body.style.setProperty('--boxHeight2', '250');

// 读取变量
// document.body.style.getPropertyValue('--boxHeight').trim();

// 删除变量
// document.body.style.removeProperty('--boxHeight');
</script>

<style scoped>
#rootVariable {
    width: 100%;
    height: var(--boxHeight1, '200px');
    line-height: calc(var(--boxHeight2) * 1px);
    color: var(--color-success);
    background: #F0F3F5;
    font-family: Montserrat, Arial, Helvetica, sans-serif;
    /* @mixin fontBold; */
    /* @apply --fontCommon; */
}
</style>
