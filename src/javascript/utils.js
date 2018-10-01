
export default {
  install (Vue, options) {
    Vue.prototype.util = {
      // 日期转化
      dateFormat (date, fmt) {
        var o = {
          'M+': date.getMonth() + 1,
          'd+': date.getDate(),
          'h+': date.getHours(),
          'm+': date.getMinutes(),
          's+': date.getSeconds(),
          'q+': Math.floor((date.getMonth() + 3) / 3),
          'S': date.getMilliseconds()
        }
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
        for (var k in o) {
          if (new RegExp('(' + k + ')').test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? (o[k]) : (('00' + o[k]).substr(('' + o[k]).length)))
        }
        return fmt
      },
      /* url序列参数转化为对象 */
      queryParse (url) {
        if (url.indexOf('?') === -1) {
          return null
        }
        var str = url.split('?')[1].split('#')[0]
        var items = str.split('&')
        var result = {}
        var arr = []
        for (var i = 0; i < items.length; i++) {
          arr = items[i].split('=')
          result[arr[0]] = arr[1]
        }
        return result
      }
    }
  }
}
