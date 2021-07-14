import { createSelector } from 'reselect'

const getProductsState = (state) => state.products.allProductsReducer

export const getProducts = createSelector(
    getProductsState,
  ({ loading, error, products }) => ({ loading, error, products })
)
