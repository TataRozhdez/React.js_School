import { createAsyncThunk } from '@reduxjs/toolkit'

import { getOrigins } from '../../../services/api/helpers'
import { prepareListSelect } from '../../../utils'
import { GET_ORIGINS } from './constants'

export const fetchOrigins = createAsyncThunk(GET_ORIGINS, async () => {
  const response = await getOrigins()

  return prepareListSelect(response)
})
