import {createSelector} from "reselect";

const getOrderState = (state) => state.orders

export const getOrder = createSelector(
    getOrderState,
    orders => orders.order
)

export const getOrderTotal = createSelector(
    getOrderState,
    orders => orders.total
)
