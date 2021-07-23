import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table } from 'react-bootstrap'

export const TableOrder = ({ pieces }) => (
  <Table responsive hover>
    <thead>
      <tr>
        <th>Product</th>
        <th>Count</th>
        <th>Price</th>
      </tr>
    </thead>
    <tbody>
      {pieces.map((i) => (
        <tr className="position-relative">
          <td>
            <Link
              to={`/product/${i.product.id}`}
              className="text-dark stretched-link"
              key={i.id}
            >
              <h5>{i.product.name}</h5>
            </Link>

            <p className="mb-0">Origin: {i.product.origin}</p>
            <p>{i.product.price}$</p>
          </td>
          <td>{i.count}</td>
          <td>{+i.count * +i.product.price}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

TableOrder.propTypes = {
  pieces: PropTypes.array.isRequired,
}
