import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import router from '@/router'

// 创建axios实例
axios.defaults.withCredentials = true
const service = axios.create({
  // baseURL: process.env.BASE_API, // api的base_url
  // 请求超时时间
  timeout: 10000
})
service.$source = axios.CancelToken.source()
// request拦截器
service.interceptors.request.use(config => {
  config.headers.post['Content-Type'] = 'application/json'
  config.headers.get['Content-Type'] = 'application/json'
  config.cancelToken = service.$source.token
  //header里存token,登录需要设,后台每一次请求要获取，不能把中文存在header
  if(sessionStorage.getItem('token')){
    config.headers['H-Token'] = sessionStorage.getItem('token');
  }
  return config
}, error => {
  Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
  response => {
    //console.log('Hk-拦截器',response);//根据状态修改
    if (!response.data) {
      return Promise.reject(response)
    } else {
      if (!response.data.flag) { // code码 1001会话过期, 1002无权限, 1003其他客户端登录了
        let code = response.data.code
        if ([1001, 1003].indexOf(code) > -1) {
          MessageBox.alert(response.data.message, {
            confirmButtonText: '确定',
            callback: action => {
              router.replace('/login')
              throw new Error('Whoops!')
            }
          })
          return Promise.reject(response)
        } else if ([1002].indexOf(code) > -1) {
          Message({
            message: '无权限',
            type: 'error',
            duration: 3 * 1000
          })
          return Promise.reject(response)
        } else {
          if (response.data.message) {
            Message({
              message: response.data.message,
              type: 'error',
              duration: 3 * 1000
            })
          }
          return Promise.reject(response)
        }
      } else {
        if (response.data.message) {
          Message({
            message: response.data.message,
            type: 'success',
            duration: 3 * 1000
          })
        }
        return response.data
      }
    }
  },
  error => {
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
