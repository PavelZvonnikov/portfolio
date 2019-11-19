import Traffic from './App/temp.vue'
import Color from './components/Color/temp.vue'

export const trafficLightRoutes = {
  name: 'traffic-light',
  path: '/traffic-light',
  component: Traffic,
  props: true,
  children: [
    {
      name: "red",
      path: '/traffic-light/1',
      component: Color,
      props: true
    },
    {
      name: "yellow",
      path: '/traffic-light/2',
      component: Color,
      props: true,
    },
    {
      name: "green",
      path: '/traffic-light/3',
      component: Color,
      props: true
    },
    {
      path: '/traffic-light*',
      redirect: '/traffic-light/1'
    }
  ],
};
