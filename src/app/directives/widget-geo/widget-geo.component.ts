import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {MarkerOptions} from 'leaflet';

@Component({
    selector: 'app-widget-geo',
    templateUrl: './widget-geo.component.html',
    styleUrls: ['./widget-geo.component.scss']
})

export class WidgetGeoComponent implements OnInit, OnChanges {

    @Input() data;
    @Input() context;

    public options;
    public bounds;
    public cluster: any[] = [];
    public clusteroptions: L.MarkerClusterGroupOptions = {};
    public markerstatus: any = {};

    constructor() {
    }

    ngOnInit() {
        this.initializeMap();
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.data.firstChange)
            return;

        this.cluster = [];
        for (let reflector of changes.data.currentValue) {
            let a = L.marker(L.latLng(reflector.lat, reflector.lng), {
                icon: L.divIcon({
                    html: '',
                    className: reflector.breachedSLA ? 'my-marker-red' : 'my-marker-green',
                    iconSize: new L.Point(20, 20)
                })
            });
            a.bindPopup('<b>' + reflector.name + '</b><br>Some more info perhaps.');
            a.bindTooltip(reflector.name);
            a.options['violate'] = !!reflector.breachedSLA;
            this.cluster.push(a);
        }

    }

    /**
     * Initializes the Leaflet map.
     */
    initializeMap = () => {
        this.options = {
            layers: [
                L.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
            ],
            zoom: 5,
            center: L.latLng(46.879966, -121.726909)
        };

        this.clusteroptions.iconCreateFunction = function (cluster) {
            let children = cluster.getAllChildMarkers();
            let className = 'my-cluster-green';

            for (let i = 0; i < children.length; i++) {
                if (children[i].options['violate']) {
                    className = 'my-cluster-red';
                    break;
                }
            }

            return L.divIcon({html: '<div>' + cluster.getChildCount() + '</div>', className: className, iconSize: new L.Point(40, 40)});
        };

        this.bounds = L.latLngBounds(L.latLng(this.context.bounds.fromLat, this.context.bounds.fromLng), L.latLng(this.context.bounds.toLat, this.context.bounds.toLng));
    };

}
