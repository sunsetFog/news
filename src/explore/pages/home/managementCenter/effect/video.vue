<template>
    <section id="video">
        <div class="video-dialog" v-show="play_active">
            <div class="video-header">
                <i class="el-icon-close" @click="closeAudio()"></i>
            </div>
            <div class="video-body">
                <video id="video-girl" controls width="100%" autoplay>
                    <source src="@static/video/58244a10da66c5401.mp4" type="video/mp4">
                </video>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data(){
        return{
            play_active: true,
        }
    },
    methods: {
        closeAudio(){
            this.play_active = false;
        }
    }
}
</script>

<style lang="less" scoped>
#video{
    .video-dialog{
        width: 600px;
        margin: 100px auto;
        border-radius: 4px;
        background: rgba(45,45,45,0.4);
        .video-header{
            width: 100%;
            height: 30px;
            background: rgba(45,45,45,0.4);
            position: relative;
            i{
                width: 25px;
                height: 25px;
                padding: 5px;
                position: absolute;
                top: 2px;
                right: 8px;
                color: white;
            }
        }
    }
}
</style>

