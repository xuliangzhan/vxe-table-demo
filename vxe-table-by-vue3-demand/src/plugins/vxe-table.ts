import XEUtils from 'xe-utils'
import { VXETable } from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

// 全局默认参数
VXETable.setup({
  version: 0,
  zIndex: 100,
  table: {
    autoResize: true
  }
})

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args)
})
