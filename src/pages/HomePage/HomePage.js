import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { CustomPagination } from '../../components/CustomPagination/CustomPagination'

import AppContext from '../../context/appContext'
import { CustomCard } from './components/CustomCard/CustomCard'

export const HomePage = () => {
  const appContext = useContext(AppContext)
  const { products, getProducts, page, perPage, addToCart } = appContext

  useEffect(() => {
    !products.length && getProducts(page, perPage)
  }, [])

  return (
    <Container>
      <div className="d-flex flex-row flex-wrap mb-2">
        {products.length
          ? products.map((p) => (
              <CustomCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                origin={p.origin}
                addToCart={addToCart}
              />
            ))
          : null}
      </div>
      <div className="w-100 d-flex justify-content-end">
        <CustomPagination />
      </div>
    </Container>
  )
}
