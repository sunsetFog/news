<template>
    <section id="search-for">
        <div class="search-box">
            <van-search v-model="search_value" show-action placeholder="搜索主播名、主播ID、主播间名" @search="onSearch" @cancel="onCancel"/>
        </div>
        <div class="re-men" v-if="hot_active">
            <p>大家都在搜</p>
            <ul>
                <li v-for="(item,index) in hot_list" @click="hotWay(item.userName)">{{item.userName}}</li>
            </ul>
            <p>搜索历史</p>
            <ul>
                <li v-for="(item,index) in record_list" @click="hotWay(item)">{{item}}</li>
            </ul>
            <div class="qing-kong" v-if="record_list.length != 0">
                <div @click="onClear">
                    <van-icon name="delete-o" />
                    <span>清空历史记录</span>
                </div>
            </div>
        </div>
        <van-tabs v-model:active="tab_value" class="is-tab-box" v-else>
            <van-tab title="综合">
                <section class="zong-he">
                    <div class="title-type1">
                        <label>主播</label>
                        <div>
                            <img src="@static/reportForms/reward/3/icon_more.png"/>
                        </div>
                    </div>
                    <div class="users_box">
                        <ul v-if="users_list.length != 0">
                            <li v-for="(item, index) in users_list">
                                <img :src="item.userIcon"/>
                                <span>{{item.userName}}</span>
                            </li>
                        </ul>
                        <div v-else class="no-data">
                            <img src="@static/reportForms/reward/3/pic_nohistory.png"/>
                        </div>
                    </div>
                    <div class="title-type1">
                        <label>相关直播</label>
                        <div>
                            <img src="@static/reportForms/reward/3/icon_more.png"/>
                        </div>
                    </div>
                    <div class="rooms_box">
                        <ul v-if="rooms_list.length != 0">
                            <li v-for="(item, index) in rooms_list" @click="roomsWay(item)">
                                <img class="room-cover" :src="item.anchorAvatar"/>
                                <p>{{item.anchorName}}</p>
                                <img class="competition-icon" :src="item.roomCover"/>
                                <span>{{item.roomName}}</span>
                                <img class="guan-zhu" src="@static/reportForms/reward/3/icon_scan.png"/>
                            </li>
                        </ul>
                        <div v-else class="no-data">
                            <img src="@static/reportForms/reward/3/pic_nohistory.png"/>
                        </div>
                    </div>
                </section>
            </van-tab>
            <van-tab title="主播">
                <section class="zhu-bo">
                    <div class="users_box">
                        <ul v-if="users_list.length != 0">
                            <li v-for="(item, index) in users_list">
                                <img :src="item.userIcon"/>
                                <span>{{item.userName}}</span>
                            </li>
                        </ul>
                        <div v-else class="no-data">
                            <img src="@static/reportForms/reward/3/pic_nohistory.png"/>
                        </div>
                    </div>
                </section>
            </van-tab>
            <van-tab title="直播">
                <section class="zhi-bo">
                    <div class="rooms_box">
                        <ul v-if="rooms_list.length != 0">
                            <li v-for="(item, index) in rooms_list" @click="roomsWay(item)">
                                <img class="room-cover" :src="item.anchorAvatar"/>
                                <p>{{item.anchorName}}</p>
                                <img class="competition-icon" :src="item.roomCover"/>
                                <span>{{item.roomName}}</span>
                                <img class="guan-zhu" src="@static/reportForms/reward/3/icon_scan.png"/>
                            </li>
                        </ul>
                        <div v-else class="no-data">
                            <img src="@static/reportForms/reward/3/pic_nohistory.png"/>
                        </div>
                    </div>
                </section>
            </van-tab>
        </van-tabs>
    </section>
</template>

