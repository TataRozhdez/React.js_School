import React from 'react'
import PropTypes from 'prop-types'

import { Card } from 'react-bootstrap'

export const CartCard = ({ name, price, number }) => {
  return (
    <Card className='mb-2 me-2 w-100'>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='m-0'>Price: {price}$</Card.Text>
        <Card.Text>Number: {number}</Card.Text>
        <Card.Text>Ammount: {number * +price}</Card.Text>
      </Card.Body>
    </Card>
  )
}

CartCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  number: PropTypes.number.isRequired,
}
