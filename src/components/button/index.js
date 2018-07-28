import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, className, children }) => (
  <button type={type} className={className}>
    {children}
  </button>
)

Button.defaultProps = {
  type: 'submit',
  className: 'btn btn-primary'
}

Button.prototype = {
  type: PropTypes.string,
  className: PropTypes.string
}

export default Button
