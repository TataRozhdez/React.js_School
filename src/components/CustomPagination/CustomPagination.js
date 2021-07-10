import React, { useMemo } from 'react'
import { Pagination, Form } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'

import { getArrayByNumber } from '../../utils'
import { productsSelector } from '../../bus/products/allProducts/selectors'
import { fetchProducts } from '../../bus/products/allProducts/thunks'
import {
  changePage,
  changePerPage,
} from '../../bus/products/pagination/actions'
import {
  pageSelector,
  perPageSelector,
} from '../../bus/products/pagination/selectors'

export const CustomPagination = () => {
  const dispatch = useDispatch()

  const productsData = useSelector(productsSelector)
  const page = useSelector(pageSelector)
  const perPage = useSelector(perPageSelector)

  const pagesCount = useMemo(() => {
    if (!productsData || !perPage) {
      return 0
    }
    return Math.ceil(productsData.total / perPage)
  }, [productsData, perPage])

  const pagesItems = useMemo(() => {
    if (pagesCount < 3) {
      return getArrayByNumber(pagesCount)
    }

    const prev = page - 1
    const next = page + 1
    const last = pagesCount - 1

    const arr = []

    switch (prev) {
      case 0:
        arr.push(page, next, next + 1, 0.111)
        break
      case 1:
        arr.push(prev, page, next, 0.111)
        break
      default:
        switch (page) {
          case last:
            arr.push(0.111, prev - 1, prev, last)
            break
          case last - 1:
            arr.push(0.111, prev, page, next)
            break
          default:
            arr.push(0.111, prev, page, next, 0.111)
            break
        }
        break
    }
    return arr
  }, [page, pagesCount, productsData])

  const handleChangePage = (num) => {
    dispatch(fetchProducts({ page: num, perPage }))
    dispatch(changePage(num))
  }

  const handleChangePerPage = (e) => {
    const value = e.target.value

    dispatch(changePerPage(value))
  }

  return (
    <div className="w-100 d-flex flex-row justify-content-end align-items-center mb-3">
      {pagesItems && (
        <React.Fragment>
          <Form.Control
            as="select"
            className="w-10 me-3"
            value={perPage}
            onChange={handleChangePerPage}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </Form.Control>

          <Pagination className="m-0">
            {page > 1 && (
              <Pagination.First onClick={() => handleChangePage(1)} />
            )}
            {pagesItems.map((p) => {
              if (p === 0.111) {
                return (
                  <Pagination.Ellipsis key={`pagination_${Math.random()}`} />
                )
              }
              return (
                <Pagination.Item
                  key={`pagination_${p}`}
                  active={p === page}
                  onClick={() => handleChangePage(p)}
                >
                  {p}
                </Pagination.Item>
              )
            })}
            {pagesItems && page < pagesCount - 1 && (
              <Pagination.Last
                onClick={() => handleChangePage(pagesCount - 1)}
              />
            )}
          </Pagination>
        </React.Fragment>
      )}
    </div>
  )
}
