interface ISortColumnString {
  original: { [key: string]: object }
}
interface ISortColumnObject {
  original: { [key: string]: string }
}
interface ISortColumn<T> {
  (rowA: T, rowB: T, columnId: string | number): number
}

const sortColumn: ISortColumn<ISortColumnString | ISortColumnObject> = (rowA, rowB, columnId) => {
  let a
  let b
  // @ts-ignore
  if ('billable' in rowA.original[columnId] && 'billable' in rowB.original[columnId]) {
    // @ts-ignore
    a = rowA.original[columnId]?.billable
    // @ts-ignore
    b = rowB.original[columnId]?.billable
  } else if (Array.isArray(rowA.original[columnId]) && Array.isArray(rowB.original[columnId])) {
    // @ts-ignore
    a = rowA.original[columnId]?.join(', ').toLowerCase()
    // @ts-ignore
    b = rowB.original[columnId]?.join(', ').toLowerCase()
  } else {
    // @ts-ignore
    a = rowA.original[columnId]?.toLowerCase()
    // @ts-ignore
    b = rowB.original[columnId]?.toLowerCase()
  }
  if (a > b) return 1
  if (b > a) return -1
  return 0
}

export default sortColumn
