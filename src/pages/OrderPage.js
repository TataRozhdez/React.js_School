import React from 'react'
import { Container, Button } from 'react-bootstrap'

import { CartCard } from '../components/cards/CartCard/CartCard'
import { orderSelector } from '../bus/order/selectors'
import { useSelector } from 'react-redux'

export const OrderPage = () => {
  const { order, total } = useSelector(orderSelector)

  return (
    <Container>
      <h1 className="text-primary mb-4">Shopping Cart</h1>
      <div className="mb-3 d-flex flex-row flex-wrap">
        {order ? (
          order.map((o) => (
            <CartCard
              key={o.id}
              id={o.id}
              name={o.name}
              price={o.price}
              number={o.number}
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
