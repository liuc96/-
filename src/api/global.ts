import axios from 'axios'
import { BASE_URL } from './config'
export const requestLogin = (obj:any) => {
  return new Promise((resolve, reject) => {
    axios.get('/mock/userinfo')
      .then(response => {
        const resulData = response
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}
