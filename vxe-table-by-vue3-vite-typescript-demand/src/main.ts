import { App, createApp } from 'vue'
import AppView from './App.vue'

import { 
  VxeUI,

  VxeTable,
  VxeColumn,
  VxeColgroup,
  VxeGrid
} from 'vxe-table'

// 导入主题变量，也可以重写主题变量
import 'vxe-table/styles/cssvar.scss'

// 导入默认的语言
import zhCN from 'vxe-table/lib/locale/lang/zh-CN'

VxeUI.setI18n('zh-CN', zhCN)
VxeUI.setLanguage('zh-CN')

function lazyVxeUITable (app: App) {
  app.use(VxeTable)
  app.use(VxeColumn)
  app.use(VxeColgroup)
  app.use(VxeGrid)
}

createApp(AppView).use(lazyVxeUITable).mount('#app')
