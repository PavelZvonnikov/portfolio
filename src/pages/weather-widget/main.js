import Vue from 'vue'
import App from './App/temp.vue'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
