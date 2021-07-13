import { createReducer } from '@reduxjs/toolkit'

import { SHOPLAND_ORDERS } from '../../init/constants'
import { calcOrders } from '../../utils'
import { getLS, setLS } from '../../utils/helpers/localStorage'
import { setTotal, addOrder, setOrder, removeOrder } from './actions'

const initialState = {
  loading: false,
  error: null,

  order: null,
  total: null,
}

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOrder, (state) => {
      const orderLS = getLS(SHOPLAND_ORDERS) || []

      state.order = orderLS
      state.total = calcOrders(orderLS)
    })

    .addCase(addOrder, (state, action) => {
      setLS(SHOPLAND_ORDERS, action.payload)

      state.order = action.payload
      state.total = calcOrders(action.payload)
    })

    .addCase(removeOrder, (state, action) => {
      setLS(SHOPLAND_ORDERS, action.payload)

      state.order = action.payload
      state.total = calcOrders(action.payload)
    })

    .addCase(setTotal, (state, action) => {
      state.total = action.payload
    })
})
