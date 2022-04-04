export type DevsTypeAndCategoriesType = {
    title: string
    columnTitle: string[]
    columnData: Array<Array<string | number>>
}

export type EfficiencyType = {
    title: string
    columnTitle: string[]
    columnData: Array<object>
}

export enum TypeTable {
    DEFAULT = 'DEFAULT',
    EFFICIENCY = 'EFFICIENCY',
}

export type DataTypes = DevsTypeAndCategoriesType | EfficiencyType
