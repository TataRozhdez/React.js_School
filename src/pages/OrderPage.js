import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Button } from 'react-bootstrap'

import { CartCard } from '../components/cards/CartCard/CartCard'
import {getOrder, getOrderTotal} from '../bus/order/selectors'
import { addOrder, removeOrder } from '../bus/order/actions'

export const OrderPage = () => {
  const dispatch = useDispatch()
  const order = useSelector(getOrder)
  const total = useSelector(getOrderTotal)

  const handleAddOrder = (id, name, price) =>
    dispatch(addOrder(id, name, price))

  const handleRemoveOrder = (id, number) => dispatch(removeOrder(id, number))

  return (
    <Container>
      <h1 className="text-primary mb-4">Shopping Cart</h1>
      <div className="mb-3 d-flex flex-row flex-wrap">
        {order ? (
          order.map((o) => (
            <CartCard
              key={o.id}
              {...o}
              addItem={handleAddOrder}
              removeItem={handleRemoveOrder}
            />
          ))
        ) : (
          <h3>Please, add something to your cart</h3>
        )}
      </div>
      {total && (
        <div className="w-100 d-flex justify-content-end">
          <Button variant="success" disabled>
            <h3 className="m-0">Total: {total.price}$</h3>
          </Button>
        </div>
      )}
    </Container>
  )
}
