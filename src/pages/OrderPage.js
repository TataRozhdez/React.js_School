import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button, Alert } from 'react-bootstrap'

import { getOrder, getOrderTotal } from '../bus/order/newOrder/selectors'
import {
  addOrder,
  postOrderRequest,
  removeOrder,
} from '../bus/order/newOrder/actions'

import { CartCard } from '../components/cards/CartCard/CartCard'
import { CustomSpinner } from '../components/CustomSpinner/CustomSpinner'

export const OrderPage = () => {
  const dispatch = useDispatch()
  const { order, error, loading } = useSelector(getOrder)
  const total = useSelector(getOrderTotal)

  const handleAddOrder = (id, name, price) =>
    dispatch(addOrder(id, name, price))

  const handleRemoveOrder = (id, number) => dispatch(removeOrder(id, number))
  const handlePostOrder = () => dispatch(postOrderRequest())

  return (
    <Container className="fade-in">
      {error && <Alert variant="danger">{error}</Alert>}
      {loading && <CustomSpinner />}

      <div className="mb-3 d-flex flex-row flex-wrap">
        {order && order.length ? (
          order.map((o) => (
            <CartCard
              key={o.id}
              {...o}
              addItem={handleAddOrder}
              removeItem={handleRemoveOrder}
            />
          ))
        ) : (
          <h3 className="mt-5 text-center w-100">
            Please, add something to your cart
          </h3>
        )}
      </div>

      <hr />
      {total.number > 0 && (
        <div className="w-100 d-flex align-items-center flex-column">
          <p className="w-50 mb-4 d-flex flex-row justify-content-around">
            <span className="badge fs-6 me-2 bg-light text-dark">
              Amount items:&nbsp;
              <span className="badge fs-5 bg-danger">{total.number}</span>
            </span>
            <span className="badge fs-6 me-2 bg-light text-dark">
              Total price:&nbsp;
              <span className="badge fs-5 bg-danger">{total.price}$</span>
            </span>
          </p>
          <Button variant="danger w-50 px-5" onClick={handlePostOrder}>
            <span className="m-0 text-uppercase fw-bold">confirm order</span>
          </Button>
        </div>
      )}
    </Container>
  )
}
