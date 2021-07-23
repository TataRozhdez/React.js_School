import { call, put, takeLatest } from 'redux-saga/effects'

import { getOrderIDApi } from '../../../services/api/order'
import { getOrderIdError, getOrderIdSuccess } from './actions'
import { GET_ORDER_ID_REQUEST } from './constants'

export function* getOrderInfo(action) {
  try {
    const result = yield call(getOrderIDApi, action.payload)

    yield put(getOrderIdSuccess(result))
  } catch (err) {
    yield put(getOrderIdError(err))
  }
}

export function* orderIdWatcher() {
  yield takeLatest(GET_ORDER_ID_REQUEST, getOrderInfo)
}
