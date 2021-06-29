<template>
    <section>
        <Button @click="sunCustom">{{params.label}}</Button>
    </section>
</template>

<script>
export default {
    name: 'demo_2s',
    props: {
        params: {
            type: Object,
            default: () => {}
        }
    },
    methods: {
        sunCustom(){
            this.$emit('incident','custom')
        }
    }
}
</script>