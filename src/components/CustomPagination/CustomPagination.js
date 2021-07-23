import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { Pagination, Form } from 'react-bootstrap'

export const CustomPagination = ({
  total,
  page,
  perPage,
  onChangePage,
  onChangePerPage,
}) => {
  const pagesCount = useMemo(() => {
    if (!total || !perPage) return 0

    return Math.ceil(total / perPage)
  }, [total, perPage])

  const pagesItems = useMemo(() => {
    if (pagesCount <= 3) return [1, 2, 3]

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
  }, [page, pagesCount, total])

  return (
    <div className="w-100 d-flex flex-row justify-content-end align-items-center mb-3">
      {pagesItems && (
        <React.Fragment>
          <Form.Control
            as="select"
            className="w-10 me-3"
            value={perPage}
            onChange={(e) => onChangePerPage(e.target.value)}
          >
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </Form.Control>

          <Pagination className="m-0">
            {page > 1 && <Pagination.First onClick={() => onChangePage(1)} />}
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
                  onClick={() => onChangePage(p)}
                >
                  {p}
                </Pagination.Item>
              )
            })}
            {pagesItems && page < pagesCount - 1 && (
              <Pagination.Last onClick={() => onChangePage(pagesCount - 1)} />
            )}
          </Pagination>
        </React.Fragment>
      )}
    </div>
  )
}

CustomPagination.propTypes = {
  page: PropTypes.number.isRequired,
  perPage: PropTypes.string.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onChangePerPage: PropTypes.func.isRequired,
  total: PropTypes.number,
}
