import React from 'react'
import PropTypes from 'prop-types'
import Head from './head'
import Body from './body'

const Table = ({ data, columns, renderer, className }) => (
  <div className='table-responsive'>
    <table className={className}>
      { <Head columns={columns} /> }
      { <Body data={data} columns={columns} renderer={renderer} /> }
    </table>
  </div>
)

Table.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array.isRequired
}

Table.defaultProps = {
  className: 'table no-border dataTable',
  data: []
}

export default Table
