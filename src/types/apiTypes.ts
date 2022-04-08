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

export type ProjectSingle = Array<{
  taskName: string
  developer: string[]
  workType: string[]
  status: string
  estimation: number
  totalTimeSpentByAll: number
  myTimeSpentByPeriod: number
  efficiency: string | null
}>

export enum TypeTable {
  DEFAULT = 'DEFAULT',
  EFFICIENCY = 'EFFICIENCY',
  PROJECTSINGLE = 'PROJECTSINGLE',
}

export type ConfigTypes = {
  title?: string
  hasSorting?: boolean
}

export type DataTypes = ProjectSingle | EfficiencyType
