/**
 * ACTIONS
 */

// Get All Categories
export const GET_ALL_CATEGORIES = 'GET_ALL_CATEGORIES'
export const getAllCategories = () => ({type: GET_ALL_CATEGORIES})

export const GET_ALL_CATEGORIES_COMPLETE = 'GET_ALL_CATEGORIES_COMPLETE'
export const getAllCategoriesComplete = (expires, categories) => ({
  type: GET_ALL_CATEGORIES_COMPLETE,
  payload: {expires, categories}
})
