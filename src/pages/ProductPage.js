import React, { useContext, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import { SHOPLAND_ORDERS } from '../constants'
import AppContext from '../context/appContext'
import { setLS, prepareOrderList } from '../utils/helpers/localStorage'

export const ProductPage = () => {
  const { id } = useParams()

  const appContext = useContext(AppContext)
  const { getOneProduct, oneProduct, changeOrderList } = appContext

  const handleAddOrder = () => {
    const productsLS = prepareOrderList(
      oneProduct.id,
      oneProduct.name,
      oneProduct.price
    )

    changeOrderList(productsLS)
    setLS(SHOPLAND_ORDERS, productsLS)
  }

  useEffect(() => {
    getOneProduct(id)
  }, [])

  return (
    <Container>
      {oneProduct && (
        <div>
          <h1 className="text-primary mb-4">{oneProduct.name}</h1>
          <h3>Orrigin: {oneProduct.origin}</h3>
          <h3>Price: {oneProduct.price}$</h3>
          <div className="w-100 d-flex justify-content-center">
            <Button variant="success" onClick={handleAddOrder} className="w-50">
              Buy
            </Button>
          </div>
        </div>
      )}
    </Container>
  )
}
