Sequelize = require('sequelize')
db = require '../../lib/mysql'

Visitor = db.define('visitor', {
  id:
    type: Sequelize.INTEGER
    autoIncrement: true
    primaryKey: true

  select:
    type: Sequelize.STRING
    field: 'select'
    defaultValue: ''
}, {
  freezeTableName: true
  indexes: [{
    unique: true
    fields: ['id']
  }]
})

module.exports = Visitor
