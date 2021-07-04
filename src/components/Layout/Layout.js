import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Alert } from 'react-bootstrap'

import { calcOrders } from '../../utils'
import history from '../../services/history'
import { SHOPLAND_ORDERS } from '../../init/constants'
import { getLS } from '../../utils/helpers/localStorage'
import { productsSelector } from '../../bus/products/selectors'
import { orderSelector } from '../../bus/order/selectors'
import { changeOrder, setTotal } from '../../bus/order/actions'

import { Header } from '../Header/Header'
import { CustomSpinner } from '../CustomSpinner/CustomSpinner'

export const Layout = ({ children }) => {
  const dispatch = useDispatch()

  const { order, total } = useSelector(orderSelector)
  const products = useSelector(productsSelector)

  const loading = products.loading
  const error = products.error

  const location = history.location.pathname

  const ordersLS = getLS(SHOPLAND_ORDERS)

  useEffect(() => {
    if (!order && ordersLS) dispatch(changeOrder(ordersLS))
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
