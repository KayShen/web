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
/***/ function(module, exports) {

	$(document).ready(function(event) {
	  var changePage, firstLoad, isAnimating, transitionsSupported;
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
	      location.href = url;
	      return $('.cd-loading-bar').off('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend');
	    });
	    if (!transitionsSupported()) {
	      return location.href = url;
	    }
	  };
	  return transitionsSupported = function() {
	    return $('html').hasClass('csstransitions');
	  };
	});


/***/ }
/******/ ]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMjRjZTM0ZGM4YTAwNDRhYWY1MzQ/NTNmOCoqIiwid2VicGFjazovLy8uL3RyYW5zZm9ybS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUNwQ0EsR0FBRSxRQUFGLENBQVcsQ0FBQyxLQUFaLENBQWtCLFNBQUMsS0FBRDtBQUNoQjtHQUFBLGNBQWM7R0FDZCxZQUFZO0dBR1osRUFBRSxNQUFGLENBQVMsQ0FBQyxFQUFWLENBQWEsT0FBYixFQUFzQiwrQkFBdEIsRUFBdUQsU0FBQyxLQUFEO0FBQ3JEO0tBQUEsS0FBSyxDQUFDLGNBQU47S0FFQSxVQUFVLEVBQUUsSUFBRixDQUFPLENBQUMsSUFBUixDQUFhLE1BQWI7S0FFVixJQUFHLENBQUksV0FBUDtPQUNFLFdBQVcsT0FBWCxFQUFvQixJQUFwQixFQURGOztZQUVBLFlBQVk7R0FQeUMsQ0FBdkQ7R0FXQSxFQUFFLE1BQUYsQ0FBUyxDQUFDLEVBQVYsQ0FBYSxVQUFiLEVBQXlCO0FBQ3ZCO0tBQUEsSUFBRyxTQUFIO09BS0UsZUFBZSxRQUFRLENBQUMsUUFBUSxDQUFDLEtBQWxCLENBQXdCLEdBQXhCO09BRWYsVUFBVSxZQUFhLGFBQVksQ0FBQyxNQUFiLEdBQXNCLENBQXRCO09BQ3ZCLElBQUcsQ0FBSSxXQUFQO1NBQ0UsV0FBVyxPQUFYLEVBQW9CLEtBQXBCLEVBREY7UUFSRjs7WUFXQSxZQUFZO0dBWlcsQ0FBekI7R0FlQSxhQUFhLFNBQUMsR0FBRCxFQUFNLElBQU47S0FDWCxjQUFjO0tBRWQsRUFBRSxNQUFGLENBQVMsQ0FBQyxRQUFWLENBQW1CLGtCQUFuQjtLQUNBLEVBQUUsaUJBQUYsQ0FBb0IsQ0FBQyxHQUFyQixDQUF5QixpRkFBekIsRUFBNEc7T0FFMUcsUUFBUSxDQUFDLElBQVQsR0FBZ0I7Y0FDaEIsRUFBRSxpQkFBRixDQUFvQixDQUFDLEdBQXJCLENBQXlCLGlGQUF6QjtLQUgwRyxDQUE1RztLQU1BLElBQUcsQ0FBSSxzQkFBUDtjQUVFLFFBQVEsQ0FBQyxJQUFULEdBQWdCLElBRmxCOztHQVZXO1VBK0NiLHVCQUF1QjtBQUNyQixZQUFPLEVBQUUsTUFBRixDQUFTLENBQUMsUUFBVixDQUFtQixnQkFBbkI7R0FEYztBQTlFUCxFQUFsQiIsImZpbGUiOiJ0cmFuc2Zvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJodHRwOi8vbG9jYWxob3N0OjgwODAvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCAyNGNlMzRkYzhhMDA0NGFhZjUzNFxuICoqLyIsIiMgJCA9IHJlcXVpcmUgJ2pRdWVyeSdcblxuJChkb2N1bWVudCkucmVhZHkgKGV2ZW50KSAtPlxuICBpc0FuaW1hdGluZyA9IGZhbHNlXG4gIGZpcnN0TG9hZCA9IGZhbHNlXG5cbiAgI3RyaWdnZXIgc21vb3RoIHRyYW5zaXRpb24gZnJvbSB0aGUgYWN0dWFsIHBhZ2UgdG8gdGhlIG5ldyBvbmVcbiAgJCgnbWFpbicpLm9uICdjbGljaycsICdbZGF0YS10eXBlPVwicGFnZS10cmFuc2l0aW9uXCJdJywgKGV2ZW50KSAtPlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcbiAgICAjZGV0ZWN0IHdoaWNoIHBhZ2UgaGFzIGJlZW4gc2VsZWN0ZWRcbiAgICBuZXdQYWdlID0gJCh0aGlzKS5hdHRyKCdocmVmJylcbiAgICAjaWYgdGhlIHBhZ2UgaXMgbm90IGFscmVhZHkgYmVpbmcgYW5pbWF0ZWQgLSB0cmlnZ2VyIGFuaW1hdGlvblxuICAgIGlmIG5vdCBpc0FuaW1hdGluZ1xuICAgICAgY2hhbmdlUGFnZShuZXdQYWdlLCB0cnVlKVxuICAgIGZpcnN0TG9hZCA9IHRydWVcblxuXG4gICNkZXRlY3QgdGhlICdwb3BzdGF0ZScgZXZlbnQgLSBlLmcuIHVzZXIgY2xpY2tpbmcgdGhlIGJhY2sgYnV0dG9uXG4gICQod2luZG93KS5vbiAncG9wc3RhdGUnLCAoKSAtPlxuICAgIGlmIGZpcnN0TG9hZFxuXG4gICAgICAjU2FmYXJpIGVtaXRzIGEgcG9wc3RhdGUgZXZlbnQgb24gcGFnZSBsb2FkIC0gY2hlY2sgaWYgZmlyc3RMb2FkIGlzIHRydWUgYmVmb3JlIGFuaW1hdGluZ1xuICAgICAgI2lmIGl0J3MgZmFsc2UgLSB0aGUgcGFnZSBoYXMganVzdCBiZWVuIGxvYWRlZFxuXG4gICAgICBuZXdQYWdlQXJyYXkgPSBsb2NhdGlvbi5wYXRobmFtZS5zcGxpdCgnLycpXG4gICAgICAgICN0aGlzIGlzIHRoZSB1cmwgb2YgdGhlIHBhZ2UgdG8gYmUgbG9hZGVkXG4gICAgICBuZXdQYWdlID0gbmV3UGFnZUFycmF5W25ld1BhZ2VBcnJheS5sZW5ndGggLSAxXVxuICAgICAgaWYgbm90IGlzQW5pbWF0aW5nXG4gICAgICAgIGNoYW5nZVBhZ2UobmV3UGFnZSwgZmFsc2UpXG5cbiAgICBmaXJzdExvYWQgPSB0cnVlXG5cblxuICBjaGFuZ2VQYWdlID0gKHVybCwgYm9vbCkgLT5cbiAgICBpc0FuaW1hdGluZyA9IHRydWVcbiAgICAjIHRyaWdnZXIgcGFnZSBhbmltYXRpb25cbiAgICAkKCdib2R5JykuYWRkQ2xhc3MoJ3BhZ2UtaXMtY2hhbmdpbmcnKVxuICAgICQoJy5jZC1sb2FkaW5nLWJhcicpLm9uZSAnd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCcsICgpIC0+XG4gICAgICAjIGxvYWROZXdDb250ZW50KHVybCwgYm9vbClcbiAgICAgIGxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgICQoJy5jZC1sb2FkaW5nLWJhcicpLm9mZignd2Via2l0VHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCBvVHJhbnNpdGlvbkVuZCBtc1RyYW5zaXRpb25FbmQgdHJhbnNpdGlvbmVuZCcpXG5cbiAgICAjaWYgYnJvd3NlciBkb2Vzbid0IHN1cHBvcnQgQ1NTIHRyYW5zaXRpb25zXG4gICAgaWYgbm90IHRyYW5zaXRpb25zU3VwcG9ydGVkKClcbiAgICAgICMgbG9hZE5ld0NvbnRlbnQodXJsLCBib29sKVxuICAgICAgbG9jYXRpb24uaHJlZiA9IHVybFxuXG4gICMgbG9hZE5ld0NvbnRlbnQgPSAodXJsLCBib29sKSAtPlxuICAjICAgdXJsID0gaWYgKCcnIGlzIHVybCkgdGhlbiAgJ2luZGV4Lmh0bWwnIGVsc2UgdXJsXG4gICMgICBuZXdTZWN0aW9uID0gJ2NkLScrdXJsLnJlcGxhY2UoJy5odG1sJywgJycpXG4gICMgICBzZWN0aW9uID0gJCgnPGRpdiBjbGFzcz1cImNkLW1haW4tY29udGVudCAnK25ld1NlY3Rpb24rJ1wiPjwvZGl2PicpXG5cbiAgIyAgIHNlY3Rpb24ubG9hZCB1cmwrJyAuY2QtbWFpbi1jb250ZW50ID4gKicsIChldmVudCkgLT5cbiAgIyAgICAgIyBsb2FkIG5ldyBjb250ZW50IGFuZCByZXBsYWNlIDxtYWluPiBjb250ZW50IHdpdGggdGhlIG5ldyBvbmVcbiAgIyAgICAgJCgnbWFpbicpLmh0bWwoc2VjdGlvbilcbiAgIyAgICAgI2lmIGJyb3dzZXIgZG9lc24ndCBzdXBwb3J0IENTUyB0cmFuc2l0aW9ucyAtIGRvbnQgd2FpdCBmb3IgdGhlIGVuZCBvZiB0cmFuc2l0aW9uc1xuICAjICAgICBkZWxheSA9IGlmICggdHJhbnNpdGlvbnNTdXBwb3J0ZWQoKSApIHRoZW4gMTIwMCBlbHNlIDBcbiAgIyAgICAgc2V0VGltZW91dCAoKSAtPlxuICAjICAgICAgICN3YWl0IGZvciB0aGUgZW5kIG9mIHRoZSB0cmFuc2l0aW9uIG9uIHRoZSBsb2FkaW5nIGJhciBiZWZvcmUgcmV2ZWFsaW5nIHRoZSBuZXcgY29udGVudFxuICAjICAgICAgIGlmICggc2VjdGlvbi5oYXNDbGFzcygnY2QtYWJvdXQnKSApIHRoZW4gJCgnYm9keScpLmFkZENsYXNzKCdjZC1hYm91dCcpIGVsc2UgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdjZC1hYm91dCcpXG4gICMgICAgICAgJCgnYm9keScpLnJlbW92ZUNsYXNzKCdwYWdlLWlzLWNoYW5naW5nJylcbiAgIyAgICAgICAkKCcuY2QtbG9hZGluZy1iYXInKS5vbmUgJ3dlYmtpdFRyYW5zaXRpb25FbmQgb3RyYW5zaXRpb25lbmQgb1RyYW5zaXRpb25FbmQgbXNUcmFuc2l0aW9uRW5kIHRyYW5zaXRpb25lbmQnLCAoKSAtPlxuICAjICAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZVxuICAjICAgICAgICAgJCgnLmNkLWxvYWRpbmctYmFyJykub2ZmKCd3ZWJraXRUcmFuc2l0aW9uRW5kIG90cmFuc2l0aW9uZW5kIG9UcmFuc2l0aW9uRW5kIG1zVHJhbnNpdGlvbkVuZCB0cmFuc2l0aW9uZW5kJylcblxuXG4gICMgICAgICAgaWYoICF0cmFuc2l0aW9uc1N1cHBvcnRlZCgpIClcbiAgIyAgICAgICAgIGlzQW5pbWF0aW5nID0gZmFsc2VcbiAgIyAgICAgICBzZXRUaW1lb3V0ICgpIC0+XG4gICMgICAgICAgICAkKCcubWFsZScpLmFkZENsYXNzICdzbGlkZVVwJ1xuICAjICAgICAgICAgJCgnLmZlbWFsZScpLmFkZENsYXNzICdzbGlkZURvd24nXG4gICMgICAgICAgZHJhd0dyYXBoKClcbiAgIyAgICAgICAjICwgMjAwMFxuICAjICAgICAsIGRlbGF5XG5cbiAgIyAgICAgaWYgdXJsIGlzbnQgd2luZG93LmxvY2F0aW9uIGFuZCBib29sXG4gICMgICAgICAgI2FkZCB0aGUgbmV3IHBhZ2UgdG8gdGhlIHdpbmRvdy5oaXN0b3J5XG4gICMgICAgICAgI2lmIHRoZSBuZXcgcGFnZSB3YXMgdHJpZ2dlcmVkIGJ5IGEgJ3BvcHN0YXRlJyBldmVudCwgZG9uJ3QgYWRkIGl0XG4gICMgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKHtwYXRoOiB1cmx9LCcnLHVybClcblxuICB0cmFuc2l0aW9uc1N1cHBvcnRlZCA9ICgpIC0+XG4gICAgcmV0dXJuICQoJ2h0bWwnKS5oYXNDbGFzcygnY3NzdHJhbnNpdGlvbnMnKVxuXG4gICMgJCgnbWFpbicpLm9uICdjbGljaycsICcubWFsZSwgLmZlbWFsZScsIChlKS0+XG4gICMgICB3aW5kb3cubG9jYXRpb24gPSAnL3N1cnZleS5odG1sJ1xuXG5cbiAgIyB9KTtcbiMgaWYgJCgnI2N5JykubGVuZ3RoXG4jICAgZHJhd0dyYXBoKClcblxuIyBkcmF3R3JhcGggPSAtPlxuIyAgICQoZG9jdW1lbnQpLnJlYWR5IChldmVudCkgLT5cbiMgICAgICQoJyNjeScpLmN5dG9zY2FwZSh7XG4jICAgICAgIHN0eWxlOiBjeXRvc2NhcGUuc3R5bGVzaGVldCgpLnNlbGVjdG9yKCdub2RlJylcbiMgICAgICAgICAgICAgICAgIC5jc3Moe1xuIyAgICAgICAgICAgICAgICAgICAnd2lkdGgnOiAnMTI4cHgnLFxuIyAgICAgICAgICAgICAgICAgICAnaGVpZ2h0JzogJzEyOHB4JyxcbiMgICAgICAgICAgICAgICAgICAgJ2NvbnRlbnQnOiAnZGF0YShpZCknLFxuIyAgICAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1pbWFnZSc6ICcvc3RhdGljL2ltYWdlcy9tYWxlLnBuZydcbiMgICAgICAgICAgICAgICAgICAgIyAncGllLXNpemUnOiAnODAlJyxcbiMgICAgICAgICAgICAgICAgICAgIyAncGllLTEtYmFja2dyb3VuZC1jb2xvcic6ICcjRTg3NDdDJyxcbiMgICAgICAgICAgICAgICAgICAgIyAncGllLTEtYmFja2dyb3VuZC1zaXplJzogJ21hcERhdGEoZm9vLCAwLCAxMCwgMCwgMTAwKScsXG4jICAgICAgICAgICAgICAgICAgICMgJ3BpZS0yLWJhY2tncm91bmQtY29sb3InOiAnIzc0Q0JFOCcsXG4jICAgICAgICAgICAgICAgICAgICMgJ3BpZS0yLWJhY2tncm91bmQtc2l6ZSc6ICdtYXBEYXRhKGJhciwgMCwgMTAsIDAsIDEwMCknLFxuIyAgICAgICAgICAgICAgICAgICAjICdwaWUtMy1iYWNrZ3JvdW5kLWNvbG9yJzogJyM3NEU4ODMnLFxuIyAgICAgICAgICAgICAgICAgICAjICdwaWUtMy1iYWNrZ3JvdW5kLXNpemUnOiAnbWFwRGF0YShiYXosIDAsIDEwLCAwLCAxMDApJ1xuIyAgICAgICAgICAgICAgICAgfSlcbiMgICAgICAgICAgICAgICAuc2VsZWN0b3IoJ2VkZ2UnKVxuIyAgICAgICAgICAgICAgICAgLmNzcyh7XG4jICAgICAgICAgICAgICAgICAgICd3aWR0aCc6IDQsXG4jICAgICAgICAgICAgICAgICAgICd0YXJnZXQtYXJyb3ctc2hhcGUnOiAndHJpYW5nbGUnLFxuIyAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAuNVxuIyAgICAgICAgICAgICAgICAgfSlcbiMgICAgICAgICAgICAgICAuc2VsZWN0b3IoJzpzZWxlY3RlZCcpXG4jICAgICAgICAgICAgICAgICAuY3NzKHtcbiMgICAgICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3InOiAnYmxhY2snLFxuIyAgICAgICAgICAgICAgICAgICAnbGluZS1jb2xvcic6ICdibGFjaycsXG4jICAgICAgICAgICAgICAgICAgICd0YXJnZXQtYXJyb3ctY29sb3InOiAnYmxhY2snLFxuIyAgICAgICAgICAgICAgICAgICAnc291cmNlLWFycm93LWNvbG9yJzogJ2JsYWNrJyxcbiMgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4jICAgICAgICAgICAgICAgICB9KVxuIyAgICAgICAgICAgICAgIC5zZWxlY3RvcignLmZhZGVkJylcbiMgICAgICAgICAgICAgICAgIC5jc3Moe1xuIyAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDAuMjUsXG4jICAgICAgICAgICAgICAgICAgICd0ZXh0LW9wYWNpdHknOiAwXG4jICAgICAgICAgICAgICAgICB9KVxuXG4jICAgICAgIGVsZW1lbnRzOlxuIyAgICAgICAgIG5vZGVzOiBbXG4jICAgICAgICAgICB7IGRhdGE6IHsgaWQ6ICdhJywgZm9vOiAzLCBiYXI6IDUsIGJhejogMiB9IH0sXG4jICAgICAgICAgICB7IGRhdGE6IHsgaWQ6ICdiJywgZm9vOiA2LCBiYXI6IDEsIGJhejogMyB9IH0sXG4jICAgICAgICAgICB7IGRhdGE6IHsgaWQ6ICdjJywgZm9vOiAyLCBiYXI6IDMsIGJhejogNSB9IH0sXG4jICAgICAgICAgICB7IGRhdGE6IHsgaWQ6ICdkJywgZm9vOiA3LCBiYXI6IDEsIGJhejogMiB9IH0sXG4jICAgICAgICAgICB7IGRhdGE6IHsgaWQ6ICdlJywgZm9vOiAyLCBiYXI6IDMsIGJhejogNSB9IH1cbiMgICAgICAgICBdLFxuXG4jICAgICAgICAgZWRnZXM6IFtcbiMgICAgICAgICAgIHsgZGF0YTogeyBpZDogJ2FlJywgd2VpZ2h0OiAxLCBzb3VyY2U6ICdhJywgdGFyZ2V0OiAnZScgfSB9LFxuIyAgICAgICAgICAgeyBkYXRhOiB7IGlkOiAnYWInLCB3ZWlnaHQ6IDMsIHNvdXJjZTogJ2EnLCB0YXJnZXQ6ICdiJyB9IH0sXG4jICAgICAgICAgICB7IGRhdGE6IHsgaWQ6ICdiZScsIHdlaWdodDogNCwgc291cmNlOiAnYicsIHRhcmdldDogJ2UnIH0gfSxcbiMgICAgICAgICAgIHsgZGF0YTogeyBpZDogJ2JjJywgd2VpZ2h0OiA1LCBzb3VyY2U6ICdiJywgdGFyZ2V0OiAnYycgfSB9LFxuIyAgICAgICAgICAgeyBkYXRhOiB7IGlkOiAnY2UnLCB3ZWlnaHQ6IDYsIHNvdXJjZTogJ2MnLCB0YXJnZXQ6ICdlJyB9IH0sXG4jICAgICAgICAgICB7IGRhdGE6IHsgaWQ6ICdjZCcsIHdlaWdodDogMiwgc291cmNlOiAnYycsIHRhcmdldDogJ2QnIH0gfSxcbiMgICAgICAgICAgIHsgZGF0YTogeyBpZDogJ2RlJywgd2VpZ2h0OiA3LCBzb3VyY2U6ICdkJywgdGFyZ2V0OiAnZScgfSB9XG4jICAgICAgICAgXVxuXG4jICAgICAgIGxheW91dDpcbiMgICAgICAgICBuYW1lOiAnY2lyY2xlJ1xuIyAgICAgICAgIHBhZGRpbmc6IDEwXG5cbiMgICAgICAgdXNlclpvb21pbmdFbmFibGVkOiBmYWxzZVxuIyAgICAgICB6b29taW5nRW5hYmxlZDogZmFsc2VcbiMgICAgICAgcGFubmluZ0VuYWJsZWQ6IGZhbHNlLFxuIyAgICAgICB1c2VyUGFubmluZ0VuYWJsZWQ6IGZhbHNlLFxuIyAgICAgICByZWFkeTogLT5cbiMgICAgICAgICB3aW5kb3cuY3kgPSB0aGlzXG4jICAgICAgICAgY3kubm9kZXMoKS5vbiBcImNsaWNrXCIsICgpLT5cbiMgICAgICAgIyBjb2xsZWN0aW9uID0gY29sbGVjdGlvbi5hZGQodGhpcyk7XG4jICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAnL3N1cnZleS5odG1sJ1xuIyAgICAgfSlcblxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi90cmFuc2Zvcm0uY29mZmVlXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==