import { createReducer } from '@reduxjs/toolkit'

import { fetchProducts } from './thunks'

const initialState = {
  loading: false,
  error: null,

  products: null,
  total: 0,
}

export const allProducts = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchProducts.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchProducts.fulfilled, (state, action) => {
      const { products, total } = action.payload

      state.loading = false
      state.products = products
      state.total = total
    })
    .addCase(fetchProducts.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Conection Error'
    })
})
