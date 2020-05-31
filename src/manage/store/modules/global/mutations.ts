import * as types from './types'

const mutations = {
  /**
   *登录
   */
  [types.SET_USERINFO] (state:any, userInfo:any) {
    state.userInfo = userInfo
  },
  [types.SET_DATA] (state:any, data:any) {
    state.data = data
  }
}

export default mutations
