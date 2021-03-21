import { createApp } from 'vue'
import App from './App.vue'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import './plugins/vxe-table'

createApp(App).use(VXETable).mount('#app')
