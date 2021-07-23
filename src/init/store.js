import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

import { productId } from '../bus/productId/reducers'
import { order } from '../bus/order/reducers'
import { products } from '../bus/products/reducer'
import { uploadModal } from '../bus/uploadModal/reducers'
import rootSaga from './rootSaga'

let sagaMiddleware = createSagaMiddleware()
const middleware = [...getDefaultMiddleware(), sagaMiddleware]

export const store = configureStore({
  reducer: {
    products,
    order,
    productId,
    uploadModal,
  },
  middleware,
})

sagaMiddleware.run(rootSaga)
