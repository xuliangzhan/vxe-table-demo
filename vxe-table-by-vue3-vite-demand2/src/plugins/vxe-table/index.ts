import { App } from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,
  // VxeIcon,
  // VxeModuleEdit,
  // VxeColumn,
  // VxeGrid,
  // VxeButton,
  // VxeTable
} from 'vxe-table'
import zhCNLocat from 'vxe-table/es/locale/lang/zh-CN'

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 999,
  table: {
    autoResize: true
  }
})

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args)
})

export function useTable (app: App) {
  // app.use(VxeIcon)
  //   .use(VxeModuleEdit)
  //   .use(VxeColumn)
  //   .use(VxeGrid)
  //   .use(VxeButton)
  //   .use(VxeTable)

  // 给 vue 实例挂载内部对象，例如：
  // app.config.globalProperties.$XModal = VXETable.modal
  // app.config.globalProperties.$XPrint = VXETable.print
  // app.config.globalProperties.$XSaveFile = VXETable.saveFile
  // app.config.globalProperties.$XReadFile = VXETable.readFile
}
