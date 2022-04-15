import React from 'react'
import { ConfigTypes } from './TableTypes/TableServiceFunctions'
import { TableMain } from './TableComponents'
import { Column } from 'react-table'
import './TableStyles/global.scss'
import './TableStyles/defaultTable.scss'
import './TableStyles/sortingTable.scss'

interface DataTableProps<T extends object> {
  data: T[]
  columns: Column<T>[]
  style: string
  config?: ConfigTypes
}

export const DataTable = <T extends object>({
  data,
  columns,
  style,
  config,
}: DataTableProps<T>) => {
  const classNameContainer =
    columns.length === 2
      ? 'container-table container-table__small'
      : columns.length === 4
      ? 'container-table container-table__medium'
      : 'container-table'

  return config?.hasContainer ? (
    <article className={classNameContainer}>
      {config?.title && <h3 className="container-table__title">{config.title}</h3>}
      <TableMain<T> data={data} columns={columns} config={config} className={style} />
    </article>
  ) : (
    <TableMain<T> data={data} columns={columns} config={config} className={style} />
  )
}
