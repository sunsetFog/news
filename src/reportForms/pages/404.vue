<template>
    <section id="error">
        <p>
            <van-icon name="clear"/>
            404&nbsp;找不到该页，请检查您输入的网址是否正确！
        </p>
    </section>
</template>

<script>
export default {
    name: 'error'
}
</script>

<style lang="less" scoped>
#error {
    width: 100%;
    p {
        width: 375px;
        height: 35px;
        line-height: 35px;
        font-size: 14px;
        padding: 200px 0 0 0;
        i {
            font-size: 26px;
            vertical-align: middle;
        }
    }
}
</style>
