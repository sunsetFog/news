<template>
    <section id="introduction">
        <bannerRotation></bannerRotation>
    </section>
</template>

<script>
import bannerRotation from './bannerRotation'
export default {
    name: 'introduction',
    components: { bannerRotation }
}
</script>

<style lang="less" scoped>
#introduction {
    .custom-indicator {
        position: absolute;
        right: 5px;
        bottom: 5px;
        padding: 2px 5px;
        font-size: 12px;
        background: rgba(0, 0, 0, 0.1);
    }
}
</style>


