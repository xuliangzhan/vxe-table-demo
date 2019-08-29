import Vue from 'vue'
import Router from 'vue-router'
import MyTable from '@/components/MyTable'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MyTable',
      component: MyTable
    }
  ]
})
