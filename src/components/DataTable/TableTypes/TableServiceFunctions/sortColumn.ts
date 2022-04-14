import { Row } from 'react-table'
// interface SortColumnObject {
//   original: { [key: string]: string }
// }
// interface SortColumnString {
//   original: { [key: string]: { billable: boolean } }
// }
// interface SortColumn<T extends object> {
//   rowA: Row<T>
//   rowB: Row<T>
//   columnId: string
// }

export const sortColumn = <T extends object>(rowA: Row<T>, rowB: Row<T>, columnId: string) => {
  // @ts-ignore
  let aValue = rowA?.original[columnId]
  // @ts-ignore
  let bValue = rowB?.original[columnId]
  if (typeof aValue === 'string' && typeof bValue === 'string') {
    aValue = aValue.toLowerCase()
    bValue = aValue.toLowerCase()
  }
  if (Array.isArray(aValue) && Array.isArray(bValue)) {
    aValue = aValue?.join(', ').toLowerCase()
    bValue = bValue?.join(', ').toLowerCase()
  }
  if (typeof aValue === 'object' && typeof bValue === 'object') {
    aValue = String(aValue?.billable)
    bValue = String(bValue?.billable)
  }
  if (aValue > bValue) return 1
  if (bValue > aValue) return -1
  return 0
}
