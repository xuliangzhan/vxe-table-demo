import Vue from 'vue'
import VueRouter from 'vue-router'
import MyList from '../views/MyList.vue'
import MyEdit from '../views/MyEdit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'myList',
    component: MyList
  },
  {
    path: '/page',
    name: 'myPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MyPage.vue')
  },
  {
    path: '/edit',
    name: 'myEdit',
    component: MyEdit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
