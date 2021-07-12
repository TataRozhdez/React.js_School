export const loadingFiltersSelector = (state) =>
  state.products.filtersReducer.loading
export const errorFiltersSelector = (state) =>
  state.products.filtersReducer.error

export const minPriceSelector = (state) =>
  state.products.filtersReducer.minPrice
export const maxPriceSelector = (state) =>
  state.products.filtersReducer.maxPrice

export const allOriginsSelector = (state) =>
  state.products.filtersReducer.allOrigins
export const originSelectSelector = (state) =>
  state.products.filtersReducer.origins
