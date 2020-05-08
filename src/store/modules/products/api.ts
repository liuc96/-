/* global Promise : true */
import axios from 'axios'
import * as mockAPI from '../../../services/mockAPI'
// 转换字符deng
// const qs = require( 'qs' ) require

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

export const apiRentInfo = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.rentUrl + '?clientNum=' + obj.clientNum)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiRentInfoH = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.rentHUrl + '?clientNum=' + obj.clientNum + '&pageFirst=' + obj.pageFirst)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiFeeInfo = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.FeeUrl + '?clientNum=' + obj.clientNum)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apipmInfo = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.pmUrl + '?clientNum=' + obj.clientNum)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apipmInfoH = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.pmHUrl + '?clientNum=' + obj.clientNum + '&pageFirst=' + obj.pageFirst)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiEleInfo = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.eleUrl + '?clientNum=' + obj.clientNum)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiEleInfoH = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.eleHUrl + '?clientNum=' + obj.clientNum + '&pageFirst=' + obj.pageFirst)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiWaterInfo = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.waterUrl + '?clientNum=' + obj.clientNum)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiWaterInfoH = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.waterHUrl + '?clientNum=' + obj.clientNum + '&pageFirst=' + obj.pageFirst)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiWXPay = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.WX_PAY + '?money=' + obj.money + '&clientNum=' + obj.clientNum + '&payType=' + obj.payType + '&id=' + obj.id)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiWXPayTest = (obj) => {
  return new Promise(function (resolve, reject) {
    console.log(mockAPI.WX_PAY)
    axios.post(mockAPI.WX_PAY + '?orderAmount=' + obj.money + '&openid=' + obj.clientNum)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiMeterInfo = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.HOUR_METER_INFO + '?id=' + obj.id)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiDayElectric = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.DAY_ELECTRIC + '?id=' + obj.id + '&date=' + obj.date)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiMonthElectric = (obj) => {
  return new Promise(function (resolve, reject) {
    console.log(mockAPI.MONTH_ELECTRIC)
    axios.post(mockAPI.MONTH_ELECTRIC + '?id=' + obj.id + '&date=' + obj.date)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiElectricityBill = (obj) => {
  return new Promise(function (resolve, reject) {
    console.log(mockAPI.ELECTRICITY_BILL)
    axios.post(mockAPI.ELECTRICITY_BILL + '?id=' + obj.id)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiMonthPayment = (obj) => {
  return new Promise(function (resolve, reject) {
    console.log(mockAPI.MONTH_PAYMENT_RECORD)
    axios.post(mockAPI.MONTH_PAYMENT_RECORD + '?id=' + obj.id + '&date=' + obj.date + '&pageFirst=' + obj.pageFirst)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiWattMeter = (obj) => {
  return new Promise(function (resolve, reject) {
    console.log(mockAPI.WATT_HOUR_METER)
    axios.post(mockAPI.WATT_HOUR_METER + '?wattNumber=' + obj.wattNumber + '&serialServerIp=' + obj.serialServerIp + '&port=' + obj.port + '&roomId=' + obj.roomId + '&id=' + obj.id)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiRoomListDetail = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.ROOM_LISTTWO + '?clientNum=' + obj.clientNum
      //   mockAPI.ROOM_LIST, qs.stringify({
      //   'clientNum': '12222'
      // })
    )
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiCheckPassWord = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.CHECK_PASSWORD + '?clientNum=' + obj.clientNum + '&wxTypePwd=' + obj.wxTypePwd)
      .then(response => {
        const resulData = response.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiDownLoadBill = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.DOWN_LOAD_BILL + '?id=' + obj.id + '&source=1')
      .then(response => {
        const resulData = response.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiDownLoadWy = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.DOWN_LOAD_WY + '?id=' + obj.id + '&source=1')
      .then(response => {
        const resulData = response.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiDownLoadZj = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.DOWN_LOAD_ZJ + '?id=' + obj.id + '&source=1')
      .then(response => {
        const resulData = response.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}
// 能源管理押金
export const apiNengyuan = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.get(mockAPI.NYUrl + '?clientNum=' + obj.clientNum)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiRechargeRecord = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.RECHARGE_RECORD + '?id=' + obj.id + '&pageFirst=' + obj.pageFirst)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}

export const apiEstimate = (obj) => {
  return new Promise(function (resolve, reject) {
    axios.post(mockAPI.ESTIMATE + '?id=' + obj.id)
      .then(response => {
        const resulData = response.data.data
        resolve(resulData)
      })
      .catch(error => {
        reject(error)
      })
  })
}
