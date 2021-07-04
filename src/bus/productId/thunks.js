import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProductIDApi } from '../../services/api/helpers'

export const getProductID = createAsyncThunk(
  'products/fetchProductstatus',
  async (id) => {
    const response = await getProductIDApi(id)

    return response
  }
)
