import { createApp } from 'vue'
import App from './App.vue'
import { useTable } from './plugins/vxe-table'

createApp(App).use(useTable).mount('#app')
