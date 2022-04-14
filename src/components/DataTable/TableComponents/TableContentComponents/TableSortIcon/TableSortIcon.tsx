import React from 'react'
import { HeaderGroup } from 'react-table'
import './TableSortIcon.scss'

interface TableSortIconProps<T extends object> {
  column: HeaderGroup<T>
}
export const TableSortIcon = <T extends object>({
  column: { isSorted, isSortedDesc },
}: TableSortIconProps<T>) => {
  const colorArrows = {
    arrowDown: isSorted ? (isSortedDesc ? '#8F7FFF' : '#fff') : '#fff',
    arrowUp: isSorted ? (isSortedDesc ? '#fff' : '#8F7FFF') : '#fff',
  }
  return (
    <div className="table__head-sort-icon">
      <svg width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.35342 9.3965C4.15817 9.20125 3.84167 9.20125 3.64643 9.3965L2.74993 10.293V0.5C2.74993 0.224 2.52593 0 2.24993 0C1.97393 0 1.74993 0.224 1.74993 0.5V10.293L0.853435 9.3965C0.658186 9.20125 0.341436 9.20125 0.146437 9.3965C-0.0488123 9.59175 -0.0488123 9.90825 0.146437 10.1035L1.89643 11.8535C1.99418 11.9513 2.12193 12 2.24993 12C2.37793 12 2.50568 11.9513 2.60343 11.8535L4.35342 10.1035C4.54867 9.90825 4.54867 9.59175 4.35342 9.3965Z"
          fill={colorArrows.arrowDown}
        />
      </svg>
      <svg width="5" height="12" viewBox="0 0 5 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M4.35342 9.3965C4.15817 9.20125 3.84167 9.20125 3.64643 9.3965L2.74993 10.293V0.5C2.74993 0.224 2.52593 0 2.24993 0C1.97393 0 1.74993 0.224 1.74993 0.5V10.293L0.853435 9.3965C0.658186 9.20125 0.341436 9.20125 0.146437 9.3965C-0.0488123 9.59175 -0.0488123 9.90825 0.146437 10.1035L1.89643 11.8535C1.99418 11.9513 2.12193 12 2.24993 12C2.37793 12 2.50568 11.9513 2.60343 11.8535L4.35342 10.1035C4.54867 9.90825 4.54867 9.59175 4.35342 9.3965Z"
          fill={colorArrows.arrowUp}
        />
      </svg>
    </div>
  )
}
