mapboxgl.accessToken = 'pk.eyJ1IjoibXRyYW9yZSIsImEiOiJjbGxnc2k3Ym8wMzY0M2RxdXdoOWVpZzE5In0.doe1M3qP3G58qUD5nti0Cg';
const map = new mapboxgl.Map({
container: 'map',
// Choose from Mapbox's core styles, or make your own style with Mapbox Studio
style: 'mapbox://styles/mapbox/streets-v12',
center: [-4.0187478065,5.3389563560],
zoom: 8
});

// Create a default Marker and add it to the map.
const marker1 = new mapboxgl.Marker()
.setLngLat([-4.0187478065,5.3389563560])
.addTo(map);  
