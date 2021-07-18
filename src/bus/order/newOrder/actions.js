import { createAction } from '@reduxjs/toolkit'

import {
  prepareOrderListADD,
  prepareOrderListRemove,
} from '../../../utils/helpers/localStorage'
import {
  SET_ORDER,
  ADD_ORDER,
  REMOVE_ORDER,
  SET_TOTAL_ORDER,
} from './constants'

export const setOrder = createAction(SET_ORDER)

export const addOrder = createAction(ADD_ORDER, (id, name, price) => ({
  type: ADD_ORDER,
  payload: prepareOrderListADD(id, name, price),
}))

export const removeOrder = createAction(REMOVE_ORDER, (id, num) => ({
  type: REMOVE_ORDER,
  payload: prepareOrderListRemove(id, num),
}))

export const setTotal = createAction(SET_TOTAL_ORDER)
