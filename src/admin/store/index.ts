import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate' // 配置插件vuex-persistedstate插件,使部分数据永久本地化存储

// import products from './modules/products/products'
import global from './modules/global/global'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState({
      // 存储对象 默认为 localStorage
      storage: window.localStorage,
      // 传入的state是Vuex.store.state值
      reducer (state) {
        return {
          global: {
            data: state.global.data
          }
        }
      }
    })
  ],
  modules: {
    // products,
    global
  }
})
