import { App } from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,

  VxeModuleEdit,

  VxeIcon,
  VxeColumn,
  VxeGrid,
  VxeButton,
  VxeTable
} from 'vxe-table'

// 导入默认的语言
import zhCNLocat from 'vxe-table/es/locale/lang/zh-CN'

// 导入主题变量，也可以重写主题变量
import 'vxe-table/styles/cssvar.scss'

// 全局默认参数
VXETable.config({
  version: 0,
  zIndex: 999,
  table: {
    autoResize: true
  }
})

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.config({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args)
})

export function useTable (app: App) {
  // 模块扩展
  app.use(VxeModuleEdit)

  // 安装组件
  app.use(VxeIcon)
    .use(VxeColumn)
    .use(VxeButton)
    .use(VxeTable)
    .use(VxeGrid)
}
