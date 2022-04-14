import React from 'react'
import './TableTag.scss'

export const TableTag: React.FC<{ arrayTag: string[] | undefined }> = ({ arrayTag }) => {
  return (
    <>
      {arrayTag &&
        arrayTag.map((tag, index) => (
          <span key={index} className="table__tag">
            {tag}
          </span>
        ))}
    </>
  )
}
