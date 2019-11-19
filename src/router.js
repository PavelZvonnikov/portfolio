import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home.vue'
import Traffic from './components/traffic-light/App/temp.vue'

Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    { 
      name: "home",
      path: '/home',
      component: Home,
      props: true 
    },
    {
      name: "traffic-light",
      path: '/traffic-light',
      component: Traffic,
      props: true 

    },
    
    {
      path: '/*',
      redirect: '/home'
    }
  ]
})