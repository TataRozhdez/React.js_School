import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Basket2 } from 'react-bootstrap-icons'
import { HouseDoor } from 'react-bootstrap-icons'

export const Header = () => {
  return (
    <Navbar bg='light' className='nav mb-2 d-flex  justify-content-between'>
      <Navbar.Brand href='/'>Shoplandia</Navbar.Brand>
      <div className='d-flex flex-row'>
        <Nav.Link href='/' className='d-flex align-items-center'>
          Home <HouseDoor className='ms-1' size='16' />
        </Nav.Link>
        <Nav.Link href='/cart' className='d-flex align-items-center'>
          Cart <Basket2 className='ms-1' size='16' />
        </Nav.Link>
      </div>
    </Navbar>
  )
}
