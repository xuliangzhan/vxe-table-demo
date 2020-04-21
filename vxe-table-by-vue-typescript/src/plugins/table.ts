import Vue from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/index.css'

Vue.use(VXETable)

// 将模态窗口挂载到 vue 实例中
Vue.prototype.$XModal = VXETable.modal

declare module 'vue/types/vue' {
  interface Vue {
    $XModal: typeof VXETable.modal;
  }
}
