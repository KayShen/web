router = require('express').Router();
ajax = require '../controllers'
question = require '../controllers/question'

# 一些默认页面
# router.get '/', (req, res)->
#   res.render('index', { title: 'Airtake' })


router.get '/ok', (req, res) ->
  res.send 'ok'

router.get '/index.html', (req, res) ->
  console.log 111
  res.render 'layout'

router.get '/about.html', (req, res) ->
  res.render 'about'

router.get '/graph.html', (req, res) ->
  res.render 'graph'

router.get '/survey.html', question.render


router.get '/question', ajax.getQuestions

router.post '/answer', question.answer

router.get '/nodes', ajax.getNodes




module.exports = router;
