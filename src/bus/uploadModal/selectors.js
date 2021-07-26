import { createSelector } from 'reselect'

const getUploadState = (state) => state.uploadModal

export const onUpload = createSelector(
  getUploadState,
  ({ loading, error, successMsg, visible, data }) => ({
    loading,
    error,
    successMsg,
    visible,
    data,
  })
)
