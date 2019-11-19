import Vue from 'vue'
import VueRouter from 'vue-router'

import { trafficLightRoutes } from './pages/traffic-light/router';

import Home from './components/Home.vue'


Vue.use(VueRouter)

export default new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
      props: true,
    },
    trafficLightRoutes,
    {
      path: '**',
      redirect: '/home'
    }
  ]
})