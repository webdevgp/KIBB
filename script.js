var currentPage = window.location.pathname.split('/').pop().toLowerCase();
var navLinks = document.querySelectorAll('.site-header nav a, .footer-left nav a');

for (var n = 0; n < navLinks.length; n++) {
	if (currentPage !== '' && navLinks[n].getAttribute('href').toLowerCase() === currentPage) {
		navLinks[n].setAttribute('aria-current', 'page');
	}
}

var socialLinks = document.querySelectorAll('.social-tiles a');

for (var s = 0; s < socialLinks.length; s++) {
	if (socialLinks[s].getAttribute('href') === '#') {
		socialLinks[s].addEventListener('click', function (event) {
			event.preventDefault();
		});
	}
}

if (window.bootstrap) {
	var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
	var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	});
}

var reviewCarousel = document.querySelector('#reviewCarousel');

if (window.bootstrap && reviewCarousel) {
	var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
	var reviewSlideshow = new bootstrap.Carousel(reviewCarousel, {
		interval: reduceMotion ? false : 8000,
		ride: reduceMotion ? false : 'carousel',
		pause: 'hover'
	});
}