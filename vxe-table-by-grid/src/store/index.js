import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    ddMap: {
      COLOR_STATUS: [
        { value: '1', label: '红' },
        { value: '2', label: '黄' },
        { value: '3', label: '蓝' },
        { value: '4', label: '绿' },
        { value: '5', label: '青' }
      ],
      SEX_LIST: [
        { value: '0', label: '女' },
        { value: '1', label: '男' }
      ]
    }
  },
  getters: {
    ddMap: state => state.ddMap
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
