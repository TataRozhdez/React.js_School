import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

import history from '../../services/history'
import { calcOrders } from '../../utils'

import { getProduct } from '../../bus/productId/selectors'
import { getOrder, getOrderTotal } from '../../bus/order/selectors'
import { getProducts } from '../../bus/products/allProducts/selectors'

import { setOrder, setTotal } from '../../bus/order/actions'

import { Header } from '../Header/Header'
import { CustomSpinner } from '../CustomSpinner/CustomSpinner'

export const Layout = ({ children }) => {
  const dispatch = useDispatch()

  const order = useSelector(getOrder)
  const total = useSelector(getOrderTotal)

  const productsFetch = useSelector(getProducts)
  const productFetch = useSelector(getProduct)

  const location = history.location.pathname

  useEffect(() => {
    if (!order) return dispatch(setOrder())

    dispatch(setTotal(calcOrders(order)))
  }, [order])

  return (
    <div>
      {productsFetch.loading || (productFetch.loading && <CustomSpinner />)}
      {productsFetch.error && <Alert variant="danger">{productsFetch.error}</Alert>}
      {productFetch.error && <Alert variant="danger">{productFetch.error}</Alert>}

      <Header totalOrder={total} pathname={location} />
      {children}
    </div>
  )
}
