( function ( d, w) {
	'use strict';

	$(d).ready(function(){
		$('.sidenav').sidenav();
		$('.slider').slider({
			indicators: false
		});
	});

})( document, window);