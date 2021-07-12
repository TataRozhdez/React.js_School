import { createAction } from '@reduxjs/toolkit'

import { SHOPLAND_ORDERS } from '../../init/constants'
import { calcOrders } from '../../utils'
import {
  getLS,
  prepareOrderListADD,
  prepareOrderListRemove,
  setLS,
} from '../../utils/helpers/localStorage'
import {
  SET_ORDER,
  ADD_ORDER,
  REMOVE_ORDER,
  SET_TOTAL_ORDER,
} from './constants'

export const setOrder = createAction(SET_ORDER, () => {
  const orderLS = getLS(SHOPLAND_ORDERS)
  const total = calcOrders(orderLS || [])

  return {
    type: SET_ORDER,
    payload: orderLS,
    total,
  }
})

export const addOrder = createAction(ADD_ORDER, (id, name, price) => {
  const productsLS = prepareOrderListADD(id, name, price)
  const total = calcOrders(productsLS)

  setLS(SHOPLAND_ORDERS, productsLS)

  return {
    type: ADD_ORDER,
    payload: productsLS,
    total,
  }
})

export const removeOrder = createAction(REMOVE_ORDER, (id, num) => {
  const productsLS = prepareOrderListRemove(id, num)

  const total = calcOrders(productsLS)

  setLS(SHOPLAND_ORDERS, productsLS)

  return {
    type: REMOVE_ORDER,
    payload: productsLS,
    total,
  }
})

export const setTotal = createAction(SET_TOTAL_ORDER)
