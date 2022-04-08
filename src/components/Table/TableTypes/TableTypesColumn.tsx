import { DataTypes, TypeTable } from '../../../types/apiTypes'
import { Column } from 'react-table'
import React from 'react'
// @ts-ignore
import DefaultTable from '../TableStyles/DefaultTable.module.scss'
// @ts-ignore
import ProjectSingle from '../TableStyles/ProjectSingle.module.scss'
import TableStatus from '../TableComponents/TableContentComponents/TableStatus/TableStatus'
import TableLink from '../TableComponents/TableContentComponents/TableLink/TableLink'
import TableShowMore from '../TableComponents/TableContentComponents/TableShowMore/TableShowMore'

interface ITableTypesColumn {
  (data: DataTypes, type: TypeTable): Column<any>[]
}

const sortColumn = (
  rowA: { original: { [x: string]: string } },
  rowB: { original: { [x: string]: string } },
  columnId: string | number
) => {
  let a
  let b
  if (Array.isArray(rowA.original[columnId]) && Array.isArray(rowA.original[columnId])) {
    // @ts-ignore
    a = rowA.original[columnId]?.join(', ').toLowerCase()
    // @ts-ignore
    b = rowB.original[columnId]?.join(', ').toLowerCase()
  } else {
    a = rowA.original[columnId].toLowerCase()
    b = rowB.original[columnId].toLowerCase()
  }
  if (a > b) return 1
  if (b > a) return -1
  return 0
}

const tableTypesColumn: ITableTypesColumn = (data, type) => {
  const columns: Column<any>[] = []
  switch (type) {
    case TypeTable.PROJECTSINGLE: {
      let resultMyTimeSpentByPeriod = 0
      columns.push(
        {
          Header: 'Task name',
          id: 'taskName',
          accessor: ({ taskName }) => <TableLink text={taskName} />,
          sortType: sortColumn,
          Footer: 'Sum',
        },
        {
          Header: 'Developer',
          id: 'developer',
          accessor: ({ developer }) => (
            <TableShowMore content={developer} maxVisible={5} width={140} />
          ),
          sortType: sortColumn,
        },
        {
          Header: 'Work Type',
          id: 'workType',
          accessor: ({ workType }) => (
            <TableShowMore content={workType} maxVisible={4} width={88} />
          ),
          sortType: sortColumn,
        },
        {
          Header: 'Status',
          id: 'status',
          accessor: ({ status }) => <TableStatus text={status} />,
          sortType: sortColumn,
        },
        {
          Header: 'Estimation (h)',
          id: 'estimation',
          accessor: ({ estimation }) => estimation.toFixed(1),
        },
        {
          Header: 'Total time spent by All',
          id: 'totalTimeSpentByAll',
          accessor: ({ totalTimeSpentByAll }) => {
            if (typeof totalTimeSpentByAll === 'number') {
              return totalTimeSpentByAll.toFixed(2)
            } else {
              const result = parseFloat(totalTimeSpentByAll).toFixed(2)
              return result ? result : '-'
            }
          },
          Footer: (info) => {
            const result = React.useMemo(
              () =>
                info.rows.reduce(
                  (sum, row) =>
                    typeof row.values.totalTimeSpentByAll === 'number' ||
                    parseFloat(row.values.totalTimeSpentByAll)
                      ? parseFloat(row.values.totalTimeSpentByAll) + sum
                      : sum,
                  0
                ),
              [info.rows]
            )
            return `${Math.ceil(result)}h`
          },
        },
        {
          Header: 'My Time spent by Period (h)',
          id: 'myTimeSpentByPeriod',
          accessor: ({ myTimeSpentByPeriod }) => {
            if (typeof myTimeSpentByPeriod === 'number') {
              return myTimeSpentByPeriod.toFixed(2)
            } else {
              const result = parseFloat(myTimeSpentByPeriod).toFixed(2)
              return result ? result : '-'
            }
          },
          Footer: (info) => {
            resultMyTimeSpentByPeriod = React.useMemo(
              () =>
                info.rows.reduce(
                  (sum, row) =>
                    typeof row.values.myTimeSpentByPeriod === 'number' ||
                    parseFloat(row.values.myTimeSpentByPeriod)
                      ? parseFloat(row.values.myTimeSpentByPeriod) + sum
                      : sum,
                  0
                ),
              [info.rows]
            )
            return `${Math.ceil(resultMyTimeSpentByPeriod)}h`
          },
        },
        {
          Header: 'Efficiency',
          id: 'efficiency',
          accessor: ({ efficiency }) => (efficiency ? efficiency : '-'),
          Footer: (info) => {
            const result: number[] = []
            info.rows.forEach((row) => {
              if (parseInt(row.values.efficiency)) {
                result.push(parseInt(row.values.efficiency))
              }
            })
            return `${Math.max(...result) || 0}% (${Math.ceil(resultMyTimeSpentByPeriod)}h)`
          },
        }
      )
      break
    }
    default: {
      break
    }
  }
  return columns
}

const tableSelectStyle = (type: TypeTable) => {
  switch (type) {
    case TypeTable.PROJECTSINGLE: {
      return `${ProjectSingle.PSTable} ${ProjectSingle.PSTableWidth}`
    }
    case TypeTable.DEFAULT: {
      return DefaultTable.DataTable__table
    }
    default: {
      break
    }
  }
}

export { tableTypesColumn, tableSelectStyle }
