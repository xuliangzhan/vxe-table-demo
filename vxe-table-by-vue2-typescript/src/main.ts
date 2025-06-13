import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VxeUITable, { VxeUI } from 'vxe-table'
import 'vxe-table/lib/style.css'

VxeUI.setConfig({
  zIndex: 999
})

Vue.config.productionTip = false

Vue.use(VxeUITable)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
