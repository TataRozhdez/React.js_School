import { createAsyncThunk } from '@reduxjs/toolkit'

import { GET_PRODUCTS } from './constants'
import { store } from '../../../init/store'
import { getNameOrigin } from '../filters/selectors'
import { getProductsApi } from '../../../services/api/product'

export const fetchProducts = createAsyncThunk(GET_PRODUCTS, async () => {
  const state = store.getState()

  const { minPrice, maxPrice } = state.products.filters
  const { page, perPage } = state.products.pagination
  const origins = getNameOrigin(state)

  const response = await getProductsApi({
    page,
    perPage,
    minPrice,
    maxPrice,
    origins,
  })
  return response
})
