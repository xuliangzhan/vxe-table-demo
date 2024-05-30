import { createApp } from 'vue'
import App from './App.vue'

// Vxe UI 组件库 
import { VxeIcon, VxeButton, VxeInput, VxeLoading } from 'vxe-pc-ui'
import 'vxe-pc-ui/styles/cssvar.scss'

// Vxe Table 表格组件
import { VxeTable, VxeColumn, VxeColgroup, VxeGrid, VxeToolbar } from 'vxe-table'
import 'vxe-table/styles/cssvar.scss'

function LazyVxeUI (app) {
  app.use(VxeIcon)
  app.use(VxeButton)
  app.use(VxeInput)
  app.use(VxeLoading)
}

function LazyVxeTable (app) {
  app.use(VxeTable)
  app.use(VxeColumn)
  app.use(VxeColgroup)
  app.use(VxeGrid)
  app.use(VxeToolbar)
}

createApp(App).use(LazyVxeUI).use(LazyVxeTable).mount('#app')
