export interface SimpleTableType {
  [key: string]: string | number
}
export interface ProjectSingle {
  taskName: string
  developer: string[]
  workType: string[]
  status: string
  estimation: number
  totalTimeSpentByAll: number
  myTimeSpentByPeriod: number
  efficiency: string | null
}
export interface ProjectDataTable {
  projectName: { name: string; billable: boolean }
  tag?: string[]
  team: string[]
  manager: string[]
  categorie: string[]
  basicEstimation: number
  timeSpentByPeriod: number
  efficiencyByPeriod: string | null
}
export enum TypeTable {
  DEFAULT = 'DEFAULT',
  PROJECTSINGLE = 'PROJECTSINGLE',
  PROJECTDATA = 'PROJECTDATA',
}
export type ConfigTypes = {
  title?: string
  hasSorting?: boolean
}
