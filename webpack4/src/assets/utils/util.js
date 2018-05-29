const util = {}

util.GetQueryString = (name) => {
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
  var r = window.location.search.substr(1).match(reg)
  if (r != null) return unescape(r[2])
  return null
}
util.getUrlData = (url) => {
  return url.slice((url.indexOf('?') + 1), url.length)
}
export default util
