import * as types from './types'
import api from '@/api/api'

// import { getCurrUserMenu } from './../services/auth'

export default {
  [types.REQUEST_LOGIN]: ({ commit }, obj: any) => {
    const getUserInfo = async function () {
      try {
        const result = await api.requestLogin(obj)
        commit(types.SET_USERINFO, result)
      } catch (err) {
        console.log(err)
      }
    }
    getUserInfo()
  },
  [types.SET_DATA]: ({ commit }, obj: any) => {
    const setData = async function () {
      try {
        const result = { name: 'zhangsan', age: 18, like: 'running' }
        commit(types.SET_DATA, result)
      } catch (err) {
        console.log(err)
      }
    }
    setData()
  }
}
