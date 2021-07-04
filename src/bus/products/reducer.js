import { createReducer } from '@reduxjs/toolkit'
import {
  changePage,
  changePerPage,
  changePriceMax,
  changePriceMin,
  changeOrigin,
} from './actions'

import { fetchProducts } from './thunks'

const initialState = {
  loading: false,
  error: null,
  productsData: null,

  page: 1,
  perPage: 10,

  minPrice: 0,
  maxPrice: 1000,
  originSelect: [],
}

export const productsReducer = createReducer(initialState, (builder) => {
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
    .addCase(changePage, (state, action) => {
      state.page = action.payload
    })
    .addCase(changePerPage, (state, action) => {
      state.perPage = action.payload
    })
    .addCase(changePriceMin, (state, action) => {
      state.page = 1
      state.minPrice = action.payload
    })
    .addCase(changePriceMax, (state, action) => {
      state.page = 1
      state.maxPrice = action.payload
    })
    .addCase(changeOrigin, (state, action) => {
      state.page = 1
      state.originSelect = action.payload
    })
})
