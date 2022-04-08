import React from 'react'
import { HeaderGroup } from 'react-table'
import TableSortIcon from './TableContentComponents/TableSortIcon/TableSortIcon'

interface ITableHead {
  headerGroups: HeaderGroup<any>[]
  hasSorting?: boolean
}

const TableHead: React.FC<ITableHead> = ({ headerGroups, hasSorting }) => {
  return (
    <thead>
      {headerGroups.map((headerGroup, headerGroupIndex) => (
        <tr {...headerGroup.getHeaderGroupProps()} key={headerGroupIndex}>
          {headerGroup.headers.map((column: HeaderGroup<object>, columnIndex: number) => (
            <th
              {...column.getHeaderProps(hasSorting ? column.getSortByToggleProps() : undefined)}
              key={columnIndex}
            >
              {column.render('Header')}
              {hasSorting && <TableSortIcon column={column} />}
            </th>
          ))}
        </tr>
      ))}
    </thead>
  )
}

export default TableHead
