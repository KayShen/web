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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOWU5YzAzZTUwNGUyYWI5YWRiNTY/MjRhNiIsIndlYnBhY2s6Ly8vLi9ncmFwaC5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFBQSxhQUFZLFNBQUMsT0FBRDtVQUVWLEVBQUUsS0FBRixDQUFRLENBQUMsU0FBVCxDQUFtQixPQUFuQjtBQUZVOztBQUlaLEdBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQjtVQUtoQixDQUFDLENBQUMsSUFBRixDQUFPO0tBQ0wsS0FBSSxRQURDO0lBQVAsQ0FFRSxDQUFDLElBRkgsQ0FFUSxTQUFDLElBQUQ7QUFDTjtLQUFBLE9BQU8sQ0FBQyxHQUFSLENBQVksSUFBWjtLQUNBLFVBQVUsQ0FBQyxDQUFDLE1BQUYsQ0FBUyxFQUFULEVBQWEsT0FBYixFQUFzQjtPQUFDLFVBQVUsSUFBWDtNQUF0QjtLQUNWLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtZQUNBLFVBQVUsT0FBVjtHQUpNLENBRlI7QUFMZ0IsRUFBbEI7O0FBY0EsV0FDRTtHQUFBLFFBQ0U7S0FBQSxNQUFNLE1BQU47S0FDQSxTQUFTLEVBRFQ7SUFERjtHQUdBLG9CQUFvQixLQUhwQjtHQUlBLGdCQUFnQixLQUpoQjtHQUtBLGdCQUFnQixLQUxoQjtHQU1BLG9CQUFvQixLQU5wQjtHQU9BLE9BQU87S0FDQztPQUFDLFlBQVcsTUFBWjtPQUNBLE9BQU07U0FDRixTQUFTLE9BRFA7U0FFRixVQUFVLE9BRlI7U0FHRixXQUFXLFVBSFQ7UUFETjtNQURELEVBVUM7T0FBQyxZQUFXLE1BQVo7T0FDQSxPQUFNO1NBQ0YsU0FBUyxDQURQO1NBRUYsV0FBVyxHQUZUO1FBRE47TUFWRCxFQWdCQztPQUFDLFlBQVcsV0FBWjtPQUNBLE9BQU07U0FDRixvQkFBb0IsT0FEbEI7U0FFRixjQUFjLE9BRlo7U0FHRixzQkFBc0IsT0FIcEI7U0FJRixzQkFBc0IsT0FKcEI7U0FLRixXQUFXLENBTFQ7UUFETjtNQWhCRCxFQXlCQztPQUFDLFlBQVcsUUFBWjtPQUNBLE9BQU07U0FDRixXQUFXLElBRFQ7U0FFRixnQkFBZ0IsQ0FGZDtRQUROO01BekJELEVBK0JDO09BQUMsWUFBVyxZQUFaO09BQ0EsT0FBTTtTQUNGLG9CQUFvQixLQURsQjtTQUVGLGNBQWMsS0FGWjtTQUdGLHNCQUFzQixLQUhwQjtTQUlGLHNCQUFzQixLQUpwQjtTQUtGLFdBQVcsQ0FMVDtRQUROO01BL0JEO0lBUFA7R0E4Q0EsT0FBTztLQUVMLE9BQU8sQ0FBQyxHQUFSLENBQVksT0FBWjtZQUNBLElBQUMsTUFBRCxFQUFRLENBQUMsRUFBVCxDQUFZLE9BQVosRUFBcUIsU0FBQyxDQUFEO09BQ25CLE9BQU8sQ0FBQztjQUNSLE1BQU0sQ0FBQyxRQUFQLEdBQWtCO0tBRkMsQ0FBckI7R0FISyxDQTlDUCIsImZpbGUiOiJncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcImh0dHA6Ly9sb2NhbGhvc3Q6ODA4MC9cIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIDllOWMwM2U1MDRlMmFiOWFkYjU2XG4gKiovIiwiZHJhd0dyYXBoID0gKG9wdGlvbnMpLT5cbiAgIyAkKGRvY3VtZW50KS5yZWFkeSAoZXZlbnQpIC0+XG4gICQoJyNjeScpLmN5dG9zY2FwZShvcHRpb25zKVxuXG4kKGRvY3VtZW50KS5yZWFkeSAtPlxuICAjIGRyYXdHcmFwaCgpXG4gICMgY3kgPSAkKCcjY3knKS5jeXRvc2NhcGUoJ2dldCcpXG5cblxuICAkLmFqYXgoe1xuICAgIHVybDonL25vZGVzJ1xuICB9KS50aGVuIChkYXRhKS0+XG4gICAgY29uc29sZS5sb2cgZGF0YVxuICAgIG9wdGlvbnMgPSAkLmV4dGVuZCB7fSwgT1BUSU9OUywge2VsZW1lbnRzOiBkYXRhfVxuICAgIGNvbnNvbGUubG9nIG9wdGlvbnNcbiAgICBkcmF3R3JhcGggb3B0aW9uc1xuXG5cbk9QVElPTlMgPVxuICBsYXlvdXQ6XG4gICAgbmFtZTogJ2Nvc2UnXG4gICAgcGFkZGluZzogMTBcbiAgdXNlclpvb21pbmdFbmFibGVkOiBmYWxzZVxuICB6b29taW5nRW5hYmxlZDogZmFsc2VcbiAgcGFubmluZ0VuYWJsZWQ6IGZhbHNlXG4gIHVzZXJQYW5uaW5nRW5hYmxlZDogZmFsc2VcbiAgc3R5bGU6IFtcbiAgICAgICAgICB7J3NlbGVjdG9yJzonbm9kZSdcbiAgICAgICAgICBzdHlsZTp7XG4gICAgICAgICAgICAgICd3aWR0aCc6ICcxMjhweCcsXG4gICAgICAgICAgICAgICdoZWlnaHQnOiAnMTI4cHgnLFxuICAgICAgICAgICAgICAnY29udGVudCc6ICdkYXRhKGlkKScsXG4gICAgICAgICAgICAgICMgJ2JhY2tncm91bmQtY29sb3InOiAnYmx1ZScsXG4gICAgICAgICAgICAgICMgJ2JhY2tncm91bmQtaW1hZ2UnOiAnL2ltYWdlcy9tYWxlLnBuZydcbiAgICAgICAgICAgIH19XG5cbiAgICAgICAgICB7J3NlbGVjdG9yJzonZWRnZSdcbiAgICAgICAgICBzdHlsZTp7XG4gICAgICAgICAgICAgICd3aWR0aCc6IDQsXG4gICAgICAgICAgICAgICdvcGFjaXR5JzogMC41XG4gICAgICAgICAgICB9fVxuXG4gICAgICAgICAgeydzZWxlY3Rvcic6JzpzZWxlY3RlZCdcbiAgICAgICAgICBzdHlsZTp7XG4gICAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yJzogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgJ2xpbmUtY29sb3InOiAnYmxhY2snLFxuICAgICAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJ2JsYWNrJyxcbiAgICAgICAgICAgICAgJ3NvdXJjZS1hcnJvdy1jb2xvcic6ICdibGFjaycsXG4gICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgfX1cblxuICAgICAgICAgIHsnc2VsZWN0b3InOicuZmFkZWQnXG4gICAgICAgICAgc3R5bGU6e1xuICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAuMjUsXG4gICAgICAgICAgICAgICd0ZXh0LW9wYWNpdHknOiAwXG4gICAgICAgICAgICB9fVxuXG4gICAgICAgICAgeydzZWxlY3Rvcic6J25vZGVbP2FhYV0nXG4gICAgICAgICAgc3R5bGU6e1xuICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcic6ICdyZWQnLFxuICAgICAgICAgICAgICAnbGluZS1jb2xvcic6ICdyZWQnLFxuICAgICAgICAgICAgICAndGFyZ2V0LWFycm93LWNvbG9yJzogJ3JlZCcsXG4gICAgICAgICAgICAgICdzb3VyY2UtYXJyb3ctY29sb3InOiAncmVkJyxcbiAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICB9fV1cbiAgcmVhZHk6IC0+XG4gICAgIyB3aW5kb3cuY3kgPSB0aGlzXG4gICAgY29uc29sZS5sb2cgJ3JlYWR5J1xuICAgIEBub2RlcygpLm9uIFwiY2xpY2tcIiwgKGUpLT5cbiAgICAgIGNvbnNvbGUubG9nXG4gICAgICB3aW5kb3cubG9jYXRpb24gPSAnL3N1cnZleS5odG1sJ1xuXG4gICMgY29sbGVjdGlvbiA9IGNvbGxlY3Rpb24uYWRkKHRoaXMpO1xuICAgICAgIyB3aW5kb3cubG9jYXRpb24gPSAnL3N1cnZleS5odG1sJ1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9ncmFwaC5jb2ZmZWVcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9