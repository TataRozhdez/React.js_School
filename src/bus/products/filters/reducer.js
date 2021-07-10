import { createReducer } from '@reduxjs/toolkit'
import { changePriceMax, changePriceMin, changeOrigin } from './actions'

import { fetchOrigins } from './thunks'

const initialState = {
  loading: false,
  error: null,

  minPrice: 0,
  maxPrice: 1000,

  allOrigins: null,
  originSelect: [],
}

export const filtersReducer = createReducer(initialState, (builder) => {
  builder
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
    .addCase(fetchOrigins.pending, (state) => {
      state.loading = true
    })

    .addCase(fetchOrigins.fulfilled, (state, action) => {
      state.loading = false
      state.allOrigins = action.payload
    })
    .addCase(fetchOrigins.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload
    })
})
