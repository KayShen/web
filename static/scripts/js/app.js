(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){




},{}],2:[function(require,module,exports){
var drawGraph;

$(document).ready(function(event) {
  var changePage, firstLoad, isAnimating, loadNewContent, transitionsSupported;
  isAnimating = false;
  firstLoad = false;
  $('main').on('click', '[data-type="page-transition"]', function(event) {
    var newPage;
    event.preventDefault();
    newPage = $(this).attr('href');
    if (!isAnimating) {
      changePage(newPage, true);
    }
    return firstLoad = true;
  });
  $(window).on('popstate', function() {
    var newPage, newPageArray;
    if (firstLoad) {
      newPageArray = location.pathname.split('/');
      newPage = newPageArray[newPageArray.length - 1];
      if (!isAnimating) {
        changePage(newPage, false);
      }
    }
    return firstLoad = true;
  });
  changePage = function(url, bool) {
    isAnimating = true;
    $('body').addClass('page-is-changing');
    $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      loadNewContent(url, bool);
      return $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
    if (!transitionsSupported()) {
      return loadNewContent(url, bool);
    }
  };
  loadNewContent = function(url, bool) {
    var newSection, section;
    url = '' === url ? 'index.html' : url;
    newSection = 'cd-' + url.replace('.html', '');
    section = $('<div class="cd-main-content ' + newSection + '"></div>');
    return section.load(url + ' .cd-main-content > *', function(event) {
      var delay;
      $('main').html(section);
      delay = transitionsSupported() ? 1200 : 0;
      setTimeout(function() {
        if (section.hasClass('cd-about')) {
          $('body').addClass('cd-about');
        } else {
          $('body').removeClass('cd-about');
        }
        $('body').removeClass('page-is-changing');
        $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
          isAnimating = false;
          return $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
        });
        if (!transitionsSupported()) {
          isAnimating = false;
        }
        return drawGraph();
      }, delay);
      if (url !== window.location && bool) {
        return window.history.pushState({
          path: url
        }, '', url);
      }
    });
  };
  transitionsSupported = function() {
    return $('html').hasClass('csstransitions');
  };
  return $('main').on('click', '.male, .female', function(e) {
    return window.location = '/survey.html';
  });
});

drawGraph = function() {
  return $(document).ready(function(event) {
    return $('#cy').cytoscape({
      style: cytoscape.stylesheet().selector('node').css({
        'width': '60px',
        'height': '60px',
        'content': 'data(id)'
      }).selector('edge').css({
        'width': 4,
        'target-arrow-shape': 'triangle',
        'opacity': 0.5
      }).selector(':selected').css({
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black',
        'opacity': 1
      }).selector('.faded').css({
        'opacity': 0.25,
        'text-opacity': 0
      }),
      elements: {
        nodes: [
          {
            data: {
              id: 'a',
              foo: 3,
              bar: 5,
              baz: 2
            }
          }, {
            data: {
              id: 'b',
              foo: 6,
              bar: 1,
              baz: 3
            }
          }, {
            data: {
              id: 'c',
              foo: 2,
              bar: 3,
              baz: 5
            }
          }, {
            data: {
              id: 'd',
              foo: 7,
              bar: 1,
              baz: 2
            }
          }, {
            data: {
              id: 'e',
              foo: 2,
              bar: 3,
              baz: 5
            }
          }
        ],
        edges: [
          {
            data: {
              id: 'ae',
              weight: 1,
              source: 'a',
              target: 'e'
            }
          }, {
            data: {
              id: 'ab',
              weight: 3,
              source: 'a',
              target: 'b'
            }
          }, {
            data: {
              id: 'be',
              weight: 4,
              source: 'b',
              target: 'e'
            }
          }, {
            data: {
              id: 'bc',
              weight: 5,
              source: 'b',
              target: 'c'
            }
          }, {
            data: {
              id: 'ce',
              weight: 6,
              source: 'c',
              target: 'e'
            }
          }, {
            data: {
              id: 'cd',
              weight: 2,
              source: 'c',
              target: 'd'
            }
          }, {
            data: {
              id: 'de',
              weight: 7,
              source: 'd',
              target: 'e'
            }
          }
        ]
      },
      layout: {
        name: 'circle',
        padding: 10
      },
      userZoomingEnabled: false,
      zoomingEnabled: false,
      panningEnabled: false,
      userPanningEnabled: false,
      ready: function() {
        window.cy = this;
        return cy.nodes().on("click", function() {
          return window.location = '/survey.html';
        });
      }
    });
  });
};



},{}],3:[function(require,module,exports){
require('./index');

require('./form');



},{"./form":1,"./index":2}]},{},[3])


//# sourceMappingURL=app.map.js