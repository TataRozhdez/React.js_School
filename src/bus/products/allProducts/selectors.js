export const productsSelector = (state) =>
  state.products.allProductsReducer.productsData
export const productsLoadingSelector = (state) =>
  state.products.allProductsReducer.loading
export const productsErrorSelector = (state) =>
  state.products.allProductsReducer.error
