Answer = require './model/answer'
path = require 'path'
process = require('./processData').process

index = {}

findAnswers = (visitor)-> new Promise (resolve, reject)->
  where = {visitor}
  Answer.findAll({where}).then (arr)->
    # console.log arr
    list = arr.map (item)->
      item.toJSON()
    console.log list
    resolve list

index.getQuestions = (req, res)->
  res.send 'ok'

index.getNodes = (req, res) ->
  uid =  req.cookies.uid

  # console.log list
  data =
    nodes: [
      { data: { id: 'a', foo: 3, bar: 5, baz: 2 } },
      { data: { id: 'b', foo: 6, bar: 1, baz: 3 } },
      { data: { id: 'c', foo: 2, bar: 3, baz: 5 } },
      { data: { id: 'd', foo: 7, bar: 1, baz: 2 } },
      { data: { id: 'e', foo: 2, bar: 3, baz: 5 } }
    ],
    edges: [
      { data: { id: 'ae', weight: 1, source: 'a', target: 'e' } },
      # { data: { id: 'ea', weight: 1, source: 'e', target: 'a' } },
      { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
      { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
      { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
      { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
      { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
      { data: { id: 'de', weight: 7, source: 'd', target: 'e' } }
    ]
  findAnswers(uid).then (list)->
    console.log 1
    list.forEach (item)->
      console.log data
      data.nodes[item.question].data.aaa = 1

    res.json data
  .catch (err)->
    console.log err, err.stack
    res.json {err}

index.getStatistics = (req, res)->
  uid =  req.cookies.uid
  findAnswers(uid).then (list)->
    console.log list
    {average, min, max} = process(list)
    # tmpl = require.resolve( path.join(__dirname, '../views', "statistics.jade"))
    # tmplFn = require('jade').compileFile(tmpl)
    # res.send  tmplFn({list, average, min, max})
    res.render 'statistics',{list, average, min, max}
  .catch (err)->
    console.log err
    res.render 'error'



module.exports = index