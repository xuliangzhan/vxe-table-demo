import { createApp } from 'vue'
import App from './App.vue'
import VxeUIBase from 'vxe-pc-ui'
import VxeUITable, { VxeUI } from 'vxe-table'
import 'vxe-table/lib/style.css'

VxeUI.setConfig({
  zIndex: 999
})

createApp(App).use(VxeUIBase).use(VxeUITable).mount('#app')
