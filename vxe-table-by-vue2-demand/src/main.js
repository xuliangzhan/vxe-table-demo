import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import {
  VxeUI,
  VxeIcon,
  VxeButton,
  VxeInput,
  VxeLoading,
  VxeTooltip
} from 'vxe-pc-ui'

import {
  VxeTable,
  VxeColumn,
  VxeColgroup,
  VxeGrid
} from 'vxe-table'

// 导入主题变量，也可以重写主题变量
import 'vxe-table/styles/cssvar.scss'
import 'vxe-pc-ui/styles/cssvar.scss'

// 导入默认的语言
import zhCN from 'vxe-pc-ui/lib/language/zh-CN'

VxeUI.setI18n('zh-CN', zhCN)
VxeUI.setLanguage('zh-CN')

// 注册组件，由于没有全局安装，所以使用时需要逐个 import
Vue.use(VxeIcon)
Vue.use(VxeButton)
Vue.use(VxeInput)
Vue.use(VxeLoading)
Vue.use(VxeTooltip)

Vue.use(VxeTable)
Vue.use(VxeColumn)
Vue.use(VxeColgroup)
Vue.use(VxeGrid)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
