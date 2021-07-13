import { createAction } from '@reduxjs/toolkit'

import { CHANGE_PAGE, CHANGE_PER_PAGE } from './constants'

export const changePage = createAction(CHANGE_PAGE)
export const changePerPage = createAction(CHANGE_PER_PAGE)
