import actions from './actions'
import mutations from './mutations'
import * as getters from './getters'
import * as types from './types'

const state = {
  billList: [],
  buildingFee: { // 房屋租赁费
    money: 1024
  },
  propertyFee: { // 物业管理费
    money: 1024
  },
  electricityBill: { // 电费
    money: 1024
  },
  waterFee: { // 水费
    money: 1024
  },
  leaseDeposit: { // 租赁保证金
    money: 1024
  },
  energyDeposit: { // 能源管理费
    money: 1024
  },
  decorationDeposit: { // 装修保证金
    money: 1024
  },
  nyInfo: [],
  pmInfoH: [],
  rentInfo: {},
  rentInfoH: [],
  feeInfo: [],
  eleInfo: {},
  eleInfoH: [],
  clientNum: '1',
  waterInfo: {},
  waterInfoH: [],
  pageFirst: 0,
  WXPay: [],
  pageType: 'weijiao', // yijiao已交上拉查询每页6行 weijiao未交页面 不需要查询
  meterInfo: {},
  dayElectric: {},
  monthElectric: {},
  electricBill: [],
  monthPayment: [],
  wattMeter: {},
  roomListDetail: [],
  checkPassWord: {},
  downLoadBill: {},
  downLoadWy: {},
  downLoadZj: {},
  propertyFeeWj: {},
  rechargeRecord: {},
  estimate: {}
}

export default {
  state,
  types,
  actions,
  mutations,
  getters
}
