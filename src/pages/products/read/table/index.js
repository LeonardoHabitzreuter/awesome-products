import React from 'react'
import { Table, Icon } from 'components'
import PropTypes from 'prop-types'
import Styles from './styles.styl'

const ProductsTable = ({ onEdit, onDelete, products }) => (
  <Table
    columns={columns(onEdit, onDelete)}
    data={products.map(product => ({ ...product, perishable: product.perishable ? 'Yes' : 'No' }))}
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
  }, {
    description: 'Perishable',
    key: 'perishable'
  }, {
    description: 'Expiry date',
    key: 'expiryDate'
  }, {
    description: 'Manufacture date',
    key: 'manufactureDate'
  }, {
    description: 'Actions',
    renderer: () => (
      <Actions
        onEdit={onEdit}
        onDelete={onDelete}
      />
    )
  }]
)

const Actions = ({ onEdit, onDelete, data }) => (
  <div>
    <Icon
      className={`${Styles.tableIcon} ${Styles.blue}`}
      type='edit'
      onClick={() => onEdit(data.id)}
    />
    <Icon
      className={`${Styles.tableIcon} ${Styles.red}`}
      type='delete'
      onClick={() => onDelete(data.id)}
    />
  </div>
)

ProductsTable.propTypes = {
  onEdit: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  products: PropTypes.arrayOf(PropTypes.object).isRequired
}

export default ProductsTable
