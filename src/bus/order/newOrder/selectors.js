import { createSelector } from 'reselect'

const getOrderState = (state) => state.order.newOrder

export const getOrder = createSelector(getOrderState, ({ order }) => order)

export const getOrderTotal = createSelector(getOrderState, ({ total }) => total)
