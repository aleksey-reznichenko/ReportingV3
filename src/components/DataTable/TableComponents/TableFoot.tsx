import React from 'react'
import { HeaderGroup } from 'react-table'

interface TableFootProps<T extends object> {
  footerGroups: HeaderGroup<T>[]
}

export const TableFoot = <T extends object>({ footerGroups }: TableFootProps<T>) => {
  return (
    <tfoot>
      {footerGroups.map((footerGroup, footerGroupIndex) => (
        <tr {...footerGroup.getFooterGroupProps()} key={footerGroupIndex}>
          {footerGroup.headers.map((column, columnIndex) => (
            <td {...column.getFooterProps()} key={columnIndex}>
              {column.render('Footer')}
            </td>
          ))}
        </tr>
      ))}
    </tfoot>
  )
}
