import React from 'react'
import './style/global.scss'
import { DataTable } from './components/DataTable'
import {
  ProjectDataTable,
  ProjectSingle,
  SimpleTableType,
} from './components/DataTable/TableTypes/TableServiceFunctions'
import {
  categoriesMoreDevs,
  categoriesOneDev,
  categoriesThreeDevs,
  moreDevs,
  oneDev,
  projectDataTableDevAPI,
  projectDataTableLeadAPI,
  projectSingleAPI,
  threeDevs,
} from './api'
import {
  getDefaultColumns,
  getProjectDataColumnsDev,
  getProjectDataColumnsLead,
  getProjectSingleColumns,
} from './components/DataTable/TableTypes/ColumnTypes'

export const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="page">
        <div className="container">
          <div className="container__item">
            <DataTable<SimpleTableType>
              data={categoriesOneDev}
              columns={getDefaultColumns(categoriesOneDev)}
              style={'table-default'}
              config={{ title: 'By Project Categories', hasContainer: true }}
            />
          </div>
          <div className="container__item">
            <DataTable<SimpleTableType>
              data={categoriesThreeDevs}
              columns={getDefaultColumns(categoriesThreeDevs)}
              style={'table-default'}
              config={{ title: 'Hours By Project Categories', hasContainer: true }}
            />
          </div>
          <div className="container__item">
            <DataTable<SimpleTableType>
              data={categoriesMoreDevs}
              columns={getDefaultColumns(categoriesMoreDevs)}
              style={'table-default'}
              config={{ title: 'Hours By Project Categories', hasContainer: true }}
            />
          </div>
          <div className="container__item">
            <DataTable<SimpleTableType>
              data={oneDev}
              columns={getDefaultColumns(oneDev)}
              style={'table-default'}
              config={{ title: 'By job types', hasContainer: true }}
            />
          </div>
          <div className="container__item">
            <DataTable<SimpleTableType>
              data={threeDevs}
              columns={getDefaultColumns(threeDevs)}
              style={'table-default'}
              config={{ title: 'Hours by job types', hasContainer: true }}
            />
          </div>
          <div className="container__item">
            <DataTable<SimpleTableType>
              data={moreDevs}
              columns={getDefaultColumns(moreDevs)}
              style={'table-default'}
              config={{ title: 'Hours by job types', hasContainer: true }}
            />
          </div>
          <div className="container__item">
            <DataTable<ProjectSingle>
              data={projectSingleAPI}
              columns={getProjectSingleColumns}
              style={'big-table big-table--project-single'}
              config={{ hasSorting: true }}
            />
          </div>
          <div className="container__item">
            <DataTable<ProjectDataTable>
              data={projectDataTableLeadAPI}
              columns={getProjectDataColumnsLead}
              style={'big-table big-table--project-table-lead'}
              config={{ hasSorting: true }}
            />
          </div>
          <div className="container__item">
            <DataTable<ProjectDataTable>
              data={projectDataTableDevAPI}
              columns={getProjectDataColumnsDev}
              style={'big-table big-table--project-table-dev'}
              config={{ hasSorting: true }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
