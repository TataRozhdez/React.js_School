import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Badge, Button } from 'react-bootstrap'
import { Cart2, HouseDoor, Inboxes, Bookmarks } from 'react-bootstrap-icons'

import { OverlayLinkBtn } from '../OverlayLinkBtn/OverlayLinkBtn'
import Logo from '../../assets/logo.png'

export const Header = ({ totalOrder, pathname, onUploadedVisible }) => (
  <Navbar bg="light" className="nav mb-2 d-flex  justify-content-between">
    <div>
      <Navbar.Brand href="/">
        <img src={Logo} alt="Shopland" />
      </Navbar.Brand>
      <Button variant="outline-success px-1" onClick={onUploadedVisible}>
        + Upload product
      </Button>
    </div>

    <div className="d-flex flex-row">
      <OverlayLinkBtn tooltip="Home" path="/" disabled={pathname === '/'}>
        <HouseDoor size="22" />
      </OverlayLinkBtn>

      <OverlayLinkBtn
        tooltip="Uploaded products"
        path="/products/uploaded"
        disabled={pathname === '/products/uploaded'}
      >
        <Inboxes size="22" />
      </OverlayLinkBtn>

      <OverlayLinkBtn
        tooltip="History of orders"
        path="/archive"
        disabled={pathname === '/archive'}
      >
        <Bookmarks size="22" />
      </OverlayLinkBtn>

      <OverlayLinkBtn
        tooltip="Cart"
        path="/cart"
        disabled={pathname === '/cart'}
      >
        <Cart2 className="me-4" size="25" />
        {totalOrder && pathname !== '/cart' && (
          <Badge pill variant="primary" as="small">
            {totalOrder.number}
          </Badge>
        )}
      </OverlayLinkBtn>
    </div>
  </Navbar>
)

Header.propTypes = {
  totalOrder: PropTypes.object,
  pathname: PropTypes.string.isRequired,
  onUploadedVisible: PropTypes.func.isRequired,
}
