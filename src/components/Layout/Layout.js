import React, { useContext, useEffect } from 'react'
import { Alert } from 'react-bootstrap'

import { SHOPLAND_ORDERS } from '../../constants'
import AppContext from '../../context/appContext'
import { calcOrders } from '../../utils'
import { getLS } from '../../utils/helpers'
import history from '../../services/history'

import { CustomSpinner } from '../CustomSpinner/CustomSpinner'
import { Header } from '../Header/Header'

export const Layout = ({ children }) => {
  const appContext = useContext(AppContext)
  const location = history.location.pathname

  const ordersLS = getLS(SHOPLAND_ORDERS)

  const { order, totalOrder, changeOrderList, loading, error, setTotalOrders } =
    appContext

  useEffect(() => {
    if (!order && ordersLS) changeOrderList(ordersLS)
    if (order) setTotalOrders(calcOrders(order))
  }, [order])

  return (
    <div>
      {loading && <CustomSpinner />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Header totalOrder={totalOrder} pathname={location} />
      {children}
    </div>
  )
}
