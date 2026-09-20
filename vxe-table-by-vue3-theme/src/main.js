import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VxeUIBase from 'vxe-pc-ui'
import VxeUITable, { VxeUI } from 'vxe-table'
import 'vxe-table/lib/style.css'

VxeUI.setConfig({
  zIndex: 999
})

createApp(App).use(store).use(router).use(VxeUIBase).use(VxeUITable).mount('#app')
