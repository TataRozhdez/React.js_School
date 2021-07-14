import { createSelector } from 'reselect'

const allProductsReducer = (state) => state.products.allProductsReducer

export const allProdSelector = createSelector(
  [allProductsReducer],
  (data) => data
)
