import { createReducer } from '@reduxjs/toolkit'

import { fetchProducts } from './thunks'

const initialState = {
  loading: false,
  error: null,
  productsData: null,
}

export const allProductsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      state.loading = false
      state.productsData = action.payload
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
})
