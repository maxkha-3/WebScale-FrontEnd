import {Component, Input, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import * as L from 'leaflet';
import 'leaflet.markercluster';
import {MarkerOptions} from 'leaflet';
import {Router} from '@angular/router';

@Component({
    selector: 'app-widget-geo',
    templateUrl: './widget-geo.component.html',
    styleUrls: ['./widget-geo.component.scss']
})

export class WidgetGeoComponent implements OnInit, OnChanges {

    @Input() data;
    @Input() reflectors;
    @Input() context;

    public options;
    public bounds;
    public cluster: any[] = [];
    public clusteroptions: L.MarkerClusterGroupOptions = {};
    public markerstatus: any = {};

    private mapInstance: L.Map;
    private streamMarkers: any = {};

    constructor(private router: Router) {

    }

    ngOnInit() {
        this.initializeMap();
        let that = this;
        document.querySelector('.widget-map').addEventListener('click', function(e){
            let elem = e.target as HTMLElement;
           if(e.target && elem.className == "map-stream-link"){
               that.routeToInstance(elem.getAttribute("data-id"));
           }
        });
    }

    ngOnChanges(changes: SimpleChanges) {

        if(changes.reflectors && changes.reflectors.previousValue != changes.reflectors.currentValue) {
            this.cluster = [];
            for (let reflector of changes.reflectors.currentValue) {
                let a = L.marker(L.latLng(reflector.latitude, reflector.longitude), {
                    icon: L.divIcon({
                        html: '',
                        className: 'my-marker-yellow',
                        iconSize: new L.Point(20, 20)
                    })
                });
                a.bindPopup(this.generatePopUpContent(reflector.reflector_id, reflector.streams.map(x => ({id: x, status: 1}))));
                a.bindTooltip('Reflector ' + reflector.reflector_id);
                a.options['status'] = 1; //no data
                this.streamMarkers['s'+reflector.streams[0]] = {marker: a, reflector: reflector.reflector_id};
                this.cluster.push(a);
            }
        }

        if(changes.data && changes.data.previousValue != changes.data.currentValue && !changes.data.firstChange){
            for (let update of changes.data.currentValue){

                let statusCode, statusClass, marker = this.streamMarkers['s'+update.id].marker;
                if(update.sla == undefined){
                    statusCode = 1;
                    statusClass = 'my-marker-yellow';
                } else if (update.sla == 100){
                    statusCode = 0;
                    statusClass = 'my-marker-green';
                } else {
                    statusCode = 2;
                    statusClass = 'my-marker-red';
                }

                if(marker.options['status'] == statusCode)
                    continue;

                marker.options['status'] = statusCode;
                marker.options.icon.options.className = statusClass;
                marker.getPopup().setContent(this.generatePopUpContent(this.streamMarkers['s'+update.id].reflector, [{id: update.id, status: statusCode}]));
                marker.refreshIconOptions(null, true);
            }
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

            let clusterStatus = 0;
            for (let i = 0; i < children.length; i++) {
                if (children[i].options['status']) {
                    let status = children[i].options['status'];
                    if (status > clusterStatus)
                        clusterStatus = status;
                    if (status == 2)
                        break;
                }
            }

            let className = '';
            switch (clusterStatus) {
                case 0:
                    className = 'my-cluster-green';
                    break;
                case 1:
                    className = 'my-cluster-yellow';
                    break;
                case 2:
                    className = 'my-cluster-red';
                    break;
            }

            return L.divIcon({html: '<div>' + cluster.getChildCount() + '</div>', className: className, iconSize: new L.Point(40, 40)});
        };

        this.bounds = L.latLngBounds(L.latLng(this.context.bounds.fromLat, this.context.bounds.fromLng), L.latLng(this.context.bounds.toLat, this.context.bounds.toLng));
    };

    routeToInstance = (sourceID : string) => {
        this.router.navigate(['monitoring/streams/' + sourceID]).then();
    }

    saveMapReference = (event: L.Map) => {
        this.mapInstance = event;

    }

    generatePopUpContent(reflector: number, streams: any[]){
        let iconText = [
            'style="color: lightgreen" title="Running"',
            'style="color: lightgrey" title="No data found"',
            'style="color: red" title="Has issues"'
        ]
        return `<b>Reflector ${reflector}</b><br><br>Involved in following streams:<br>${streams.map(x => (`<a class="map-stream-link" data-id="${x.id}">Stream ${x.id} <i class="fa fa-circle" aria-hidden="true" ${iconText[x.status]}></i></a><br>`))}`
    }

}
