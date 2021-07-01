import React, { useState, useEffect } from 'react'
import { Container } from 'react-bootstrap'

import { CartCard } from './components/CartCard/CartCard'

export const OrderPage = () => {
  const [cart, setCart] = useState([])
  const [total, setTotal] = useState()

  useEffect(() => {
    const localCart = localStorage.getItem('shopcart')

    if (localCart) {
      const data = JSON.parse(localCart)
      let num = 1
      let price = 1

      setCart(data)
      data.map((d) => {
        num += d.number
        price += d.price
        return d
      })

      setTotal({
        number: num,
        price,
      })
    }
  }, [])

  console.log(total)

  return (
    <Container>
      <h1 className="text-primary">Shopping Cart</h1>
      {cart.length ? (
        cart.map((c) => (
          <CartCard
            key={c.id}
            name={c.name}
            price={c.price}
            number={c.number}
          />
        ))
      ) : (
        <h3>Please, add something to your cart</h3>
      )}
      <hr />
      {total && (
        <h5>
          Total {total.number} products: {total.price}$
        </h5>
      )}
    </Container>
  )
}
