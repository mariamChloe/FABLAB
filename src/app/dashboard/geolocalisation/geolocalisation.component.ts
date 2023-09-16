import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
declare const mapboxgl: any;
const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoibXRyYW9yZSIsImEiOiJjbGxnc2k3Ym8wMzY0M2RxdXdoOWVpZzE5In0.doe1M3qP3G58qUD5nti0Cg';

@Component({
  selector: 'app-geolocalisation',
  templateUrl: './geolocalisation.component.html',
  styleUrls: ['./geolocalisation.component.css']
})
export class GeolocalisationComponent implements AfterViewInit {
  @ViewChild('mapContainer', { static: false }) mapContainer!: ElementRef;

  ngAfterViewInit(): void {
    this.initializeMap();
  }

  initializeMap() {
    mapboxgl.accessToken = MAPBOX_ACCESS_TOKEN;
    const map = new mapboxgl.Map({
      container: this.mapContainer.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-4.0187478065, 5.3389563560],
      zoom: 12
    });

    // Create a marker and add it to the map.
    const marker1 = new mapboxgl.Marker()
      .setLngLat([-4.0187478065, 5.3389563560])
      .addTo(map);
  }
}
