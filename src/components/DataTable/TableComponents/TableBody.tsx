import React from 'react'
import { Row } from 'react-table'

interface TableBodyProps<T extends object> {
  getTableBodyProps: () => {}
  rows: Row<T>[]
  prepareRow: (row: Row<T>) => void
}

export const TableBody = <T extends object>({
  getTableBodyProps,
  rows,
  prepareRow,
}: TableBodyProps<T>) => {
  return (
    <tbody {...getTableBodyProps()}>
      {rows.map((row: Row<T>, rowIndex: number) => {
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
