import Vue from 'vue'
import Router from 'vue-router'
// import Test from '../admin/Test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Wallet',
      component: () => import('../views/Wallet')
    }
  ]
})
