import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProductIDApi } from '../../services/api/helpers'
import { GET_PRODUCTS } from './constants'

export const getProductID = createAsyncThunk(GET_PRODUCTS, async (id) => {
  const response = await getProductIDApi(id)

  return response
})
