import React from 'react'
import { Spinner } from 'react-bootstrap'

export const CustomSpinner = () => (
  <div className="plug d-flex align-items-center justify-content-center fade-in">
    <Spinner animation="border" variant="light" className="text-center" />
  </div>
)
