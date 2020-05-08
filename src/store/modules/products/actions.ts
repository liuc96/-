import * as billAPI from './api'
import * as types from './types'

export default {
  [types.REQUIRE_RENT_FEE]: ({ commit }, obj:any) => {
    const asyncRentInfo = async function () {
      try {
        const result = await billAPI.apiRentInfo(obj)
        commit(types.SET_RENT_FEE, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncRentInfo()
  },
  [types.REQUIRE_RENT_FEE_H]: ({ commit }, obj) => {
    const asyncRentInfoH = async function () {
      try {
        const result = await billAPI.apiRentInfoH(obj)
        commit(types.SET_RENT_FEE_H, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncRentInfoH()
  },
  [types.REQUIRE_BILL_LIST]: ({ commit }, obj) => {
    const asyncFeeInfo = async function () {
      try {
        const result = await billAPI.apiFeeInfo(obj)
        commit(types.SET_BILL_LIST, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncFeeInfo()
  },
  [types.REQUIRE_PM_FEE]: ({ commit }, obj) => {
    const asyncPmInfo = async function () {
      try {
        const result = await billAPI.apipmInfo(obj)
        commit(types.SET_PM_FEE, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfo()
  },
  [types.REQUIRE_PM_FEE_H]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apipmInfoH(obj)
        commit(types.SET_PM_FEE_H, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_ELE_FEE]: ({ commit }, obj) => {
    const asyncPmInfo = async function () {
      try {
        const result = await billAPI.apiEleInfo(obj)
        commit(types.SET_ELE_FEE, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfo()
  },
  [types.REQUIRE_ELE_FEE_H]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiEleInfoH(obj)
        commit(types.SET_ELE_FEE_H, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_WATER_FEE]: ({ commit }, obj) => {
    const asyncPmInfo = async function () {
      try {
        const result = await billAPI.apiWaterInfo(obj)
        commit(types.SET_WATER_FEE, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfo()
  },
  [types.REQUIRE_WATER_FEE_H]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiWaterInfoH(obj)
        commit(types.SET_WATER_FEE_H, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_WX_PAY]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiWXPay(obj)
        commit(types.SET_WX_PAY, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_WX_PAY_TEST]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiWXPayTest(obj)
        commit(types.SET_WX_PAY_TEST, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_METER_INFO]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiMeterInfo(obj)
        commit(types.SET_METER_INFO, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_DAY_ELECTRIC]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiDayElectric(obj)
        commit(types.SET_DAY_ELECTRIC, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_MONTH_ELECTRIC]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiMonthElectric(obj)
        commit(types.SET_MONTH_ELECTRIC, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_ELECTRICITY_BILL]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiElectricityBill(obj)
        commit(types.SET_ELECTRICITY_BILL, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_MONTH_PAYMENT]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiMonthPayment(obj)
        commit(types.SET_MONTH_PAYMENT, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUIRE_WATT_METER]: ({ commit }, obj) => {
    const asyncPmInfoH = async function () {
      try {
        const result = await billAPI.apiWattMeter(obj)
        commit(types.SET_WATT_METER, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncPmInfoH()
  },
  [types.REQUEST_ROOM_LIST_DETAIL]: ({ commit }, obj) => {
    const asyncBuildingList = async function () {
      try {
        const result = await billAPI.apiRoomListDetail(obj)
        commit(types.SET_ROOM_LIST_DETAIL, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncBuildingList()
  },
  [types.REQUIRE_CHECK_PASSWORD]: ({ commit }, obj) => {
    const asyncCheckWord = async function () {
      try {
        const result = await billAPI.apiCheckPassWord(obj)
        commit(types.SET_CHECK_PASSWORD, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncCheckWord()
  },
  [types.REQUIRE_DOWNLOAD_BILL]: ({ commit }, obj) => {
    const asyncCheckWord = async function () {
      try {
        const result = await billAPI.apiDownLoadBill(obj)
        commit(types.SET_DOWNLOAD_BILL, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncCheckWord()
  },
  [types.REQUIRE_DOWNLOAD_WY]: ({ commit }, obj) => {
    const asyncCheckWord = async function () {
      try {
        const result = await billAPI.apiDownLoadWy(obj)
        commit(types.SET_DOWNLOAD_WY, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncCheckWord()
  },
  [types.REQUIRE_DOWNLOAD_ZJ]: ({ commit }, obj) => {
    const asyncCheckWord = async function () {
      try {
        const result = await billAPI.apiDownLoadZj(obj)
        commit(types.SET_DOWNLOAD_ZJ, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncCheckWord()
  },
  [types.REQUIRE_RECHARGE_RECORD]: ({ commit }, obj) => {
    const asyncRechargeRecord = async function () {
      try {
        const result = await billAPI.apiRechargeRecord(obj)
        commit(types.SET_RECHARGE_RECORD, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncRechargeRecord()
  },
  [types.REQUIRE_ESTIMATE]: ({ commit }, obj) => {
    const asyncEstimate = async function () {
      try {
        const result = await billAPI.apiEstimate(obj)
        commit(types.SET_ESTIMATE, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncEstimate()
  },
  // 能源管理押金
  [types.REQUIRE_ENERGY_DEPOSIT]: ({ commit }, obj) => {
    const asyncNengyuan = async function () {
      try {
        const result = await billAPI.apiNengyuan(obj)
        commit(types.SET_NENGYUAN_INFO, result)
      } catch (err) {
        console.log(err)
      }
    }
    asyncNengyuan()
  }

}
