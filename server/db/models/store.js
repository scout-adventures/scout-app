const Sequelize = require('sequelize')
const db = require('../db')

const Store = db.define('store', {
  name: {
    allowNull: false,
    type: Sequelize.STRING
  },
  city: {
    allowNull: false,
    type: Sequelize.STRING
  },
  state: {
    allowNull: false,
    type: Sequelize.STRING
  }
})
