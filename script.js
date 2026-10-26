// KIBB: the current page in the nav, Bootstrap tooltips on the social icons, and the reviews slideshow.

// Current page: the nav link for the page you are on is marked, so it works on every page that shares this script.
var currentPage = window.location.pathname.split('/').pop().toLowerCase();
var navLinks = document.querySelectorAll('.site-header nav a, .footer-left nav a');

for (var n = 0; n < navLinks.length; n++) {
	if (currentPage !== '' && navLinks[n].getAttribute('href').toLowerCase() === currentPage) {
		navLinks[n].setAttribute('aria-current', 'page');
	}
}


// Social icons: the links are placeholders for now, so they do not jump to the top of the page.
var socialLinks = document.querySelectorAll('.social-tiles a');

for (var s = 0; s < socialLinks.length; s++) {
	if (socialLinks[s].getAttribute('href') === '#') {
		socialLinks[s].addEventListener('click', function (event) {
			event.preventDefault();
		});
	}
}


// Bootstrap tooltips: the name of each social icon shows on hover or focus (set up the way the W3Schools Bootstrap 5 tooltip page does it).
if (window.bootstrap) {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});
}


// Reviews slideshow: a Bootstrap carousel (set up the way the W3Schools Bootstrap 5 carousel page does it).
// It flips to the next review by itself every 8 seconds and pauses while the mouse is over it.
// The arrows and dots let a visitor click through one review at a time. With reduced motion on, it never flips by itself.
var reviewCarousel = document.querySelector('#reviewCarousel');

if (window.bootstrap && reviewCarousel) {
	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var reviewSlideshow = new bootstrap.Carousel(reviewCarousel, {
		interval: reduceMotion ? false : 8000,
		ride: reduceMotion ? false : 'carousel',
		pause: 'hover'
	});
}