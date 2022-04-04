import React from 'react'
import './style/global.scss'
import DataTable from './components/DataTable'
import { oneDev, threeDevs, moreDevs } from './api/jobTypes'
import { categoriesOneDev, categoriesThreeDevs, categoriesMoreDevs } from './api/projectsCategories'

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="page">
                <div className="container">
                    <div className="container__item">
                        <DataTable data={oneDev} type={'default'} />
                    </div>
                    <div className="container__item">
                        <DataTable data={categoriesOneDev} type={'default'} />
                    </div>
                    <div className="container__item">
                        <DataTable data={threeDevs} type={'default'} />
                    </div>
                    <div className="container__item">
                        <DataTable data={categoriesThreeDevs} type={'default'} />
                    </div>
                    <div className="container__item">
                        <DataTable data={moreDevs} type={'default'} />
                    </div>
                    <div className="container__item">
                        <DataTable data={categoriesMoreDevs} type={'default'} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
