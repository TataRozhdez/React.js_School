import { createSelector } from 'reselect'

const getUploadsState = (state) => state.products.uploaded

export const getUploads = createSelector(
  getUploadsState,
  ({ loading, error, uploads, total }) => ({
    loading,
    error,
    uploads,
    total,
  })
)
