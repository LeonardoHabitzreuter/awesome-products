import React from 'react'
import { Table, Icon } from 'components'
import PropTypes from 'prop-types'

const ProductsTable = ({ onEdit, onDelete, products }) => (
  <Table
    columns={columns(onEdit, onDelete)}
    data={products}
  />
)

const columns = (onEdit, onDelete) => (
  [{
    description: 'Name',
    key: 'name'
  }, {
    description: 'Measurement unit',
    key: 'measurementUnit'
  }, {
    description: 'Amount',
    key: 'amount'
  }, {
    description: 'Price',
    key: 'price'
  }, 
  // {
  //   description: 'Actions',
  //   renderer: () => (
  //     <Actions
  //       onEdit={onEdit}
  //       onDelete={onDelete}
  //     />
  //   )
  // }
]
)

const Actions = ({ onEdit, onDelete, data }) => (
  <div>
    <Icon
      type='edit'
      onClick={() => onEdit(data.id)}
    />
    <Icon
      type='delete'
      onClick={() => onEdit(onDelete.id)}
    />
  </div>
)

ProductsTable.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductsTable
