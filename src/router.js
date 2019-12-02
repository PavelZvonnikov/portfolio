import Vue from 'vue'
import VueRouter from 'vue-router'

import { trafficLightRoutes } from './pages/traffic-light/router';

import Home from './components/Home.vue'
import WeatherWidget from './pages/weather-widget/App/temp.vue'
import ToDoApp from './pages/todo-app/App.vue'


Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      name: 'home',
      path: '/home',
      component: Home,
    },
    {
      name: 'weather-widget',
      path: '/weather-widget',
      component: WeatherWidget,
    },
    {
      name: 'todo-app',
      path: '/todo-app',
      component: ToDoApp,
    },
    trafficLightRoutes,
    {
      path: '**',
      redirect: '/home'
    },
  ]
})

router.beforeEach((to, from, next) => {
  if (from.fullPath === to.fullPath ) {
    next(false)
  }
  else {
    next()
  }
})

export default router;