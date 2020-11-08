import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

const app = createApp(App)

app.use(store)
  .use(router)
  .use(VXETable)

app.mount('#app')
