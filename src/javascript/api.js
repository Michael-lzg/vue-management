
export default {
  install (Vue, options) {
    Vue.prototype.API_URL = API
  }
}
const API = {
  /* 获取验证码 */
  getValidateCode: '/api/login/getValidateCode'
}
