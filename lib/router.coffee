debug = require('debug')('middleware')
router = require('express').Router();
ajax = require '../controllers'
question = require '../controllers/question'
Visitor = require '../controllers/model/visitor'
# Sequelize = require('sequelize')
# db = require '../../lib/mysql'

setUIDPromise = ()->
  uid = String(+new Date)
  where = {uid}
  select = 0
  visitor = Visitor.build({uid, select})
  visitor.save().catch((error) ->
    console.log error
  )


getUIDPromise = (uid) -> new Promise (resolve, reject) ->
  where = {uid}
  console.log 'getUIDPromise', where
  Visitor.findOne({where}).then (inst)->
    if inst
      resolve inst
    else
      reject()

# 设置防跨站 cookie
setUIDToken = (req, res, next) ->
  {uid} = req.cookies
  debug 'setUidToken', req.cookies
  now = String(+new Date)
  clearCookie = (name)-> res.clearCookie(name)

  # 没有流程
  handleUIDNotFoundOrEmpty = ->
    clearCookie('uid')
    setUIDPromise()
    req.uid = uid
    next()

  # 有流程
  handleUIDFound = (ints) ->
    req.uid = ints.uid
    next()

  unless uid
    return setUIDPromise(now).then ->
      res.cookie 'uid', now, httpOnly: true
      next()
  else
    getUIDPromise(uid)
      .then handleUIDFound, handleUIDNotFoundOrEmpty
      .catch (error)->
        console.log error
        next(error)

requireUIDToken = (req, res, next) ->
  {uid} = req.cookies
  debug 'requireUIDToken', req.cookies
  # 没有流程
  handleUIDNotFoundOrEmpty = ->
    res.send 'uid error'

  # 有流程
  handleUIDFound = (ints) ->
    req.uid = ints.uid
    next()

  getUIDPromise(uid)
    .then handleUIDFound, handleUIDNotFoundOrEmpty
    .catch (error)->
      console.log error


router.get '/ok', (req, res) ->
  res.send 'ok'

router.get '/', (req, res) ->
  # console.log 111
  res.render 'layout'

router.get '/index.html', (req, res) ->
  # console.log 111
  res.render 'layout'

router.get '/about.html', (req, res) ->
  res.render 'about'

router.get '/graph.html', (req, res) ->
  res.render 'graph'

router.get '/survey.html', [setUIDToken, question.render]


router.get '/question', ajax.getQuestions

router.post '/answer', [requireUIDToken, question.answer]

router.get '/nodes', ajax.getNodes

# router.get '/getStatistics', index.getStatistics

router.get '/statistics', ajax.getStatistics
  # res.render 'statistics'


module.exports = router;
