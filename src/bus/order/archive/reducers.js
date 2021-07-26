import { createReducer } from '@reduxjs/toolkit'

import { fetchOrders } from './thunks'

const initialState = {
  loading: false,
  error: null,

  archive: null,
}

export const archive = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchOrders.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchOrders.fulfilled, (state, action) => {
      state.loading = false
      state.archive = action.payload
    })
    .addCase(fetchOrders.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Conection Error'
    })
})
