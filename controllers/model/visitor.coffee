Sequelize = require('sequelize')
db = require '../../lib/mysql'

Visitor = db.define('visitor', {
  uid:
    type: Sequelize.STRING
    # autoIncrement: true
    primaryKey: true

  select:
    type: Sequelize.STRING
    field: 'select'
    defaultValue: ''
}, {
  freezeTableName: true
  indexes: [{
    unique: true
    fields: ['uid']
  }]
})

module.exports = Visitor
