import { createSelector } from 'reselect'

const filtersSelector = (state) => state.products.filtersReducer

export const getFilters = createSelector([filtersSelector], (data) => data)

export const getNameOrigin = createSelector([filtersSelector], (data) =>
  data.origins.reduce((acc, cur) => {
    if (!acc.length) return (acc += `${cur.value}`)
    return (acc += `,${cur.value}`)
  }, '')
)
