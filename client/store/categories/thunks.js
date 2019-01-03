import * as _ from 'lodash'
var moment = require('moment')
import axios from 'axios'

import {getAllCategories, getAllCategoriesComplete} from './actions'
import {categoriesSelector, categoriesExpirationSelector} from './selectors'
import store from '..'

/**
 * THUNK CREATORS
 */
export const getCategoriesThunk = () => async dispatch => {
  try {
    dispatch(getAllCategories())
    const currentCategories = categoriesSelector(store)
    const currentCategoriesExpiration = categoriesExpirationSelector(store)

    if (
      _.isEmpty(currentCategories) ||
      currentCategoriesExpiration.isBefore(moment())
    ) {
      const res = await axios.get('/api/categories')
      console.log(res.data)
      dispatch(
        getAllCategoriesComplete(
          moment().add(20, 'minutes'),
          _.sortBy(res.data, 'id')
        )
      )
    }
  } catch (err) {
    console.error(err)
  }
}
