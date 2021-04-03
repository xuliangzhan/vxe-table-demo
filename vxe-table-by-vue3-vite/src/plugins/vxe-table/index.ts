import { App } from 'vue'
import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 100,
  table: {
    autoResize: true
  }
})

export function useTable (app: App) {
  app.use(VXETable)
}
