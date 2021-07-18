import { combineReducers } from 'redux'

import { filters } from './filters/reducer'
import { allProducts } from './allProducts/reducer'
import { pagination } from './pagination/reducer'
import { uploaded } from './uploaded/reducer'

export const products = combineReducers({
  filters,
  allProducts,
  pagination,
  uploaded,
})
