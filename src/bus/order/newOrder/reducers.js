import { createReducer } from '@reduxjs/toolkit'

import { SHOPLAND_ORDERS } from '../../../init/constants'
import { calcOrders } from '../../../utils'
import { getLS, setLS } from '../../../utils/helpers/localStorage'
import {
  setTotal,
  addOrder,
  setOrder,
  removeOrder,
  postOrderSuccess,
  postOrderError,
  postOrderRequest,
} from './actions'
import { postOrder } from './thunks'

const initialState = {
  loading: false,
  error: null,

  order: null,
  total: { number: 0, price: 0 },
}

export const newOrder = createReducer(initialState, (builder) => {
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
    .addCase(postOrderRequest, (state) => {
      state.loading = true
    })
    .addCase(postOrderSuccess, (state) => {
      setLS(SHOPLAND_ORDERS, '')

      state.loading = false
      state.error = null
      state.order = []
      state.total = { number: 0, price: 0 }
    })
    .addCase(postOrderError, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Conection Error'
    })

    // thunk POST /order
    .addCase(postOrder.pending, (state) => {
      state.loading = true
    })
    .addCase(postOrder.fulfilled, (state) => {
      setLS(SHOPLAND_ORDERS, '')

      state.loading = false
      state.error = null
      state.order = []
      state.total = { number: 0, price: 0 }
    })
    .addCase(postOrder.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Conection Error'
    })
})
