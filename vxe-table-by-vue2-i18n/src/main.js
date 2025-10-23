import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n'
import VxeUIBase, { VxeUI } from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'
import VxeUITable from 'vxe-table'
import 'vxe-table/lib/style.css'

VxeUI.setConfig({
  zIndex: 999
})

// 设置国际化
VxeUI.setConfig({
  // 集成 vue-i18n
  i18n: (key, args) => i18n.t(key, args),
  // 对参数的内容自动进行国际化翻译
  translate: (key, args) => i18n.t(key, args)
})

Vue.config.productionTip = false

Vue.use(VxeUIBase)
Vue.use(VxeUITable)

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
