import request from '@/explore/api/http.js'


// 个人中秋活动抽奖信息
export function luckyDrawMyInfo (query) {
  return request({
    url: 'appApi/luckyDraw/myself',
    method: 'post',
    params: query
  })
}
// 开始进行抽奖
export function startLuckyDraw (query) {
  return request({
    url: 'appApi/luckyDraw/startLuckyDraw',
    method: 'post',
    params: query
  })
}

export function activityData (query) {
  return request({
    url: process.env.VUE_APP_activity_API + 'adminApi/web/activity/data/fetchData',
    method: 'get',
    params: query
  })
}
