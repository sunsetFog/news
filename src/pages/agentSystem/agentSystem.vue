<template>
<section id="agent-system">
    <div class="system-example">
        <img class="big-fish" src="../../../static/dream/login/fish.png" @click="fishMeans()"/>
        <div class="manage-content">
            <iframe :src="agentSrc" id="map-frame" class="map-frame" ref="map-frame" @load="systemMeans()"></iframe>
        </div>
    </div>
    <footers :vip_foot="false"></footers>
</section>
</template>

<script>
import footers from '../../components/footer.vue';
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
                    that.$router.push({path: '/home'});
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
        .mixin_image(url('../../../static/dream/center/bg-guanli.jpg'));
        position: relative;
        .big-fish{
            .mixin_img(426px;487px);
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
            box-sizing: border-box;
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