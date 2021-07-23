import React, { useEffect } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { getFilters } from '../bus/products/filters/selectors'
import { paginationSelector } from '../bus/products/pagination/selectors'
import { changePage, changePerPage } from '../bus/products/pagination/actions'
import { onVisibleUpload, setDataUpload } from '../bus/uploadModal/actions'
import { getUploads } from '../bus/products/uploaded/selectors'
import { fetchUploads } from '../bus/products/uploaded/thunks'

import { CustomCard } from '../components/cards/CustomCard/CustomCard'
import { CustomPagination } from '../components/CustomPagination/CustomPagination'
import { Filter } from '../components/Filter/Filter'
import { CustomSpinner } from '../components/CustomSpinner/CustomSpinner'

export const UploadedProdPage = () => {
  const dispatch = useDispatch()

  const { uploads, loading, error, total } = useSelector(getUploads)
  const { page, perPage } = useSelector(paginationSelector)

  const { minPrice, maxPrice, origins } = useSelector(getFilters)

  const handleChangePage = (num) => dispatch(changePage(num))

  const handleChangePerPage = (num) => dispatch(changePerPage(num))

  const handleEditProduct = (data) => {
    dispatch(setDataUpload(data))
    dispatch(onVisibleUpload(true))
  }

  useEffect(() => {
    dispatch(fetchUploads())
  }, [page, perPage, origins])

  useEffect(() => {
    handleChangePage(1)
  }, [origins, minPrice, maxPrice])

  return (
    <Container className="flex-column fade-in">
      {loading && <CustomSpinner />}
      {error && <Alert variant="danger">{error}</Alert>}

      <Filter />

      <div className="d-flex flex-row flex-wrap mb-2">
        {uploads &&
          uploads.map((p) => (
            <CustomCard key={p.id} {...p} handleEdit={handleEditProduct} />
          ))}
      </div>

      <div className="w-100 d-flex justify-content-end">
        {!!total && (
          <CustomPagination
            total={total}
            page={page}
            perPage={perPage}
            onChangePage={handleChangePage}
            onChangePerPage={handleChangePerPage}
          />
        )}
      </div>
    </Container>
  )
}
