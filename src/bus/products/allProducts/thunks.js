import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProductsApi } from '../../../services/api/helpers'
import { GET_PRODUCTS } from './constants'

export const fetchProducts = createAsyncThunk(GET_PRODUCTS, async (params) => {
  const response = await getProductsApi(params)

  return response
})
