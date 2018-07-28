import React from 'react'
import { Icon as AntIcon } from 'antd'
import PropTypes from 'prop-types'

const Icon = ({ type, className }) => <AntIcon type={type} className={className} />

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string
}

export default Icon
