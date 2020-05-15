import Vue from 'vue'
import Vuex from 'vuex'

// import products from './modules/products/products'
import global from './modules/global/global'

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  // },
  // mutations: {
  // },
  // actions: {
  // },
  modules: {
    // products,
    global
  }
})
