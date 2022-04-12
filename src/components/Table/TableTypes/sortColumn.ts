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
  if (typeof rowA.original[columnId] === 'string' && typeof rowB.original[columnId] === 'string') {
    // @ts-ignore
    a = rowA.original[columnId].toLowerCase()
    // @ts-ignore
    b = rowB.original[columnId].toLowerCase()
  } else if (Array.isArray(rowA.original[columnId]) && Array.isArray(rowB.original[columnId])) {
    // @ts-ignore
    a = rowA.original[columnId]?.join(', ').toLowerCase()
    // @ts-ignore
    b = rowB.original[columnId]?.join(', ').toLowerCase()
  } else {
    // @ts-ignore
    a = rowA.original[columnId]?.billable
    // @ts-ignore
    b = rowB.original[columnId]?.billable
  }
  if (a > b) return 1
  if (b > a) return -1
  return 0
}

export default sortColumn
