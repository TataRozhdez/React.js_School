import { createReducer } from '@reduxjs/toolkit'

import { setTotal, addOrder, setOrder, removeOrder } from './actions'

const initialState = {
  loading: false,
  error: null,

  order: null,
  total: null,
}

export const orderReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setOrder, (state, action) => {
      state.order = action.payload
      state.total = action.total
    })

    .addCase(addOrder, (state, action) => {
      state.order = action.payload
      state.total = action.total
    })

    .addCase(removeOrder, (state, action) => {
      state.order = action.payload
      state.total = action.total
    })

    .addCase(setTotal, (state, action) => {
      state.total = action.payload
    })
})
