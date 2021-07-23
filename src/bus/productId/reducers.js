import { createReducer } from '@reduxjs/toolkit'

import { getProductID } from './thunks'

const initialState = {
  loading: false,
  error: null,

  product: null,
}

export const productId = createReducer(initialState, (builder) => {
  builder
    .addCase(getProductID.pending, (state) => {
      state.loading = true
    })
    .addCase(getProductID.fulfilled, (state, action) => {
      state.loading = false
      state.product = action.payload
    })
    .addCase(getProductID.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Conection Error'
    })
})
