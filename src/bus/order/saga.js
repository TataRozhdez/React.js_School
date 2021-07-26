import { newOrderWatcher } from './newOrder/saga'
import { orderIdWatcher } from './orderId/saga'

export const ordersSaga = [orderIdWatcher, newOrderWatcher]
