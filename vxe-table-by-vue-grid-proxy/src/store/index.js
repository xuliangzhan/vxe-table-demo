import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

var ddoPromise = null

export default new Vuex.Store({
  state: {
    ddStatus: false,
    ddMap: {
      COLOR_STATUS: null,
      SEX_LIST: null
    }
  },
  getters: {
    ddMap: state => state.ddMap
  },
  mutations: {
  },
  actions: {
    loadDataDictionary ({ state }) {
      if (!ddoPromise) {
        // 模拟服务
        ddoPromise = new Promise(resolve => {
          state.ddMap = {
            COLOR_STATUS: [
              { value: '1', label: '红' },
              { value: '2', label: '黄' },
              { value: '3', label: '蓝' },
              { value: '4', label: '绿' },
              { value: '5', label: '青' }
            ],
            OPERATE_STATUS: [
              { value: '1', label: '成功' },
              { value: '2', label: '失败' },
              { value: '3', label: '拒接' }
            ],
            SEX_LIST: [
              { value: '0', label: '女' },
              { value: '1', label: '男' }
            ]
          }
          setTimeout(resolve, 300)
        })
      }
      return ddoPromise
    }
  },
  modules: {
  }
})
