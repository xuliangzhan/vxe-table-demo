import { createApp } from 'vue'
import App from './App.vue'

import VxeTable from 'vxe-table'
import 'vxe-table/lib/style.css'

import VxeUI from 'vxe-pc-ui'
import 'vxe-pc-ui/lib/style.css'

createApp(App).use(VxeUI).use(VxeTable).mount('#app')
