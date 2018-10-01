import Vue from 'vue'
import Vuex from 'vuex'
import vm from '../main'

Vue.use(Vuex)

const state = {
  categoryList: []
}
const getters = {
  categoryList (state) {
    return state.categoryList
  }
}
const mutations = {
  updateCategoryList (state, payload) {
    state.categoryList = payload
  }
}
const actions = {
  // async getCategory ({commit}, payload) {
  //   await vm.$http.get(vm.API_URL.getCategory, {tenantId: '0001'})
  //     .then(res => {
  //       var list = res.resultData
  //       for (var i in list) {
  //         vm.$set(list[i], 'isHandle', false)
  //       }
  //       commit('updateCategoryList', list)
  //     })
  // },
  async getCategory ({commit}, payload) {
    var data = {
      id: '',
      name: '',
      tenantId: '0001'
    }
    await vm.$http.post(vm.API_URL.getAllLabel, data)
      .then(res => {
        var list = res.resultData
        for (var i in list) {
          vm.$set(list[i], 'isHandle', false)
        }
        commit('updateCategoryList', list)
      })
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
