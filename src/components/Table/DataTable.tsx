import React from 'react'
import TableMain from './TableComponents/TableMain'
import { ConfigTypes, DataTypes, TypeTable } from '../../types/apiTypes'
import { Column } from 'react-table'
import { tableTypesColumn, tableSelectStyle } from './TableTypes/TableTypesColumn'

interface ITableProps<T> {
  data: T
  type: TypeTable
  config?: ConfigTypes
}

const DataTable: React.FC<ITableProps<DataTypes>> = ({ data, type, config }) => {
  const columns: Column<any>[] = tableTypesColumn(data, type)
  const className: string = tableSelectStyle(type)
  return (
    <>
      {config?.title && <h3>{config.title}</h3>}
      <TableMain data={data} columns={columns} config={config} className={className} />
    </>
  )
}

export default DataTable
