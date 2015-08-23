$ = require 'jQuery'

postAnswer = (data)->
  $.ajax({
    url:"answer"
    type: 'POST'
    data: data
  })

$(document).ready (event) ->
  $('body').on 'click', '.answer', (e) ->
    # unless $(@).parent().find('.icon-tick').hasClass 'checked'
      # $(@).find('.icon-tick').addClass 'checked'
    # $(@).off 'click'
    # console.log $(@).find('.answer-text').data('a'), Page.bb.current
    question = Page.bb.current
    answer = $(@).find('.answer-text').data('a')
    postAnswer({question, answer})
    if Page.bb.current is Page.bb.itemsCount - 1
      if confirm 'Do you wnat to do more questions?'
        location.href = 'survey.html?q=1&m=1'
    else
      setTimeout ->
        Page.next()
      , 200



