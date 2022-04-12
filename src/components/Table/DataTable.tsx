import React from 'react'
import TableMain from './TableComponents/TableMain'
import { ConfigTypes, DataTypes, TypeTable } from './TableTypes/typesAPI'
import { tableTypesColumn } from './TableTypes/TableTypesColumn'
// @ts-ignore
import className from './TableStyles/DefaultTable.module.scss'

interface ITableProps<T> {
  data: T
  type: TypeTable
  config?: ConfigTypes
}

const DataTable: React.FC<ITableProps<DataTypes>> = ({ data, type, config }) => {
  const { columns, style } = tableTypesColumn(data, type)
  return type === TypeTable.DEFAULT ? (
    <article
      className={
        columns.length === 2
          ? `${className.ContainerTable} ${className.ContainerTableSmall}`
          : columns.length === 4
          ? `${className.ContainerTable} ${className.ContainerTablesMedium}`
          : `${className.ContainerTable}`
      }
    >
      {config?.title && <h3 className={className.Title}>{config.title}</h3>}
      <TableMain data={data} columns={columns} config={config} className={style} />
    </article>
  ) : (
    <TableMain data={data} columns={columns} config={config} className={style} />
  )
}

export default DataTable
