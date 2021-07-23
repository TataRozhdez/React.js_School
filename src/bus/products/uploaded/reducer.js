import { createReducer } from '@reduxjs/toolkit'

import { fetchUploads } from './thunks'

const initialState = {
  loading: false,
  error: null,

  uploads: null,
  total: 0,
}

export const uploaded = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchUploads.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchUploads.fulfilled, (state, action) => {
      const { products, total } = action.payload

      state.loading = false
      state.uploads = products
      state.total = total
    })
    .addCase(fetchUploads.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Conection Error'
    })
})
