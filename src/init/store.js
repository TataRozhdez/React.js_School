import { configureStore } from '@reduxjs/toolkit'

import { productIdReducer } from '../bus/productId/reducers'
import { orderReducer } from '../bus/order/reducers'
import { productReducer } from '../bus/products/reducer'

export const store = configureStore({
  reducer: {
    products: productReducer,
    orders: orderReducer,
    productId: productIdReducer,
  },
})
