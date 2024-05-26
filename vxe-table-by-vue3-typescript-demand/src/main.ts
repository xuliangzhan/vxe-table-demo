import { App, createApp } from 'vue'
import VueApp from './App.vue'
import router from './router'
import store from './store'

// Vxe UI 组件库
import { VxeIcon, VxeButton, VxeInput, VxeLoading } from 'vxe-pc-ui'
import 'vxe-pc-ui/styles/cssvar.scss'

// Vxe Table 表格组件
import { VxeTable, VxeColumn, VxeColgroup, VxeGrid } from 'vxe-table'
import 'vxe-table/styles/cssvar.scss'

function LazyVxeUI (app: App) {
  app.use(VxeIcon)
  app.use(VxeButton)
  app.use(VxeInput)
  app.use(VxeLoading)
}

function LazyVxeTable (app: App) {
  app.use(VxeTable)
  app.use(VxeColumn)
  app.use(VxeColgroup)
  app.use(VxeGrid)
}

createApp(VueApp).use(router).use(store).use(LazyVxeUI).use(LazyVxeTable).mount('#app')
