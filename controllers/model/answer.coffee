Sequelize = require('sequelize')
db = require '../../lib/mysql'

Answer = db.define('answer', {
  id:
    type: Sequelize.INTEGER
    autoIncrement: true
    primaryKey: true

  question:
    type: Sequelize.STRING
    field: 'question'
    defaultValue: ''

  select:
    type: Sequelize.STRING
    field: 'select'
    defaultValue: ''

  visitor:
    type: Sequelize.STRING
    field: 'visitor'
    defaultValue: ''
}, {
  freezeTableName: true
  indexes: [{
    unique: true
    fields: ['id']
  }]
})

module.exports = Answer
