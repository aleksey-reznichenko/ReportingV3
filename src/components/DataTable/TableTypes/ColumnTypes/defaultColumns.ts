import { Column } from 'react-table'
import { SimpleTableType } from '../TableServiceFunctions/typesAPI'

export const defaultColumns = <T extends object>(data: T[]): Column<SimpleTableType>[] => {
  const columns: Column<SimpleTableType>[] = []
  if (data[0]) {
    for (const [key] of Object.entries(data[0])) {
      columns.push({
        Header: key.toString(),
        accessor: key.toString(),
      })
    }
  }
  return columns
}
