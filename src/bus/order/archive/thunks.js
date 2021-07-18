import { createAsyncThunk } from '@reduxjs/toolkit'

import { getOrdersApi } from '../../../services/api/order'
import { GET_ORDERS } from './constants'

export const fetchOrders = createAsyncThunk(GET_ORDERS, async () => {
  const response = await getOrdersApi()

  return response.items
})
