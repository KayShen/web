$ = require 'jQuery'

$(document).ready (event) ->
  $('body').on 'click', '.answer', (e) ->
    # unless $(@).parent().find('.icon-tick').hasClass 'checked'
      # $(@).find('.icon-tick').addClass 'checked'
    # $(@).off 'click'
    setTimeout ->
      Page.next()
    , 200

