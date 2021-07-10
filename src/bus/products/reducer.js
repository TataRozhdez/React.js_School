import { combineReducers } from 'redux'

import { filtersReducer } from './filters/reducer'
import { allProductsReducer } from './allProducts/reducer'
import { paginationReducer } from './pagination/reducer'

export const productReducer = combineReducers({
  filtersReducer,
  allProductsReducer,
  paginationReducer,
})
