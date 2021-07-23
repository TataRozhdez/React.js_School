import { createSelector } from 'reselect'

const getProductState = (state) => state.productId

export const getProduct = createSelector(
  getProductState,
  ({ loading, error, product }) => ({ loading, error, product })
)
