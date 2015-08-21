router = require('express').Router();

# 一些默认页面
router.get '/', (req, res)->
  res.render('index', { title: 'Airtake' })


router.get '/ok', (req, res) ->
  res.send 'ok'

router.get '/index.html', (req, res) ->
  console.log 111
  res.render 'layout'

router.get '/about.html', (req, res) ->
  res.render 'about'

router.get '/graph.html', (req, res) ->
  res.render 'graph'

router.get '/survey.html', (req, res) ->
  res.render 'survey'
# 2T 活动 */
# ev2048 = require('./2048/');
# router.get('/2048/', ev2048.index);
# router.get('/2048/share', ev2048.share);
# router.get('/2048game/', ev2048.game);

# # 下载推广
# downPage = require('./download');
# router.get('/download/pink', downPage);
# router.get('/download/blue', downPage);

# # 照片冲印
# print = require('./print');
# router.get('/print', print.index);
# router.post('/getCoupon', print.getCoupon);


# # 应用内 PC 导流页面
# router.get('/pc', require('./pc'));





module.exports = router;
