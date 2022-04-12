import { DataTypes, TypeTable } from './typesAPI'
import { Column } from 'react-table'
import React from 'react'
// @ts-ignore
import ProjectSingle from '../TableStyles/SortingTable.module.scss'
// @ts-ignore
import DataTable from '../TableStyles/DefaultTable.module.scss'
import TableStatus from '../TableComponents/TableContentComponents/TableStatus/TableStatus'
import TableLink from '../TableComponents/TableContentComponents/TableLink/TableLink'
import TableShowMore from '../TableComponents/TableContentComponents/TableShowMore/TableShowMore'
import TableTag from '../TableComponents/TableContentComponents/TableTab/TableTag'
import TableProjectName from '../TableComponents/TableContentComponents/TableProjectName/TableProjectName'
import TablePlus from '../TableComponents/TableContentComponents/TablePlus/TablePlus'
import sortColumn from './sortColumn'
import accessorNumberView from './accessorNumberView'
import { footerReduceSum, footerReduceEfficiency } from './footerReduceSum'

interface ITableTypesColumn {
  (data: DataTypes, type: TypeTable): { columns: Column<any>[]; style: string }
}

const tableTypesColumn: ITableTypesColumn = (data, type) => {
  const columns: Column<any>[] = []
  let style = ''
  switch (type) {
    case TypeTable.DEFAULT: {
      if (Array.isArray(data)) {
        for (const [key] of Object.entries(data[0])) {
          columns.push({
            Header: key.toString(),
            accessor: key.toString(),
          })
        }
      }
      style = `${DataTable.SimpleTable}`
      break
    }
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
            return result && `${result}h`
          },
        },
        {
          Header: 'My Time spent by Period (h)',
          id: 'myTimeSpentByPeriod',
          accessor: ({ myTimeSpentByPeriod }) => accessorNumberView(myTimeSpentByPeriod),
          Footer: ({ rows }) => {
            resultMyTimeSpentByPeriod = footerReduceSum(rows, 'myTimeSpentByPeriod')
            return resultMyTimeSpentByPeriod && `${resultMyTimeSpentByPeriod}h`
          },
        },
        {
          Header: 'Efficiency',
          id: 'efficiency',
          accessor: ({ efficiency }) => (efficiency ? efficiency : '-'),
          Footer: ({ rows }) => {
            const result: number = footerReduceEfficiency(rows, 'efficiency')
            return `${result || 0}% (${resultMyTimeSpentByPeriod}h)`
          },
        }
      )
      style = `${ProjectSingle.BigTable} ${ProjectSingle.BigTableProjectSingle}`
      break
    }
    case TypeTable.PROJECTDATA: {
      let resultTimeSpentByPeriod = 0
      columns.push({
        Header: 'Project Name',
        id: 'projectName',
        accessor: ({ projectName }) => (
          <TableProjectName name={projectName.name} billable={projectName.billable} />
        ),
        sortType: sortColumn,
        Footer: 'Sum',
      })
      if (Array.isArray(data) && 'tag' in data[0]) {
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
            const result = footerReduceSum(rows, 'basicEstimation')
            return result && `${result}h`
          },
        },
        {
          Header: 'Time Spent by Period (h)',
          id: 'timeSpentByPeriod',
          accessor: ({ timeSpentByPeriod }) => accessorNumberView(timeSpentByPeriod),
          Footer: ({ rows }) => {
            resultTimeSpentByPeriod = footerReduceSum(rows, 'timeSpentByPeriod')
            return resultTimeSpentByPeriod && `${resultTimeSpentByPeriod}h`
          },
        },
        {
          Header: 'Efficiency by Period',
          id: 'efficiencyByPeriod',
          accessor: ({ efficiencyByPeriod }) => (efficiencyByPeriod ? efficiencyByPeriod : '-'),
          Footer: ({ rows }) => {
            const result: number = footerReduceEfficiency(rows, 'efficiencyByPeriod')
            return `${result || 0}% (${resultTimeSpentByPeriod}h)`
          },
        },
        {
          Header: <TablePlus />,
          accessor: 'plus',
          disableSortBy: true,
        }
      )
      style =
        Array.isArray(data) && 'tag' in data[0]
          ? `${ProjectSingle.BigTable} ${ProjectSingle.BigTableProjectTableLead}`
          : `${ProjectSingle.BigTable} ${ProjectSingle.BigTableProjectTableDev}`
      break
    }
    default: {
      break
    }
  }
  return { columns, style }
}

export { tableTypesColumn }
