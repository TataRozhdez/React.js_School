import { createSelector } from 'reselect'

const getOrderState = (state) => state.order.archive

export const getArchive = createSelector(
  getOrderState,
  ({ archive, loading, error }) => ({ archive, loading, error })
)
