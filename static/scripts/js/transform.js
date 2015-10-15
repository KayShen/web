(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
$(document).ready(function(event) {
  var changePage;
  $('main').on('click', '[data-type="page-transition"]', function(event) {
    var newPage;
    event.preventDefault();
    newPage = $(this).attr('href');
    return changePage(newPage, true);
  });
  return changePage = function(url, bool) {
    var isAnimating;
    isAnimating = true;
    $('body').addClass('page-is-changing');
    return $('.cd-loading-bar').one('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      location.href = url;
      return $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
    });
  };
});



},{}]},{},[1])


//# sourceMappingURL=app.map.js