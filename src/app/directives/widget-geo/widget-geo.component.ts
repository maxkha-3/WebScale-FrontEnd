import {Component, Input, OnInit} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {MarkerOptions} from 'leaflet';

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
    public clusteroptions: L.MarkerClusterGroupOptions = {};
    public markerstatus: any = {};

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
          let a = L.marker(rnd(), {icon: L.divIcon({html: '', className: i % 10 == 0 ? 'my-marker-red' : 'my-marker-green', iconSize: new L.Point(20, 20)})});
          a.bindPopup('<b>Reflector ###</b><br>Some more info perhaps.');
          a.bindTooltip('Reflector ###');
          if( i % 10 == 0) {
              a.options['violate'] = true;
          } else {
              a.options['violate'] = false;
          }
          this.cluster.push(a);
      }

      this.bounds = L.latLngBounds(TL, BR);
      this.clusteroptions.iconCreateFunction = function(cluster) {
          let children = cluster.getAllChildMarkers();
          let className = 'my-cluster-green';

          for(let i = 0; i < children.length; i++){
              if(children[i].options['violate']) {
                  className = 'my-cluster-red';
                  break;
              }
          }

          return L.divIcon({ html: '<div>' + cluster.getChildCount() + '</div>', className: className, iconSize: new L.Point(40, 40) });
      };

        this.options = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: '...' })
            ],
            zoom: 5,
            center: L.latLng(46.879966, -121.726909)
        };
  }

}
