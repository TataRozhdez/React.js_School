import React, { useContext, useMemo } from 'react'
import { Pagination } from 'react-bootstrap'

import AppContext from '../../context/appContext'
import { getArrayByNumber } from '../../utils'

export const CustomPagination = () => {
  const appContext = useContext(AppContext)
  const { acivePage, products, perPage, changePage } = appContext

  const pagesCount = useMemo(() => {
    if (!products || !perPage) {
      return 0
    }
    return Math.ceil(products.total / perPage)
  }, [products, perPage])

  const pagesItems = useMemo(() => {
    if (pagesCount < 3) {
      return getArrayByNumber(pagesCount)
    }

    const prev = acivePage - 1
    const next = acivePage + 1
    const last = pagesCount - 1

    const arr = []

    switch (prev) {
      case 0:
        arr.push(acivePage, next, next + 1, 0.111)
        break
      case 1:
        arr.push(prev, acivePage, next, 0.111)
        break
      default:
        switch (acivePage) {
          case last:
            arr.push(0.111, prev - 1, prev, last)
            break
          case last - 1:
            arr.push(0.111, prev, acivePage, next)
            break
          default:
            arr.push(0.111, prev, acivePage, next, 0.111)
            break
        }
        break
    }
    return arr
  }, [acivePage, pagesCount])

  return (
    <Pagination>
      {pagesItems && acivePage > 1 && (
        <Pagination.First onClick={() => changePage(1)} />
      )}
      {pagesItems &&
        pagesItems.map((p) => {
          if (p === 0.111) {
            return <Pagination.Ellipsis key={`pagination_${Math.random()}`} />
          }
          return (
            <Pagination.Item
              key={`pagination_${p}`}
              active={p === acivePage}
              onClick={() => changePage(p)}
            >
              {p}
            </Pagination.Item>
          )
        })}
      {pagesItems && acivePage < pagesCount - 1 && (
        <Pagination.Last onClick={() => changePage(pagesCount - 1)} />
      )}
    </Pagination>
  )
}
