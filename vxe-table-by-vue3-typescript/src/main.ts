import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import './plugins/vxe-table'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(VXETable)

// 给 vue 实例挂载内部对象，例如：
// app.config.globalProperties.$XModal = VXETable.modal
// app.config.globalProperties.$XPrint = VXETable.print
// app.config.globalProperties.$XSaveFile = VXETable.saveFile
// app.config.globalProperties.$XReadFile = VXETable.readFile

app.mount('#app')
