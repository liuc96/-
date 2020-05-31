import Vue from 'vue'
import App from './admin.vue'
import router from './router/index'
import store from './store'

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
