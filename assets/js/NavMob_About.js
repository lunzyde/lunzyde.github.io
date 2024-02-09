/*
	Bryan Bonilla Diaz (lunzyde) - Portfolio [NavMob_About.js]
	
	Template used: Escape Velocity by HTML5 UP
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

		// Panel.
			$(
				'<div id="navPanel">' + '<nav>' +
					// Do not delete the comment below, it auto generates the nav buttons to mobile. Relevant when testing and doing a custom navPanel.
					// $('#nav').navList() +
					'<a class="link depth-0" href="/"><span class="indent-0"></span><i class="fas fa-home" aria-hidden="true"></i> Home</a>' +
					'<a class="link depth-0" href="work.html"><span class="indent-0"></span><i class="fas fa-briefcase" aria-hidden="true"></i> Work</a>' +
					'<a class="link depth-0" href="cv.html"><span class="indent-0"></span><i class="fas fa-book" aria-hidden="true"></i> CV</a>' +
					'<a class="link depth-1"><span class="indent-0"></span><i class="fas fa-user" aria-hidden="true"></i> About</a>' +
						'<a class="link depth-0" href="#introduction"><span class="indent-1"></span>Introduction</a>' +
                    	'<a class="link depth-0" href="#proficiencies"><span class="indent-1"></span>Proficiencies</a>' +
				'</nav>' + '</div>'
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