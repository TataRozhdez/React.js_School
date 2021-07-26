import { createAction } from '@reduxjs/toolkit'

import {
  CLEAR_STATE_UPLOAD,
  SET_DATA_UPLOAD,
  VISIBLE_MODAL_UPLOAD,
} from './constants'

export const onVisibleUpload = createAction(VISIBLE_MODAL_UPLOAD)
export const clearStateUpload = createAction(CLEAR_STATE_UPLOAD)
export const setDataUpload = createAction(SET_DATA_UPLOAD)
