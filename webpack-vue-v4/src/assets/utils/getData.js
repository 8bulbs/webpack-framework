import axios from 'axios'
axios.interceptors.request.use(
  config => {
    return config
  },
  err => {
    return Promise.resolve(err)
  }
)
// axios.interceptors.response.use(
//   data => {
//     if (data.status && data.status === 200 && data.data.code !== 0) {
//       alert(data.data.msg)
//     }
//     return data
//   },
//   err => {
//     if (err.response.status === 504 || err.response.status === 404) {
//       alert('服务器被吃了⊙﹏⊙∥')
//     } else if (err.response.status === 403) {
//       alert('权限不足,请联系管理员!')
//     } else {
//       alert('未知错误!')
//     }
//     return Promise.resolve(err)
//   }
// )
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'

// 处理res data
const operaRes = data => {
  return data
}

// 通过axios发送请求
export default async (path, queryData, type = 'get') => {
  let str = ''
  let url = str.concat(path)
  let result
  if (type === 'get') {
    if (queryData) {
      result = await axios.get(url, {
        params: queryData
      })
    } else {
      result = await axios(url)
    }
  } else {
    result = await axios({
      method: 'post',
      url: url,
      data: queryData
    })
  }
  let resdata = operaRes(result)
  return new Promise((resolve, reject) => {
    resolve(resdata)
  }).catch(function (error) {
    console.log('error: ' + error)
  })
}
