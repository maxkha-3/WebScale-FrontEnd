import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Component({
  selector: 'app-widget-geo',
  templateUrl: './widget-geo.component.html',
  styleUrls: ['./widget-geo.component.scss']
})

export class WidgetGeoComponent implements OnInit {

    @Input() item;

    public options;
    public bounds;
    public cluster: any[];
    public clusteroptions: L.MarkerClusterGroupOptions;

  constructor() { }

  ngOnInit() {
      const TL = L.latLng(65.594954, 22.113728);
      const BR = L.latLng(65.574413, 22.179343);
      let rnd = function(){
          let lat = BR.lat + (TL.lat - BR.lat)*Math.random();
          let lng = TL.lng + (BR.lng - TL.lng)*Math.random();
          return L.latLng(lat, lng);
      };

      this.cluster = [];
      for (let i = 0; i < 100; i++) {
          this.cluster.push(L.marker(rnd()));
      }

      this.bounds = L.latLngBounds(TL, BR);
      // this.clusteroptions.

        this.options = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
            zoom: 5,
            center: L.latLng(46.879966, -121.726909)
        };
  }

}
