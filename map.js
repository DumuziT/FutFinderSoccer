const map = L.map('map').setView([-33.466, -70.597], 16);

const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
	maxZoom: 19,
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const circle = L.circle([-33.466, -70.597], {color: 'red', fillColor: '#f03', fillOpacity: 0.5, radius: 500, radius: 10}).addTo(map);

const popup = L.popup()
	.setLatLng([-33.466,-70.597])
	.setContent('UTEM')
	.openOn(map);

function onMapClick(e){
	popup
		.setLatLng(e.latlng)
		.setContent(`${e.latlng.toString()}`)
		.openOn(map);
}
map.on('click', onMapClick);
