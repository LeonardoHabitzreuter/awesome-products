import React from 'react'
import MaskedInput from 'react-text-mask'
import PropTypes from 'prop-types'

const Input = ({ mask, onChange, ...props }) => (
  <div>
    <MaskedInput
      mask={mask}
      onChange={e => onChange(e.target.value)}
      {...props}
    />
  </div>
)

Input.defaultProps = {
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
