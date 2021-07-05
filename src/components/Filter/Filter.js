import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form, Button, Accordion } from 'react-bootstrap'
import { List } from 'react-bootstrap-icons'
import Select from 'react-select'

import {
  changeOrigin,
  changePriceMax,
  changePriceMin,
} from '../../bus/products/actions'
import { productsSelector } from '../../bus/products/selectors'
import { fetchOrigins } from '../../bus/products/thunks'
import { MultiRange } from '../MultiRange/MultiRange'

export const Filter = () => {
  const dispatch = useDispatch()

  const { minPrice, maxPrice, origin, allOrigins } =
    useSelector(productsSelector)

  const onChangePriceMin = (value) => dispatch(changePriceMin(value))
  const onChangePriceMax = (value) => dispatch(changePriceMax(value))
  const onChangeOrigin = (value) => dispatch(changeOrigin(value))

  useEffect(() => {
    !allOrigins && dispatch(fetchOrigins())
  }, [])

  return (
    <Form className="mb-2">
      <Accordion>
        <Accordion.Toggle as={Button} variant="light" eventKey="0">
          <List />
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
              value={origin}
              onChange={(value) => onChangeOrigin(value)}
              className="w-50"
              isMulti
            />
          </div>
        </Accordion.Collapse>
      </Accordion>
    </Form>
  )
}