import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { CustomPagination } from '../../components/CustomPagination/CustomPagination'

import AppContext from '../../context/appContext'
import { CustomCard } from './components/CustomCard/CustomCard'

export const Main = () => {
  const appContext = useContext(AppContext)
  const { products, getProducts, page, perPage } = appContext

  useEffect(() => {
    !products.length && getProducts(page, perPage)
  }, [])

  console.log('appContext', appContext)

  return (
    <Container>
      <div className='d-flex flex-row flex-wrap mb-2'>
        {products.length
          ? products.map((p) => (
              <CustomCard
                key={p.id}
                name={p.name}
                price={p.price}
                origin={p.origin}
              />
            ))
          : null}
      </div>
      <div className='w-100 d-flex justify-content-end'>
        <CustomPagination />
      </div>
    </Container>
  )
}
