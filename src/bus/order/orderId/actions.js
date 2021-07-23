import { createAction } from '@reduxjs/toolkit'

import {
  GET_ORDER_ID_ERROR,
  GET_ORDER_ID_REQUEST,
  GET_ORDER_ID_SUCCESS,
} from './constants'

export const getOrderIdRequest = createAction(GET_ORDER_ID_REQUEST, (id) => ({
  type: GET_ORDER_ID_REQUEST,
  payload: id,
}))

export const getOrderIdSuccess = createAction(
  GET_ORDER_ID_SUCCESS,
  (order) => ({
    type: GET_ORDER_ID_SUCCESS,
    payload: order,
  })
)

export const getOrderIdError = createAction(GET_ORDER_ID_ERROR, (error) => ({
  type: GET_ORDER_ID_ERROR,
  payload: error,
}))
