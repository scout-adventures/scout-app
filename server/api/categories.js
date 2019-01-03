const router = require('express').Router()
const {Categories, PageLevelCategories, SubCategories} = require('../db/models')
module.exports = router

/**
 * Get All Categories
 */
router.get('/', async (req, res, next) => {
  try {
    const categories = await Categories.findAll({
      include: [
        {
          model: PageLevelCategories,
          as: 'PageLevelCategories',
          include: [
            {
              model: SubCategories,
              as: 'SubCategories'
            }
          ]
        }
      ]
    })
    res.json(categories)
  } catch (err) {
    next(err)
  }
})
