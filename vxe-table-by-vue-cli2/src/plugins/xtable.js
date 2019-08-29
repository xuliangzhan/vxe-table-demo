import Vue from 'vue'
import XEUtils from 'xe-utils/methods/xe-utils'
import {
  VXETable,
  Icon,
  Table,
  Header,
  Body,
  Column
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'
import dependencies from 'vxe-table/lib/utils/dependencies'

// 按需导入依赖函数库
XEUtils.mixin(dependencies)

// 按需导入需要的模块
Vue.use(Icon)
Vue.use(Table)
Vue.use(Header)
Vue.use(Body)
Vue.use(Column)

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, value) => VXETable.t(zhCNLocat, key)
})
