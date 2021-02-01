<template>
    <section id="pen-animation" @click="waveAi">
        <div class="pen-wave" :style="{ left: tranLeft, top: tranTop }" ref="wave">wave</div>
    </section>
</template>

<script>
export default {
    name: "wave",
    data () {
        return {
            showBox: false,
            tranLeft: '100px',
            tranTop: '100px'
        }
    },
    methods: {
        waveAi (e) { // 别写@click="waveAi()", e参数才有效
            console.log('wave==', e)
            this.tranLeft = (e.offsetX - 50) + 'px'
			this.tranTop = (e.offsetY - 46) + 'px'
            this.showBox = true	
            let waveDom = this.$refs.wave;
            console.log('css3==', waveDom)
            waveDom.style.color = 'red'
            // waveDom.style.transform = 'translateX(' + (e.offsetX - 50) + ')';
            // waveDom.style.transform = 'translateY(' + (e.offsetX - 46) + ')';
            waveDom.style.animation = 'zoomAi 6s linear 0.1s infinite'
        }
    }
}
</script>

<style lang="less" scoped>
#pen-animation {
    width: 100%;
    height: 1500px;
    .pen-wave {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        border: 1px solid yellowgreen;
        box-shadow: 0 0 2px #8c939d;
        -animation: zoomAi 6s linear 0.1s infinite;
        position: absolute;
    }
    @keyframes zoomAi {
        from {
            transform: scale(1);
            -zoom: 100%;
        }

        to {
            -zoom: 150%;
            transform: scale(1.5);
        }
    }
}
</style>