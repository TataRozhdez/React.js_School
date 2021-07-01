import React from 'react'
import { Spinner } from 'react-bootstrap'

export const CustomSpinner = () => {
  return (
    <div className="plug d-flex align-items-center justify-content-center">
      <Spinner animation="grow" variant="danger" className="text-center" />
    </div>
  )
}
