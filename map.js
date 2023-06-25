//https://leafletjs.com/reference.html
const map = L.map('map').setView([-33.4681, -70.5946], 17);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const UChile =
[
 [
  [-33.468569, -70.595009],[-33.468587, -70.594674],[-33.468743, -70.594684],[-33.468732, -70.595017]
 ],
 [
  [-33.468757, -70.595017],[-33.46877, -70.594684],[-33.468933, -70.59469],[-33.468927, -70.595025]
 ],
 [
  [-33.468951, -70.595025],[-33.468958, -70.59469],[-33.469132, -70.594706],[-33.469117, -70.595036]
 ],
 [
  [-33.469152, -70.595036],[-33.469163, -70.594701],[-33.469327, -70.594712],[-33.469320, -70.595047]
 ]
];
const UTEM =
[
 [-33.465853, -70.596914],[-33.465863, -70.596701],[-33.465971, -70.596710],[-33.465961, -70.596923]
];
const Alerces =
[
 [-33.471098, -70.593536],[-33.470704, -70.592877],[-33.47104, -70.592603],[-33.47142, -70.593274]
];

var polygon1 = L.polygon(UChile, {color: '#66dbff', fillColor: '#66dbff', fillOpacity: 0.5}).addTo(map);
polygon1.bindPopup("Ocupado");
var polygon2 = L.polygon(UTEM, {color: '#66dbff', fillColor: '#66dbff', fillOpacity: 0.5}).addTo(map);
polygon2.bindPopup("Ocupado");
var polygon3 = L.polygon(Alerces, {color: '#66dbff', fillColor: '#66dbff', fillOpacity: 0.5}).addTo(map);
polygon3.bindPopup("Ocupado");

/*
var popup = L.popup()
	.setLatLng()

function onMapClick(e){
	popup
		.setLatLng(e.latlng)
		.setContent(`${e.latlng.toString()}`)
		.openOn(map);
}
map.on('click', onMapClick);
*/
