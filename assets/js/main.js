/*
	Bryan Bonilla Diaz (lunzyde) - Portfolio [main.js]
	
	Template used: Escape Velocity by HTML5 UP
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

(function($) {

	var	$window = $(window),
		$body = $('body');

	// Breakpoints.
		breakpoints({
			xlarge:  [ '1281px',  '1680px' ],
			large:   [ '981px',   '1280px' ],
			medium:  [ '737px',   '980px'  ],
			small:   [ null,      '736px'  ]
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Dropdowns.
		$('#nav > ul').dropotron({
			mode: 'fade',
			noOpenerFade: true,
			alignment: 'center',
			detach: false
		});

	// Nav.

		// Title Bar.
			$(
				'<div id="titleBar">' +
					'<a href="#navPanel" class="toggle" title="Toggle open or close the navigation panel!"></a>' +
					'<span class="title">' + $('#logo h1').html() + '</span>' +
				'</div>'
			)
				.appendTo($body);	

		// Panel.
		// Each Panel is being customized on each page for this template, visit the NavMob scripts to see each custom panel per page.
		// Here's the code for reference purposes:
		//	$(
		//		'<div id="navPanel">' +
		//			'<nav>' +
		//				$('#nav').navList() +
		//			'</nav>' +
		//		'</div>'
		//	)
		//		.appendTo($body)
		//		.panel({
		//			delay: 500,
		//			hideOnClick: true,
		//			hideOnSwipe: true,
		//			resetScroll: true,
		//			resetForms: true,
		//			side: 'left',
		//			target: $body,
		//			visibleClass: 'navPanel-visible'
		//		});


})(jQuery);

// Slideshow stuff
var slidePosition = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]; 
// When adding a new slideshow, remember to add another "1" value in here.

// Class the members of each slideshow group with different CSS classes
var slideId = ["Containers", "Containers2", "Containers3", "Containers4", "Containers5",
	"Containers6", "Containers7", "Containers8", "Containers9", "Containers10"]
	
var dotsId = ["dots", "dots2", "dots3", "dots4", "dots5", "dots6", "dots7", "dots8", "dots9", "dots10"]

// When adding a new slideshow, remember to add: SlideShow(1, #);
SlideShow(1, 0); SlideShow(1, 1); SlideShow(1, 2); SlideShow(1, 3); SlideShow(1, 4);
SlideShow(1, 5); SlideShow(1, 6); SlideShow(1, 7); SlideShow(1, 8); SlideShow(1, 9);

// forward/Back controls
function plusSlides(n, no) { SlideShow(slidePosition[no] += n, no); }

// Slideshow controls
function currentSlide(n, no) { SlideShow(slidePosition[no] = n, no); }

// Do not modify unless needed, this already handles multiple slideshows.
function SlideShow(n, no) {
  var i;
  var slides = document.getElementsByClassName(slideId[no]);
  var circles = document.getElementsByClassName(dotsId[no]);
  if (n > slides.length) {slidePosition[no] = 1}
  if (n < 1) {slidePosition[no] = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < circles.length; i++) {
      circles[i].className = circles[i].className.replace(" enable", "");
  }
  slides[slidePosition[no]-1].style.display = "block";
  circles[slidePosition[no]-1].className += " enable";
}

// Video pausing fuctionality - does not apply to iframes
function playPauseVideo() {
    let videos = document.querySelectorAll("pauseoutbounds");
    videos.forEach((video) => {
        // We can only control playback without insteraction if video is mute
        video.muted = true;
        // Play is a promise so we need to check we have it
        let playPromise = video.play();
        if (playPromise !== undefined) {
            playPromise.then((_) => {
                let observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (
                                entry.intersectionRatio !== 1 &&
                                !video.paused
                            ) {
                                video.pause();
                            } else if (video.paused) {
                                video.play();
                            }
                        });
                    },
                    { threshold: 0 }
                );
                observer.observe(video);
            });
        }
    });
}