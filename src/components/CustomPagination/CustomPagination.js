import React, { useContext } from 'react'
import { Pagination } from 'react-bootstrap'

import AppContext from '../../context/appContext'

export const CustomPagination = () => {
  const appContext = useContext(AppContext)
  const { page, totalPage, changePage } = appContext

  const renderPagination = () => {
    const arr = []

    for (let i = 1; i <= totalPage; i++) {
      arr.push(i)
    }

    return arr
  }

  const pages = renderPagination()

  return (
    <Pagination>
      {pages &&
        pages.map((p) => (
          <Pagination.Item
            key={p}
            onClick={() => changePage(p)}
            active={p === page}
          >
            {p}
          </Pagination.Item>
        ))}
    </Pagination>
  )
}
