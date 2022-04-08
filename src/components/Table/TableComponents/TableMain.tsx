import React from 'react'
import { Column, useSortBy, useTable } from 'react-table'
import TableHead from './TableHead'
import TableBody from './TableBody'
import TableFoot from './TableFoot'
import { ConfigTypes } from '../../../types/apiTypes'

interface IDataTableProps<T> {
  data: T
  // @ts-ignore
  columns: Column<T>[]
  className: string
  config?: ConfigTypes
}

const TableMain: React.FC<IDataTableProps<any>> = ({ data, columns, config, className }) => {
  const { getTableProps, getTableBodyProps, headerGroups, footerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useSortBy
    )
  // pagination's (start, end)
  const pageRows = rows.slice(0, rows.length)
  return (
    <table {...getTableProps()} className={className}>
      <TableHead headerGroups={headerGroups} hasSorting={config?.hasSorting} />
      <TableBody getTableBodyProps={getTableBodyProps} rows={pageRows} prepareRow={prepareRow} />
      <TableFoot footerGroups={footerGroups} />
    </table>
  )
}

export default TableMain
