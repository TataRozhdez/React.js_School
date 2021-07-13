import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProductsApi } from '../../../services/api/helpers'
import { GET_PRODUCTS } from './constants'
import { store } from '../../../init/store'
import { getNameOrigin } from '../filters/selectors'

export const fetchProducts = createAsyncThunk(GET_PRODUCTS, async () => {
  const state = store.getState()

  const { minPrice, maxPrice } = state.products.filtersReducer
  const { page, perPage } = state.products.paginationReducer

  const nameOrigins = getNameOrigin(state)

  const response = await getProductsApi({
    page,
    perPage,
    minPrice,
    maxPrice,
    origins: nameOrigins,
  })

  return response
})
