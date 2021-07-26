import { createAsyncThunk } from '@reduxjs/toolkit'

import { GET_PRODUCTS_UPLOADED } from './constants'
import { store } from '../../../init/store'
import { getNameOrigin } from '../filters/selectors'
import { getProductsApi } from '../../../services/api/product'

export const fetchUploads = createAsyncThunk(
  GET_PRODUCTS_UPLOADED,
  async () => {
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
      editable: true,
    })

    return response
  }
)
