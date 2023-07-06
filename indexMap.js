//https://leafletjs.com/reference.html
const map = L.map('map').setView([-33.4681, -70.5946], 17);
const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

const UChile1_cancha = [
  [-33.468569, -70.595009],
  [-33.468587, -70.594674],
  [-33.468743, -70.594684],
  [-33.468732, -70.595017]
];

const UChile2_cancha = [
  [-33.468757, -70.595017],
  [-33.46877, -70.594684],
  [-33.468933, -70.59469],
  [-33.468927, -70.595025]
];

const UChile3_cancha = [
  [-33.468951, -70.595025],
  [-33.468958, -70.59469],
  [-33.469132, -70.594706],
  [-33.469117, -70.595036]
];

const UChile4_cancha = [
  [-33.469152, -70.595036],
  [-33.469163, -70.594701],
  [-33.469327, -70.594712],
  [-33.46932, -70.595047]
];

const UTEM_cancha = [
  [-33.465853, -70.596914],
  [-33.465863, -70.596701],
  [-33.465971, -70.59671],
  [-33.465961, -70.596923]
];

const Alerces_cancha = [
  [-33.471098, -70.593536],
  [-33.470704, -70.592877],
  [-33.47104, -70.592603],
  [-33.47142, -70.593274]
];

const currentStatus = ['Ocupado', 'Disponible']; // Variable para el estado de los polígonos

const polygons = []; // Array para almacenar los polígonos creados

function createPolygon(coordinates, name, initialStatus) {
  let currentColor = initialStatus === 'Ocupado' ? 'red' : 'green';
  const polygon = L.polygon(coordinates, { color: currentColor }).addTo(map);
  polygon.bindPopup(`${name}: ${initialStatus}`);
  polygons.push({ polygon, name, currentColor, initialStatus });
}

function initializePolygons() {
  createPolygon(UChile1_cancha, 'UChile1', 'Ocupado');
  createPolygon(UChile2_cancha, 'UChile2', 'Ocupado');
  createPolygon(UChile3_cancha, 'UChile3', 'Ocupado');
  createPolygon(UChile4_cancha, 'UChile4', 'Ocupado');
  createPolygon(UTEM_cancha, 'UTEM', 'Ocupado');
  createPolygon(Alerces_cancha, 'Alerces', 'Ocupado');
}

function changeSelectedCanchaStatus() {
  const canchaSelect = document.getElementById('canchaSelect');
  const selectedCancha = canchaSelect.value;
  const statusSelect = document.getElementById('statusSelect');
  const selectedStatus = statusSelect.value;

  const selectedPolygon = polygons.find((polygonData) => polygonData.name === selectedCancha);

  if (selectedPolygon) {
    const { polygon, currentColor } = selectedPolygon;
    if (currentColor === 'red' && selectedStatus === 'Disponible') {
      polygon.setStyle({ color: 'green' });
      polygon.setPopupContent(`${selectedCancha}: ${currentStatus[1]}`);
      selectedPolygon.currentColor = 'green';
      selectedPolygon.initialStatus = currentStatus[1];
    } else if (currentColor === 'green' && selectedStatus === 'Ocupado') {
      polygon.setStyle({ color: 'red' });
      polygon.setPopupContent(`${selectedCancha}: ${currentStatus[0]}`);
      selectedPolygon.currentColor = 'red';
      selectedPolygon.initialStatus = currentStatus[0];
    }
  }
}

//Boton usuario
var showTabButton = document.getElementById('showTabButton');
var floatingTab = document.querySelector('.floating-tab');

showTabButton.addEventListener('click', function() {
  floatingTab.classList.remove('hidden');
});

document.addEventListener('click', function(event) {
  var targetElement = event.target;

  if (!floatingTab.contains(targetElement) && targetElement !== showTabButton) {
    floatingTab.classList.add('hidden');
  }
});
//Final boton usuario

initializePolygons();
