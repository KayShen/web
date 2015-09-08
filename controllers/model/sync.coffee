Question = require './question'
Visitor = require './visitor'
Answer = require './answer'

# 建表
Question.sync({force: true})
Answer.sync({force: true})
Visitor.sync({force: true})
