Question = require './model/question'
Answer = require './model/answer'
index = {}



setAnswer = ({question, select, visitor})->
  Answer.build({question, select, visitor}).save()

index.render = (req, res)->
  console.log req.uid
  order = req.query.q or 1
  console.log req.uid , order
  res.render('survey',{
    order
  })

index.answer = (req, res)->
  question = req.body.question
  select = req.body.answer
  visitor = req.uid
  console.log question, select, req.uid
  setAnswer({question, select, visitor})
    .then ->
      res.send 'ok'
    .catch (err)->
      console.log err
      res.send 'error'






module.exports = index