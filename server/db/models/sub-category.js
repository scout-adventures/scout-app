const Sequelize = require('sequelize')
const db = require('../db')

const SubCategories = db.define('subCategories', {
  text: {
    type: Sequelize.STRING
  },
  path: {
    type: Sequelize.STRING
  }
})

module.exports = SubCategories
