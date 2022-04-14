import { TypeTable } from './typesAPI'
import { defaultColumns } from '../ColumnTypes/defaultColumns'
import { projectSingleColumns } from '../ColumnTypes/projectSingleColumns'
import { projectDataColumns } from '../ColumnTypes/projectDataColumns'

export const selectTableType = <T extends object>(type: TypeTable, data: T[]) => {
  if (type === TypeTable.DEFAULT) {
    return { columns: defaultColumns(data), style: 'table-default' }
  }
  if (type === TypeTable.PROJECTSINGLE) {
    return { columns: projectSingleColumns, style: 'big-table big-table--project-single' }
  }
  if (type === TypeTable.PROJECTDATA) {
    const style =
      'tag' in data[0]
        ? `big-table big-table--project-table-lead`
        : `big-table big-table--project-table-dev`
    return { columns: projectDataColumns(data), style: style }
  }
  return { columns: defaultColumns(data), style: 'table-default' }
}
