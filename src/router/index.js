import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import Search from '@/components/search'
import My from '@/components/my'
import Buy from '@/components/buy'
import Login from '@/components/login'
import Details from '@/components/details'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/search',
      name: 'Search',
      component: Search
    },
    {
      path: '/my',
      name: 'My',
      component: My
    },
    {
      path: '/buy',
      name: 'Buy',
      component: Buy
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/details/:id',
      name: 'Details',
      component: Details
    }
  ]
})
