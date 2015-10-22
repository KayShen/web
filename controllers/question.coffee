Question = require './model/question'
Answer = require './model/answer'
index = {}



setAnswer = ({question, select, visitor})-> new Promise (reslove, reject)->
  where = {question, visitor}
  Answer.findOrCreate({where})
    .spread (answer, created)->
      # console.log(answer, created)
      unless created
        answer.updateAttributes({question, select, visitor}).then -> reslove()
      else
        reslove()



names = ['Mary', 'Peter', 'Jim', 'Lily', 'Lucy', 'Lim', 'Tim', 'Jack', 'Tom', 'Wendy', 'Mark', 'Laura']
index.render = (req, res)->
  console.log req.uid
  order = req.query.q or 0
  console.log req.uid , order
  res.render('survey',{
    order
    names
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