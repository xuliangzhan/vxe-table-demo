import { createApp } from 'vue'
import App from './App.vue'
import VxeUITable, { VxeUI } from 'vxe-table'
import 'vxe-table/lib/style.css'

VxeUI.setConfig({
  zIndex: 999
})

createApp(App).use(VxeUITable).mount('#app')
