import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { OverlayTrigger, Tooltip, Button } from 'react-bootstrap'

export const OverlayLinkBtn = ({
  tooltip,
  path,
  disabled = false,
  children,
}) => (
  <Link
    to={path}
    className="d-flex align-items-center nav-link"
    disabled={disabled}
  >
    <OverlayTrigger
      placement="bottom"
      transition={false}
      overlay={<Tooltip id="tooltip-top">{tooltip}</Tooltip>}
    >
      {({ ref, ...triggerHandler }) => (
        <Button
          variant="light"
          {...triggerHandler}
          ref={ref}
          disabled={disabled}
          className="p-0"
        >
          {children}
        </Button>
      )}
    </OverlayTrigger>
  </Link>
)

OverlayLinkBtn.propTypes = {
  tooltip: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
}
