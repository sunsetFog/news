<template>
    <section id="rootVariable">
        --rootVariable--

    </section>
</template>
<!--
    CSS 变量教程
    https://blog.csdn.net/qq_32247819/article/details/123788346

    var()函数 参数2表示变量的默认值。如果该变量不存在，就会使用这个默认值
    calc()函数 字符串拼接--添加单位  height: calc(var(--boxHeight) * 1px);
    作用域: :root是html标签内能访问css变量
 -->
<script>
// 设置变量
document.body.style.setProperty('--boxHeight', '250px');

// 读取变量
// document.body.style.getPropertyValue('--boxHeight').trim();

// 删除变量
// document.body.style.removeProperty('--boxHeight');
</script>

<style lang="postcss" scoped>
#rootVariable {
    width: 100%;
    height: var(--boxHeight, '200px');
    color: var(--color-success);
    @mixin fontBold;
    @apply --fontCommon;
}
</style>
