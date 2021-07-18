import { createSelector } from 'reselect'

const getProductsState = (state) => state.products.allProducts

export const getProducts = createSelector(
  getProductsState,
  ({ loading, error, products, total }) => ({
    loading,
    error,
    products,
    total,
  })
)
