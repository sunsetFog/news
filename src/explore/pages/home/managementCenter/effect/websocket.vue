<template>
  <div class="websocket">
      <!-- websoket是通过客户端向服务器建立连接,实现双向通信,那样服务器才能主动推送数据,用于聊天功能 -->
  </div>
</template>

<script>
export default {
    name: "websocket",
    data() {
        return {
            websock: null
        };
    },
    created() {
        //this.initWebSocket();
    },
    destroyed() {
        //this.websock.close(); //离开路由之后断开websocket连接
    },
    methods: {
        initWebSocket() {//初始化weosocket
            const wsuri = "ws://127.0.0.1:8080";
            this.websock = new WebSocket(wsuri);
            this.websock.onmessage = this.websocketMessage();
            this.websock.onopen = this.websocketOpen();
            this.websock.onerror = this.websocketError();
            this.websock.onclose = this.websocketClose();
        },
        websocketOpen() {//连接建立成功后,发送数据
            let actions = { test: "12345" };
            this.websock.send(JSON.stringify(actions));
        },
        websocketError() {//连接建立失败重连
            this.initWebSocket();
        },
        websocketMessage(e) {//数据接收
            const redata = JSON.parse(e.data);
        },
        websocketClose(e) {//关闭回调
            console.log("断开连接", e);
        }
    }
};
</script>

<style lang="less" scoped>

</style>