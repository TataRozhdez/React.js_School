import { createAsyncThunk } from '@reduxjs/toolkit'

import { store } from '../../../init/store'
import { getOrigins } from '../../../services/api/helpers'
import { prepareListSelect } from '../../../utils'
import { getValueParams } from '../../../utils/linkParser'
import { GET_ORIGINS, SET_FILTERS } from './constants'
import { getNameOrigin } from './selectors'

export const fetchOrigins = createAsyncThunk(GET_ORIGINS, async () => {
  const response = await getOrigins()

  return prepareListSelect(response)
})

export const setParamsFilter = createAsyncThunk(SET_FILTERS, () => {
  const state = store.getState()
  const { minPrice, maxPrice } = state.products.filters
  const origins = getNameOrigin(state)

  const linkParams = getValueParams({
    minPrice,
    maxPrice,
    origins,
  })

  return linkParams
})
