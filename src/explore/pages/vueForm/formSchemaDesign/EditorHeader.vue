<template>
    <div :class="$style.box">
        <div :class="$style.headerMenuBox">
            <h1>
                <a
                    :class="$style.menuLink"
                    href="https://vue-json-schema-form.lljj.me/"
                >
                    <img
                        :class="$style.logo"
                        src="https://vue-json-schema-form.lljj.me/logo.png"
                        alt="Vue JSON Schema Form"
                    >
                </a>
            </h1>
        </div>
        <div :class="$style.btns">
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

<style module>

    .btns {
        display: flex;
        align-items: center;
        justify-content: center;
    }
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
    }
    .headerMenuBox {
        display: flex;
        align-items: center;
        justify-content: center;
        h1 {
            text-shadow: 0 0 40px #409EFF;
            font-size: 26px;
            text-transform: uppercase;
            z-index: 10;
            margin: 0;
        }
        .logo {
            display: block;
            height: 30px;
        }
    }

    .headerMenuBox h1 {
      text-shadow: 0 0 40px #409EFF;
      font-size: 26px;
      text-transform: uppercase;
      z-index: 10;
      margin: 0;
    }

    .headerMenuBox .logo {
      display: block;
      height: 30px;
    }
    .menu {
        margin-left: 40px;
    }
</style>
