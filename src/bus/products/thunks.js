import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProductsApi } from '../../services/api/helpers'

export const fetchProducts = createAsyncThunk(
  'products/fetchProductstatus',
  async (params) => {
    const response = await getProductsApi(params)

    return response
  }
)
