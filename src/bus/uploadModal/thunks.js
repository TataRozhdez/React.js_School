import { createAsyncThunk } from '@reduxjs/toolkit'

import { store } from '../../init/store'
import { clearStateUpload } from './actions'
import { PATCH_PRODUCT, POST_PRODUCT } from './constants'
import { patchProductApi, postProductApi } from '../../services/api/product'
import { fetchProducts } from '../products/allProducts/thunks'

export const postProduct = createAsyncThunk(POST_PRODUCT, async (data) => {
  setTimeout(() => store.dispatch(clearStateUpload()), 3000)

  const response = await postProductApi(data)
  store.dispatch(fetchProducts())
  return response
})

export const patchProduct = createAsyncThunk(
  PATCH_PRODUCT,
  async ({ id, data }) => {
    setTimeout(() => store.dispatch(clearStateUpload()), 3000)

    const response = await patchProductApi(id, data)
    store.dispatch(fetchProducts())
    return response
  }
)
