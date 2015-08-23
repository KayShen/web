index = {}



index.render = (req, res)->

  res.render('survey',{

  })

index.answer = (req, res)->
  question = req.body.question
  answer = req.body.answer
  console.log question, answer, req.body
  res.send 'ok'

module.exports = index