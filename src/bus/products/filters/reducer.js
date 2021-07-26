import { createReducer } from '@reduxjs/toolkit'

import { fetchOrigins, setParamsFilter } from './thunks'
import {
  changePriceMax,
  changePriceMin,
  changeOrigin,
  resetFlag,
} from './actions'
import { originsData } from '../../../init/constants'

const initialState = {
  loading: false,
  error: null,
  flagChange: false,

  minPrice: '0',
  maxPrice: '1000',
  origins: [],

  allOrigins: [],
}

export const filters = createReducer(initialState, (builder) => {
  builder
    .addCase(resetFlag, (state) => {
      state.flagChange = false
    })
    .addCase(changePriceMin, (state, action) => {
      state.minPrice = action.payload
      state.flagChange = true
    })
    .addCase(changePriceMax, (state, action) => {
      state.maxPrice = action.payload
      state.flagChange = true
    })
    .addCase(changeOrigin, (state, action) => {
      state.origins = action.payload
      state.flagChange = true
    })
    .addCase(fetchOrigins.pending, (state) => {
      state.loading = true
    })
    .addCase(fetchOrigins.fulfilled, (state, action) => {
      state.loading = false
      state.allOrigins = action.payload
    })
    .addCase(fetchOrigins.rejected, (state, action) => {
      state.loading = false
      state.error = action.error.message || 'Conection Error'
    })

    .addCase(setParamsFilter.pending, (state) => {
      state.loading = true
    })
    .addCase(setParamsFilter.fulfilled, (state, action) => {
      state.loading = false

      action.payload.map((a) => {
        if (a[0] === 'origins') {
          const name = a[1].split(',')
          const origins = name.reduce((acc, cur) => {
            acc.push(originsData.find((s) => s.value === cur))

            return acc
          }, [])

          return (state.origins = origins)
        }
        return (state[a[0]] = a[1])
      })
    })
    .addCase(setParamsFilter.rejected, (state) => {
      state.loading = false
    })
})
