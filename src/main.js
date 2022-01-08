import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,//tell our Vue instance to use the router we’ve imported:
  store,
  render: h => h(App)
}).$mount('#app')
