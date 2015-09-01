/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "http://localhost:8080/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(2);


/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	var OPTIONS, drawGraph;
	
	drawGraph = function(options) {
	  return $('#cy').cytoscape(options);
	};
	
	$(document).ready(function() {
	  return $.ajax({
	    url: '/nodes'
	  }).then(function(data) {
	    var options;
	    console.log(data);
	    options = $.extend({}, OPTIONS, {
	      elements: data
	    });
	    console.log(options);
	    return drawGraph(options);
	  });
	});
	
	OPTIONS = {
	  layout: {
	    name: 'cose',
	    padding: 10
	  },
	  userZoomingEnabled: false,
	  zoomingEnabled: false,
	  panningEnabled: false,
	  userPanningEnabled: false,
	  style: cytoscape.stylesheet().selector('node').css({
	    'width': '128px',
	    'height': '128px',
	    'content': 'data(id)',
	    'background-image': '/images/male.png'
	  }).selector('edge').css({
	    'width': 4,
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
	  ready: function() {
	    console.log('ready');
	    return this.nodes().on("click", function(e) {
	      console.log;
	      return window.location = '/survey.html';
	    });
	  }
	};


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDk2OGQ5ZDYyODA0ZjYwOTdjZTY/OTY0YyIsIndlYnBhY2s6Ly8vLi9ncmFwaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFBQSxhQUFZLFNBQUMsT0FBRDtVQUVWLEVBQUUsS0FBRixDQUFRLENBQUMsU0FBVCxDQUFtQixPQUFuQjtBQUZVOztBQUlaLEdBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQjtVQUtoQixDQUFDLENBQUMsSUFBRixDQUFPO0tBQ0wsS0FBSSxRQURDO0lBQVAsQ0FFRSxDQUFDLElBRkgsQ0FFUSxTQUFDLElBQUQ7QUFDTjtLQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtLQUNBLFVBQVUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxFQUFULEVBQWEsT0FBYixFQUFzQjtPQUFDLFVBQVUsSUFBWDtNQUF0QjtLQUNWLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtZQUNBLFVBQVUsT0FBVjtHQUpNLENBRlI7QUFMZ0IsRUFBbEI7O0FBY0EsV0FDRTtHQUFBLFFBQ0U7S0FBQSxNQUFNLE1BQU47S0FDQSxTQUFTLEVBRFQ7SUFERjtHQUdBLG9CQUFvQixLQUhwQjtHQUlBLGdCQUFnQixLQUpoQjtHQUtBLGdCQUFnQixLQUxoQjtHQU1BLG9CQUFvQixLQU5wQjtHQU9BLE9BQU8sU0FBUyxDQUFDLFVBQVYsRUFBc0IsQ0FBQyxRQUF2QixDQUFnQyxNQUFoQyxDQUNHLENBQUMsR0FESixDQUNRO0tBQ0gsU0FBUyxPQUROO0tBRUgsVUFBVSxPQUZQO0tBR0gsV0FBVyxVQUhSO0tBSUgsb0JBQW9CLGtCQUpqQjtJQURSLENBT0MsQ0FBQyxRQVBGLENBT1csTUFQWCxDQVFHLENBQUMsR0FSSixDQVFRO0tBQ0gsU0FBUyxDQUROO0tBRUgsV0FBVyxHQUZSO0lBUlIsQ0FZQyxDQUFDLFFBWkYsQ0FZVyxXQVpYLENBYUcsQ0FBQyxHQWJKLENBYVE7S0FDSCxvQkFBb0IsT0FEakI7S0FFSCxjQUFjLE9BRlg7S0FHSCxzQkFBc0IsT0FIbkI7S0FJSCxzQkFBc0IsT0FKbkI7S0FLSCxXQUFXLENBTFI7SUFiUixDQW9CQyxDQUFDLFFBcEJGLENBb0JXLFFBcEJYLENBcUJHLENBQUMsR0FyQkosQ0FxQlE7S0FDSCxXQUFXLElBRFI7S0FFSCxnQkFBZ0IsQ0FGYjtJQXJCUixDQVBQO0dBZ0NBLE9BQU87S0FFTCxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7WUFDQSxJQUFDLE1BQUQsRUFBUSxDQUFDLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLFNBQUMsQ0FBRDtPQUNuQixPQUFPLENBQUM7Y0FDUixNQUFNLENBQUMsUUFBUCxHQUFrQjtLQUZDLENBQXJCO0dBSEssQ0FoQ1AiLCJmaWxlIjoiZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkOTY4ZDlkNjI4MDRmNjA5N2NlNlxuICoqLyIsImRyYXdHcmFwaCA9IChvcHRpb25zKS0+XG4gICMgJChkb2N1bWVudCkucmVhZHkgKGV2ZW50KSAtPlxuICAkKCcjY3knKS5jeXRvc2NhcGUob3B0aW9ucylcblxuJChkb2N1bWVudCkucmVhZHkgLT5cbiAgIyBkcmF3R3JhcGgoKVxuICAjIGN5ID0gJCgnI2N5JykuY3l0b3NjYXBlKCdnZXQnKVxuXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6Jy9ub2RlcydcbiAgfSkudGhlbiAoZGF0YSktPlxuICAgIGNvbnNvbGUubG9nIGRhdGFcbiAgICBvcHRpb25zID0gJC5leHRlbmQge30sIE9QVElPTlMsIHtlbGVtZW50czogZGF0YX1cbiAgICBjb25zb2xlLmxvZyBvcHRpb25zXG4gICAgZHJhd0dyYXBoIG9wdGlvbnNcblxuXG5PUFRJT05TID1cbiAgbGF5b3V0OlxuICAgIG5hbWU6ICdjb3NlJ1xuICAgIHBhZGRpbmc6IDEwXG4gIHVzZXJab29taW5nRW5hYmxlZDogZmFsc2VcbiAgem9vbWluZ0VuYWJsZWQ6IGZhbHNlXG4gIHBhbm5pbmdFbmFibGVkOiBmYWxzZVxuICB1c2VyUGFubmluZ0VuYWJsZWQ6IGZhbHNlXG4gIHN0eWxlOiBjeXRvc2NhcGUuc3R5bGVzaGVldCgpLnNlbGVjdG9yKCdub2RlJylcbiAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTI4cHgnLFxuICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEyOHB4JyxcbiAgICAgICAgICAgICAgJ2NvbnRlbnQnOiAnZGF0YShpZCknLFxuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICcvaW1hZ2VzL21hbGUucG5nJ1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAuc2VsZWN0b3IoJ2VkZ2UnKVxuICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICd3aWR0aCc6IDQsXG4gICAgICAgICAgICAgICdvcGFjaXR5JzogMC41XG4gICAgICAgICAgICB9KVxuICAgICAgICAgIC5zZWxlY3RvcignOnNlbGVjdGVkJylcbiAgICAgICAgICAgIC5jc3Moe1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICdibGFjaycsXG4gICAgICAgICAgICAgICdsaW5lLWNvbG9yJzogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICdibGFjaycsXG4gICAgICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnYmxhY2snLFxuICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgLnNlbGVjdG9yKCcuZmFkZWQnKVxuICAgICAgICAgICAgLmNzcyh7XG4gICAgICAgICAgICAgICdvcGFjaXR5JzogMC4yNSxcbiAgICAgICAgICAgICAgJ3RleHQtb3BhY2l0eSc6IDBcbiAgICAgICAgICAgIH0pXG4gIHJlYWR5OiAtPlxuICAgICMgd2luZG93LmN5ID0gdGhpc1xuICAgIGNvbnNvbGUubG9nICdyZWFkeSdcbiAgICBAbm9kZXMoKS5vbiBcImNsaWNrXCIsIChlKS0+XG4gICAgICBjb25zb2xlLmxvZ1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9zdXJ2ZXkuaHRtbCdcblxuICAjIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmFkZCh0aGlzKTtcbiAgICAgICMgd2luZG93LmxvY2F0aW9uID0gJy9zdXJ2ZXkuaHRtbCdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZ3JhcGguY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==