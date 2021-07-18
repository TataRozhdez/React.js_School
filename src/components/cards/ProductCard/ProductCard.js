import React from 'react'
import { Button } from 'react-bootstrap'
import PropTypes from 'prop-types'

export const ProductCard = ({ name, origin, price, handleAddOrder }) => (
  <div>
    <h1 className="text-success mb-4">{name}</h1>
    <h3>Origin: {origin}</h3>
    <h3>Price: {price}$</h3>
    <div className="w-100 d-flex justify-content-center">
      <Button variant="success" onClick={handleAddOrder} className="w-50">
        Buy
      </Button>
    </div>
  </div>
)

ProductCard.propTypes = {
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  handleAddOrder: PropTypes.func.isRequired,
}
