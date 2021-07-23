import { all, fork } from 'redux-saga/effects'

import { ordersSaga } from '../bus/order/saga'

const sagas = [...ordersSaga]

export default function* rootSaga() {
  const globalForks = sagas.map((saga) => fork(saga))
  yield all([...globalForks])
}
