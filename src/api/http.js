import axios from 'axios'
import { Message, MessageBox } from 'element-ui'
import router from '@/router'

// 创建axios实例
axios.defaults.withCredentials = true
const service = axios.create({
    // baseURL: 'http://10.1.5.11:8080/', // 开发环境的请求域名，不需要设在这（后台给）
    // 请求超时时间
    timeout: 10000,
    withCredentials: true, // 允许携带cookie
    headers: {
        'Content-Type': 'application/json',// 请求头格式
    }
})
service.$source = axios.CancelToken.source()
// request拦截器
service.interceptors.request.use(config => {
    config.headers.common['Access-Control-Allow-Origin'] = '*';// 允许所有来源访问(跨域时，后台设)
    config.cancelToken = service.$source.token;// 取消重复请求
    if (sessionStorage.getItem('token')) {
        config.headers['H-Token'] = sessionStorage.getItem('token');// header里存token,登录接口获取token并session缓存token,每一次请求后台都可获取(token是判断是否登陆的状态,不能把中文存在header)
    }
    return config
}, error => {
    Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(response => {//以下根据后台状态修改
    // console.log('Hk-拦截器', response);
    return response.data;//成功回调（这里return,以下代码不执行）
    
    if (!response.data.code) {//判断code是否为null,或undefined,是就返回false,所以要加非！
        Message({ message: '返回的code值找不到', type: 'error', duration: 3000 });
        return Promise.reject(response);//捕捉异常,失败回调
    } else {
        let code = response.data.code;// code码 1001会话过期, 1002无权限, 1003其他客户端登录了
        if ([1001, 1003].indexOf(code) > -1) {
            MessageBox.alert(response.data.message, {
                confirmButtonText: '确定',
                callback: action => {
                    router.push({path: '/login'});//路由跳转
                }
            })
            return Promise.reject(response)
        } else if ([1002].indexOf(code) > -1) {
            Message({ message: '无权限', type: 'error', duration: 3000 })
            return Promise.reject(response)
        } else {
            return response.data;//成功回调
        }
    }
}, error => {
    Message({ message: error.message, type: 'error', duration: 5000 })
    return Promise.reject(error)
})

export default service
