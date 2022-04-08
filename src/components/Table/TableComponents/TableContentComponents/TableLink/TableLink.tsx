import React from 'react'
// @ts-ignore
import style from './TableLink.module.scss'

interface ITableLink {
  text: string
  link?: string
}

const TableLink: React.FC<ITableLink> = ({ text, link = '#' }) => {
  return (
    <a className={style.TableLink} href={link}>
      {text}
    </a>
  )
}

export default TableLink
