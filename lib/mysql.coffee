path = require 'path'
Sequelize = require('sequelize')

conf = require './config'
{host, database, username, password} = conf.mysql


db = new Sequelize(database, username, password, {
  host: host
  dialect: 'mysql'

  # 需要输出日志查看就注释该函数
  # logging: ->

  pool:
    max: 5
    min: 0
    idle: 10000
})


module.exports = db
