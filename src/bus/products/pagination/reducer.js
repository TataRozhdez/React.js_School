import { createReducer } from '@reduxjs/toolkit'
import { changePage, changePerPage } from './actions'

const initialState = {
  page: 1,
  perPage: 10,
}

export const paginationReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changePage, (state, action) => {
      state.page = action.payload
    })
    .addCase(changePerPage, (state, action) => {
      state.perPage = action.payload
    })
})
