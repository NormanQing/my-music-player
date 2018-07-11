import axios from 'axios'

axios.defaults.timeout = 5000

// code状态码判断
axios.interceptors.response.use((res) => {
  if (res.status === 654) {
    window.alert('请求超时')
  }
  if (res.data.code !== 200) {
    window.alert('数据返回错误')
    Promise.reject(res)
  }
  return res
}, (error) => {
  console.log('promise error:' + error)
  // return Promise.reject(error)
})

export default axios
