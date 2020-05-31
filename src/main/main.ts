import Vue from 'vue'
import App from './main.vue'
import router from './router/index'
import store from './store'
// import {
//   Button
// } from 'element-ui'
// import 'element-ui/lib/theme-chalk/button.css'
// import 'element-ui/lib/theme-chalk/index.css'
// Vue.use(Button)

// require('./mock/global.js')

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
}).$mount('#app')
