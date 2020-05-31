import * as axios from './http'
export const requestLogin = (params: any) => {
  return axios.get('/mock/login', {
    name: params.name,
    password: params.password
  })
}
