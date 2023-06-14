<template>
    <section>
        defaultPath
    </section>
</template>

<script>
export default {
    name: "defaultPath",
    data() {
        return {

        }
    },
    beforeCreate() {
        this.$router.push({ path: "/login"})
    }
}
</script>
