import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

import { calcOrders } from '../../utils'
import history from '../../services/history'
import { orderSelector, totalSelector } from '../../bus/order/selectors'
import {
  errorProductSelector,
  loadProductSelector,
} from '../../bus/productId/selectors'
import { setOrder, setTotal } from '../../bus/order/actions'
import { allProdSelector } from '../../bus/products/allProducts/selectors'

import { Header } from '../Header/Header'
import { CustomSpinner } from '../CustomSpinner/CustomSpinner'

export const Layout = ({ children }) => {
  const dispatch = useDispatch()

  const order = useSelector(orderSelector)
  const total = useSelector(totalSelector)

  const { loading, error } = useSelector(allProdSelector)

  const loadProduct = useSelector(loadProductSelector)
  const errorProduct = useSelector(errorProductSelector)

  const loadProduct = useSelector(loadProductSelector)
  const errorProduct = useSelector(errorProductSelector)

  const location = history.location.pathname

  useEffect(() => {
    if (!order) dispatch(setOrder())
    if (order) dispatch(setTotal(calcOrders(order)))
  }, [order])

  return (
    <div>
      {loading || (loadProduct && <CustomSpinner />)}
      {error && <Alert variant="danger">{error}</Alert>}
      {errorProduct && <Alert variant="danger">{errorProduct}</Alert>}

      <Header totalOrder={total} pathname={location} />
      {children}
    </div>
  )
}