<script>
export default {
  name: 'searchFor',
  data () {
    return {
      search_value: '',
      tab_value: 0,
      hot_active: true,
      hot_list: [],
      record_list: [],
      users_list: [],
      rooms_list: []
    }
  },
  created () {
    this.onRecord()
    this.getHot()
    // this.getList()
  },
  methods: {
    roomsWay (item) {
      console.log('-roomsWay-', item)
      this.$router.push({path: '/room?id=' + item.roomId})
    },
    onClear () {
      localStorage.removeItem('recordList')
      this.onRecord()
    },
    onRecord () {
      this.record_list = JSON.parse(localStorage.getItem('recordList')) || []
    },
    onSearch () {
      console.log('搜索')
      this.hot_active = false
      this.getList(this.search_value)

      let recordList = JSON.parse(localStorage.getItem('recordList')) || []
      recordList.unshift(this.search_value)
      localStorage.setItem('recordList', JSON.stringify(recordList))
    },
    hotWay (value) {
      console.log('热门搜索事件', value)
      this.hot_active = false
      this.getList(value)
    },
    onCancel () {
      if (this.hot_active) {
        this.$router.push({path: '/home'})
      } else {
        this.hot_active = true
        this.onRecord()
      }
    },
    getHot () {
      let that = this
    //   let params = {
    //   }
    //   that.$axios('get', '/search/hot')
    //     .then((res) => {
        let res = {"code":200,"msg":null,"data":[{"userId":"0b7cc67a840d4f5baeb3044891cded50","userName":"125","anchorId":"125","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/photo_2021-04-16_10-39-07.jpg","userDesc":null,"type":1,"userCode":null},{"userId":"3e54a6a18e164105bc9bf94a3ab1df5b","userName":"710","anchorId":"710","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/91747808738459.jfif","userDesc":"这六个字称作:六字真言又名六字大明咒（嗡嘛呢呗咪吽）像征一切诸佛菩萨的慈悲和加持，特别祈诸观世音的加持，因此在藏民心中有着无可比拟的神圣感，观世音菩萨深深关爱众生。藏文“六字真言”是梵文的转写，开头的嗡(aum)是代表众佛“身密”的种字，是多数密咒共有的前置词，也称“持宝”字。结尾的吽(hum)是代表众佛“意密”的种字，共有五个部分组成此字，象征“五种佛智”。中间嘛呢(mani)叭咪(bedmei)是“珍宝”、“莲花”或“宝莲”。这两个词是并列的观音名号。全文的意思是：“具足佛身、佛智的观世音观照！”。","type":1,"userCode":null},{"userId":"6192cca59756446eba69cacb412dd53c","userName":"1152","anchorId":"1152","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/83221396755287.jpg","userDesc":null,"type":1,"userCode":null},{"userId":"625ceafb5db04b53a8e77f7d04f98a51","userName":"1159","anchorId":"1159","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/18965489119374.jpg","userDesc":null,"type":1,"userCode":null},{"userId":"869b27b1dc8b4a979f8213f4a6041ebc","userName":"1590","anchorId":"1590","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/photo_2021-04-16_10-39-07.jpg","userDesc":null,"type":1,"userCode":null},{"userId":"98abad8551ee44f2bd65fb59cb374653","userName":"1792","anchorId":"1792","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/photo_2021-04-16_10-39-07.jpg","userDesc":null,"type":1,"userCode":null},{"userId":"b8b75643f1fe49f284103abd19ee1111","userName":"2144","anchorId":"2144","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/74330228164740.png","userDesc":null,"type":1,"userCode":null},{"userId":"c0511ea69d124e0493e5a4a257b0fb32","userName":"2241","anchorId":"2241","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/photo_2021-04-16_10-39-07.jpg","userDesc":null,"type":1,"userCode":null},{"userId":"c9650959026743c08d58e89b6c3b79e0","userName":"2329","anchorId":"2329","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/32887125542237.jpg","userDesc":null,"type":1,"userCode":null},{"userId":"f57a0163ab594828a6cf21470dbf24b0","userName":"2846","anchorId":"2846","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/76795164592210.jpg","userDesc":null,"type":1,"userCode":null}]}
          console.log('---大家都在搜---', res)
          if (res.code == 200) {
            this.hot_list = res.data
          }
        // }).catch(() => {

        // })
    },
    getList (value) {
      let that = this
    //   let params = {
    //     keywords: value
    //   }
    //   that.$axios('post', '/search/query', params)
    //     .then((res) => {
        let res = {"code":200,"msg":null,"data":{"users":[{"userId":"869b27b1dc8b4a979f8213f4a6041ebc","userName":"我的名字叫李青丶","anchorId":"我的名字叫李青丶","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/photo_2021-04-16_10-39-07.jpg","userDesc":null,"type":1,"userCode":"102181"},{"userId":"3e54a6a18e164105bc9bf94a3ab1df5b","userName":"CSGO比赛24h轮播","anchorId":"CSGO比赛24h轮播","userIcon":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/91747808738459.jfif","userDesc":"这六个字称作:六字真言又名六字大明咒（嗡嘛呢呗咪吽）像征一切诸佛菩萨的慈悲和加持，特别祈诸观世音的加持，因此在藏民心中有着无可比拟的神圣感，观世音菩萨深深关爱众生。藏文“六字真言”是梵文的转写，开头的嗡(aum)是代表众佛“身密”的种字，是多数密咒共有的前置词，也称“持宝”字。结尾的吽(hum)是代表众佛“意密”的种字，共有五个部分组成此字，象征“五种佛智”。中间嘛呢(mani)叭咪(bedmei)是“珍宝”、“莲花”或“宝莲”。这两个词是并列的观音名号。全文的意思是：“具足佛身、佛智的观世音观照！”。","type":1,"userCode":"102149"}],"rooms":[{"roomId":"170364005056513","roomName":"重新装修的","roomNum":"794697182","anchorId":"3557f231c751478fa6923b04de19bd7c","anchorName":"188****0008","anchorAvatar":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/55028351021012.jpeg","anchorDesc":null,"category":2,"liveUrl":"http://play.zamgocp.cn/live/3557f231c751478fa6923b04de19bd7c.m3u8?txSecret=4ff49da09486b5cd08e42d31a9489110&txTime=61DF6B7F","announcement":"111111111111111111111","roomCover":"https://huawei-testbqzb.obs.myhuaweicloud.com/live/39887978314299.jfif","matchId":"dc13d3f39f5c4a0aa57f325de2dfabce","matchInfo":{"id":null,"competitionName":"意丙C","competitionShortName":"意丙C","matchTime":"2022-01-11 04:00:00","sportsId":"1614e10a3ae74ff39d20533cb1fd358e","sportsInfo":{"id":"1614e10a3ae74ff39d20533cb1fd358e","sportsName":"足球","competitionIcon":null,"competitionShortName":"意丙C","competitionName":"意大利足球丙级联赛C组","competitionNameEn":"Serie C - Girone C","competitionShortNameEn":"Serie C - Girone C"},"homeId":"23cf8de8b89646d6a2df7c7644f447b6","homeTeam":{"id":"23cf8de8b89646d6a2df7c7644f447b6","teamNameEn":"Monopoli","teamName":"莫诺波利","teamNameEnFull":"SS Monopoli 1966","teamNameFull":"莫诺波利"},"awayId":"e5a18a5b1ad540059b5e55fa0e35c3fb","awayTeam":{"id":"e5a18a5b1ad540059b5e55fa0e35c3fb","teamNameEn":"Turris","teamName":"图里斯","teamNameEnFull":"SS Turris Calcio","teamNameFull":"图里斯"}}}]}}
          console.log('---搜索---', res)
          if (res.code == 200) {
            this.users_list = res.data.users
            this.rooms_list = res.data.rooms
            // for (let i = 0; i < 7; i++) {
            //   this.rooms_list.push(res.data.rooms[0])
            // }
          }
        // }).catch(() => {

        // })
    }
  }
}
</script>

