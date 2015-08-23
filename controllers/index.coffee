

index = {}


index.getQuestions = (req, res)->
  res.send 'ok'

index.getNodes = (req, res) ->
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
      { data: { id: 'ea', weight: 1, source: 'e', target: 'a' } },
      { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
      { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
      { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
      { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
      { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
      { data: { id: 'de', weight: 7, source: 'd', target: 'e' } }
    ]

  res.json data



module.exports = index