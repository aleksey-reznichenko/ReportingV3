import { Column } from 'react-table'
import { SimpleTableType } from '../TableServiceFunctions'

export const getDefaultColumns = (data: SimpleTableType[]): Column<SimpleTableType>[] => {
  return Object.entries(data[0]).map((item) => ({
    Header: item[0].toString(),
    accessor: item[0].toString(),
  }))
}
