import React, { useState } from 'react'
// @ts-ignore
import style from './TableShowMore.module.scss'

interface ITableShowMore {
  content: any[]
  maxVisible: number
  width?: number
}

const TableShowMore: React.FC<ITableShowMore> = ({ content, maxVisible = 5, width = 140 }) => {
  const [visible, setVisible] = useState(false)
  const clickHandler = () => {
    setVisible(!visible)
  }
  if (content.length > maxVisible) {
    return (
      <>
        <p style={{ width: `${width}px` }} className={style.ShowMoreText}>
          {visible ? content.join(', ') : `${content.slice(0, 2).join(', ')}...`}
        </p>
        <p className={style.BtnShowMore} onClick={clickHandler}>
          {visible ? 'Hide more' : `Show more (${content.length - 2})`}
        </p>
      </>
    )
  } else {
    return (
      <p style={{ width: `${width}px` }} className={style.ShowMoreText}>
        {content.join(', ')}
      </p>
    )
  }
}

export default TableShowMore
