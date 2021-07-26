import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ListGroup } from 'react-bootstrap'

export const LinkListItem = ({ link, linkTitle, children }) => (
  <ListGroup.Item className="mb-4 border-1">
    <Link to={link} className="nav-link">
      <p>{linkTitle}</p>
    </Link>
    {children}
  </ListGroup.Item>
)

LinkListItem.propTypes = {
  link: PropTypes.string.isRequired,
  linkTitle: PropTypes.string.isRequired,
  children: PropTypes.node,
}
