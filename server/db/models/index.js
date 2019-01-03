const Categories = require('./categories')
const PageLevelCategories = require('./page-level-categories')
const User = require('./user')
const SubCategories = require('./sub-category')

/**
 * Associations
 */
Categories.hasMany(PageLevelCategories, {as: 'PageLevelCategories'})
PageLevelCategories.hasMany(SubCategories, {as: 'SubCategories'})

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */
module.exports = {
  Categories,
  PageLevelCategories,
  User,
  SubCategories
}
