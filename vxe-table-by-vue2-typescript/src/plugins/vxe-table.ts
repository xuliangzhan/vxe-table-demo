import Vue from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VXETable)

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 100
})

// 将模态窗口挂载到 vue 实例中
// Vue.prototype.$XModal = VXETable.modal

// declare module 'vue/types/vue' {
//   interface Vue {
//     $XModal: typeof VXETable.modal;
//   }
// }