import { Row } from 'react-table'

interface IFooterReduceSum {
  (rows: Row<any>[], attribute: string): number
}

const footerReduceSum: IFooterReduceSum = (rows, attribute) => {
  const result = rows.reduce(
    (sum, row) =>
      typeof row.values[attribute] === 'number' || parseFloat(<string>row.values[attribute])
        ? parseFloat(<string>row.values[attribute]) + sum
        : sum,
    0
  )
  return Math.ceil(result)
}

const footerReduceEfficiency: IFooterReduceSum = (rows, attribute) => {
  const result: number[] = []
  rows.forEach((row) => {
    if (parseInt(row.values[attribute])) {
      result.push(parseInt(row.values[attribute]))
    }
  })
  return Math.max(...result)
}

export { footerReduceSum, footerReduceEfficiency }
