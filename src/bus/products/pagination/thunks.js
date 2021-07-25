import { createAsyncThunk } from '@reduxjs/toolkit'

import { store } from '../../../init/store'
import { getValueParams } from '../../../utils/linkParser'
import { SET_PAGINATION } from './constants'

export const setPagination = createAsyncThunk(SET_PAGINATION, () => {
  const state = store.getState()
  const { page, perPage } = state.products.pagination

  const linkParams = getValueParams({
    page,
    perPage,
  })

  return linkParams
})
