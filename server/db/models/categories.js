const Sequelize = require('sequelize')
const db = require('../db')

const Categories = db.define('categories', {
  text: {
    type: Sequelize.STRING
  },
  path: {
    type: Sequelize.STRING
  }
})

module.exports = Categories
