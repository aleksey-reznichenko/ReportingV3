import React from 'react'

export const TableStatus: React.FC<{ text: string }> = ({ text }) => {
  const color = text === 'Completed' ? '#27AE60' : text === 'Non completed' ? '#EB5757' : '#435072'
  const style = { color: color }
  return <span style={style}>{text}</span>
}
