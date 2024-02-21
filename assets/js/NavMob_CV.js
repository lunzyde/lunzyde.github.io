/*
	Bryan Bonilla Diaz (lunzyde) - Portfolio [NavMob_CV.js]
	
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
					'<a class="link depth-0" href="games.html"><span class="indent-0"></span><i class="fas fa-gamepad" aria-hidden="true"></i> Games</a>' +
					'<a class="link depth-0" href="prototypes.html"><span class="indent-0"></span><i class="fas fa-tools" aria-hidden="true"></i> Prototypes</a>' +
					'<a class="link depth-0" href="audio.html"><span class="indent-0"></span><i class="fas fa-headphones" aria-hidden="true"></i> Audio</a>' +
					'<a class="link depth-0" href="misc.html"><span class="indent-0"></span><i class="fas fa-briefcase" aria-hidden="true"></i> Misc</a>' +
					'<a class="link depth-1"><span class="indent-0"></span><i class="fas fa-book" aria-hidden="true"></i> CV</a>' +
						'<a class="link depth-0" href="#experience"><span class="indent-1"></span>Experience</a>' +
						'<a class="link depth-0" href="#volunteering"><span class="indent-1"></span>Volunteering</a>' +
						'<a class="link depth-0" href="#organizations"><span class="indent-1"></span>Organizations</a>' +
						'<a class="link depth-0" href="#achievements"><span class="indent-1"></span>Achievements</a>' +
						'<a class="link depth-0" href="#education"><span class="indent-1"></span>Education</a>' +
					'<a class="link depth-0" href="about.html"><span class="indent-0"></span><i class="fas fa-user" aria-hidden="true"></i> About</a>' +
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