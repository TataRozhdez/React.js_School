import { SHOPLAND_ORDERS } from '../../init/constants'

export const getLS = (name) => JSON.parse(localStorage.getItem(name))

export const setLS = (name, newLS) =>
  localStorage.setItem(name, JSON.stringify(newLS))

export const prepareOrderListADD = (id, name, price) => {
  const order = getLS(SHOPLAND_ORDERS)

  const productsLS = []
  const restCart = []
  let number = 1

  if (order) {
    const item = order.find((c) => c.id === id)
    const arr = order.filter((item) => item.id !== id)

    restCart.push(...arr)

    if (item) number += item.number
  }

  productsLS.push(
    {
      id,
      name,
      price,
      number,
    },
    ...restCart
  )

  return productsLS
}

export const prepareOrderListRemove = (id, number) => {
  const order = getLS(SHOPLAND_ORDERS)

  const productsLS = []
  const restCart = []

  const arr = order.filter((item) => item.id !== id)
  const item = order.find((c) => c.id === id)

  restCart.push(...arr)

  const newNumber = item.number - number

  if (!newNumber) {
    productsLS.push(...restCart)
  } else {
    productsLS.push(
      {
        id,
        name: item.name,
        price: item.price,
        number: newNumber,
      },
      ...restCart
    )
  }

  return productsLS
}
