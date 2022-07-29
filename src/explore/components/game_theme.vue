<template>
    <section id="game-theme"></section>
</template>

<script>
export default {
    name: 'game-theme',
    props: ['subject'],
    data(){
        return{

        }
    },
    created(){
        if(this.subject==true){
            this.changeMeans();
        }
    },
    methods: {
        openFullScreen() {
            return this.$loading({
            lock: true,
            text: 'Loading',
            spinner: 'el-icon-loading',
            background: 'rgba(0, 0, 0, 0.7)'
            });
        },
        changeMeans(){
            // //console.log('subject######');
            this.variableChange1();
            this.variableChange2();
        },
        variableChange1(){
            var that = this;
            Object.defineProperty(sceneWeb, 'type', {
                get: function() {
                    return 'type';
                },
                set: function(value) {
                    //console.log('changjing%%%%%',value,that.$route.path);
                    if(that.$route.path=='/register/index'){
                        return;
                    }
                    if(value=='999992'){
                        // console.log('99222',that.$route.path)
                        if(that.$route.path!='/neutralGear/index'){
                            that.$router.push({path: '/home/index'});
                        }
                        that.$means.amateur_exit_scene(function(value){});
                    }else if(value=='999991'||value=='999993'||value=='999994'||value=='999995'){
                        that.$router.push({path: '/game/index'});
                        that.openFullScreen().close();
                    }
                }
            });
        },
        variableChange2(){
            var that = this;
            Object.defineProperties(errorCodeGame,{
                code:{
                    configurable: true,
                    get:function(){

                    },
                    set:function(value){
                        if(value==1001||value==1002||value==1101||value==1102||value==1103||value==1104||value==1105||value==1201||value==1203||value==1204||value==1301||value==1302||value==1303||value==1||value==2){
                            that.$router.push({path: '/home/index'});
                            that.openFullScreen().close();
                            that.$means.amateur_exit_scene(function(value){});
                        }else if(value==1202){
                            that.$router.push({path: '/login'});
                        }
                    }
                },
                overtime:{
                    configurable: true,
                    get:function(){

                    },
                    set:function(value){
                        that.$router.push({path: '/home/index'});
                        that.openFullScreen().close();
                        that.$means.amateur_exit_scene(function(value){});
                        // that.$message.error('请求超时!');
                    }
                },
                move:{
                    configurable: true,
                    get:function(){

                    },
                    set:function(value){
                        that.$emit('interaction',value);
                    }
                },
                refresh:{
                    configurable: true,
                    get:function(){

                    },
                    set:function(value){
                        that.$emit('await',value);
                        if(sessionStorage.getItem('sign_in')&&sessionStorage.getItem('register')){
                            catchGame.mice = 'ok';
                            sessionStorage.removeItem('sign_in');
                            sessionStorage.removeItem('register');
                            return;
                        }else if(sessionStorage.getItem('sign_in')){
                            catchGame.mice = 'ok';
                            sessionStorage.removeItem('sign_in');
                        }else if(sessionStorage.getItem('register')){
                            catchGame.register = 'ok';
                            sessionStorage.removeItem('register');
                        }
                    }
                },
                socket:{
                    configurable: true,
                    get:function(){

                    },
                    set:function(value){
                        that.$confirm('服务器连接已断开，是否重连？', '温馨提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(() => {
                            that.$means.amateur_relogin();
                        }).catch(() => {
                            that.$means.amateur_clear();
                            that.$router.push({path: '/login'});
                        });
                    }
                },
                description:{
                    configurable: true,
                    get:function(){

                    },
                    set:function(value){
                        that.$alert(value, '温馨提示', {
                            confirmButtonText: '确定',
                            type: 'error',
                            callback: action => {

                            }
                        });
                    }
                },
                recharge:{
                    configurable: true,
                    get:function(){

                    },
                    set:function(value){
                        that.$alert('充值成功', '温馨提示', {
                            confirmButtonText: '确定',
                            type: 'success',
                            callback: action => {
                                that.$means.amateur_getPlayer().setMoney(value);
                                that.$store.dispatch('getPlayerInfo',that.$means.amateur_getPlayer());
                            }
                        });
                    }
                }
            });
        }
    }
}
</script>

<style lang="less" scoped>
#game-theme{
    width: 100%;
    height: 0px;
}
</style>