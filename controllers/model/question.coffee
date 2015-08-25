Sequelize = require('sequelize')
db = require '../../lib/mysql'

Question = db.define('question', {
  id:
    type: Sequelize.INTEGER
    autoIncrement: true
    primaryKey: true

  nickName:
    type: Sequelize.STRING
    field: 'content'
    defaultValue: ''
}, {
  freezeTableName: true
  indexes: [{
    unique: true
    fields: ['id']
  }]
})

module.exports = Question
