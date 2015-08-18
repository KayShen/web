path = require 'path'

isPro = process.env.NODE_ENV is 'production'
isDev = !isPro

# uuid = require 'node-uuid'
express = require 'express'
bodyParser = require('body-parser')
cookieParser = require('cookie-parser')



boot =  require './router'
app = express()
app.set('x-powered-by', false)


# 模板引擎
app.set('views', path.join(__dirname, '../views'))
app.set('view engine', 'jade')


# 中间件
app.use require('connect-timeout')('15s')
app.use require('serve-favicon')(path.join(__dirname,  '../static/favicon.ico'))

# 暂时留在预发线上 稍后改完 manifest rev 再换方式
# if isDev
app.use(express.static(path.join(__dirname, '../static')))

# parser
app.use(cookieParser())
app.use(bodyParser.raw())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

# 开发环境中查看 页面请求，生产环境不再使用
# 有 nginx 日志
isDev and app.use require('morgan')('dev')


# router 挂载
app.use '/', boot



# 开发环境使用 errorhandler 打印出来
# 线上只输状态页面 会由 nginx 接管错误页面
errorHandler = (err, req, res, next) ->
  console.error(err.stack)
  res.status(err?.statusCode or 500).end()
app.use(if isDev then require('errorhandler')() else errorHandler)


module.exports = app
