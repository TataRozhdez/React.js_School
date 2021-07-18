import { createSelector } from 'reselect'

const paginationReducer = (state) => state.products.pagination

export const paginationSelector = createSelector(
  [paginationReducer],
  (data) => data
)
