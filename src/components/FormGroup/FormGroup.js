import React from 'react'
import PropTypes from 'prop-types'
import { Form } from 'react-bootstrap'

export const FormGroup = ({ label, error, children }) => (
  <Form.Group className="mb-3">
    <Form.Label>{label}</Form.Label>
    {children}

    {error && <small className="text-danger ms-1">{error}</small>}
  </Form.Group>
)

FormGroup.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
}
