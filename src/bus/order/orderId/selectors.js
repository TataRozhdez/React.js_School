import { createSelector } from 'reselect'

const getOrderIdState = (state) => state.order.orderId

export const getOrderId = createSelector(
  getOrderIdState,
  ({ loading, error, orderId }) => ({ loading, error, orderId })
)