<style lang="less" scoped>
#search-for {
    width: 100%;
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    .search-box {
        width: 100%;
        height: 3.125rem;
    }
    .re-men {
        width: 100%;
        padding: 0.625rem 0.9375rem 0 0.9375rem;
        box-sizing: border-box;
        p {
            width: 100%;
            height: 2.5rem;
            text-align: left;
            line-height: 2.5rem;
            font-size: 0.875rem;
        }
        ul {
            width: 100%;
            overflow: hidden;
            li {
                height: 1.5625rem;
                float: left;
                text-align: center;
                line-height: 1.5625rem;
                margin: 0 0.5rem 0.625rem 0;
                background: #EDEDED;
                color: #909399;
                border-radius: 0.3125rem;
                list-style: none;
                font-size: 0.8125rem;
                padding: 0 0.375rem;
                box-sizing: border-box;
            }
        }
        .qing-kong {
            width: 100%;
            height: 3.125rem;
            display: flex;
            align-items: center;
            justify-content: center;
            div {
                width: 6.25rem;
                height: 1.5625rem;
                position: relative;
                i {
                    font-size: 0.9375rem;
                    color: #B3B3B3;
                    position: absolute;
                    left: 0rem;
                    top: 0.125rem;
                }
                span {
                    font-size: 0.8125rem;
                    color: #B3B3B3;
                    position: absolute;
                    left: 1.25rem;
                    top: 0rem;
                }
            }
        }
    }
    .is-tab-box {
        width: 100%;
        height: calc(100% - 3.125rem);
        .zong-he, .zhu-bo, .zhi-bo {
            width: 100%;
            padding: 0.625rem 0 0 0;
            box-sizing: border-box;
            .van-tabs__content {
                color: red;
            }
            .title-type1 {
                width: 100%;
                height: 2.5rem;
                line-height: 2.5rem;
                background: #F0F3F5;
                color: #3D3E3E;
                padding: 0 0.9375rem;
                box-sizing: border-box;
                label {
                    height: 100%;
                    font-size: 0.875rem;
                    float: left;
                }
                div {
                    width: 0.9375rem;
                    height: 100%;
                    float: right;
                    padding-top: 0.3125rem;
                    box-sizing: border-box;
                    img {
                        width: 100%;
                        height: 1.25rem;
                    }
                }
            }
            .users_box {
                width: 100%;
                background: #F0F3F5;
                ul {
                    width: 100%;
                    li {
                        height: 4.625rem;
                        margin-bottom: 0.375rem;
                        background: #FFFFFF;
                        list-style: none;
                        position: relative;
                        img {
                            width: 2.1875rem;
                            height: 2.1875rem;
                            border-radius: 50%;
                            position: absolute;
                            left: 1.5rem;
                            top: 1.125rem;
                        }
                        span {
                            font-size: 0.8125rem;
                            color: #464646;
                            position: absolute;
                            left: 5.25rem;
                            top: 1.8125rem;
                        }
                    }
                }
                    
                .no-data {
                    width: 100%;
                    height: 12.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        width: 9.375rem;
                        height: 9.375rem;
                    }
                }
            }
            .rooms_box {
                width: 100%;
                background: #F0F3F5;
                padding: 0 0.625rem 0.9375rem 0.625rem;
                box-sizing: border-box;
                ul {
                    width: 100%;
                    overflow:auto;
                    li {
                        width: 48%;
                        height: 10.75rem;
                        border-radius: 0.3125rem;
                        margin-bottom: 0.625rem;
                        background: #FFFFFF;
                        list-style: none;
                        overflow: hidden;
                        position: relative;
                        .room-cover {
                            width: 100%;
                            height: 5.9375rem;
                            position: absolute;
                            left: 0rem;
                            top: 0rem;
                        }
                        p {
                            width: 100%;
                            height: 1.5625rem;
                            text-align: center;
                            line-height: 1.5625rem;
                            font-size: 0.8125rem;
                            color: #464646;
                            position: absolute;
                            left: 0rem;
                            top: 6.5625rem;
                        }
                        .competition-icon {
                            width: 1.625rem;
                            height: 1.625rem;
                            border-radius: 50%;
                            position: absolute;
                            left: 0.625rem;
                            bottom: 0.625rem;
                        }
                        span {
                            width: 5.625rem;
                            height: 1.5625rem;
                            line-height: 1.5625rem;
                            overflow: hidden;
                            font-size: 0.75rem;
                            color: #A3A3A3;
                            position: absolute;
                            left: 2.8125rem;
                            bottom: 0.75rem;
                        }
                        .guan-zhu {
                            width: 1.25rem;
                            height: 0.9375rem;
                            border-radius: 50%;
                            position: absolute;
                            right: 0.625rem;
                            bottom: 0.9375rem;
                        }
                    }
                    li:nth-of-type(odd){
                        float: left;
                    }
                    li:nth-of-type(even){
                        float: right;
                    }
                }
                .no-data {
                    width: 100%;
                    height: 12.5rem;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    img {
                        width: 9.375rem;
                        height: 9.375rem;
                    }
                }
                    
            }
        }
        .zhu-bo {
            background: #F0F3F5;
            padding: 0.625rem 0.625rem 0.9375rem 0.625rem;
            box-sizing: border-box;
        }
        .zhi-bo {
            background: #F0F3F5;
            padding: 0.625rem 0rem 0.3125rem 0rem;
            box-sizing: border-box;
        }
    }
    
}
</style>


