export type SimpleTableType = Array<{
  [key: string]: string | number
}>

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

export type ProjectDataTable = Array<{
  projectName: { name: string; billable: boolean }
  tag?: string[]
  team: string[]
  manager: string[]
  categorie: string[]
  basicEstimation: number
  timeSpentByPeriod: number
  efficiencyByPeriod: string | null
}>

export enum TypeTable {
  DEFAULT = 'DEFAULT',
  PROJECTSINGLE = 'PROJECTSINGLE',
  PROJECTDATA = 'PROJECTDATA',
}

export type ConfigTypes = {
  title?: string
  hasSorting?: boolean
}

export type DataTypes = ProjectSingle | ProjectDataTable | SimpleTableType
