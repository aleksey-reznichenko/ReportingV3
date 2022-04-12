import React from 'react'
// @ts-ignore
import style from './TableTag.module.scss'

interface ITableTag {
  arrayTag: string[]
}

const TableTag: React.FC<ITableTag> = ({ arrayTag }) => {
  return (
    <>
      {arrayTag.map((tag, index) => (
        <span key={index} className={style.TableTag}>
          {tag}
        </span>
      ))}
    </>
  )
}

export default TableTag
