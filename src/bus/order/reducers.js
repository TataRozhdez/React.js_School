import { combineReducers } from 'redux'

import { newOrder } from './newOrder/reducers'
import { archive } from './archive/reducers'

export const order = combineReducers({
  newOrder,
  archive,
})
