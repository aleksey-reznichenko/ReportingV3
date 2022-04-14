import React from 'react'
import { HeaderGroup } from 'react-table'
import { TableSortIcon } from './TableContentComponents'

interface TableHeadProps<T extends object> {
  headerGroups: HeaderGroup<T>[]
  hasSorting?: boolean
}

export const TableHead = <T extends object>({ headerGroups, hasSorting }: TableHeadProps<T>) => {
  return (
    <thead>
      {headerGroups.map((headerGroup, headerGroupIndex) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
          {headerGroup.headers.map((column: HeaderGroup<T>, columnIndex: number) => (
            <th
              {...column.getHeaderProps(hasSorting ? column.getSortByToggleProps() : undefined)}
              key={columnIndex}
            >
              {column.render('Header')}
              {hasSorting && !column.disableSortBy && <TableSortIcon column={column} />}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}
