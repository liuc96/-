import * as types from './types'
export default {
  [types.SET_BILL_LIST] (state, res) {
    const Fee = res
    state.feeInfo = Fee
  }
}
