<template>
    
</template>

<script>
export default {
    name: "defaultPath",
    data() {
        return {

        }
    },
    beforeCreate() {
        this.$router.push({ path: "/home/world/world"})
    }
}
</script>

