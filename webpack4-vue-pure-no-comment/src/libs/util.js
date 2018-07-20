export function browserType () {
  const ua = window.navigator.userAgent.toLowerCase()
  // 是safari浏览器 或者是 微信浏览器
  // let flag = ua.indexOf('safari') > -1 && ua.indexOf('chrome') === -1 && ua.indexOf('ucbrowser') === -1 || ua.indexOf('micromessenger') > -1
  let flag = ''
  if (ua.indexOf('micromessenger') > -1) {
    flag = 'wechat'
  }
  return flag
}
