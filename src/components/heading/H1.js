import React from 'react'
import PropTypes from 'prop-types'

const H1 = ({ className, children }) => (
  <h1 className={className}>
    {children}
  </h1>
)

H1.prototype = {
  className: PropTypes.string
}

export default H1
