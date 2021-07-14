import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

import { productIdSelector } from '../bus/productId/selectors'
import { getProductID } from '../bus/productId/thunks'

import { ProductCard } from '../components/cards/ProductCard/ProductCard'
import { addOrder } from '../bus/order/actions'

export const ProductPage = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const product = useSelector(productIdSelector)

  const handleAddOrder = () => {
    dispatch(addOrder(product.id, product.name, product.price))
  }

  useEffect(() => {
    dispatch(getProductID(id))
  }, [])

  return (
    <Container className="fade-in">
      {product && <ProductCard {...product} handleAddOrder={handleAddOrder} />}
    </Container>
  )
}
