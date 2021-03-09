import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'xe-utils'
import {
  Icon,
  Header,
  Column,
  Table
} from 'vxe-table'
import './plugins/table'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(Icon)
  .use(Header)
  .use(Column)
  .use(Table)

// 给 vue 实例挂载内部对象，例如：
// app.config.globalProperties.$XModal = VXETable.modal
// app.config.globalProperties.$XPrint = VXETable.print
// app.config.globalProperties.$XSaveFile = VXETable.saveFile
// app.config.globalProperties.$XReadFile = VXETable.readFile

app.mount('#app')
