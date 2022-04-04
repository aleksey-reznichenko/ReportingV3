import { DevsTypeAndCategoriesType } from '../types/apiTypes'

const oneDev: DevsTypeAndCategoriesType = {
    title: 'By job types',
    columnTitle: ['Job types', 'Time (h)'],
    columnData: [
        ['Programming', 45.83],
        ['Markup', 14.5],
        ['Graphic Design', 1.0],
        ['Estimation', 14.5],
        ['Investigation', 32.0],
        ['Bug Fixing', 0],
        ['Content Writing', 0],
        ['Quality Assurance', 70.17],
        ['Meetings', 70.17],
        ['Other', 70.17],
        ['Total', 70.17],
    ],
}

const threeDevs: DevsTypeAndCategoriesType = {
    title: 'Hours by job types',
    columnTitle: ['Job types', 'Dianne Russell', 'Jane Cooper', 'Wade Warren'],
    columnData: [
        ['Programming', 45.83, 45.83, 45.83],
        ['Markup', 45.83, 45.83, 45.83],
        ['Graphic Design', 45.83, 45.83, 45.83],
        ['Estimation', 45.83, 45.83, 45.83],
        ['Investigation', 45.83, 45.83, 45.83],
        ['Bug Fixing', 45.83, 45.83, 45.83],
        ['Content Writing', 45.83, 45.83, 45.83],
        ['Quality Assurance', 45.83, 45.83, 45.83],
        ['Meetings', 45.83, 45.83, 45.83],
        ['Other', 45.83, 45.83, 45.83],
        ['Total', 45.83, 45.83, 45.83],
    ],
}

const moreDevs: DevsTypeAndCategoriesType = {
    title: 'Hours by job types',
    columnTitle: [
        'Job types',
        'Dianne Russell',
        'Jane Cooper',
        'Wade Warren',
        'Esther Howaking',
        'Cameron Willlins',
        'Brooklyn Silmon',
        'Leslie Alexander',
        'Jenny Wilson',
        'Lesly Priston',
    ],
    columnData: [
        ['Programming', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Markup', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Graphic Design', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Estimation', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Investigation', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Bug Fixing', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Content Writing', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Quality Assurance', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Meetings', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Other', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Total', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
    ],
}

export { oneDev, threeDevs, moreDevs }
