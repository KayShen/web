drawGraph = (options)->
  # $(document).ready (event) ->
  $('#cy').cytoscape(options)

$(document).ready ->
  # drawGraph()
  # cy = $('#cy').cytoscape('get')


  $.ajax({
    url:'/nodes'
  }).then (data)->
    console.log data
    options = $.extend {}, OPTIONS, {elements: data}
    console.log options
    drawGraph options


OPTIONS =
  layout:
    name: 'cose'
    padding: 10
  userZoomingEnabled: false
  zoomingEnabled: false
  panningEnabled: false
  userPanningEnabled: false
  style: [
          {'selector':'node'
          style:{
              'width': '128px',
              'height': '128px',
              'content': 'data(id)',
              # 'background-color': 'blue',
              # 'background-image': '/images/male.png'
            }}

          {'selector':'edge'
          style:{
              'width': 4,
              'opacity': 0.5
            }}

          {'selector':':selected'
          style:{
              'background-color': 'black',
              'line-color': 'black',
              'target-arrow-color': 'black',
              'source-arrow-color': 'black',
              'opacity': 1
            }}

          {'selector':'.faded'
          style:{
              'opacity': 0.25,
              'text-opacity': 0
            }}

          {'selector':'node[?aaa]'
          style:{
              'background-color': 'red',
              'line-color': 'red',
              'target-arrow-color': 'red',
              'source-arrow-color': 'red',
              'opacity': 1
            }}]
  ready: ->
    # window.cy = this
    console.log 'ready'
    @nodes().on "click", (e)->
      console.log
      window.location = '/survey.html'

  # collection = collection.add(this);
      # window.location = '/survey.html'
