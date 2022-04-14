import React from 'react'
import './TableLink.scss'

export const TableLink: React.FC<{ text: string; link?: string }> = ({ text, link = '#' }) => {
  return (
    <a className="table__link" href={link}>
      {text}
    </a>
  )
}
