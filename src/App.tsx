import React from 'react'
import './style/global.scss'
import DataTable from './components/DataTable'

const App: React.FC = () => {
    return (
        <div className="wrapper">
            <div className="container">
                <DataTable name={'hello'} />
            </div>
        </div>
    )
}

export default App
