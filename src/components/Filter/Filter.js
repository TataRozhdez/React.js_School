import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Accordion, Spinner, Alert } from 'react-bootstrap'
import { List } from 'react-bootstrap-icons'
import Select from 'react-select'

import { useDebounce } from './../../hooks/debounce'
import { setLinkParams } from './../../utils/linkParser'
import { resetFlag } from '../../bus/products/filters/actions'
import { changePage } from '../../bus/products/pagination/actions'
import { getPagination } from '../../bus/products/pagination/selectors'
import {
  getFilters,
  getNameOrigin,
  getPrice,
  getStateOrigins,
} from '../../bus/products/filters/selectors'
import { fetchProducts } from '../../bus/products/allProducts/thunks'
import {
  changeOrigin,
  changePriceMax,
  changePriceMin,
} from '../../bus/products/filters/actions'

import { MultiRange } from '../MultiRange/MultiRange'

export const Filter = () => {
  const dispatch = useDispatch()

  const { loading, error, flagChange } = useSelector(getFilters)
  const { minPrice, maxPrice } = useSelector(getPrice)
  const { origins, allOrigins } = useSelector(getStateOrigins)
  const { page } = useSelector(getPagination)
  const originsName = useSelector(getNameOrigin)

  const debMinPrice = useDebounce(minPrice)
  const debMaxPrice = useDebounce(maxPrice)
  const debOrigins = useDebounce(origins)

  const onChangePriceMin = (value) => dispatch(changePriceMin(value))
  const onChangePriceMax = (value) => dispatch(changePriceMax(value))
  const onChangeOrigin = (value) => dispatch(changeOrigin(value))

  useEffect(() => {
    if (flagChange) {
      dispatch(resetFlag())
      setLinkParams({ minPrice, maxPrice, origins: originsName, page: '1' })

      if (page !== 1) return dispatch(changePage(1))
      dispatch(fetchProducts())
    }
  }, [debMinPrice, debMaxPrice, debOrigins])

  return (
    <Form className="mb-2">
      {error && <Alert variant="danger">{error}</Alert>}
      <Accordion>
        <Accordion.Toggle as={Button} variant="light" eventKey="0">
          {loading ? (
            <Spinner animation="border" variant="info" size="sm" />
          ) : (
            <List />
          )}
        </Accordion.Toggle>

        <Accordion.Collapse eventKey="0">
          <div className="d-flex flex-row align-items-center justify-content-between">
            <Form.Group className="d-flex align-items-center">
              <Form.Label className="me-2">Price: </Form.Label>
              <MultiRange
                min={minPrice}
                max={maxPrice}
                changePriceMin={onChangePriceMin}
                onChangePriceMax={onChangePriceMax}
              />
            </Form.Group>
            <Select
              options={allOrigins}
              value={origins}
              onChange={onChangeOrigin}
              className="w-50 z-10"
              isMulti
            />
          </div>
        </Accordion.Collapse>
      </Accordion>
    </Form>
  )
}
