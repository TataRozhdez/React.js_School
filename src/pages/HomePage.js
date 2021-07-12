import React, { useEffect } from 'react'
import { Container, Fade } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../bus/products/allProducts/thunks'
import { productsSelector } from '../bus/products/allProducts/selectors'
import { addOrder } from '../bus/order/actions'
import {
  pageSelector,
  perPageSelector,
} from '../bus/products/pagination/selectors'
import { originSelectSelector } from '../bus/products/filters/selectors'

import { CustomCard } from '../components/cards/CustomCard/CustomCard'
import { CustomPagination } from '../components/CustomPagination/CustomPagination'
import { Filter } from '../components/Filter/Filter'

export const HomePage = () => {
  const dispatch = useDispatch()

  const productsData = useSelector(productsSelector)
  const page = useSelector(pageSelector)
  const perPage = useSelector(perPageSelector)
  const origins = useSelector(originSelectSelector)

  const handleAddOrder = (id, name, price) => {
    dispatch(addOrder(id, name, price))
  }

  useEffect(() => {
    dispatch(fetchProducts())
  }, [page, perPage, origins])

  return (
    <Container className="flex-column">
      <Filter />
      <Fade in={!!productsData}>
        <div className="d-flex flex-row flex-wrap mb-2">
          {productsData &&
            productsData.products.map((p) => (
              <CustomCard key={p.id} {...p} handleAddOrder={handleAddOrder} />
            ))}
        </div>
      </Fade>
      <div className="w-100 d-flex justify-content-end">
        <CustomPagination />
      </div>
    </Container>
  )
}
