import Vue from "vue";
import store from "./store";
import router from "./router";

import App from "./App.vue";

import "./reset.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
