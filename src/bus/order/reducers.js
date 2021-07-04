import { createReducer } from '@reduxjs/toolkit'

import {
  changeOrder,
  decrementItem,
  incrementItem,
  removeItem,
  setTotal,
} from './actions'

const initialState = {
  loading: false,
  error: null,

  order: null,
  total: null,
}

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeOrder, (state, action) => {
      state.order = action.payload
    })
    .addCase(setTotal, (state, action) => {
      state.total = action.payload
    })
    .addCase(decrementItem, (state, action) => {
      state.total = action.payload
    })
    .addCase(incrementItem, (state, action) => {
      state.total = action.payload
    })
    .addCase(removeItem, (state, action) => {
      state.total = action.payload
    })
})
