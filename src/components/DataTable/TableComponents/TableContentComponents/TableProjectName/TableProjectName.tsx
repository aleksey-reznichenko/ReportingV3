import React from 'react'
import { TableLink } from '../TableLink'
import './TableProjectName.scss'

interface Props {
  name: string
  billable: boolean
  link?: string
}

export const TableProjectName: React.FC<Props> = ({ name, billable, link = '#' }) => {
  const config = {
    color: '#50555D',
    status: 'Fixed',
  }
  if (billable) {
    config.color = '#27AE60'
    config.status = 'Hourly'
  }
  return (
    <div className="table__project-name project-name">
      <TableLink text={name} link={link} />
      <div className="project-name__row">
        <div className="project-name__svg-icon">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 0.833984V19.1673"
              stroke={config.color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M14.1667 4.16602H7.91667C7.14312 4.16602 6.40125 4.47331 5.85427 5.02029C5.30729 5.56727 5 6.30913 5 7.08268C5 7.85623 5.30729 8.5981 5.85427 9.14508C6.40125 9.69206 7.14312 9.99935 7.91667 9.99935H12.0833C12.8569 9.99935 13.5987 10.3066 14.1457 10.8536C14.6927 11.4006 15 12.1425 15 12.916C15 13.6896 14.6927 14.4314 14.1457 14.9784C13.5987 15.5254 12.8569 15.8327 12.0833 15.8327H5"
              stroke={config.color}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <p className="project-name__tag-text">{config.status}</p>
      </div>
    </div>
  )
}
