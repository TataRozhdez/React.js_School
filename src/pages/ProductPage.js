import React, { useEffect } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { getProduct } from '../bus/productId/selectors'
import { getProductID } from '../bus/productId/thunks'
import { addOrder } from '../bus/order/newOrder/actions'

import { ProductCard } from '../components/cards/ProductCard/ProductCard'
import { CustomSpinner } from '../components/CustomSpinner/CustomSpinner'

export const ProductPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const { product, loading, error } = useSelector(getProduct)

  const handleAddOrder = () => {
    dispatch(addOrder(product.id, product.name, product.price))
  }

  useEffect(() => {
    dispatch(getProductID(id))
  }, [])

  return (
    <Container className="fade-in">
      {loading && <CustomSpinner />}
      {error && <Alert variant="danger">{error}</Alert>}

      {product && <ProductCard {...product} handleAddOrder={handleAddOrder} />}
    </Container>
  )
}
