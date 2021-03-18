import { createApp } from 'vue'
import App from './App.vue'
import './index.css'

import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'
import './plugins/table'

const app = createApp(App)

app.use(VXETable)

app.mount('#app')
