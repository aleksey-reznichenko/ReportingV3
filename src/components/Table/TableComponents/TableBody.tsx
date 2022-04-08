import React from 'react'
import { Row } from 'react-table'

interface ITableBody {
  getTableBodyProps: () => {}
  rows: Row<any>[]
  prepareRow: (row: Row<any>) => void
}

const TableBody: React.FC<ITableBody> = ({ getTableBodyProps, rows, prepareRow }) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row: Row<any>, rowIndex: number) => {
        prepareRow(row)
        return (
          <tr {...row.getRowProps()} key={rowIndex}>
            {row.cells.map((cell, cellIndex) => {
              return (
                <td {...cell.getCellProps()} key={cellIndex}>
                  {cell.render('Cell')}
                </td>
              )
            })}
          </tr>
        )
      })}
    </tbody>
  )
}

export default TableBody
