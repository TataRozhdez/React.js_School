import { createAction } from '@reduxjs/toolkit'

import { CHANGE_ORIGIN, SET_MAX_PRICE, SET_MIN_PRICE } from './constants'

export const changePriceMin = createAction(SET_MIN_PRICE)
export const changePriceMax = createAction(SET_MAX_PRICE)
export const changeOrigin = createAction(CHANGE_ORIGIN)
