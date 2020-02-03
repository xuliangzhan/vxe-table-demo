import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    dictionaryMap: {
      COLOR_STATUS: [
        { value: '1', label: '红' },
        { value: '2', label: '黄' },
        { value: '3', label: '蓝' },
        { value: '4', label: '绿' },
        { value: '5', label: '青' }
      ]
    }
  },
  getters: {
    dictionaryMap: state => state.dictionaryMap
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
