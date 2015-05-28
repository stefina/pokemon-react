var pikaIcon;
var oldPosition;
var zoomLevel = 16;

$(document).ready(function() {

	// initialize map
	mapLink = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
	wholink = '<a href="http://stamen.com">Stamen Design</a>';

	var map = L.map('map').setView([51.505, -0.09], 13);
	
	var Stamen_Watercolor = L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.png', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
		subdomains: 'abcd',
		minZoom: 1,
		maxZoom: 16,
		ext: 'png'
	});
	// var layer = L.tileLayer.provider('Stamen.Watercolor').addTo(map);
	// var layer = new L.StamenTileLayer('watercolor');
	// var map = new L.Map('map', {
	// 	center: new L.LatLng(52.457680, 13.526831),
	// 	zoom: zoomLevel,
	// 	dragging: false,
	// 	touchZoom: false,
	// 	scrollWheelZoom: false,
	// 	doubleClickZoom: false,
	// 	zoomControl: false,
	// 	keyboard: false
	// });
	// map.addLayer(layer);

	// set location to user-location
	map.locate({setView: true, maxZoom: zoomLevel, watch: true});

	// pokemon-icon
	var pokemonIcon = L.icon({
		iconUrl: 'img/pokeball.png',
		iconSize: [30, 30],
		iconAnchor: [22, 94],
		popupAnchor: [-8, -96]
	});

	// // var pokemonMarker = L.marker([52.457680, 13.527831], {icon: pokemonIcon}).addTo(map);
	// // pokemonMarker.bindPopup('<p>A <b>Bisasam</b> was sighted!<br /><img src="img/pokemon/main-sprites/red-blue/1.png" /></p>').openPopup();

	// map.on('locationfound', onLocationFound);

	// function onLocationFound(e) {

	// 	if(pokemonIcon){
	// 		var position = {
	// 			loc_latitude: e.latlng.lat,
	// 			loc_longitude: e.latlng.lng
	// 		};

	// 		// if(!userLazy(position)){
	// 		// 	oldPosition = position;

	// 			$.get('/checkLocation', {location: position}, function(result){
	// 				console.log(result);
	// 				if(result.pokemon){
	// 					var pokemon = result.pokemon;
	// 					var pokemonAppearedMarker = L.marker(e.latlng, {icon: pokemonIcon}).addTo(map);
	// 					pokemonAppearedMarker.bindPopup('<p>A wild <b>' + pokemon.name + '</b> attacks!<br />' + 
	// 						'<img src="' + pokemon.imgFront + '" />' + 
	// 						'<a class="button" href="/fight?pokemon=' + pokemon.id + '">Fight</a>' +
	// 						'</p>').openPopup();
	// 				}
	// 			});
	// 		// }

	// 	}
	// }

	// function userLazy(newPosition){
	// 	if(position){

	// 		console.log(newPosition);

	// 		// if(position.loc_latitude)
	// 		// TODO: Check if user moved enough
	// 		return false;

	// 	} else {
	// 		return false;
	// 	}
	// }

});