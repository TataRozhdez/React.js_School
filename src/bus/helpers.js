import { createSelector } from 'reselect'

export const selectorCreate = (selector, name) =>
  createSelector([selector], (data) => data[name])
