import React, { useState } from 'react'
import './TableShowMore.scss'

interface Props {
  content: string[]
  maxVisible: number
  width?: number
}

export const TableShowMore: React.FC<Props> = ({ content, maxVisible = 5, width = 140 }) => {
  const [visible, setVisible] = useState(false)
  const clickHandler = () => setVisible(!visible)
  const config = {
    content: '',
    contentBtn: '',
    style: { width: `${width}px` },
  }
  if (content.length > maxVisible) {
    config.content = visible ? content.join(', ') : `${content.slice(0, 2).join(', ')}...`
    config.contentBtn = visible ? 'Hide more' : `Show more (${content.length - 2})`
  } else {
    config.content = content.join(', ')
  }
  return (
    <>
      <p style={config.style} className="table__show-more-text">
        {config.content}
      </p>
      {content.length > maxVisible && (
        <p className="table__show-more-btn" onClick={clickHandler}>
          {config.contentBtn}
        </p>
      )}
    </>
  )
}
