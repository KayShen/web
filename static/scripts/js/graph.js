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
	  style: [
	    {
	      'selector': 'node',
	      style: {
	        'width': '128px',
	        'height': '128px',
	        'content': 'data(id)'
	      }
	    }, {
	      'selector': 'edge',
	      style: {
	        'width': 4,
	        'opacity': 0.5
	      }
	    }, {
	      'selector': ':selected',
	      style: {
	        'background-color': 'black',
	        'line-color': 'black',
	        'target-arrow-color': 'black',
	        'source-arrow-color': 'black',
	        'opacity': 1
	      }
	    }, {
	      'selector': '.faded',
	      style: {
	        'opacity': 0.25,
	        'text-opacity': 0
	      }
	    }, {
	      'selector': 'node[?aaa]',
	      style: {
	        'background-color': 'red',
	        'line-color': 'red',
	        'target-arrow-color': 'red',
	        'source-arrow-color': 'red',
	        'opacity': 1
	      }
	    }
	  ],
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTNlYmVmZTE5YjIyNzZkY2NmMzAiLCJ3ZWJwYWNrOi8vLy4vZ3JhcGguY29mZmVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQUEsYUFBWSxTQUFDLE9BQUQ7VUFFVixFQUFFLEtBQUYsQ0FBUSxDQUFDLFNBQVQsQ0FBbUIsT0FBbkI7QUFGVTs7QUFJWixHQUFFLFFBQUYsQ0FBVyxDQUFDLEtBQVosQ0FBa0I7VUFLaEIsQ0FBQyxDQUFDLElBQUYsQ0FBTztLQUNMLEtBQUksUUFEQztJQUFQLENBRUUsQ0FBQyxJQUZILENBRVEsU0FBQyxJQUFEO0FBQ047S0FBQSxPQUFPLENBQUMsR0FBUixDQUFZLElBQVo7S0FDQSxVQUFVLENBQUMsQ0FBQyxNQUFGLENBQVMsRUFBVCxFQUFhLE9BQWIsRUFBc0I7T0FBQyxVQUFVLElBQVg7TUFBdEI7S0FDVixPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7WUFDQSxVQUFVLE9BQVY7R0FKTSxDQUZSO0FBTGdCLEVBQWxCOztBQWNBLFdBQ0U7R0FBQSxRQUNFO0tBQUEsTUFBTSxNQUFOO0tBQ0EsU0FBUyxFQURUO0lBREY7R0FHQSxvQkFBb0IsS0FIcEI7R0FJQSxnQkFBZ0IsS0FKaEI7R0FLQSxnQkFBZ0IsS0FMaEI7R0FNQSxvQkFBb0IsS0FOcEI7R0FPQSxPQUFPO0tBQ0M7T0FBQyxZQUFXLE1BQVo7T0FDQSxPQUFNO1NBQ0YsU0FBUyxPQURQO1NBRUYsVUFBVSxPQUZSO1NBR0YsV0FBVyxVQUhUO1FBRE47TUFERCxFQVVDO09BQUMsWUFBVyxNQUFaO09BQ0EsT0FBTTtTQUNGLFNBQVMsQ0FEUDtTQUVGLFdBQVcsR0FGVDtRQUROO01BVkQsRUFnQkM7T0FBQyxZQUFXLFdBQVo7T0FDQSxPQUFNO1NBQ0Ysb0JBQW9CLE9BRGxCO1NBRUYsY0FBYyxPQUZaO1NBR0Ysc0JBQXNCLE9BSHBCO1NBSUYsc0JBQXNCLE9BSnBCO1NBS0YsV0FBVyxDQUxUO1FBRE47TUFoQkQsRUF5QkM7T0FBQyxZQUFXLFFBQVo7T0FDQSxPQUFNO1NBQ0YsV0FBVyxJQURUO1NBRUYsZ0JBQWdCLENBRmQ7UUFETjtNQXpCRCxFQStCQztPQUFDLFlBQVcsWUFBWjtPQUNBLE9BQU07U0FDRixvQkFBb0IsS0FEbEI7U0FFRixjQUFjLEtBRlo7U0FHRixzQkFBc0IsS0FIcEI7U0FJRixzQkFBc0IsS0FKcEI7U0FLRixXQUFXLENBTFQ7UUFETjtNQS9CRDtJQVBQO0dBOENBLE9BQU87S0FFTCxPQUFPLENBQUMsR0FBUixDQUFZLE9BQVo7WUFDQSxJQUFDLE1BQUQsRUFBUSxDQUFDLEVBQVQsQ0FBWSxPQUFaLEVBQXFCLFNBQUMsQ0FBRDtPQUNuQixPQUFPLENBQUM7Y0FDUixNQUFNLENBQUMsUUFBUCxHQUFrQjtLQUZDLENBQXJCO0dBSEssQ0E5Q1AiLCJmaWxlIjoiZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCA5M2ViZWZlMTliMjI3NmRjY2YzMFxuICoqLyIsImRyYXdHcmFwaCA9IChvcHRpb25zKS0+XG4gICMgJChkb2N1bWVudCkucmVhZHkgKGV2ZW50KSAtPlxuICAkKCcjY3knKS5jeXRvc2NhcGUob3B0aW9ucylcblxuJChkb2N1bWVudCkucmVhZHkgLT5cbiAgIyBkcmF3R3JhcGgoKVxuICAjIGN5ID0gJCgnI2N5JykuY3l0b3NjYXBlKCdnZXQnKVxuXG5cbiAgJC5hamF4KHtcbiAgICB1cmw6Jy9ub2RlcydcbiAgfSkudGhlbiAoZGF0YSktPlxuICAgIGNvbnNvbGUubG9nIGRhdGFcbiAgICBvcHRpb25zID0gJC5leHRlbmQge30sIE9QVElPTlMsIHtlbGVtZW50czogZGF0YX1cbiAgICBjb25zb2xlLmxvZyBvcHRpb25zXG4gICAgZHJhd0dyYXBoIG9wdGlvbnNcblxuXG5PUFRJT05TID1cbiAgbGF5b3V0OlxuICAgIG5hbWU6ICdjb3NlJ1xuICAgIHBhZGRpbmc6IDEwXG4gIHVzZXJab29taW5nRW5hYmxlZDogZmFsc2VcbiAgem9vbWluZ0VuYWJsZWQ6IGZhbHNlXG4gIHBhbm5pbmdFbmFibGVkOiBmYWxzZVxuICB1c2VyUGFubmluZ0VuYWJsZWQ6IGZhbHNlXG4gIHN0eWxlOiBbXG4gICAgICAgICAgeydzZWxlY3Rvcic6J25vZGUnXG4gICAgICAgICAgc3R5bGU6e1xuICAgICAgICAgICAgICAnd2lkdGgnOiAnMTI4cHgnLFxuICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEyOHB4JyxcbiAgICAgICAgICAgICAgJ2NvbnRlbnQnOiAnZGF0YShpZCknLFxuICAgICAgICAgICAgICAjICdiYWNrZ3JvdW5kLWNvbG9yJzogJ2JsdWUnLFxuICAgICAgICAgICAgICAjICdiYWNrZ3JvdW5kLWltYWdlJzogJy9pbWFnZXMvbWFsZS5wbmcnXG4gICAgICAgICAgICB9fVxuXG4gICAgICAgICAgeydzZWxlY3Rvcic6J2VkZ2UnXG4gICAgICAgICAgc3R5bGU6e1xuICAgICAgICAgICAgICAnd2lkdGgnOiA0LFxuICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAuNVxuICAgICAgICAgICAgfX1cblxuICAgICAgICAgIHsnc2VsZWN0b3InOic6c2VsZWN0ZWQnXG4gICAgICAgICAgc3R5bGU6e1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICdibGFjaycsXG4gICAgICAgICAgICAgICdsaW5lLWNvbG9yJzogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICdibGFjaycsXG4gICAgICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAnYmxhY2snLFxuICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgIH19XG5cbiAgICAgICAgICB7J3NlbGVjdG9yJzonLmZhZGVkJ1xuICAgICAgICAgIHN0eWxlOntcbiAgICAgICAgICAgICAgJ29wYWNpdHknOiAwLjI1LFxuICAgICAgICAgICAgICAndGV4dC1vcGFjaXR5JzogMFxuICAgICAgICAgICAgfX1cblxuICAgICAgICAgIHsnc2VsZWN0b3InOidub2RlWz9hYWFdJ1xuICAgICAgICAgIHN0eWxlOntcbiAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAncmVkJyxcbiAgICAgICAgICAgICAgJ2xpbmUtY29sb3InOiAncmVkJyxcbiAgICAgICAgICAgICAgJ3RhcmdldC1hcnJvdy1jb2xvcic6ICdyZWQnLFxuICAgICAgICAgICAgICAnc291cmNlLWFycm93LWNvbG9yJzogJ3JlZCcsXG4gICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgfX1dXG4gIHJlYWR5OiAtPlxuICAgICMgd2luZG93LmN5ID0gdGhpc1xuICAgIGNvbnNvbGUubG9nICdyZWFkeSdcbiAgICBAbm9kZXMoKS5vbiBcImNsaWNrXCIsIChlKS0+XG4gICAgICBjb25zb2xlLmxvZ1xuICAgICAgd2luZG93LmxvY2F0aW9uID0gJy9zdXJ2ZXkuaHRtbCdcblxuICAjIGNvbGxlY3Rpb24gPSBjb2xsZWN0aW9uLmFkZCh0aGlzKTtcbiAgICAgICMgd2luZG93LmxvY2F0aW9uID0gJy9zdXJ2ZXkuaHRtbCdcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vZ3JhcGguY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==