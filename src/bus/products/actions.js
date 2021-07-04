import { createAction } from '@reduxjs/toolkit'

export const changePage = createAction('products/changePage')

export const changePerPage = createAction('products/changePerPage')

export const changePriceMin = createAction('products/changePriceMin')
export const changePriceMax = createAction('products/changePriceMax')
export const changeOrigin = createAction('products/changeOrigin')
