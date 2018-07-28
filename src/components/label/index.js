import React from 'react'
import PropTypes from 'prop-types'

const Label = ({ htmlFor, className, children }) => (
  <label htmlFor={htmlFor} className={className}>
    {children}
  </label>
)

Label.prototype = {
  for: PropTypes.string,
  className: PropTypes.string
}

export default Label
