import * as _ from 'lodash'

import {GET_ALL_CATEGORIES, GET_ALL_CATEGORIES_COMPLETE} from './actions'

/**
 * REDUCER
 */

const defaultCategories = {
  isLoading: false,
  categories: {
    expires: 0,
    entities: []
  }
}

export default function(state = defaultCategories, action) {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        isLoading: true
      }
    case GET_ALL_CATEGORIES_COMPLETE:
      return {
        ...state,
        isLoading: false,
        categories: {
          expires: _.get(action, 'payload.expires', 0),
          entities: _.get(action, 'payload.categories', [])
        }
      }
    default:
      return state
  }
}
