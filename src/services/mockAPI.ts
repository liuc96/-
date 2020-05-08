
// 接口配置

// const LocalUrl = '/mock'                                                 // for local mock test

// const BaseUrl = '/mock'                                                  // for local mock test
// import { dev } from '../../config'
// const url = 'http://127.0.0.1:18081'                                    // 后台链接
const devUrl = 'http://weixin.aplusoffice.cn'
// const devUrl = 'http://192.168.5.5:80'                             // 开发后台 url
// const devUrl = 'http://192.168.5.250:18081'                             // 开发后台 url
// const testUrl = 'http://192.168.5.250:18081'                             // 开发后台 url
// 192.168.5.121
// export const imgUrl = 'http://192.168.5.77:80/storage/files/'                             // 图片 url
export const imgUrl = 'http://pmsback.aplusoffice.cn/storage/files/' // 图片 url
// export const devUrl = 'http://192.168.5.250:18082/storage/files/'      // 图片 url  http://192.168.5.250:18082/storage/files/2017-10-24/1508835207221.jpg
// export const testUrl = 'http://192.168.5.250:18081'                    // 图片 url

export const rentUrl = devUrl + '/bill/listCollectRent' // 租赁未交费用链接
export const NYUrl = devUrl + '/bill/listCashDeposit' // 能源管理押金用链接

export const rentHUrl = devUrl + '/bill/listCollectRentH' // 租赁已交费用链接

export const FeeUrl = devUrl + '/bill/listFee' // 费用列表链接

export const pmUrl = devUrl + '/bill/listPropertyFee' // 物业费未交用列表链接

export const pmHUrl = devUrl + '/bill/listPropertyFeeH' // 物业已交费用列表链接

export const eleUrl = devUrl + '/bill/listWattHour' // 电费未交列表链接

export const eleHUrl = devUrl + '/bill/listWattHourH' // 电费已交列表链接

export const waterUrl = devUrl + '/bill/listWaterRecord' // 水费未交列表链接

export const waterHUrl = devUrl + '/bill/listWaterRecordH' // 水费已交列表链接

export const BUILDING_LIST = devUrl + '/building/buildingList' // 绑定

export const BUILDING_REQUIRE = devUrl + '/building/bindingRoom' // 绑定 - 请求绑定

export const BUILDING_DELETE = devUrl + '/building/deleteUserWx' // 绑定 - 解除绑定

export const ROOM_LIST = devUrl + '/building/listUserWX' // 绑定的房间

export const ROOM_LISTTWO = devUrl + '/building/listUserWXTwo' // 绑定的房间智能电表

export const BULLETIN = devUrl + '/notice/listNotice' // 公告

export const BULLETIN_DETAILS = devUrl + '/notice/getNotice' // 公告详情

// 本地测试环境
export const FAULT = devUrl + '/repair/listRepair' // 故障报修 - '我的保修' 列表获取 // 正式: '/wx/listRepair'

export const FAULT_DETAIL = devUrl + '/repair/getDetails' // 故障报修 - 详情 接口

export const TO_FAULT = devUrl + '/repair/saveRepair' // 我要报修 http://192.168.5.250:18081/wx/saveRepair

export const UPDATEE_REPAIR = devUrl + '/repair/updateRepair' // 我的报修评价 -  接口

export const TO_PROPOSAL = devUrl + '/complaint/saveComplaint' // 我要投诉 http://192.168.5.250:18081/wx/saveComplaint

export const PROPOSAL = devUrl + '/complaint/listComplaint' //  '我的投诉' 列表获取

export const PROPOSAL_DETAIL = devUrl + '/complaint/getComplaint' // 我的投诉 - 详情 接口

export const PROPOSAL_UPDATE = devUrl + '/complaint/updateComplaint' // 我的投诉评价 -  接口

export const OFFICE_BUILDING = devUrl + '/room/officeBuilding' // 找办公楼初始页面 -  接口

export const OFFICE_BUILDING_LIST = devUrl + '/room/officeBuildingList' // 找办公楼列表请求 -  接口

export const UNION_OFFICE = devUrl + '/room/unionOffice' // 联合办公初始页面 -  接口

export const UNION_OFFICE_LIST = devUrl + '/room/unionOfficeList' // 联合办公列表请求 -  接口

export const ROOM_DETAILS = devUrl + '/room/getDetails' // 房间详情请求 -  接口

export const WX_PAY = 'http://wx.aijiabangong.com/wx/pay' // 微信测试

export const HOUR_METER_INFO = devUrl + '/wattHourMeter/wattHourMeterInfo' // 电表详情

export const DAY_ELECTRIC = devUrl + '/wattHourMeter/dayElectric' // 日用电走势

export const MONTH_ELECTRIC = devUrl + '/wattHourMeter/monthElectric' // 月用电走势

export const ELECTRICITY_BILL = devUrl + '/wattHourMeter/electricityBill' // 电费历史详情

export const MONTH_PAYMENT_RECORD = devUrl + '/wattHourMeter/monthPaymentRecord' // 每月缴费记录

export const WATT_HOUR_METER = devUrl + '/wattHourMeter/getwatthourmeter' // 实时查询电表信息

export const ALL_AIR_METER = devUrl + '/hardware/getAllAirMeter' // 获取当前用户空调列表

export const EVERY_AIR_METER = devUrl + '/hardware/getEveryAirMeter' // 获取空调状态

export const AIR_STSTUS_LIST = devUrl + '/hardware/setAirStatusList' // 控制空调

export const CHECK_PASSWORD = devUrl + '/wx/checkPassword' // 控制空调

export const ROOMARR_LIST = devUrl + '/hardware/getRoomAirList' // 空调面板

export const CHANGE_ROOM = devUrl + '/hardware/getChangeRoom' // 空调面板

// export const DOWN_LOAD_BILL = 'http://192.168.5.124:18082/ElectricityFees/hydropower'              // 水电费账单下载
//
// export const DOWN_LOAD_WY = 'http://192.168.5.128:18082/propertyFee/printProperty'                 // 物业费账单下载
//
// export const DOWN_LOAD_ZJ = 'http://192.168.5.128:18082/collectRent/printRent'                     // 租金账单下载

export const DOWN_LOAD_BILL = 'http://pmsback.aplusoffice.cn/ElectricityFees/hydropower' // 水电费账单下载

export const DOWN_LOAD_WY = 'http://pmsback.aplusoffice.cn/propertyFee/printProperty' // 物业费账单下载

export const DOWN_LOAD_ZJ = 'http://pmsback.aplusoffice.cn/collectRent/printRent' // 租金账单下载

export const RECHARGE_RECORD = devUrl + '/wattHourMeter/rechargeRecord' // 电费充值记录

export const ESTIMATE = devUrl + '/wattHourMeter/estimate' // 本月消费和预计可可用天数
