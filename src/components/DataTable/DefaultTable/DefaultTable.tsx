import React, { useLayoutEffect } from 'react'
import { DevsTypeAndCategoriesType } from '../../../types/apiTypes'
import { useTable } from 'react-table'

interface IColumnDetails {
    [key: string]: string
}

export const DefaultTable: React.FC<{ data: DevsTypeAndCategoriesType }> = (props) => {
    const dataHandler = (data: Array<Array<string | number>>): IColumnDetails[] => {
        const result: IColumnDetails[] = []
        for (const rowItem of data) {
            const obj: IColumnDetails = {}
            let index = 0
            for (const item of rowItem) {
                index++
                if (index === 1) {
                    obj[`col${index}`] = item.toString()
                } else {
                    if (typeof item === 'number' && item !== 0) {
                        obj[`col${index}`] = item.toFixed(2)
                    } else {
                        if (typeof item === 'string') {
                            obj[`col${index}`] = parseFloat(item).toFixed(2)
                        } else {
                            obj[`col${index}`] = item.toString()
                        }
                    }
                }
            }
            result.push(obj)
        }
        return result
    }
    const columnsHandler = (column: string[]) => {
        return column.map((item, index) => {
            return {
                Header: item,
                accessor: `col${index + 1}`,
            }
        })
    }

    const data = React.useMemo<IColumnDetails[]>(
        () => dataHandler(props.data.columnData),
        [props.data.columnData]
    )

    const columns = React.useMemo(
        () => columnsHandler(props.data.columnTitle),
        [props.data.columnTitle]
    )
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
        columns,
        data,
    })

    const tableRef = React.useRef<HTMLTableElement>(null)
    useLayoutEffect(() => {
        // @ts-ignore
        if (tableRef?.current?.scrollWidth > tableRef?.current?.clientWidth) {
            tableRef?.current?.classList.add('data-table__table--scroll')
        } else {
            tableRef?.current?.classList.remove('data-table__table--scroll')
        }
    })

    return (
        <div
            className={
                props.data.columnTitle.length === 2
                    ? 'data-table data-table--small'
                    : props.data.columnTitle.length === 4
                    ? 'data-table data-table--medium'
                    : 'data-table'
            }
        >
            <h3 className={'data-table__title'}>{props.data.title}</h3>
            <table {...getTableProps()} ref={tableRef} className={'data-table__table'}>
                <thead>
                    {headerGroups.map((headerGroup, headerGroupIndex) => (
                        <tr
                            {...headerGroup.getHeaderGroupProps()}
                            key={headerGroupIndex}
                            className={'data-table__row data-table__row--header'}
                        >
                            {headerGroup.headers.map((column, columnIndex) => (
                                <th
                                    {...column.getHeaderProps()}
                                    key={columnIndex}
                                    className={'data-table__text-bold'}
                                >
                                    {column.render('Header')}
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {rows.map((row, rowIndex) => {
                        prepareRow(row)
                        return (
                            <tr
                                {...row.getRowProps()}
                                key={rowIndex}
                                className={
                                    rowIndex % 2 === 0
                                        ? 'data-table__row'
                                        : 'data-table__row data-table__row--odd'
                                }
                            >
                                {row.cells.map((cell, cellIndex) => {
                                    return (
                                        <td
                                            {...cell.getCellProps()}
                                            key={cellIndex}
                                            className={
                                                rows.length - 1 > rowIndex
                                                    ? 'data-table__text'
                                                    : 'data-table__text-bold'
                                            }
                                        >
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
