var GOOGLE_MAPS_API_KEY = 'YOUR_API_KEY';

var kibbPosition = { lat: 32.809, lng: -83.7345 };
var kibbTitle = 'KIBB Macon';

var mapBox = document.querySelector('#map');

function showMapMessage(text) {
	if (mapBox) {
		mapBox.innerHTML = '<p class="map-message">' + text + '</p>';
	}
}

window.gm_authFailure = function () {
	showMapMessage('Sorry, the map could not load. Please use the Get Directions button instead.');
};

async function initMap() {
	var mapsLibrary = await google.maps.importLibrary('maps');
	var markerLibrary = await google.maps.importLibrary('marker');

	var map = new mapsLibrary.Map(mapBox, {
		zoom: 15,
		center: kibbPosition,
		mapId: 'DEMO_MAP_ID'
	});

	var marker = new markerLibrary.AdvancedMarkerElement({
		map: map,
		position: kibbPosition,
		title: kibbTitle
	});

	var infoWindow = new google.maps.InfoWindow({
		content: '<strong>KIBB.</strong><br>482 Pawprint Lane<br>Macon, GA 31201'
	});

	marker.addListener('click', function () {
		infoWindow.open({ anchor: marker, map: map });
	});
}

window.initMap = initMap;

if (mapBox) {
	if (GOOGLE_MAPS_API_KEY === 'YOUR_API_KEY') {
		showMapMessage('Add your Google Maps API key in locations.js to show the map.');
	} else {
		var mapsScript = document.createElement('script');
		mapsScript.src = 'https://maps.googleapis.com/maps/api/js?key=' + encodeURIComponent(GOOGLE_MAPS_API_KEY) + '&loading=async&callback=initMap';
		mapsScript.async = true;
		document.head.appendChild(mapsScript);
	}
}