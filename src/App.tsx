import React from 'react'
import './style/global.scss'
import DataTable from './components/DataTable/DataTable'
import SwitchTheme from './components/theme/SwitchTheme'
import { oneDev, threeDevs, moreDevs } from './api/jobTypes'
import { categoriesOneDev, categoriesThreeDevs, categoriesMoreDevs } from './api/projectsCategories'
import { efficiency } from './api/efficiency'
import { TypeTable } from './types/apiTypes'

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="page">
                <div className="container">
                    <div className="container__item">
                        <SwitchTheme />
                    </div>
                    <div className="container__item">
                        <DataTable data={oneDev} type={TypeTable.DEFAULT} />
                    </div>
                    <div className="container__item">
                        <DataTable data={categoriesOneDev} type={TypeTable.DEFAULT} />
                    </div>
                    <div className="container__item">
                        <DataTable data={threeDevs} type={TypeTable.DEFAULT} />
                    </div>
                    <div className="container__item">
                        <DataTable data={categoriesThreeDevs} type={TypeTable.DEFAULT} />
                    </div>
                    <div className="container__item">
                        <DataTable data={moreDevs} type={TypeTable.DEFAULT} />
                    </div>
                    <div className="container__item">
                        <DataTable data={categoriesMoreDevs} type={TypeTable.DEFAULT} />
                    </div>
                    <div className="container__item">
                        <DataTable data={efficiency} type={TypeTable.EFFICIENCY} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
