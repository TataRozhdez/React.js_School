import React from 'react'
import PropTypes from 'prop-types'

import { Card, FormControl, Button } from 'react-bootstrap'

export const CartCard = ({ name, price, number }) => {
  return (
    <Card className="mb-2 p-2 me-2 w-25 align-items-center">
      <Card.Title className="text-center">{name}</Card.Title>
      <Card.Body className="d-flex flex-row w-100 px-0 align-items-center justify-content-between">
        <div className="d-flex flex-row">
          <Button variant="outline-primary border-0">&#8722;</Button>
          <FormControl value={number} readOnly className="w-25" />
          <Button variant="outline-primary border-0">+</Button>
        </div>
        <span>{number * +price}$</span>
      </Card.Body>
    </Card>
  )
}

CartCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
}
