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
    },
    {
      path: '/traffic-light*',
      redirect: '/traffic-light/1'
    }
  ],
};

