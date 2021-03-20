import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  Header,
  // Footer,
  Icon,
  // Filter,
  // Edit,
  // Menu,
  // Export,
  // Keyboard,
  // Validator,

  Column,
  // Colgroup,
  // Grid,
  // Tooltip,
  // Toolbar,
  // Pager,
  // Form,
  // FormItem,
  // Checkbox,
  // CheckboxGroup,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Switch,
  // Input,
  // Select,
  // Optgroup,
  // Option,
  // Textarea,
  // Button,
  // Modal,
  // List,
  // Pulldown,

  Table
} from 'vxe-table'
import './plugins/vxe-table'

const app = createApp(App)

app.use(router)
  .use(store)

  // 表格功能
  .use(Header)
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
  // .use(Tooltip)
  // .use(Toolbar)
  // .use(Pager)
  // .use(Form)
  // .use(FormItem)
  // .use(Checkbox)
  // .use(CheckboxGroup)
  // .use(Radio)
  // .use(RadioGroup)
  // .use(RadioButton)
  // .use(Switch)
  // .use(Input)
  // .use(Select)
  // .use(Optgroup)
  // .use(Option)
  // .use(Textarea)
  // .use(Button)
  // .use(Modal)
  // .use(List)
  // .use(Pulldown)

  // 安装表格
  .use(Table)

// 给 vue 实例挂载内部对象，例如：
// app.config.globalProperties.$XModal = VXETable.modal
// app.config.globalProperties.$XPrint = VXETable.print
// app.config.globalProperties.$XSaveFile = VXETable.saveFile
// app.config.globalProperties.$XReadFile = VXETable.readFile

app.mount('#app')
