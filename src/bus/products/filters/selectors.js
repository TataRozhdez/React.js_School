import { createSelector } from 'reselect'
import { stringFromSelect } from '../../../utils'

const filtersSelector = (state) => state.products.filters

export const getFilters = createSelector([filtersSelector], (data) => data)

export const getNameOrigin = createSelector([filtersSelector], (data) =>
  stringFromSelect(data.origins)
)
