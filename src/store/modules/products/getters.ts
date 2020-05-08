export const getterNengyuanInfo = state => state.nyInfo // 能源管理押金
export const getterRentInfo = state => state.rentInfo // 房屋租赁费未交
// export const getterSumRent = state => state.sumRent                           // 房屋租赁费的和

export const getterRentInfoH = state => state.rentInfoH // 房屋租赁费已交

export const getterFeeInfo = state => state.feeInfo // 费用列表

// export const getterpmInfo = state => state.pmInfo                             // 物业费未交列表
// export const getterSumPmInfo = state => state.sumPm                             // 物业费未交的和
export const getterpmInfo = state => state.propertyFeeWj // 物业费未交的和以及列表

export const getterpmInfoH = state => state.pmInfoH // 物业费已交列表

export const getterEleInfo = state => state.eleInfo // 电费未交列表以及未交金额之和
// export const getterSumEleInfo = state => state.sumEle                             // 电费未交的和

export const getterEleInfoH = state => state.eleInfoH // 电费已交列表

export const getterWaterInfo = state => state.waterInfo // 水费未交列表
// export const getterSumWaterInfo = state => state.sumWater                            // 水费未交的和

export const getterWaterInfoH = state => state.waterInfoH // 水费已交列表

export const getterClientNum = state => state.clientNum // 客户微信编号

export const getterWXPay = state => state.WXPay // 客户微信编号

export const gettermeterInfo = state => state.meterInfo // 电表详情

export const getterdayElectric = state => state.dayElectric // 日用电量走势

export const gettermonthElectric = state => state.monthElectric // 月用电量走势

export const getterelectricBill = state => state.electricBill // 电费历史账单

export const gettermonthPayment = state => state.monthPayment // 每月缴费记录

export const getterwattMeter = state => state.wattMeter // 实时电表查询

export const getterRoomList2 = state => state.roomListDetail // '绑定' - 用户下房间列表

export const getterCheckResult = state => state.checkPassWord // 检查密码是否正确

export const getterDownLoadBill = state => state.downLoadBill // 账单下载

export const getterDownLoadWy = state => state.downLoadWy // 物业账单下载

export const getterDownLoadZj = state => state.downLoadZj // 租金账单下载

export const getterRechargeRecord = state => state.rechargeRecord // 电表充值记录

export const getterEstimate = state => state.estimate // 本月消费和预计可用天数
