import { createAsyncThunk } from '@reduxjs/toolkit'

import { getProductsApi } from '../../../services/api/helpers'
import { GET_PRODUCTS } from './constants'
import { store } from '../../../init/store'

export const fetchProducts = createAsyncThunk(GET_PRODUCTS, async () => {
  const state = store.getState()

  const { minPrice, maxPrice, origins } = state.products.filtersReducer
  const { page, perPage } = state.products.paginationReducer

  const nameOrigins = origins.reduce((acc, cur) => {
    acc += `,${cur.value}`
    return acc
  }, '')

  const response = await getProductsApi({
    page,
    perPage,
    minPrice,
    maxPrice,
    origins: nameOrigins,
  })

  return response
})
