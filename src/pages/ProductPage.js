import React, { useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { productIdSelector } from '../bus/productId/selectors'
import { getProductID } from '../bus/productId/thunks'
import { SHOPLAND_ORDERS } from '../init/constants'
import { setLS, prepareOrderListADD } from '../utils/helpers/localStorage'
import { changeOrder } from '../bus/order/actions'

export const ProductPage = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  const { product } = useSelector(productIdSelector)

  const handleAddOrder = () => {
    const productsLS = prepareOrderListADD(
      product.id,
      product.name,
      product.price
    )

    dispatch(changeOrder(productsLS))
    setLS(SHOPLAND_ORDERS, productsLS)
  }

  useEffect(() => {
    dispatch(getProductID(id))
  }, [])

  return (
    <Container>
      {product && (
        <div>
          <h1 className="text-primary mb-4">{product.name}</h1>
          <h3>Orrigin: {product.origin}</h3>
          <h3>Price: {product.price}$</h3>
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
