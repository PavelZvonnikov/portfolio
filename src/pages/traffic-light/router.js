import Traffic from "./App/temp.vue";
import Color from "./components/Color/temp.vue";

export const trafficLightRoutes = {
  name: "traffic-light",
  path: "/portfolio/traffic-light",
  component: Traffic,
  children: [
    {
      name: "color",
      path: "/portfolio/traffic-light/:id",
      component: Color
    },

    {
      path: "/portfolio/traffic-light*",
      redirect: "/portfolio/traffic-light/1"
    }
  ]
};
