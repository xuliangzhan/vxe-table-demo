import { App } from 'vue'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

// 全局默认参数
VXETable.config({
  version: 0,
  zIndex: 999,
  table: {
    autoResize: true
  }
})

export function useTable (app: App) {
  app.use(VXETable)
}
