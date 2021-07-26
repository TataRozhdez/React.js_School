import { createReducer } from '@reduxjs/toolkit'
import { changePage, changePerPage } from './actions'
import { setPagination } from './thunks'

const initialState = {
  page: 1,
  perPage: '10',
}

export const pagination = createReducer(initialState, (builder) => {
  builder
    .addCase(changePage, (state, action) => {
      state.page = action.payload
    })
    .addCase(changePerPage, (state, action) => {
      state.perPage = action.payload
    })
    .addCase(setPagination.fulfilled, (state, action) => {
      action.payload.map((a) => (state[a[0]] = a[1]))
    })
})
