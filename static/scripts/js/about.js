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

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports) {

	$(document).ready(function(event) {
	  return $(document).on('click', '.male, .female', function() {
	    var $ele;
	    $ele = $(this);
	    $ele.addClass('zoom');
	    if ($ele.hasClass('male')) {
	      $('.female').addClass('rotateOut');
	    } else {
	      $('.male').addClass('rotateOut');
	    }
	    return setTimeout(function() {
	      return location.href = 'graph.html';
	    }, 1000);
	  });
	});


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDk2OGQ5ZDYyODA0ZjYwOTdjZTYiLCJ3ZWJwYWNrOi8vLy4vbWFpbi5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBLEdBQUUsUUFBRixDQUFXLENBQUMsS0FBWixDQUFrQixTQUFDLEtBQUQ7VUFDaEIsRUFBRSxRQUFGLENBQVcsQ0FBQyxFQUFaLENBQWUsT0FBZixFQUF3QixnQkFBeEIsRUFBMEM7QUFDeEM7S0FBQSxPQUFPLEVBQUUsSUFBRjtLQUNQLElBQUksQ0FBQyxRQUFMLENBQWMsTUFBZDtLQUNBLElBQUcsSUFBSSxDQUFDLFFBQUwsQ0FBYyxNQUFkLENBQUg7T0FDRSxFQUFFLFNBQUYsQ0FBWSxDQUFDLFFBQWIsQ0FBc0IsV0FBdEIsRUFERjtNQUFBO09BR0UsRUFBRSxPQUFGLENBQVUsQ0FBQyxRQUFYLENBQW9CLFdBQXBCLEVBSEY7O1lBSUEsV0FBVztjQUNULFFBQVEsQ0FBQyxJQUFULEdBQWdCO0tBRFAsQ0FBWCxFQUVDLElBRkQ7R0FQd0MsQ0FBMUM7QUFEZ0IsRUFBbEIiLCJmaWxlIjoiYWJvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkOTY4ZDlkNjI4MDRmNjA5N2NlNlxuICoqLyIsIiMgJCA9IHJlcXVpcmUgJ2pRdWVyeSdcbiQoZG9jdW1lbnQpLnJlYWR5IChldmVudCkgLT5cbiAgJChkb2N1bWVudCkub24gJ2NsaWNrJywgJy5tYWxlLCAuZmVtYWxlJywgLT5cbiAgICAkZWxlID0gJChAKVxuICAgICRlbGUuYWRkQ2xhc3MgJ3pvb20nXG4gICAgaWYgJGVsZS5oYXNDbGFzcyAnbWFsZSdcbiAgICAgICQoJy5mZW1hbGUnKS5hZGRDbGFzcyAncm90YXRlT3V0J1xuICAgIGVsc2VcbiAgICAgICQoJy5tYWxlJykuYWRkQ2xhc3MgJ3JvdGF0ZU91dCdcbiAgICBzZXRUaW1lb3V0IC0+XG4gICAgICBsb2NhdGlvbi5ocmVmID0gJ2dyYXBoLmh0bWwnXG4gICAgLDEwMDBcblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL21haW4uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==