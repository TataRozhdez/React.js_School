import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export const CustomCard = ({ name, price, origin, id, handleAddOrder }) => (
  <Card className="mb-2 me-2 col-2">
    <Card.Body>
      <Card.Title className="text-center">{name}</Card.Title>
      <Card.Text className="m-0">Price: {price}$</Card.Text>
      <Card.Text>Origin: {origin}</Card.Text>
      <Link to={`/product/${id}`}>
        <Button className="w-100" variant="outline-secondary">
          More info
        </Button>
      </Link>
      <Button
        className="w-100 my-1"
        variant="success"
        onClick={() => handleAddOrder(id, name, price)}
      >
        Buy
      </Button>
    </Card.Body>
  </Card>
)

CustomCard.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  handleAddOrder: PropTypes.func.isRequired,
}
