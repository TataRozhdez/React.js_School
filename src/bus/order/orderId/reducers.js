import { createReducer } from '@reduxjs/toolkit'
import {
  getOrderIdError,
  getOrderIdRequest,
  getOrderIdSuccess,
} from './actions'

const initialState = {
  loading: false,
  error: null,

  orderId: null,
}

export const orderId = createReducer(initialState, (builder) => {
  builder
    .addCase(getOrderIdRequest, (state) => {
      state.loading = true
    })
    .addCase(getOrderIdSuccess, (state, action) => {
      state.loading = false
      state.orderId = action.payload
    })
    .addCase(getOrderIdError, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Conection Error'
    })
})
