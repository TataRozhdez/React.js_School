import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ListGroup, Table } from 'react-bootstrap'
import { format } from 'date-fns'

export const LinkListItem = ({ link, pieces, createdAt }) => {
  return (
    <ListGroup.Item className="mb-4 border-1">
      <Link to={link} className="nav-link">
        <p>{format(new Date(createdAt), 'dd-MM-yyyy HH:mm')}</p>
        <Table responsive>
          <thead>
            <tr>
              <th>Product</th>
              <th>Count</th>
            </tr>
          </thead>
          <tbody>
            {pieces.map((i) => (
              <tr key={i.id}>
                <td>{i.product.name}</td>
                <td>{i.count}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Link>
    </ListGroup.Item>
  )
}

LinkListItem.propTypes = {
  link: PropTypes.string.isRequired,
  pieces: PropTypes.array.isRequired,
  createdAt: PropTypes.string.isRequired,
}
