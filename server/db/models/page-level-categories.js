const Sequelize = require('sequelize')
const db = require('../db')

const PageLevelCategories = db.define('pageLelveCategories', {
  text: {
    type: Sequelize.STRING
  },
  path: {
    type: Sequelize.STRING
  }
})

module.exports = PageLevelCategories
