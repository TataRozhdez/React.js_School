import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../bus/products/allProducts/thunks'
import { productsSelector } from '../bus/products/allProducts/selectors'
import { addOrder } from '../bus/order/actions'
import {
  pageSelector,
  perPageSelector,
} from '../bus/products/pagination/selectors'
import {
  maxPriceSelector,
  minPriceSelector,
  originSelectSelector,
} from '../bus/products/filters/selectors'

import { CustomCard } from '../components/cards/CustomCard/CustomCard'
import { CustomPagination } from '../components/CustomPagination/CustomPagination'
import { Filter } from '../components/Filter/Filter'

export const HomePage = () => {
  const dispatch = useDispatch()

  const productsData = useSelector(productsSelector)
  const page = useSelector(pageSelector)
  const perPage = useSelector(perPageSelector)
  const minPrice = useSelector(minPriceSelector)
  const maxPrice = useSelector(maxPriceSelector)
  const originSelect = useSelector(originSelectSelector)

  const handleAddOrder = (id, name, price) => {
    dispatch(addOrder(id, name, price))
  }

  const handleFetchProd = () => {
    const origins = originSelect.reduce((acc, cur) => {
      acc += `,${cur.value}`
      return acc
    }, '')
    dispatch(fetchProducts({ page, perPage, minPrice, maxPrice, origins }))
  }

  useEffect(() => {
    handleFetchProd()
  }, [minPrice, maxPrice, page, originSelect, perPage])

  return (
    <Container className="flex-column">
      <Filter />
      <div className="d-flex flex-row flex-wrap mb-2">
        {productsData &&
          productsData.products.map((p) => (
            <CustomCard key={p.id} {...p} handleAddOrder={handleAddOrder} />
          ))}
      </div>
      <div className="w-100 d-flex justify-content-end">
        <CustomPagination />
      </div>
    </Container>
  )
}
