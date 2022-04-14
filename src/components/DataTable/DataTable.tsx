import React from 'react'
import { ConfigTypes, TypeTable } from './TableTypes/TableServiceFunctions/typesAPI'
import { TableMain } from './TableComponents'
import { selectTableType } from './TableTypes/TableServiceFunctions'
import './TableStyles/ui.scss'

interface DataTableProps<T> {
  data: T[]
  type: TypeTable
  config?: ConfigTypes
}

export const DataTable = <T extends object>({ data, type, config }: DataTableProps<T>) => {
  const { columns, style } = selectTableType(type, data)
  const classNameContainer =
    columns.length === 2
      ? 'container-table container-table__small'
      : columns.length === 4
      ? 'container-table container-table__medium'
      : 'container-table'

  return type === TypeTable.DEFAULT ? (
    <article className={classNameContainer}>
      {config?.title && <h3 className="container-table__title">{config.title}</h3>}
      <TableMain<T> data={data} columns={columns} config={config} className={style} />
    </article>
  ) : (
    <TableMain<T> data={data} columns={columns} config={config} className={style} />
  )
}
