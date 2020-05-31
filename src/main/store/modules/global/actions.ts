import * as types from './types'
import api from '@/main/api/api'

// import { getCurrUserMenu } from './../services/auth'

export default {
  [types.REQUEST_LOGIN]: ({ commit }: { commit: any }, obj: any) => {
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
  [types.SET_DATA]: ({ commit }: { commit: any }, obj: any) => {
    interface result {
      name: string;
      age: number;
      like: string;
    }
    const setData = async function () {
      try {
        const result: result = {
          name: 'zhangsan',
          age: 18,
          like: 'running'
        }
        commit(types.SET_DATA, result)
      } catch (err) {
        console.log(err)
      }
    }
    setData()
  }
}
