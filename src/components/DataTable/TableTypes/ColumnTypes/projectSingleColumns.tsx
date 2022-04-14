import React from 'react'
import { Column } from 'react-table'
import { ProjectSingle } from '../TableServiceFunctions/typesAPI'
import { TableLink, TableShowMore, TableStatus } from '../../TableComponents/TableContentComponents'
import {
  sortColumn,
  accessorNumberView,
  footerReduceEfficiency,
  footerReduceSum,
} from '../TableServiceFunctions'

export const projectSingleColumns: Column<ProjectSingle>[] = [
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
    accessor: ({ developer }) => <TableShowMore content={developer} maxVisible={5} width={140} />,
    sortType: sortColumn,
  },
  {
    Header: 'Work Type',
    id: 'workType',
    accessor: ({ workType }) => <TableShowMore content={workType} maxVisible={4} width={88} />,
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
    accessor: ({ estimation }) => accessorNumberView(estimation, 1),
    Footer: ({ rows }) => {
      const result: number = footerReduceSum(rows, 'estimation')
      return result > 0 && `${result}h`
    },
  },
  {
    Header: 'Total time spent by All',
    id: 'totalTimeSpentByAll',
    accessor: ({ totalTimeSpentByAll }) => accessorNumberView(totalTimeSpentByAll),
    Footer: ({ rows }) => {
      const result: number = footerReduceSum(rows, 'totalTimeSpentByAll')
      return `${result || 0}h`
    },
  },
  {
    Header: 'My Time spent by Period (h)',
    id: 'myTimeSpentByPeriod',
    accessor: ({ myTimeSpentByPeriod }) => accessorNumberView(myTimeSpentByPeriod),
    Footer: ({ rows }) => {
      const result: number = footerReduceSum(rows, 'myTimeSpentByPeriod')
      return `${result || 0}h`
    },
  },
  {
    Header: 'Efficiency',
    id: 'efficiency',
    accessor: ({ efficiency }) => (efficiency ? efficiency : '-'),
    Footer: ({ rows }) => {
      const result: number = footerReduceEfficiency(rows, 'efficiency')
      const resultMyTime: number = footerReduceEfficiency(rows, 'efficiency')
      return `${result || 0}% (${resultMyTime || 0}h)`
    },
  },
]
