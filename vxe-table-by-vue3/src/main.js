import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { useTable } from './plugins/vxe-table'

createApp(App).use(store).use(router).use(useTable).mount('#app')
