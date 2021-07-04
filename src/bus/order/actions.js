import { createAction } from '@reduxjs/toolkit'

export const changeOrder = createAction('order/changeOrder')
export const setTotal = createAction('oreder/setTotal')

export const decrementItem = createAction('oreder/decrementItem')
export const incrementItem = createAction('oreder/incrementItem')
export const removeItem = createAction('oreder/removeItem')
