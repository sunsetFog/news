<template>
    <div class="box">
        <div class="headerMenuBox">
            <img
                class="logo"
                src="https://vue-json-schema-form.lljj.me/logo.png"
                alt="Vue JSON Schema Form"
            >
        </div>
        <div class="btns">
            <el-select
                v-if="showVersion"
                :model-value="version"
                :value="version"
                placeholder="版本"
                size="small"
                style="margin-right: 6px;width: 84px;"
                @change="handleVersionChange"
            >
                <el-option
                    value="vue2"
                    label="vue2"
                ></el-option>
                <el-option
                    value="vue3"
                    label="vue3"
                ></el-option>
            </el-select>
            <slot></slot>
        </div>
    </div>
</template>

<script>


export default {
    name: 'EditorHeader',
    props: {
        version: {
            default: 'vue2',
            type: String
        },
        showVersion: {
            default: false,
            type: Boolean
        }
    },
    methods: {
        handleVersionChange(val) {
            // eslint-disable-next-line no-unused-vars
            const { ui, ...query } = this.$route.query;
            const genRoute = this.$router.resolve({ query });
            window.location.href = `${(val === 'vue3' ? '/v3/' : '/')}${genRoute.href}`;
        },
    }
};
</script>

<style lang="less" scoped>

    
    .box {
        position: relative;
        margin: 0 auto;
        padding: 0 2%;
        height: auto;
        background: var(--color-white);
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-shadow: 0 0 8px 1px rgba(0,0,0,.3);
        z-index: 3;
        .btns {
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .headerMenuBox {
            width: 200px;
            height: 50px;
            .logo {
                width: 100px;
                height: 50px;
            }
        }
    }
    
</style>
