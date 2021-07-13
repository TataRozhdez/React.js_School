import { createSelector } from 'reselect'

export const minPriceSelector = (state) =>
  state.products.filtersReducer.minPrice
export const maxPriceSelector = (state) =>
  state.products.filtersReducer.maxPrice

export const allOriginsSelector = (state) =>
  state.products.filtersReducer.allOrigins
export const originSelectSelector = (state) =>
  state.products.filtersReducer.origins

export const getNameOrigin = createSelector([originSelectSelector], (origins) =>
  origins.reduce((acc, cur) => {
    if (!acc.length) return (acc += `${cur.value}`)
    return (acc += `,${cur.value}`)
  }, '')
)
