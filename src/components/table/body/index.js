import React from 'react'

const NoContent = props => (
  <Line>
    <Column>
      <span>No data found</span>
    </Column>
  </Line>
)

const Line = ({ children, renderer, row }) => renderer ? renderer(row, children) : <tr>{children}</tr>

const Column = ({ children, className }) => <td className={className}>{children}</td>

const ColumnRenderer = ({ row, id, renderer, className }) => (
  renderer
    ? (<Column className={className}>{React.cloneElement(renderer(), { data: row })}</Column>)
    : (<Column className={className}>{row[id]}</Column>)
)

const Body = ({ data, columns, renderer }) => (
  <tbody className='no-border-y'>
    {
      data.length <= 0
        ? <NoContent />
        : data.map((row, index) => (
          <Line key={index} renderer={renderer} row={row}>
            { columns.map(column => (
              <ColumnRenderer
                key={`line-${index}-column-${column.key}`}
                row={row}
                id={column.key}
                renderer={column.renderer}
              />
            ))}
          </Line>
        ))
    }
  </tbody>
)

export default Body
