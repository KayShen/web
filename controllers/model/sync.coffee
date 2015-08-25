Question = require './question'
Visitor = require './visitor'


# 建表
Question.sync({force: true})
Visitor.sync({force: true})
