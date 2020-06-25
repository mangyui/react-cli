import axios from 'axios'
import { message } from 'antd';

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8'
// 创建axios实例
const service = axios.create({
  timeout: 20000 // 请求超时时间
})

// respone拦截器
service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.rec === -1) {
      message.warning('请求数据失败')
      return Promise.reject(res.msg)
    } else if (res.rec === 2) {
      message.warning('登入身份失效，请重新登录')
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      setTimeout(() => {
        window.location.reload()
      }, 1000)
      return Promise.reject(res.msg)
    } else {
      return response.data
    }
  },
  error => {
    message.warning('网络超时')
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service