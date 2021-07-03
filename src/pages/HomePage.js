import React, { useContext, useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { SHOPLAND_ORDERS } from '../constants'

import AppContext from '../context/appContext'
import { prepareOrderList, setLS } from '../utils/helpers/localStorage'
import { CustomCard } from '../components/cards/CustomCard/CustomCard'
import { CustomPagination } from '../components/CustomPagination/CustomPagination'

export const HomePage = () => {
  const appContext = useContext(AppContext)
  const { products, getProducts, page, perPage, changeOrderList } = appContext

  const handleAddOrder = (id, name, price) => {
    const productsLS = prepareOrderList(id, name, price)

    changeOrderList(productsLS)
    setLS(SHOPLAND_ORDERS, productsLS)
  }

  useEffect(() => {
    !products && getProducts(page, perPage)
  }, [])

  return (
    <Container>
      <div className="d-flex flex-row flex-wrap mb-2">
        {products
          ? products.products.map((p) => (
              <CustomCard
                key={p.id}
                id={p.id}
                name={p.name}
                price={p.price}
                origin={p.origin}
                handleAddOrder={handleAddOrder}
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
