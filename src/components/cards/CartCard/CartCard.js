import React from 'react'
import PropTypes from 'prop-types'
import { Card, FormControl, Button } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'

export const CartCard = ({ name, id, price, number, addItem, removeItem }) => (
  <Card className="mb-2 p-2 me-2 w-25 align-items-center">
    <Card.Title className="text-center">{name}</Card.Title>
    <Card.Body className="d-flex flex-row w-100 px-0 align-items-center justify-content-between">
      <div className="d-flex flex-row">
        <Button
          variant="outline-primary border-0"
          onClick={() => removeItem(id, 1)}
        >
          &#8722;
        </Button>
        <FormControl value={number} readOnly className="w-25" />
        <Button
          variant="outline-primary border-0"
          onClick={() => addItem(id, name, price)}
        >
          +
        </Button>
      </div>
      <span>{number * +price}$</span>
    </Card.Body>
    <div className="w-100 d-flex justify-content-end ">
      <Button
        variant="outline-danger border-0"
        onClick={() => removeItem(id, number)}
      >
        <Trash />
      </Button>
    </div>
  </Card>
)

CartCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
  addItem: PropTypes.func.isRequired,
  removeItem: PropTypes.func.isRequired,
}
