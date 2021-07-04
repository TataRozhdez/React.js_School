import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { SHOPLAND_ORDERS } from '../init/constants'
import { prepareOrderListADD, setLS } from '../utils/helpers/localStorage'
import { productsSelector } from '../bus/products/selectors'
import { fetchProducts } from '../bus/products/thunks'
import { changeOrder } from '../bus/order/actions'

import { CustomCard } from '../components/cards/CustomCard/CustomCard'
import { CustomPagination } from '../components/CustomPagination/CustomPagination'
import { Filter } from '../components/Filter/Filter'

export const HomePage = () => {
  const dispatch = useDispatch()
  const { productsData, page, perPage, minPrice, maxPrice, originSelect } =
    useSelector(productsSelector)

  const handleAddOrder = (id, name, price) => {
    const productsLS = prepareOrderListADD(id, name, price)

    dispatch(changeOrder(productsLS))
    setLS(SHOPLAND_ORDERS, productsLS)
  }

  const handleFetchProd = () => {
    const origin = originSelect.reduce((acc, cur) => {
      acc.push(cur.value)
      return acc
    }, [])
    dispatch(fetchProducts({ page, perPage, minPrice, maxPrice, origin }))
  }

  useEffect(() => {
    handleFetchProd()
  }, [minPrice, maxPrice, page, originSelect])

  return (
    <Container className="flex-column">
      <Filter />
      <div className="d-flex flex-row flex-wrap mb-2">
        {productsData
          ? productsData.products.map((p) => (
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
