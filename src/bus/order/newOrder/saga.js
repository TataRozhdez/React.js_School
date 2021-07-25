import { call, put, takeLatest } from 'redux-saga/effects'

import { POST_ORDER_REQUEST } from './constants'
import { postOrderApi } from './../../../services/api/order'
import { postOrderError, postOrderSuccess } from './actions'
import { store } from '../../../init/store'
import { prepareOrderPost } from '../../../utils'
import history from '../../../services/history'

export function* posrtOrderSaga() {
  const state = store.getState()
  const { order } = state.order.newOrder

  const data = {
    order: {
      pieces: prepareOrderPost(order),
    },
  }

  try {
    const result = yield call(postOrderApi, data)

    yield put(postOrderSuccess(result))
    history.push(`/archive/${result.data.id}`)
  } catch (err) {
    yield put(postOrderError(err))
  }
}

export function* newOrderWatcher() {
  yield takeLatest(POST_ORDER_REQUEST, posrtOrderSaga)
}
