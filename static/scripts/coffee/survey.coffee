$ = require 'jQuery'

postAnswer = (data)->
  $.ajax({
    # headers: {'Cookie' : document.cookie }
    url:"answer"
    type: 'POST'
    data: data
  })

getStatistics = ()->
  $.ajax({
    # headers: {'Cookie' : document.cookie }
    url:"getStatistics"
    type: 'GET'
    # data: data
  })

$(document).ready (event) ->
  $('body').on 'click', '.answer', (e) ->
    # unless $(@).parent().find('.icon-tick').hasClass 'checked'
      # $(@).find('.icon-tick').addClass 'checked'
    # $(@).off 'click'
    # console.log $(@).find('.answer-text').data('a'), Page.bb.current
    question = Page.bb.currentIdx
    answer = $(@).find('.answer-text').data('a')
    postAnswer({question, answer})
    if Page.bb.currentIdx is 9
      if confirm 'Do you wnat to do more questions?'
        location.href = 'survey.html?q=11'
    else if Page.bb.currentIdx is Page.bb.itemsCount - 1
      alert 'Thank you~'
      location.href = 'statistics'
    else
      setTimeout ->
        Page.next()
      , 200



