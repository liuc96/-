import axios from 'axios'

export const requestLogin = (obj:any) => {
  return new Promise(function (resolve, reject) {
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
