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
  POST_ORDER_REQUEST,
  POST_ORDER_SUCCESS,
  POST_ORDER_ERROR,
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

// for saga /POST order
export const postOrderRequest = createAction(POST_ORDER_REQUEST)

export const postOrderSuccess = createAction(POST_ORDER_SUCCESS, (order) => ({
  type: POST_ORDER_SUCCESS,
  payload: order,
}))

export const postOrderError = createAction(POST_ORDER_ERROR, (error) => ({
  type: POST_ORDER_ERROR,
  payload: error,
}))
