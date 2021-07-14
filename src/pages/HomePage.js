import React, { useEffect } from 'react'
import { Container, Fade } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../bus/products/allProducts/thunks'
import { allProdSelector } from '../bus/products/allProducts/selectors'
import { getFilters } from '../bus/products/filters/selectors'
import { addOrder } from '../bus/order/actions'
import { paginationSelector } from '../bus/products/pagination/selectors'
import { changePage, changePerPage } from '../bus/products/pagination/actions'

import { CustomCard } from '../components/cards/CustomCard/CustomCard'
import { CustomPagination } from '../components/CustomPagination/CustomPagination'
import { Filter } from '../components/Filter/Filter'

export const HomePage = () => {
  const dispatch = useDispatch()

  const { productsData } = useSelector(allProdSelector)
  const { page, perPage } = useSelector(paginationSelector)

  const { minPrice, maxPrice, origins } = useSelector(getFilters)

  const handleAddOrder = (id, name, price) => {
    dispatch(addOrder(id, name, price))
  }

  const handleChangePage = (num) => dispatch(changePage(num))

  const handleChangePerPage = (num) => dispatch(changePerPage(num))

  useEffect(() => {
    dispatch(fetchProducts())
  }, [page, perPage, origins])

  useEffect(() => {
    handleChangePage(1)
  }, [origins, minPrice, maxPrice])

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
        <CustomPagination
          dataArr={productsData}
          page={page}
          perPage={perPage}
          onChangePage={handleChangePage}
          onChangePerPage={handleChangePerPage}
        />
      </div>
    </Container>
  )
}
