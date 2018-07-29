import React from 'react'
import PropTypes from 'prop-types'

const Input = ({ onChange, ...props }) => (
  <input onChange={e => onChange(e.target.value)} {...props} />
)

Input.defaultProps = {
  type: 'text',
  className: 'form-control'
}

Input.prototype = {
  required: PropTypes.bool,
  id: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
  maxLength: PropTypes.number,
  minLength: PropTypes.number,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool
  ]).isRequired
}

export default Input
