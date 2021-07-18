import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Accordion, Spinner } from 'react-bootstrap'
import { List } from 'react-bootstrap-icons'
import Select from 'react-select'

import { fetchOrigins } from '../../bus/products/filters/thunks'
import { getFilters } from '../../bus/products/filters/selectors'
import { fetchProducts } from '../../bus/products/allProducts/thunks'
import {
  changeOrigin,
  changePriceMax,
  changePriceMin,
} from '../../bus/products/filters/actions'

import { MultiRange } from '../MultiRange/MultiRange'

export const Filter = () => {
  const dispatch = useDispatch()

  const { minPrice, maxPrice, origin, allOrigins, loading } =
    useSelector(getFilters)

  const onChangePriceMin = (value) => dispatch(changePriceMin(value))

  const onChangePriceMax = (value) => dispatch(changePriceMax(value))

  const onChangeOrigin = (value) => dispatch(changeOrigin(value))

  const onFetchProducts = () => dispatch(fetchProducts())

  useEffect(() => {
    !allOrigins.length && dispatch(fetchOrigins())
  }, [])

  return (
    <Form className="mb-2">
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
                onFetchProducts={onFetchProducts}
              />
            </Form.Group>
            <Select
              options={allOrigins}
              value={origin}
              onChange={(value) => onChangeOrigin(value)}
              className="w-50 z-10"
              isMulti
            />
          </div>
        </Accordion.Collapse>
      </Accordion>
    </Form>
  )
}
