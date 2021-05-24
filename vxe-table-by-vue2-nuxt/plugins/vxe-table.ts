import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 999,
  table: {
    autoResize: true
  }
})

Vue.use(VXETable)

// 将模态窗口挂载到 vue 实例中
// Vue.prototype.$XModal = VXETable.modal
