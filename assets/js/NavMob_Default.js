/*
	Bryan Bonilla Diaz (lunzyde) - Portfolio [NavMob_Default.js]
	
	Template used: Escape Velocity by HTML5 UP
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

		// Panel.
			$(
				'<div id="navPanel">' +
					'<nav>' +
						// This script will be used for testing purposes and for pages that do not have a custom navPanel.
						$('#nav').navList() +
						// For future reference if actually needed: <a class="link depth-0" style="-webkit-tap-highlight-color: rgba(0, 0, 0, 0);">
					'</nav>' +
				'</div>'
			)
				.appendTo($body)
				.panel({
					delay: 500,
					hideOnClick: true,
					hideOnSwipe: true,
					resetScroll: true,
					resetForms: true,
					side: 'left',
					target: $body,
					visibleClass: 'navPanel-visible'
				});		


})(jQuery);