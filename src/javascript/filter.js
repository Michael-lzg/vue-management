module.exports = (Vue) => {
  Vue.filter('changeImg', (url) => {
    if (window.location.host.indexOf('www.mhealth100.com') > -1) {
      return url
    } else if (window.location.host.indexOf('test3.mhealth100.com') > -1) {
      return url
    } else {
      if (url.indexOf('http') > -1) {
        var arr = url.split('www.mhealth100.com')
        return 'http://' + window.location.host + arr[1]
      } else {
        var url1 = url.replace('www.mhealth100.com', window.location.host)
        return url1
      }
    }
  })
  return Vue
}
