import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ type, className, onClick, children }) => (
  <button type={type} className={className} onClick={onClick}>
    {children}
  </button>
)

Button.defaultProps = {
  type: 'submit',
  className: 'btn btn-primary'
}

Button.prototype = {
  type: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Button
