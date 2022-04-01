<template>
    <section id="liveBroadcast">
        <!-- 直播间技术：环信与播放器 -->
        <van-button @click="sendLiWu()">赠送礼物</van-button>
        <van-button @click="roomDetails()">获取聊天室详情</van-button>
        <van-button @click="getJoinChatRoom()">加入聊天室</van-button>
        <van-search
            v-model="chat_value"
            left-icon=""
            show-action
            placeholder="说点什么..."
            @search="sendRoomText(chat_value)"
            >
            <template #action>
                <div @click="sendRoomText(chat_value)">发送</div>
            </template>
        </van-search>
        <!-- 播放器 -->
        <div class="prism-player" id="player-con"></div>
    </section>
</template>

<script>
export default {
    name: "liveBroadcast",
    data() {
        return {
            player: null,// 播放器
            volume: 30,// 音量

            chat_value: '',
            // 房间信息
            roomInfoList: {
                roomId: '170755717398529', // 房间id
                // 覆盖屏幕的图片
                matchCutImg: '',
                // 视频url
                liveUrl: ""
            },
            userInfo: {
                userName: '109',
                id: '0a55078dc2ba4f3cac10537da9dbec94'
            },
            isDropped: false, // 用户是否掉线
        }
    },
    created() {
        this.loginWebIM("live_0a55078dc2ba4f3cac10537da9dbec94pro");
        // 监听浏览器关闭和刷新
        window.addEventListener('beforeunload', this.beforeunloadHandler);
    },
    mounted() {
        this.playerVideo(this.roomInfoList.matchCutImg, this.roomInfoList.liveUrl)
    },
    methods: {
        // 暂停
        pause () {
            this.player.pause()
        },
        // 播放
        play () {
            this.player.play()
        },
        // 音量
        getVolume () {
            this.player.volume(this.volume / 100)
        },
        // 播放器
        playerVideo (img, url) {
            // eslint-disable-next-line no-unused-vars,no-undef
            this.player = new Aliplayer({// 在html引入
                'id': 'player-con',
                'source': url,
                'width': '100%',
                'height': '230px',
                'autoplay': true,
                'isLive': true,
                'rePlay': false,
                'cover': img,
                'playsinline': true,
                'preload': true,
                'controlBarVisibility': 'click',
                'useH5Prism': true
            }, function (player) {
                console.log('The player is created')
                this.player.play()
            }
            )
            //   = new TcPlayer('id_test_video', {
            //   'm3u8': url,
            //   'mp4': url,
            //   'flv': url, // 增加了一个 flv 的播放地址，用于PC平台的播放 请替换成实际可用的播放地址
            //   'autoplay': true,      // iOS 下 safari 浏览器，以及大部分移动端浏览器是不开放视频自动播放这个能力的
            //   'poster': {'style': 'cover', 'src': img},
            //   'controls': false,
            //   'width': '100%', // 视频的显示宽度，请尽量使用视频分辨率宽度
            //   'height': '270'// 视频的显示高度，请尽量使用视频分辨率高度
            // })
        },
        // 登录聊天账号
        loginWebIM (id) {
            // 这儿是测试用的账号和密码
            this.$imoption.user = id
            this.$imconn.open(this.$imoption)
            let that = this
            // 监听回调
            this.$imconn.listen({
                onOpened: function (message) {
                    console.log('--用户已上线--', JSON.parse(JSON.stringify(message)))
                },
                onClosed: function (message) {
                    console.log('--用户下线--', JSON.parse(JSON.stringify(message)))
                    that.isDropped = true
                },
                onTextMessage: function (message) {
                    console.log('--收到文本消息--', JSON.parse(JSON.stringify(message)))
                },
                onCmdMessage: function (message) {
                    console.log('--收到命令消息 被禁言--', JSON.parse(JSON.stringify(message)))
                },
                onRecallMessage: function (message) {
                    console.log('--收到消息撤回回执--', JSON.parse(JSON.stringify(message)))
                },
                onCustomMessage: function (message) {
                    console.log('--收到自定义cmd消息--', JSON.parse(JSON.stringify(message)))
                },
                onEmojiMessage: function (message) {
                    console.log('--收到表情消息--', JSON.parse(JSON.stringify(message)))
                }
            })
        },
        sendLiWu (item) {
            item = {
                awardImgUrl: 'https://huawei-testbqzb.obs.myhuaweicloud.com/live/36063048054691.png',
                amount: '1',
                awardName: '666'
            }

            let that = this
            // 发送自定义消息
            let id = this.$imconn.getUniqueId() // 生成本地消息id
            console.log('---id---', id)
            let sendOut = new WebIM.message('custom', id) // 创建命令消息

            sendOut.set({
                to: that.roomInfoList.roomId, // 接收消息对象(聊天室id)
                customEvent: 'gift',// 群聊类型设置为聊天室
                customExts: {
                    url: item.awardImgUrl,
                    num: item.amount,
                    fileName: item.awardName
                },
                ext: {
                    user_nick: that.userInfo.userName,
                    user_id: that.userInfo.id
                },
                // 用户自扩展的消息内容（群聊用法相同）
                success: function (tee, message) {
                    console.log('--消息发送成功--', JSON.parse(JSON.stringify(tee)), '---', JSON.parse(JSON.stringify(message)))
                },
                fail: function (error) {
                    console.log('如禁言、拉黑后发送消息会失败', error) // 如禁言、拉黑后发送消息会失败
                }
            })
            sendOut.setGroup('groupchat')
            this.$imconn.send(sendOut.body)
            // this.getBaoList()
        },
        // 加入聊天室
        getJoinChatRoom () {
            let that = this
            let options = {
                roomId: that.roomInfoList.roomId, // 聊天室id
                message: 'reason' // 原因（可选参数）
            }
            this.$imconn.joinChatRoom(options).then(res => {
                console.log('--加入聊天室--', JSON.parse(JSON.stringify(res)))
            })
        },
        // 发送文本消息
        sendRoomText (msgTxt) {
            let that = this
            // 发送自定义消息
            let id = this.$imconn.getUniqueId() // 生成本地消息id
            console.log('---id---', id, '---', msgTxt)
            let sendOut = new WebIM.message('txt', id) // 创建文本消息
            sendOut.set({
                msg: msgTxt, // 消息内容
                to: that.roomInfoList.roomId, // 接收消息对象(聊天室id)
                chatType: 'chatRoom', // 群聊类型设置为聊天室
                // 扩展消息
                ext: {
                    user_nick: that.userInfo.userName,
                    user_id: that.userInfo.id
                },
                // 对成功的相关定义，sdk会将消息id登记到日志进行备份处理
                success: function (tee, message) {
                    console.log('--消息发送成功--', JSON.parse(JSON.stringify(tee)), '---', JSON.parse(JSON.stringify(message)))
                },
                // 对失败的相关定义，sdk会将消息id登记到日志进行备份处理
                fail: function (error) {
                    console.log('failed', error)
                }
            })
            this.$imconn.send(sendOut.body)
        },
        // 获取聊天室详情
        roomDetails () {
            let that = this
            let options = {
                pageNum: 1,
                pageSize: 10,
                chatRoomId: that.roomInfoList.roomId
            }
            that.$imconn.listChatRoomMember(options).then(res => {
                console.log('--获取聊天室详情--', JSON.parse(JSON.stringify(res)))
            })
        },
        // [beforeunloadHandler 浏览器关闭时进行用户提示]
        beforeunloadHandler () {
            let that = this
            // 这里调用接口，后端计算时间，看直播是否够五分钟，够了，有福利送，比如有一次抽奖机会
            let options = {
                roomId: that.roomInfoList.roomId // 聊天室id
            }
            that.$imconn.quitChatRoom(options).then(res => {
                console.log('--浏览器关闭时进行用户提示--', JSON.parse(JSON.stringify(res)))
            })
        },
    },
    destroyed () {
        window.removeEventListener('beforeunload', this.beforeunloadHandler)
        // 退出房间
        this.$imconn.close()
    }
        
}
</script>

<style lang="less" scoped>
#liveBroadcast {
    width: 100%;
    .prism-player {
        width: 100%;
        height: 230px;
    }
}
</style>


