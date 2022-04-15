import React, { useLayoutEffect } from 'react'
import { Column, useSortBy, useTable } from 'react-table'
import { ConfigTypes } from '../TableTypes/TableServiceFunctions'
import { TableHead } from './TableHead'
import { TableBody } from './TableBody'
import { TableFoot } from './TableFoot'
import '../TableStyles/global.scss'

interface DataTableProps<T extends object> {
  data: T[]
  columns: Column<T>[]
  className: string
  config?: ConfigTypes
}

export const TableMain = <T extends object>({
  data,
  columns,
  config,
  className,
}: DataTableProps<T>) => {
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
  // horizontal scroll line
  const tableRef = React.useRef<HTMLTableElement>(null)
  useLayoutEffect(() => {
    if (tableRef?.current!.scrollWidth > tableRef?.current!.clientWidth) {
      tableRef?.current?.classList.add('table__horizontal-scroll')
    } else {
      tableRef?.current?.classList.remove('table__horizontal-scroll')
    }
  })
  return (
    <table ref={tableRef} {...getTableProps()} className={className}>
      <TableHead<T> headerGroups={headerGroups} hasSorting={config?.hasSorting} />
      <TableBody<T> getTableBodyProps={getTableBodyProps} rows={pageRows} prepareRow={prepareRow} />
      <TableFoot<T> footerGroups={footerGroups} />
    </table>
  )
}
