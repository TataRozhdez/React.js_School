import { createSelector } from 'reselect'

const paginationState = (state) => state.products.pagination

export const getPagination = createSelector([paginationState], (data) => data)
