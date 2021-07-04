import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Form } from 'react-bootstrap'
import Select from 'react-select'

import { MultiRange } from '../MultiRange/MultiRange'
import { productsSelector } from '../../bus/products/selectors'
import {
  changeOrigin,
  changePriceMax,
  changePriceMin,
} from '../../bus/products/actions'
import { optionsOrigins } from '../../init/constants'

export const Filter = () => {
  const dispatch = useDispatch()

  const { minPrice, maxPrice, origin } = useSelector(productsSelector)

  const onChangePriceMin = (value) => dispatch(changePriceMin(value))
  const onChangePriceMax = (value) => dispatch(changePriceMax(value))
  const onChangeOrigin = (value) => dispatch(changeOrigin(value))

  return (
    <Form className="mb-2">
      <h3>Filter:</h3>
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
          options={optionsOrigins}
          value={origin}
          onChange={(value) => onChangeOrigin(value)}
          className="w-50"
          isMulti
        />
      </div>
    </Form>
  )
}
