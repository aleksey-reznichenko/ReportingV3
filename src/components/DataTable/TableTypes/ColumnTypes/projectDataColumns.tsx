import React from 'react'
import { Column } from 'react-table'
import { ProjectDataTable } from '../TableServiceFunctions/typesAPI'
import {
  sortColumn,
  accessorNumberView,
  footerReduceEfficiency,
  footerReduceSum,
} from '../TableServiceFunctions'
import {
  TablePlus,
  TableProjectName,
  TableShowMore,
  TableTag,
} from '../../TableComponents/TableContentComponents'

export const projectDataColumns = <T extends object>(data: T[]): Column<ProjectDataTable>[] => {
  const columns: Column<ProjectDataTable>[] = []
  if (data[0]) {
    columns.push({
      Header: 'Project Name',
      id: 'projectName',
      accessor: ({ projectName }) => (
        <TableProjectName name={projectName.name} billable={projectName.billable} />
      ),
      sortType: sortColumn,
      Footer: 'Sum',
    })
    if ('tag' in data[0]) {
      columns.push({
        Header: 'Tag',
        id: 'tag',
        accessor: ({ tag }) => <TableTag arrayTag={tag} />,
        sortType: sortColumn,
      })
    }
    columns.push(
      {
        Header: 'Team',
        id: 'team',
        accessor: ({ team }) => <TableShowMore content={team} maxVisible={5} width={140} />,
        sortType: sortColumn,
      },
      {
        Header: 'Manager',
        id: 'manager',
        accessor: ({ manager }) => manager.join(', '),
      },
      {
        Header: 'Categorie',
        id: 'categorie',
        accessor: ({ categorie }) => categorie.join(', '),
      },
      {
        Header: 'Basic Estimation (h)',
        id: 'basicEstimation',
        accessor: ({ basicEstimation }) => accessorNumberView(basicEstimation),
        Footer: ({ rows }) => {
          const result: number = footerReduceSum(rows, 'basicEstimation')
          return `${result || 0}h`
        },
      },
      {
        Header: 'Time Spent by Period (h)',
        id: 'timeSpentByPeriod',
        accessor: ({ timeSpentByPeriod }) => accessorNumberView(timeSpentByPeriod),
        Footer: ({ rows }) => {
          const result: number = footerReduceSum(rows, 'timeSpentByPeriod')
          return `${result || 0}h`
        },
      },
      {
        Header: 'Efficiency by Period',
        id: 'efficiencyByPeriod',
        accessor: ({ efficiencyByPeriod }) => (efficiencyByPeriod ? efficiencyByPeriod : '-'),
        Footer: ({ rows }) => {
          const result: number = footerReduceEfficiency(rows, 'efficiencyByPeriod')
          const resultSpentByPeriod: number = footerReduceSum(rows, 'timeSpentByPeriod')
          return `${result || 0}% (${resultSpentByPeriod || 0}h)`
        },
      },
      {
        Header: <TablePlus />,
        id: 'plus',
        disableSortBy: true,
      }
    )
  }
  return columns
}
