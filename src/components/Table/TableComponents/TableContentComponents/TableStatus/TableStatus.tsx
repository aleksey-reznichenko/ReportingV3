import React from 'react'

interface ITableStatus {
  text: string
}
const TableStatus: React.FC<ITableStatus> = ({ text }) => {
  return (
    <span
      style={{
        color: `${
          text === 'Completed' ? '#27AE60' : text === 'Non completed' ? '#EB5757' : '#435072'
        }`,
      }}
    >
      {text}
    </span>
  )
}

export default TableStatus
