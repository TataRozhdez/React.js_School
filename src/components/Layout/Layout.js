import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

import { calcOrders } from '../../utils'
import history from '../../services/history'
import { orderSelector, totalSelector } from '../../bus/order/selectors'
import { setOrder, setTotal } from '../../bus/order/actions'
import {
  productsErrorSelector,
  productsLoadingSelector,
} from '../../bus/products/allProducts/selectors'

import { Header } from '../Header/Header'
import { CustomSpinner } from '../CustomSpinner/CustomSpinner'

export const Layout = ({ children }) => {
  const dispatch = useDispatch()

  const order = useSelector(orderSelector)
  const total = useSelector(totalSelector)
  const loading = useSelector(productsLoadingSelector)
  const error = useSelector(productsErrorSelector)

  const location = history.location.pathname

  useEffect(() => {
    if (!order) dispatch(setOrder())
    if (order) dispatch(setTotal(calcOrders(order)))
  }, [order])

  return (
    <div>
      {loading && <CustomSpinner />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Header totalOrder={total} pathname={location} />
      {children}
    </div>
  )
}
