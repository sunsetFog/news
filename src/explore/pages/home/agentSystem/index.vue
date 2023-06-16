<template>
<section id="agent-system">
    <div class="system-example">
        <img class="big-fish" src="@static/picture/login/fish.png" @click="fishMeans()"/>
        <div class="manage-content">
            <iframe :src="agentSrc" id="map-frame" class="map-frame" ref="map-frame" @load="systemMeans()"></iframe>
        </div>
    </div>
    <footers :vip_foot="false"></footers>
</section>
</template>
<!--
    iframe框架
        src="访问域名"
        width="100%" 宽度
        height="600px" 高度
        scrolling="" 是否出现滚动条，yes，no，auto
        frameborder="0" 框架的边框  0表示没有，1表示有
        align="bottom" 垂直对齐   和img的align相同，也表示float
 -->
<script>
import footers from '@/explore/components/footer.vue';
export default{
    name: 'agent-system',
    components: {footers},
    data(){
        return{
            agentSrc: ''
        }
    },
    created(){
        // this.agentSrc = "http://10.1.101.120:501/#/?token="+sessionStorage.getItem('token')+'&loginname='+that.$means.amateur_getPlayer().playerInfo.nickname+'&web';
        let that = this;
        that.$means.amateur_agent_url(function(value){
            //console.log('agent$$$$');
            that.agentSrc = value.agent_url + '&web';
        })
    },
    methods:{
        fishMeans(){

        },
        systemMeans(){
            // 子vue:给其他window对象发送消息 parent.postMessage('back',"*");
            var that = this;
            window.onmessage = function (e) {
                e = e||event;
                //console.log('回调参数',e);
                if (e.data == 'back') {
                    that.$router.push({path: '/home/index'});
                }

            }
        }
    }

}
</script>

<style lang="less" scoped>
#agent-system{
    width: 100%;
    height: 100%;
    .system-example{
        width: 100%;
        height: 1200px;
        .mixin_image(url('~@static/picture/center/bg-guanli.jpg'));
        position: relative;
        .big-fish{
            .mixin_img(326px;387px);
            position: absolute;
            left: 0px;
            bottom: 0px;
        }
        .manage-content{
            width: 1200px;
            height: 1200px;
            background: rgba(88,51,82,0.6);
            border-left: 1px solid @color_blueviolet;
            border-right: 1px solid @color_blueviolet;
            position: absolute;
            left: 50%;
            top: 0px;
            margin-left: -600px;
            padding: 45px 225px 0px 225px;
            .map-frame{
                width: 100%;
                height: 100%;
                border: none;
                outline: none;
            }
        }
    }

}
</style>
