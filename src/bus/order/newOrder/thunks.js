import { createAsyncThunk } from '@reduxjs/toolkit'

import { store } from '../../../init/store'
import { postOrderApi } from '../../../services/api/order'
import history from '../../../services/history'
import { prepareOrderPost } from '../../../utils'
import { POST_ORDER } from './constants'

export const postOrder = createAsyncThunk(POST_ORDER, async () => {
  const state = store.getState()
  const { order } = state.order.newOrder

  const data = {
    order: {
      pieces: prepareOrderPost(order),
    },
  }

  const response = await postOrderApi(data)

  return history.push(`/archive/${response.data.id}`)
})
