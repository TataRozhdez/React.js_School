import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProductIDApi } from '../../services/api/product'
import { GET_PRODUCT_ID } from './constants'

export const getProductID = createAsyncThunk(GET_PRODUCT_ID, async (id) => {
  const response = await getProductIDApi(id)

  return response
})
