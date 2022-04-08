import React from 'react'
import { HeaderGroup } from 'react-table'

interface ITableFoot {
  footerGroups: HeaderGroup<any>[]
}

const TableFoot: React.FC<ITableFoot> = ({ footerGroups }) => {
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

export default TableFoot
