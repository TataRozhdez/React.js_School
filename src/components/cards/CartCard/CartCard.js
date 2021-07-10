import React from 'react'
import { useDispatch } from 'react-redux'
import PropTypes from 'prop-types'
import { Card, FormControl, Button } from 'react-bootstrap'
import { Trash } from 'react-bootstrap-icons'

import { addOrder, removeOrder } from '../../../bus/order/actions'

export const CartCard = ({ name, id, price, number }) => {
  const dispatch = useDispatch()

  return (
    <Card className="mb-2 p-2 me-2 w-25 align-items-center">
      <Card.Title className="text-center">{name}</Card.Title>
      <Card.Body className="d-flex flex-row w-100 px-0 align-items-center justify-content-between">
        <div className="d-flex flex-row">
          <Button
            variant="outline-primary border-0"
            onClick={() => dispatch(removeOrder(id, 1))}
          >
            &#8722;
          </Button>
          <FormControl value={number} readOnly className="w-25" />
          <Button
            variant="outline-primary border-0"
            onClick={() => dispatch(addOrder(id, name, price))}
          >
            +
          </Button>
        </div>
        <span>{number * +price}$</span>
      </Card.Body>
      <div className="w-100 d-flex justify-content-end ">
        <Button
          variant="outline-danger border-0"
          onClick={() => dispatch(removeOrder(id, number))}
        >
          <Trash />
        </Button>
      </div>
    </Card>
  )
}

CartCard.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
}
