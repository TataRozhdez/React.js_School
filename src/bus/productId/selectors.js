import { selectorCreate } from '../helpers'

const productSelector = (state) => state.productId

export const loadProductSelector = selectorCreate(productSelector, 'loading')
export const errorProductSelector = selectorCreate(productSelector, 'error')
export const productIdSelector = selectorCreate(productSelector, 'product')
