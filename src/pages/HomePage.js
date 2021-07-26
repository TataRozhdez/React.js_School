import React, { useEffect } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { fetchProducts } from '../bus/products/allProducts/thunks'
import { getProducts } from '../bus/products/allProducts/selectors'
import { addOrder } from '../bus/order/newOrder/actions'
import { getPagination } from '../bus/products/pagination/selectors'
import { changePage, changePerPage } from '../bus/products/pagination/actions'
import { onVisibleUpload, setDataUpload } from '../bus/uploadModal/actions'
import { setParamsFilter } from '../bus/products/filters/thunks'
import { setPagination } from '../bus/products/pagination/thunks'

import { CustomCard } from '../components/cards/CustomCard/CustomCard'
import { CustomPagination } from '../components/CustomPagination/CustomPagination'
import { Filter } from '../components/Filter/Filter'
import { CustomSpinner } from '../components/CustomSpinner/CustomSpinner'

export const HomePage = () => {
  const dispatch = useDispatch()

  const { products, total, loading, error } = useSelector(getProducts)
  const { page, perPage } = useSelector(getPagination)

  const handleAddOrder = (id, name, price) =>
    dispatch(addOrder(id, name, price))
  const handleChangePage = (num) => dispatch(changePage(num))
  const handleChangePerPage = (num) => dispatch(changePerPage(num))

  const handleEditProduct = (data) => {
    dispatch(setDataUpload(data))
    dispatch(onVisibleUpload(true))
  }

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(setParamsFilter())
    dispatch(setPagination())
  }, [page, perPage])

  return (
    <Container className="flex-column fade-in">
      {loading && <CustomSpinner />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Filter />
      <div className="d-flex flex-row flex-wrap mb-2">
        {products &&
          products.map((p) => (
            <CustomCard
              key={p.id}
              {...p}
              handleAddOrder={handleAddOrder}
              handleEdit={handleEditProduct}
            />
          ))}
      </div>
      <div className="w-100 d-flex justify-content-end">
        <CustomPagination
          total={total}
          page={page}
          perPage={perPage}
          onChangePage={handleChangePage}
          onChangePerPage={handleChangePerPage}
        />
      </div>
    </Container>
  )
}
