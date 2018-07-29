import React from 'react'

const HeaderColumn = ({ description }) => <th><strong>{description}</strong></th>

const Header = props => (
  <thead className='no-border'>
    <tr>{props.columns.map(column =>
      <HeaderColumn key={column.key} description={column.description} />
    )}</tr>
  </thead>
)

export default Header
