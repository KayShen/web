# $ = require 'jQuery'
$(document).ready (event) ->
  $(document).on 'click', '.male, .female', ->
    $ele = $(@)
    $ele.addClass 'zoom'
    if $ele.hasClass 'male'
      $('.female').addClass 'rotateOut'
    else
      $('.male').addClass 'rotateOut'
    setTimeout ->
      location.href = 'graph.html'
    ,1000