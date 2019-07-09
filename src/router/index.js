import Vue from 'vue'
import Router from 'vue-router'

import Index from  '@/pages/Index'
import Home from  '@/pages/Home'
import Service from  '@/pages/Service'
import My from  '@/pages/My'
import Lottery from  '@/pages/Lottery'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/home',   //重定向
      name: 'Index',
      component: Index,
        children:[
          {
            path: '/home',
            name: 'Home',
            component: Home
          },
          {
            path: '/lottery',
            name: 'Lottery',
            component: Lottery 
          },
          {
            path: '/service',
            name: 'Service',
            component: Service
          },
          {
            path: '/my',
            name: 'My',
            component: My 
          }
          
        ]
    },
    
    
  ]
})
