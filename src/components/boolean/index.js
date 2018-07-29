import React from 'react'
import PropTypes from 'prop-types'
import Styles from './styles.styl'

const ACTIVE_CLASS = 'btn btn-primary btn-sm'
const INACTIVE_CLASS = `btn btn-primary btn-sm ${Styles.inactive}`

const BooleanInput = ({ id, trueLabel, falseLabel, value, onChange }) => (
  <div id={id} className='input-group'>
    <div className='btn-group'>
      <a className={value ? ACTIVE_CLASS : INACTIVE_CLASS} onClick={() => onChange(true)}>
        {trueLabel}
      </a>
      <a className={value ? INACTIVE_CLASS : ACTIVE_CLASS} onClick={() => onChange(false)}>
        {falseLabel}
      </a>
    </div>
  </div>
)

BooleanInput.defaultProps = {
  trueLabel: 'Yes',
  falseLabel: 'No'
}

BooleanInput.propTypes = {
  trueLabel: PropTypes.string,
  falseLabel: PropTypes.string,
  value: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired
}

export default BooleanInput
