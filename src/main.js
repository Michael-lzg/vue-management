// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/index'

import utils from './javascript/utils'
import api from './javascript/api'
import {get, post, put, del} from './javascript/fetch'
import './javascript/mock'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/element-variables.scss'

Vue.prototype.axios = {get, post, put, del}
Vue.use(utils)
Vue.use(api)
Vue.use(ElementUI)

Vue.config.productionTip = false

/* eslint-disable no-new */
export default new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
