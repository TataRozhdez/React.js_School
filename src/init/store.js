import { configureStore } from '@reduxjs/toolkit'

import { productsReducer } from '../bus/products/reducer'
import { productIdReducer } from '../bus/productId/reducers'
import { orderReducer } from '../bus/order/reducers'

export const store = configureStore({
  reducer: {
    products: productsReducer,
    orders: orderReducer,
    productId: productIdReducer,
  },
})
