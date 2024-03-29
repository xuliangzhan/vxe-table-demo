import Vue from 'vue'
import XEUtils from 'xe-utils'
import {
  VXETable,

  Icon,
  // Filter,
  // Menu,
  // Edit,
  // Export,
  // Keyboard,
  // Validator,
  Header,
  // Footer,

  Column,
  // Colgroup,
  // Grid,
  // Toolbar,
  // Pager,
  // Checkbox,
  // CheckboxGroup,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Input,
  // Textarea,
  // Button,
  // Modal,
  // Tooltip,
  // Form,
  // FormItem,
  // FormGather,
  // Select,
  // Optgroup,
  // Option,
  // Switch,
  // List,
  // Pulldown,

  Table
} from 'vxe-table'
import zhCNLocat from 'vxe-table/lib/locale/lang/zh-CN'

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

// 表格功能
Vue.use(Header)
  // .use(Footer)
  .use(Icon)
  // .use(Filter)
  // .use(Edit)
  // .use(Menu)
  // .use(Export)
  // .use(Keyboard)
  // .use(Validator)

  // 可选组件
  .use(Column)
  // .use(Colgroup)
  // .use(Grid)
  // .use(Toolbar)
  // .use(Pager)
  // .use(Checkbox)
  // .use(CheckboxGroup)
  // .use(Radio)
  // .use(RadioGroup)
  // .use(RadioButton)
  // .use(Input)
  // .use(Textarea)
  // .use(Button)
  // .use(Modal)
  // .use(Tooltip)
  // .use(Form)
  // .use(FormItem)
  // .use(FormGather)
  // .use(Select)
  // .use(Optgroup)
  // .use(Option)
  // .use(Switch)
  // .use(List)
  // .use(Pulldown)

  // 安装表格
  .use(Table)

// 给 vue 实例挂载内部对象，例如：
// Vue.prototype.$XModal = VXETable.modal
// Vue.prototype.$XPrint = VXETable.print
// Vue.prototype.$XSaveFile = VXETable.saveFile
// Vue.prototype.$XReadFile = VXETable.readFile
