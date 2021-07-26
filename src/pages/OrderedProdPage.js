import React, { useEffect } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import format from 'date-fns/format'

import { getOrderIdRequest } from '../bus/order/orderId/actions'
import { getOrderId } from '../bus/order/orderId/selectors'

import { CustomSpinner } from '../components/CustomSpinner/CustomSpinner'
import { TableOrder } from '../components/TableOrder/TableOrder'

export const OrderedProdPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { orderId, loading, error } = useSelector(getOrderId)

  useEffect(() => {
    dispatch(getOrderIdRequest(id))
  }, [])

  return (
    <Container className="fade-in">
      {loading && <CustomSpinner />}
      {error && <Alert variant="danger">{error}</Alert>}

      {orderId && (
        <React.Fragment>
          <p className="text-primary fw-bold">
            Order from {format(new Date(orderId.createdAt), 'dd-MM-yyyy HH:mm')}
          </p>
          <TableOrder pieces={orderId.pieces} />
        </React.Fragment>
      )}
    </Container>
  )
}
