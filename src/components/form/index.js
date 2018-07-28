import React from 'react'
import PropTypes from 'prop-types'

const Form = ({ className, children, onSubmit }) => (
  <form className={className} onSubmit={e => { e.preventDefault(); onSubmit() }}>
    {children}
  </form>
)

Form.prototype = {
  className: PropTypes.string
}

export default Form
