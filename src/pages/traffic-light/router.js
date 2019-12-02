import Traffic from './App/temp.vue'
import Color from './components/Color/temp.vue'

export const trafficLightRoutes = {
  name: 'traffic-light',
  path: '/traffic-light',
  component: Traffic,
  children: [
    {
      name: "color",
      path: '/traffic-light/:id',
      component: Color,
      beforeEnter: (to, from, next) => {
        if (from.fullPath === to.fullPath === '/home' ) {
          next(false)
        }
        else {
          next()
        }
      }
    },
    // {
    //   name: "red",
    //   path: '/traffic-light/1',
    //   component: Color,
    // },
    // {
    //   name: "yellow",
    //   path: '/traffic-light/2',
    //   component: Color,
    // },
    // {
    //   name: "green",
    //   path: '/traffic-light/3',
    //   component: Color,
    // },
    {
      path: '/traffic-light*',
      redirect: '/traffic-light/1'
    }
  ],
};

