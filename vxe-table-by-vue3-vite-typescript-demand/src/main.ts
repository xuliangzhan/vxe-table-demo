import { App, createApp } from 'vue'
import VueApp from './App.vue'

import { VxeUI, VxeIcon, VxeButton, VxeInput, VxeLoading, VxeTooltip } from 'vxe-pc-ui'
import { VxeTable, VxeColumn, VxeColgroup, VxeGrid } from 'vxe-table'

// 导入主题变量，也可以重写主题变量
import 'vxe-table/styles/cssvar.scss'
import 'vxe-pc-ui/styles/cssvar.scss'

// 导入默认的语言
import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

VxeUI.setI18n('zh-CN', zhCN)
VxeUI.setLanguage('zh-CN')

function LazyVxeUI (app: App) {
  app.use(VxeIcon)
  app.use(VxeButton)
  app.use(VxeInput)
  app.use(VxeLoading)
  app.use(VxeTooltip)
}

function LazyVxeTable (app: App) {
  app.use(VxeTable)
  app.use(VxeColumn)
  app.use(VxeColgroup)
  app.use(VxeGrid)
}

createApp(VueApp).use(LazyVxeUI).use(LazyVxeTable).mount('#app')
