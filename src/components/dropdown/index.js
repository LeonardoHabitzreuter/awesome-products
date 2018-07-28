import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'

const Dropdown = ({ selected, items, onChange }) => (
  <Select
    value={{ value: selected, label: selected }}
    onChange={item => onChange(item.value)}
    options={items.map(item => ({ value: item, label: item }))}
  />
)

Dropdown.prototype = {
  items: PropTypes.array,
  onChange: PropTypes.func
}

export default Dropdown
