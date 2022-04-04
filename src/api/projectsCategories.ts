import { DevsTypeAndCategoriesType } from '../types/apiTypes'

const categoriesOneDev: DevsTypeAndCategoriesType = {
    title: 'By Project Categories',
    columnTitle: ['Categories', 'Time (h)'],
    columnData: [
        ['CMS Production (B)', 45.83],
        ['NIX Internal (B)', 14.5],
        ['NIX PM’s (B)', 1.0],
        ['CMS Internal (NB)', 14.5],
        ['Skill-Up (NB)', 32.0],
        ['Estimation (NB)', 0],
        ['Education (NB)', 0],
        ['Non billable sum', 70.17],
        ['Billable sum', 70.17],
        ['Total', 70.17],
    ],
}

const categoriesThreeDevs: DevsTypeAndCategoriesType = {
    title: 'Hours by Project Categories',
    columnTitle: ['Categories', 'Dianne Russell', 'Jane Cooper', 'Wade Warren'],
    columnData: [
        ['CMS Production (B)', 45.83, 45.83, 45.83],
        ['NIX Internal (B)', 45.83, 45.83, 45.83],
        ['NIX PM’s (B)', 45.83, 45.83, 45.83],
        ['CMS Internal (NB)', 45.83, 45.83, 45.83],
        ['Skill-Up (NB)', 45.83, 45.83, 45.83],
        ['Estimation (NB)', 45.83, 45.83, 45.83],
        ['Education (NB)', 45.83, 45.83, 45.83],
        ['Non billable sum', 45.83, 45.83, 45.83],
        ['Billable sum', 45.83, 45.83, 45.83],
        ['Total', 45.83, 45.83, 45.83],
    ],
}

const categoriesMoreDevs: DevsTypeAndCategoriesType = {
    title: 'Hours by Project Categories',
    columnTitle: [
        'Categories',
        'All people',
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
        ['CMS Production (B)', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['NIX Internal (B)', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['NIX PM’s (B)', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['CMS Internal (NB)', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Skill-Up (NB)', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Estimation (NB)', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Education (NB)', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Non billable sum', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Billable sum', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
        ['Total', 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83, 45.83],
    ],
}

export { categoriesOneDev, categoriesThreeDevs, categoriesMoreDevs }
