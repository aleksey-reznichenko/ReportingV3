import React from 'react'

interface DataTableProps {
    name: string
}

const DataTable: React.FC<DataTableProps> = (props) => {
    return (
        <div>
            <h1>{props.name}</h1>
        </div>
    )
}

export default DataTable
