import { selectorCreate } from '../helpers'

const ordersAllSelector = (state) => state.orders

export const orderSelector = selectorCreate(ordersAllSelector, 'order')
export const totalSelector = selectorCreate(ordersAllSelector, 'total')
