import { configureStore } from '@reduxjs/toolkit'

import { productId } from '../bus/productId/reducers'
import { order } from '../bus/order/reducers'
import { products } from '../bus/products/reducer'
import { uploadModal } from '../bus/uploadModal/reducers'

export const store = configureStore({
  reducer: {
    products,
    order,
    productId,
    uploadModal,
  },
})
