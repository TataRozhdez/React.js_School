import { createSelector } from 'reselect'
import { stringFromSelect } from '../../../utils'

const filtersSelector = (state) => state.products.filters

export const getFilters = createSelector([filtersSelector], (data) => data)

export const getStateOrigins = createSelector(
  [filtersSelector],
  ({ origins, allOrigins }) => ({
    origins,
    allOrigins,
  })
)

export const getPrice = createSelector(
  [filtersSelector],
  ({ maxPrice, minPrice }) => ({
    maxPrice,
    minPrice,
  })
)

export const getNameOrigin = createSelector([filtersSelector], (data) =>
  stringFromSelect(data.origins)
)
