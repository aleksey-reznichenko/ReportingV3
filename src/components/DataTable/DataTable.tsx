import React from 'react'
import { DataTypes, TypeTable } from '../../types/apiTypes'
import './DefaultTable/DefaultTable.scss'
import { DefaultTable } from './DefaultTable/DefaultTable'

interface IDataTableProps {
    data: DataTypes
    type: TypeTable
}

const DataTable: React.FC<IDataTableProps> = (props) => {
    if (props.type === TypeTable.DEFAULT) {
        // @ts-ignore
        return <DefaultTable data={props.data} />
    } else {
        return <p>Error table data</p>
    }
}

export default DataTable
