import { createAsyncThunk } from '@reduxjs/toolkit'

import { getOrigins, getProductsApi } from '../../services/api/helpers'
import { prepareListSelect } from '../../utils'

export const fetchProducts = createAsyncThunk(
  'products/fetchProductstatus',
  async (params) => {
    const response = await getProductsApi(params)

    return response
  }
)

export const fetchOrigins = createAsyncThunk(
  'products/fetchOriginsStatus',
  async () => {
    const response = await getOrigins()

    return prepareListSelect(response)
  }
)
