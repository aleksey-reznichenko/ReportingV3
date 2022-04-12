import React from 'react'
import './style/global.scss'
import SwitchTheme from './components/theme/SwitchTheme'
import { TypeTable } from './components/Table/TableTypes/typesAPI'
import DataTable from './components/Table/DataTable'
import { projectSingleAPI } from './api/ProjectSingleAPI'
import { projectDataTableDevAPI, projectDataTableLeadAPI } from './api/ProjectDataTableAPI'
import {
  categoriesMoreDevs,
  categoriesOneDev,
  categoriesThreeDevs,
} from './api/ProjectsCategoriesAPI'
import { moreDevs, oneDev, threeDevs } from './api/ProjectJobAPI'

const App: React.FC = () => {
  return (
    <div className="wrapper">
      <div className="page">
        <div className="container">
          <div className="container__item">
            <SwitchTheme />
          </div>
          <div className="container__item">
            <DataTable
              data={categoriesOneDev}
              type={TypeTable.DEFAULT}
              config={{ title: 'By Project Categories' }}
            />
          </div>
          <div className="container__item">
            <DataTable
              data={categoriesThreeDevs}
              type={TypeTable.DEFAULT}
              config={{ title: 'Hours By Project Categories' }}
            />
          </div>
          <div className="container__item">
            <DataTable
              data={categoriesMoreDevs}
              type={TypeTable.DEFAULT}
              config={{ title: 'Hours By Project Categories' }}
            />
          </div>
          <div className="container__item">
            <DataTable data={oneDev} type={TypeTable.DEFAULT} config={{ title: 'By job types' }} />
          </div>
          <div className="container__item">
            <DataTable
              data={threeDevs}
              type={TypeTable.DEFAULT}
              config={{ title: 'Hours by job types' }}
            />
          </div>
          <div className="container__item">
            <DataTable
              data={moreDevs}
              type={TypeTable.DEFAULT}
              config={{ title: 'Hours by job types' }}
            />
          </div>
          <div className="container__item">
            <DataTable
              data={projectSingleAPI}
              type={TypeTable.PROJECTSINGLE}
              config={{ hasSorting: true }}
            />
          </div>
          <div className="container__item">
            <DataTable
              data={projectDataTableLeadAPI}
              type={TypeTable.PROJECTDATA}
              config={{ hasSorting: true }}
            />
          </div>
          <div className="container__item">
            <DataTable
              data={projectDataTableDevAPI}
              type={TypeTable.PROJECTDATA}
              config={{ hasSorting: true }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
