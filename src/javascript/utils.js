
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
      },
      // isUserName (val) {
      //   var regN = new RegExp('^[\w\u4e00-\u9fa5]+$')
      //   if (!val) {
      //     val = '用户名不能为空'
      //   } else if (!regN.test(val)) {
      //     val = '用户名由中文 字母 数字组成'
      //   } else {
      //     val = 1
      //   }
      //   return val
      // },
      isUser (val) {
        var regN = new RegExp('^[a-zA-Z]{1}([a-zA-Z0-9]){2,11}$')
        if (!val) {
          val = '用户名不能为空'
        } else if (!regN.test(val)) {
          val = '用户名由3-12个字母与数字组成'
        } else {
          val = 1
        }
        return val
      },
      isSj (val) {
        var reg = new RegExp('^1[3|5|7|8][0-9]{9}$')
        if (!val) {
          val = '手机号不能为空'
        } else if (!(reg.test(val))) {
          val = '请输入有效的11位手机号'
        } else {
          val = 1
        }
        return val
      },
      isPassword (val) {
        var reg = new RegExp('^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,15}$')
        if (!val) {
          val = '密码不能为空'
        } else if (!reg.test(val)) {
          val = '密码由6-15个字母与数字组成'
        } else {
          val = 1
        }
        return val
      },
      isYzm (val) {
        var reg = new RegExp('^([0-9]){6}$')
        if (!val) {
          val = '验证码不能为空'
        } else if (!reg.test(val)) {
          val = '验证码由6个数字组成'
        } else {
          val = 1
        }
        return val
      },
      isMail (val) {
        var reg = /^[a-zA-z0-9][a-zA-Z0-9_\-\]*@([a-zA-Z0-9]+[_\-\])+[a-zA-Z]{2,4}$/
        if (!val) {
          val = '邮箱不能为空'
        } else if (!(reg.test(val))) {
          val = '请输入有效的邮箱'
        } else {
          val = 1
        }
        return val
      }
    }
  }
}
