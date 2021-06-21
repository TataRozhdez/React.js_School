import React, { useContext, useEffect } from 'react'
import { Container, Button } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

import AppContext from '../../context/appContext'

export const Product = () => {
  const { id } = useParams()

  const appContext = useContext(AppContext)
  const { getOneProduct, oneProduct } = appContext

  useEffect(() => {
    getOneProduct(id)
  }, [])

  return (
    <Container>
      {oneProduct && (
        <div>
          <h1>{oneProduct.name}</h1>
          <h3>Orrigin: {oneProduct.origin}</h3>
          <h3>Price: {oneProduct.price}</h3>
          <div className='w-100 d-flex justify-content-center'>
            <Button variant='success' className='w-50'>
              Buy
            </Button>
          </div>
        </div>
      )}
    </Container>
  )
}
