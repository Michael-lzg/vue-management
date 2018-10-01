import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  tagList: []
}
const getters = {
  tagList (state) {
    return state.tagList
  }
}
const mutations = {
  updateTagList (state, payload) {
    state.tagList = payload
  }
}
const actions = {

}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
