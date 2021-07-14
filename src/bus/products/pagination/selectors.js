import { createSelector } from 'reselect'

const paginationReducer = (state) => state.products.paginationReducer

export const paginationSelector = createSelector(
  [paginationReducer],
  (data) => data
)
