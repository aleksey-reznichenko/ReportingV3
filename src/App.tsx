import React from 'react'
import './style/global.scss'
import SwitchTheme from './components/theme/SwitchTheme'
import { TypeTable } from './types/apiTypes'
import DataTable from './components/Table/DataTable'
import { projectSingle } from './api/ProjectSingleAPI'

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
              data={projectSingle}
              type={TypeTable.PROJECTSINGLE}
              config={{ hasSorting: true }}
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
