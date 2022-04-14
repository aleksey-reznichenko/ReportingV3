import { Row } from 'react-table'

export const footerReduceSum = <T extends object>(rows: Row<T>[], attribute: string): number => {
  const result = rows.reduce(
    (sum, row) =>
      typeof row.values[attribute] === 'number' || parseFloat(<string>row.values[attribute])
        ? parseFloat(<string>row.values[attribute]) + sum
        : sum,
    0
  )
  return Math.ceil(result)
}

export const footerReduceEfficiency = <T extends object>(
  rows: Row<T>[],
  attribute: string
): number => {
  const result: number[] = []
  rows.forEach((row) => {
    if (parseInt(row.values[attribute])) {
      result.push(parseInt(row.values[attribute]))
    }
  })
  return Math.max(...result)
}
