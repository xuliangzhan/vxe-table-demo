import Vue from 'vue'
import VXETable from 'vxe-table/packages/v-x-e-table'
import Table from 'vxe-table/packages/table'
import Header from 'vxe-table/packages/header'
import Body from 'vxe-table/packages/body'
import Column from 'vxe-table/packages/column'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'
import 'vxe-table/lib/index.css'

// 按需导入需要的模块
Vue.use(Table)
Vue.use(Column)
Vue.use(Header)
Vue.use(Body)

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, value) => VXETable.t(zhCNLocat, key)
})