import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
const Home = () => import('../page/home/home.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      redirect: '/home',
      children: [
        {path: 'home', component: Home}
      ]

    }
  ]
})
