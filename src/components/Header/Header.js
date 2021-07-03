import React from 'react'
import PropTypes from 'prop-types'
import { Nav, Navbar, Badge } from 'react-bootstrap'
import { Cart2 } from 'react-bootstrap-icons'
import { HouseDoor } from 'react-bootstrap-icons'

import Logo from '../../assets/logo.png'

export const Header = ({ totalOrder, pathname }) => (
  <Navbar bg="light" className="nav mb-2 d-flex  justify-content-between">
    <Navbar.Brand href="/">
      <img src={Logo} alt="Shopland" />
    </Navbar.Brand>
    <div className="d-flex flex-row">
      {pathname !== '/' && (
        <Nav.Link href="/" className="d-flex align-items-center">
          <HouseDoor className="me-4" size="24" />
        </Nav.Link>
      )}
      {pathname !== '/cart' && (
        <Nav.Link
          href="/cart"
          className="d-flex align-items-center position-relative"
        >
          <Cart2 className="me-4" size="24" />
          {totalOrder && (
            <Badge pill variant="primary" as="small">
              {totalOrder.number}
            </Badge>
          )}
        </Nav.Link>
      )}
    </div>
  </Navbar>
)

Header.propTypes = {
  totalOrder: PropTypes.object,
  pathname: PropTypes.string.isRequired,
}
