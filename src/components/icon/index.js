import React from 'react'
import { Icon as AntIcon } from 'antd'
import PropTypes from 'prop-types'

const Icon = ({ type, className, onClick }) => <AntIcon type={type} className={className} onClick={onClick} />

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default Icon
