import * as _ from 'lodash'

// Categories Expiration Selector
export const categoriesExpirationSelector = state =>
  _.get(state, 'categories.categories.expires', 0)

// Categories Selector
export const categoriesSelector = state =>
  _.get(state, 'categories.categories.entities', [])
