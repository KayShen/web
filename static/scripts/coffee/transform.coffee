# $ = require 'jQuery'

$(document).ready (event) ->
  isAnimating = false
  firstLoad = false

  #trigger smooth transition from the actual page to the new one
  $('main').on 'click', '[data-type="page-transition"]', (event) ->
    event.preventDefault()
    #detect which page has been selected
    newPage = $(this).attr('href')
    #if the page is not already being animated - trigger animation
    if not isAnimating
      changePage(newPage, true)
    firstLoad = true


  #detect the 'popstate' event - e.g. user clicking the back button
  $(window).on 'popstate', () ->
    if firstLoad

      #Safari emits a popstate event on page load - check if firstLoad is true before animating
      #if it's false - the page has just been loaded

      newPageArray = location.pathname.split('/')
        #this is the url of the page to be loaded
      newPage = newPageArray[newPageArray.length - 1]
      if not isAnimating
        changePage(newPage, false)

    firstLoad = true


  changePage = (url, bool) ->
    isAnimating = true
    # trigger page animation
    $('body').addClass('page-is-changing')
    $('.cd-loading-bar').one 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () ->
      # loadNewContent(url, bool)
      location.href = url
      $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')

    #if browser doesn't support CSS transitions
    if not transitionsSupported()
      # loadNewContent(url, bool)
      location.href = url

  # loadNewContent = (url, bool) ->
  #   url = if ('' is url) then  'index.html' else url
  #   newSection = 'cd-'+url.replace('.html', '')
  #   section = $('<div class="cd-main-content '+newSection+'"></div>')

  #   section.load url+' .cd-main-content > *', (event) ->
  #     # load new content and replace <main> content with the new one
  #     $('main').html(section)
  #     #if browser doesn't support CSS transitions - dont wait for the end of transitions
  #     delay = if ( transitionsSupported() ) then 1200 else 0
  #     setTimeout () ->
  #       #wait for the end of the transition on the loading bar before revealing the new content
  #       if ( section.hasClass('cd-about') ) then $('body').addClass('cd-about') else $('body').removeClass('cd-about')
  #       $('body').removeClass('page-is-changing')
  #       $('.cd-loading-bar').one 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', () ->
  #         isAnimating = false
  #         $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend')


  #       if( !transitionsSupported() )
  #         isAnimating = false
  #       setTimeout () ->
  #         $('.male').addClass 'slideUp'
  #         $('.female').addClass 'slideDown'
  #       drawGraph()
  #       # , 2000
  #     , delay

  #     if url isnt window.location and bool
  #       #add the new page to the window.history
  #       #if the new page was triggered by a 'popstate' event, don't add it
  #       window.history.pushState({path: url},'',url)

  transitionsSupported = () ->
    return $('html').hasClass('csstransitions')

  # $('main').on 'click', '.male, .female', (e)->
  #   window.location = '/survey.html'


  # });
# if $('#cy').length
#   drawGraph()

# drawGraph = ->
#   $(document).ready (event) ->
#     $('#cy').cytoscape({
#       style: cytoscape.stylesheet().selector('node')
#                 .css({
#                   'width': '128px',
#                   'height': '128px',
#                   'content': 'data(id)',
#                   'background-image': '/static/images/male.png'
#                   # 'pie-size': '80%',
#                   # 'pie-1-background-color': '#E8747C',
#                   # 'pie-1-background-size': 'mapData(foo, 0, 10, 0, 100)',
#                   # 'pie-2-background-color': '#74CBE8',
#                   # 'pie-2-background-size': 'mapData(bar, 0, 10, 0, 100)',
#                   # 'pie-3-background-color': '#74E883',
#                   # 'pie-3-background-size': 'mapData(baz, 0, 10, 0, 100)'
#                 })
#               .selector('edge')
#                 .css({
#                   'width': 4,
#                   'target-arrow-shape': 'triangle',
#                   'opacity': 0.5
#                 })
#               .selector(':selected')
#                 .css({
#                   'background-color': 'black',
#                   'line-color': 'black',
#                   'target-arrow-color': 'black',
#                   'source-arrow-color': 'black',
#                   'opacity': 1
#                 })
#               .selector('.faded')
#                 .css({
#                   'opacity': 0.25,
#                   'text-opacity': 0
#                 })

#       elements:
#         nodes: [
#           { data: { id: 'a', foo: 3, bar: 5, baz: 2 } },
#           { data: { id: 'b', foo: 6, bar: 1, baz: 3 } },
#           { data: { id: 'c', foo: 2, bar: 3, baz: 5 } },
#           { data: { id: 'd', foo: 7, bar: 1, baz: 2 } },
#           { data: { id: 'e', foo: 2, bar: 3, baz: 5 } }
#         ],

#         edges: [
#           { data: { id: 'ae', weight: 1, source: 'a', target: 'e' } },
#           { data: { id: 'ab', weight: 3, source: 'a', target: 'b' } },
#           { data: { id: 'be', weight: 4, source: 'b', target: 'e' } },
#           { data: { id: 'bc', weight: 5, source: 'b', target: 'c' } },
#           { data: { id: 'ce', weight: 6, source: 'c', target: 'e' } },
#           { data: { id: 'cd', weight: 2, source: 'c', target: 'd' } },
#           { data: { id: 'de', weight: 7, source: 'd', target: 'e' } }
#         ]

#       layout:
#         name: 'circle'
#         padding: 10

#       userZoomingEnabled: false
#       zoomingEnabled: false
#       panningEnabled: false,
#       userPanningEnabled: false,
#       ready: ->
#         window.cy = this
#         cy.nodes().on "click", ()->
#       # collection = collection.add(this);
#           window.location = '/survey.html'
#     })

