import { createAsyncThunk } from '@reduxjs/toolkit'

import { store } from '../../init/store'
import { clearStateUpload } from './actions'
import { PATCH_PRODUCT, POST_PRODUCT } from './constants'
import { patchProductApi, postProductApi } from '../../services/api/product'

export const postProduct = createAsyncThunk(POST_PRODUCT, async (data) => {
  const response = await postProductApi(data)

  setTimeout(() => store.dispatch(clearStateUpload()), 2000)
  return response.statusText
})

export const patchProduct = createAsyncThunk(
  PATCH_PRODUCT,
  async ({ id, data }) => {
    const response = await patchProductApi(id, data)

    setTimeout(() => store.dispatch(clearStateUpload()), 2000)
    return response.statusText
  }
)
