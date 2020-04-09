import Vue from 'vue'
import VXETable, { ModalController } from 'vxe-table'

Vue.use(VXETable)

// 将模态窗口挂载到 vue 全局实例中
Vue.prototype.$XModal = ModalController
