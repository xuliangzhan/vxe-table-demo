import Vue from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,

  Edit,

  Icon,
  Column,
  Colgroup,
  Grid,
  Table
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

import './config'

// 导入默认的国际化（如果项目中使用多语言，则应该导入到 vue-i18n 中）
VXETable.setup({
  i18n: (key, args) => XEUtils.toFormatString(XEUtils.get(zhCNLocat, key), args)
})

// 模块扩展
Vue.use(Edit)

// 可选组件
Vue.use(Icon)
Vue.use(Column)
Vue.use(Colgroup)
Vue.use(Table)
Vue.use(Grid)
// Vue.use(Toolbar)
// Vue.use(Pager)
// Vue.use(Checkbox)
// Vue.use(CheckboxGroup)
// Vue.use(Radio)
// Vue.use(RadioGroup)
// Vue.use(RadioButton)
// Vue.use(Input)
// Vue.use(Textarea)
// Vue.use(Button)
// Vue.use(ButtonGroup)
// Vue.use(Modal)
// Vue.use(Tooltip)
// Vue.use(Form)
// Vue.use(FormItem)
// Vue.use(FormGather)
// Vue.use(Select)
// Vue.use(Optgroup)
// Vue.use(Option)
// Vue.use(Switch)
// Vue.use(List)
// Vue.use(Pulldown)
