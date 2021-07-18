import { createReducer } from '@reduxjs/toolkit'

import { patchProduct, postProduct } from './thunks'
import { clearStateUpload, onVisibleUpload, setDataUpload } from './actions'

const initialState = {
  loading: false,
  error: null,
  successMsg: null,

  visible: false,
  data: null,
}

export const uploadModal = createReducer(initialState, (builder) => {
  builder
    .addCase(onVisibleUpload, (state, action) => {
      if (state.visible) state.data = null
      state.visible = action.payload
    })
    .addCase(clearStateUpload, (state) => {
      state.error = null
      state.successMsg = null
    })
    .addCase(setDataUpload, (state, action) => {
      state.data = action.payload
    })
    .addCase(postProduct.pending, (state) => {
      state.loading = true
      state.error = null
      state.successMsg = null
    })
    .addCase(postProduct.fulfilled, (state) => {
      state.loading = false
      state.visible = false
      state.error = null
      state.data = null
      state.successMsg = 'Successfully posted'
    })
    .addCase(postProduct.rejected, (state, action) => {
      state.loading = false
      state.successMsg = null
      state.error = action.payload
    })
    .addCase(patchProduct.pending, (state) => {
      state.loading = true
      state.error = null
      state.successMsg = null
    })
    .addCase(patchProduct.fulfilled, (state) => {
      state.loading = false
      state.visible = false
      state.error = null
      state.data = null
      state.successMsg = 'Successfully updated'
    })
    .addCase(patchProduct.rejected, (state, action) => {
      state.loading = false
      state.successMsg = null
      state.error = action.payload
    })
})
