import { createSelector } from 'reselect'

const paginationReducer = (state) => state.products.allProductsReducer

export const paginationSelector = createSelector(
  [paginationReducer],
  (data) => data
)
