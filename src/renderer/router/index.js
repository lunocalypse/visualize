import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/Creator',
      name: 'Creator',
      component: require('@/components/Creator')
    },
    {
      path: '/Breadcrumbs',
      name: 'Breadcrumbs',
      component: require('@/components/Breadcrumbs')
    }
  ]
})
