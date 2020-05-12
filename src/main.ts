import Vue from 'vue'
import App from './app.vue'
import router from './router/index'
import store from './store'

// Vue.config.productionTip = false
require('./mock/global.js')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
